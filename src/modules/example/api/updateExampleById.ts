import { Example } from '@prisma/client';

export default function updateExampleById(id: string): Omit<Example, 'id'> {
    return { name: 'an example fetched from api/database ' + id };
}
