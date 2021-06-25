import { PrismaClient } from '@prisma/client';

const loggingMiddleware = (client) =>
    client.$use(async (params, next) => {
        const before = Date.now();

        const result = await next(params);

        const after = Date.now();

        console.log(
            `Query ${params.model}.${params.action} took ${after - before}ms`
        );

        return result;
    });

const prismaClientPropertyName = `__prevent-name-collision__prisma`;
type GlobalThisWithPrismaClient = typeof globalThis & {
    [prismaClientPropertyName]: PrismaClient;
};

const getPrismaClient = () => {
    if (process.env.NODE_ENV === `production`) {
        return new PrismaClient();
    } else {
        const newGlobalThis = globalThis as GlobalThisWithPrismaClient;
        if (!newGlobalThis[prismaClientPropertyName]) {
            newGlobalThis[prismaClientPropertyName] = new PrismaClient();
        }
        return newGlobalThis[prismaClientPropertyName];
    }
};
const prisma = getPrismaClient();
loggingMiddleware(prisma);

export default prisma;
