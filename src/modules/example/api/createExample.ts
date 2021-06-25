import { Example } from '@prisma/client';
import prisma from '@/lib/prisma';

export default async function createExample(): Promise<Example> {
    const example = await prisma.example.create({
        data: { name: 'An Example' + Math.random() }
    });

    return example;
}
