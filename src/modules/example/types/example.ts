/*

* https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types/
! try to use prima client as much as possbile to define your types

*/
// import { Prisma } from '@prisma/client';

//  1: Define a user object that includes the relation to `Post`
// const userWithPosts = Prisma.validator<Prisma.UserArgs>()({
//     include: { posts: true }
// });

//  2: Define a user object that only contains a subset of the scalar fields
// const userPersonalData = Prisma.validator<Prisma.UserArgs>()({
//     select: { email: true, name: true }
// });

// 3: This type will include a user and all their posts
// type UserWithPosts = Prisma.UserGetPayload<typeof userWithPosts>;

// import { Example as ExampleType } from '@prisma/client';
// base types are auto defined by primsa from the db Schema

export {};
