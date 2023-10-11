# React Template

This template should help get you started developing with React and Vite bundler.

## Project Setup

### env variables

Create a `.env` file in the root of your project :

```sh
cp .env.example .env
```

### Dependencies

Template could not be up to date, init project with the latest version :

```sh
npm update --save
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

Preview build :

```sh
npm run preview
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## Folder Architecture

### Tree

```sh
.
├── .vscode
├── cypress
├── public
│   └── favicon.png
├── src
│   ├── assets
│   ├── components
│   │   └── IconSpinner
│   │       ├── __test__
│   │       │   └── IconsSpinner.test.tsx
│   │       ├── ...
│   │       └── index.ts
│   ├── hooks
│   │   └── useGlobal.tsx
│   ├── pages
│   │   └── Home
│   │       ├── index.tsx
│   │       ├── __test__
│   │       │   └── Home.test.tsx
│   │       ├── ...
│   │       └── useHome.tsx
│   ├── router
│   │   └── index.tsx
│   ├── store
│   ├── utils
│   ├── App.tsx
│   ├── main.tsx
│   ├── style.ts
│   └── vite-env.d.ts
├── .eslintrc.cjs
├── .gitignore
├── .prettierignore
├── .prettierrc.json
├── index.html
├── cypress.config.ts
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── setupTests.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

### Source Folder

#### assets

The `assets` folder contains all images, css files, font files, etc. for your project. Pretty much anything that isn’t code related will be stored in this folder.

#### components

The `components` folder contains subfolders which correspond to each component. A component should contains a .tsx file, an index.ts to export the component, a test folder, style file...

#### hooks

The `hooks` folder contains global hooks of the app which are not specific to a page.

#### pages

The `pages` folder contains subfolders which correspond to each page. A page should contains a .tsx file, an index.ts to export the page, a test folder, specific hooks prefixed by use, style file...

#### router

The `router` folder contains the creation of the router and all routes.

#### services

The `services` folder contains all your code for interfacing with any external API.

#### store

The `store` folder contains the creation of the store.

#### utils

The `utils` folder contains all annexes functions.

### Sources

-   [Intermediate Folder Structure](https://blog.webdevsimplified.com/2022-07/react-folder-structure/)
-   [React Folder Structure](https://profy.dev/article/react-folder-structure)
-   [Redux Template](https://github.com/reduxjs/redux-templates/)
