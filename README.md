# Next.js / Typescript Boilerplate

Boilerplate for VNTRS to kickstart web app dev, this readme contains information regarding technologies used,
guidelines, naming conventions and FAQ

This boilerplate is configured to work with VScode remote container, we recommend using this method in order to quickly set up your vsCode and make it easier to have multiple people working on the same code base.

<br/>

# Summary

-   Init boiletplate in vscode dev container
-   Technologies used
-   vsCode extensions
-   Folder Structure
-   Naming Conventions
-   Init database with Prisma
-   Typescript types with Prisma
-   Debugging
-   Test
    -   Cypress
    -   Thunder Client scriptless api testing
-   FAQ

<br/>

# Init boilerplate

`Make sure you have enough ram attributed to Docker Desktop if you are on MacOs (4-6 go)`

use vscode with extension remote containers: ms-vscode-remote.remote-containers

reopen folder in docker devcontainer in vscode, you should have a popup at the bottom right of vscode if the extension is properly installed. wait for docker image to build and then:

yarn

yarn prisma-push

yarn prisma-generate

yarn dev

to use VsCode as the main Git tool (rebase, merge, diffs...)

chmod +x git.sh

./git.sh

<br/>

# Technologies:

-   [TypeScript](https://www.typescriptlang.org/)
-   [Next.js](https://nextjs.org/)
-   [zustand: Bear necessities for state management in React](https://github.com/pmndrs/zustand)
-   [React Query - Hooks for fetching, caching and updating asynchronous data in React](https://react-query.tanstack.com/)
-   [React-Hook-Forms](https://react-hook-form.com/)
-   [next-translate: Next.js plugin + i18n API for Next.js 10 🌍](https://github.com/vinissimus/next-translate)
-   [TailwindCss](https://tailwindcss.com/)
-   [Prisma](https://www.prisma.io/)
-   [superJson](https://github.com/blitz-js/superjson)
-   [React Icons](https://react-icons.github.io/react-icons/)

<br/>

# Vscode extensions in devContainer

-   **_[Rest / Graphql client - ThunderClient](https://www.thunderclient.io/)_**
-   Prettier
-   Eslint
-   [Better Comments](https://github.com/aaron-bond/better-comments)
-   [Quokka](https://quokkajs.com/)
-   [LiveShare: remote pair programming](https://visualstudio.microsoft.com/services/live-share/)
-   File utils
-   Advanced new file
-   [Tailwind Shades: Tailwind CSS color palette generator](https://marketplace.visualstudio.com/items?itemName=bourhaouta.tailwindshades)
-   Cobalt 3 theme (you can override with your own theme with vscode command palette)
-   **_Git History_**
-   **_Git Lens_**
-   Import Cost
-   Rainbow Brackets / Indent
-   intellisense

check `.devcontainer/devcontainer.json` for all the installed extensions
<br/>

# Folder Structure

[A 2021 guide about structuring your Next.js project in a flexible and efficient way - DEV Community](https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472)

Module based folder structure, common folder for small parts of the application, when something starts getting big and having several functionalities between frontend and backend start making modules (example: auth module, user module, ...)

<br/>

# Naming Conventions

global naming convention when building a web application, mostly examples to help you get started and avoid friction and need for refactor when multiple devs are working on the same project.

<br/>

## Database Schema with Prisma

the goal here is to reduce friction when getting or updating data to database between frontend/backend, tables name and columns name are in camel_case but prisma client map them to pascalCase. meaning that when coding for frontend/backend, the rule is always use pascalCase. camel_case mapping should only be done in the schema.prisma file.

`Example of Prisma Model User (collection of user resources)`

```
model User {
  id            Int      @id @default(autoincrement())
  name          String?
  email         String?   @unique
  emailVerified DateTime? @map("email_verified")
  image         String?
  surname       String?
  organization  String?
  age           Int?
  role          Role      @default(USER)
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @default(now()) @map("updated_at")
  writtenPost   Post[] @relation("Post_authorToUser")
  favoritedPosts Post[] @relation("Post_favoritedByToUser")

  @@map(name: "users") // database table is named users because it is a collection of user resources
}

model Post {
  id          Int   @default(autoincrement()) @id
  author      User  @relation("Post_authorToUser", references: [id])
  favoritedBy User? @relation("Post_favoritedByToUser", references: [id])

  @@map(name: "posts")  // database table is named posts because it is a collection of post resources
}


```

```
prisma.user.create({data: {id:'1', emailVerified: true, ........}})
```

NB: When using an ORM, you should refer to the ORM documentation for naming convention,  
 example: [Prisma ORM naming convention](https://www.prisma.io/docs/concepts/components/prisma-client/working-with-prismaclient/use-custom-model-and-field-names)

<br/>

## Backend

### Rest Api Naming convention

Example of Api endpoints:

-   get the list of users: `GET /api/users`
-   get a specific user: `GET /api/users/${user_id}`
-   create a user: `POST /api/users`
-   update a user: `PUT api/users/${user_id}`
-   delete a user: `DELETE api/users/${user_id}`
-   archive (or any other action that needs more than simply updating the user resource) a user: `POST api/users/${user_id}/archive`

in this example we target the collection of resources `users`, meaning that in our database we have a table called `User`, which contains a collection of users, and sending requests to these endpoints will have an impact on the resources stored in this table

### GraphQL Api Naming convention

TODO

## FrontEnd

keep your routes name simple, use common english words and try to control your app using route parameters as much as possible.

<br/>

### Routes naming convention

Example frontend routes naming:

### routes used to display/edit resource information by user

-   Page displaying list of books: `url/books`
-   Page displaying list of books filtered by genre 'thriller' : `url/books?genre=thriller`
-   Page displaying list of books filtered by genre 'fiction' : `url/books?genre=fiction`
-   Page displaying a specific book information: `url/books/${book_id}`

${book_id} can be replaced with a unique slug

### routes used by user to see his own information

-   Page for current user to check his profile: `url/profile`
-   Page for current user to edit his profile: `url/profile/edit`

<br/>

# init Database with Prisma ORM

`generate prisma client:`
yarn prisma-generate

`push schema to db (good when prototyping, use migrate after)`: yarn prisma-push

`generate and run migration`: yarn prisma-migrate

`seed database (/src/database/seed):`
yarn prisma-seed

`sync database (push + generate)`: yarn prisma-sync

more in package.json scripts

<br/>

# Typescript Typings and Prisma

[Typescript Prisma generated types](https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types/)

<br/>

# Debugging inspector

use the debugging inspector instead of console.log to debug your application

CMD + Shift + P => Debug: select and start debugging

[VsCode Breakpoints](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_breakpoints)

<br/>

# Test

## Scriptless endpoint testing with Thunder Client

check vscode sidebar, click on thunder client, start testing your api in vscode directly (postman replacement)

[Thunder Client](https://www.youtube.com/watch?v=NKZ0ahNbmak)

[Thunder Client release blog post](https://rangav.medium.com/thunder-client-alternative-to-postman-68ee0c9486d6)

<br/>

## End-2-End testing with cypress

yarn

sudo apt-get update

sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

yarn cypress-install

yarn cypress-run

<br/>

# FAQ

### My VScode is disconnected of the remote Dev Container after a yarn, yarn dev, ...

-   Check that you have assigned enough ram to your docker, 4-6 go should be the minimun on a MacBook

### My VScode is is not formatting on save with prettier

-   CMD + SHIFT + P => Format Document => select default formatter esbenp.prettier-vscode

### How to Debounce in React Component

```js
import debounce from '@/common/utils/debounce';

const debouncedSearch = useMemo(
    () => debounce(() => console.log('hello'), 750, false),
    []
);

[1, 2, 3, 4, 5, 6].map(() => debouncedSearch()); // debouncedSearch only logs 'hello' once even thought it's called 6 times
```
