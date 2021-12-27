# Learn Portal
It is a project to train a fullstack applications in the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)

We'll use here a monorepository via `lerna`

## Start
You should install Lerna globally `npm install --global lerna` and use `lerna bootstrap`.

When all dependencies will be installed you must to install a latest version of the Docker `https://www.docker.com/products/docker-desktop`

After the Docker will be installed you should run `docker-compose up` in the `backend` directory and after this in the `frontend` directory you should run `npm run start`

If you did all right you have an access to
- backend api `http://localhost:5000`
- mongodb console `http://localhost:8081`
- frontend `http://localhost:3000`

## Files structure
learn-portal
├── lerna.json
├── package.json
├── README.md
└── packages
    └── learn-portal-backend
    |   └── public
    |   |   └── images
    |   |   |   └── .gitkeep
    |   |   └── .gitkeep
    |   └── src
    |   |   └── @types
    |   |   |   └── express.d.ts
    |   |   └── database
    |   |   |   └── dictionaries-database
    |   |   |   |   └── professions-dictionary
    |   |   |   |   |   └── get-professions-dictionary.ts
    |   |   |   |   |   └── index.ts
    |   |   |   |   |   └── professions-dictionary-constants.ts
    |   |   |   |   |   └── professions-dictionary-types.ts
    |   |   |   |   |   └── professions-dictionary.json
    |   |   |   |   └── skills-dictionary
    |   |   |   |   |   └── get-skills-dictionary.ts
    |   |   |   |   |   └── index.ts
    |   |   |   |   |   └── skills-dictionary-constants.ts
    |   |   |   |   |   └── skills-dictionary-types.ts
    |   |   |   |   |   └── skills-dictionary.json
    |   |   |   |   └── dictionaries-types.ts
    |   |   |   |   └── index.ts
    |   |   |   └── grow-database
    |   |   |   |   └── collections
    |   |   |   |       └── lections
    |   |   |   |       |   └── index.ts
    |   |   |   |       |   └── lections-constants.ts
    |   |   |   |       |   └── lections-model.ts
    |   |   |   |       |   └── lections-operators.ts
    |   |   |   |       └── progresses
    |   |   |   |       |   └── index.ts
    |   |   |   |       |   └── progresses-constants.ts
    |   |   |   |       |   └── progresses-model.ts
    |   |   |   |       |   └── progresses-operators.ts
    |   |   |   |       └── skills
    |   |   |   |       |   └── index.ts
    |   |   |   |       |   └── skills-constants.ts
    |   |   |   |       |   └── skills-model.ts
    |   |   |   |       |   └── skills-operators.ts
    |   |   |   |       └── users
    |   |   |   |           └── index.ts
    |   |   |   |           └── users-constants.ts
    |   |   |   |           └── users-model.ts
    |   |   |   |           └── users-operators.ts
    |   |   |   └── users-database
    |   |   |   |   └── get-user.ts
    |   |   |   |   └── index.ts
    |   |   |   |   └── user-admin.json
    |   |   |   |   └── user-test.json
    |   |   |   |   └── user.json
    |   |   |   |   └── users-constants.ts
    |   |   |   |   └── users-types.ts
    |   |   |   └── index.ts
    |   |   └── middlewares
    |   |   |   └── middlewares
    |   |   |       └── session
    |   |   |           └── index.ts
    |   |   |           └── session.ts
    |   |   └── routes
    |   |   |   └── dictionaries
    |   |   |   |   └── dictionaries-constants.ts
    |   |   |   |   └── dictionaries-route.ts
    |   |   |   |   └── index.ts
    |   |   |   └── lections
    |   |   |   |   └── index.ts
    |   |   |   |   └── lections-constants.ts
    |   |   |   |   └── lections-route.ts
    |   |   |   └── professions
    |   |   |   |   └── index.ts
    |   |   |   |   └── professions-constants.ts
    |   |   |   |   └── professions-route.ts
    |   |   |   └── progresses
    |   |   |   |   └── index.ts
    |   |   |   |   └── progresses-constants.ts
    |   |   |   |   └── progresses-route.ts
    |   |   |   └── skills
    |   |   |   |   └── index.ts
    |   |   |   |   └── skills-constants.ts
    |   |   |   |   └── skills-route.ts
    |   |   |   └── user
    |   |   |   |   └── index.ts
    |   |   |   |   └── user-constants.ts
    |   |   |   |   └── user-route.ts
    |   |   |   └── index.ts
    |   |   |   └── routes-constants.ts
    |   |   └── constants.ts
    |   |   └── env.ts
    |   |   └── index.ts
    |   |   └── server.ts
    |   └── .env
    |   └── .gitignore
    |   └── docker-compose.yml
    |   └── Dockerfile
    |   └── nodemon.json
    |   └── package-lock.json
    |   └── package.json
    |   └── README.md
    |   └── tsconfig.json
    └── learn-portal-frontend
        └── config
        |   └── jest
        |   |   └── babelTransform.js
        |   |   └── cssTransform.js
        |   |   └── fileTransform.js
        |   └── webpack
        |   |   └── persistentCache
        |   |       └── createEnvironmentHash.js
        |   └── env.js
        |   └── getHttpsConfig.js
        |   └── modules.js
        |   └── paths.js
        |   └── webpack.config.js
        |   └── webpackDevServer.config.js
        └── public
        |   └── favicon.ico
        |   └── index.html
        |   └── logo192.png
        |   └── logo512.png
        |   └── manifest.json
        |   └── robots.txt
        └── scripts
        |   └── build.js
        |   └── start.js
        |   └── test.js
        └── src
        |   └── components
        |   |   └── title
        |   |       └── index.ts
        |   |       └── title-constants.ts
        |   |       └── title.module.scss
        |   |       └── title.tsx
        |   └── modules
        |   |   └── change-progress
        |   |   |   └── change-progress.tsx
        |   |   |   └── index.ts
        |   |   └── header
        |   |   |   └── header.tsx
        |   |   |   └── index.ts
        |   |   └── lections-list
        |   |   |   └── lections-list.tsx
        |   |   |   └── index.ts
        |   |   └── professions
        |   |   |   └── index.ts
        |   |   |   └── professions-actions.ts
        |   |   |   └── professions-constants.ts
        |   |   |   └── professions-reducer.ts
        |   |   |   └── professions-selectors.ts
        |   |   |   └── professions-types.ts
        |   |   |   └── with-professions.tsx
        |   |   └── professions-list
        |   |   |   └── index.ts
        |   |   |   └── professions-list.tsx
        |   |   └── professions-select
        |   |   |   └── index.ts
        |   |   |   └── professions-select.tsx
        |   |   └── skills
        |   |   |   └── index.ts
        |   |   |   └── skills-actions.ts
        |   |   |   └── skills-constants.ts
        |   |   |   └── skills-reduces.ts
        |   |   |   └── skills-selectors.ts
        |   |   |   └── skills-types.ts
        |   |   |   └── with-skills.ts
        |   |   └── user
        |   |   |   └── index.ts
        |   |   |   └── user-actions.ts
        |   |   |   └── user-constants.ts
        |   |   |   └── user-reducer.ts
        |   |   |   └── user-selectors.ts
        |   |   |   └── user-types.ts
        |   |   |   └── with-user.ts
        |   |   └── user-info
        |   |   |   └── index.ts
        |   |   |   └── user-info.tsx
        |   |   └── user-skills
        |   |       └── user-skills-list.tsx
        |   |       └── user-skills.tsx
        |   └── pages
        |   |   └── main
        |   |   |  └── index.ts
        |   |   |  └── main-page-constants.ts
        |   |   |  └── main-page.tsx
        |   |   └── selected-lection
        |   |   |   └── index.ts
        |   |   |   └── selected-lection-page-constants.tsx
        |   |   |   └── selected-lection-page.tsx
        |   |   └── selected-skill
        |   |   |   └── index.ts
        |   |   |   └── selected-skill-page-constants.tsx
        |   |   |   └── selected-skill-page.tsx
        |   |   └── skills
        |   |       └── index.ts
        |   |       └── skills-page-constants.ts
        |   |       └── skills-page.tsx
        |   └── utils
        |   |   └── grow-api
        |   |       └── lections
        |   |       |    └── get-lection-by-id.ts
        |   |       |    └── index.ts
        |   |       |    └── lections-types.ts
        |   |       └── professions
        |   |       |   └── get-professions.ts
        |   |       |   └── index.ts
        |   |       |   └── professions-types.ts
        |   |       └── progress
        |   |       |   └── get-progress-by-ids.ts
        |   |       |   └── index.ts
        |   |       |   └── post-progress-by-ids.ts
        |   |       |   └── progress-types.ts
        |   |       └── skills
        |   |       |   └── get-skills.ts
        |   |       |   └── index.ts
        |   |       |   └── skills-types.ts
        |   |       └── users
        |   |       |   └── get-current-user.ts
        |   |       |   └── index.ts
        |   |       |   └── put-current-user.ts
        |   |       |   └── users-types.ts
        |   |       └── grow-api-constants.ts
        |   |       └── grow-api-request.ts
        |   └── app.module.scss
        |   └── app.tsx
        |   └── constants.ts
        |   └── env.ts
        |   └── global.d.ts
        |   └── index.tsx
        |   └── react-app-env.d.ts
        |   └── store.ts
        └── .env
        └── .gitignore
        └── package-lock.json
        └── package.json
        └── README.md
        └── tsconfig.json
