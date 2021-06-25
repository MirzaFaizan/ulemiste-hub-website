import prisma from '@/lib/prisma';
import { Example as ExampleType } from '@prisma/client';

export default async function getExample(): Promise<ExampleType> {
    const example = await prisma.example.findFirst();
    return example;
}
