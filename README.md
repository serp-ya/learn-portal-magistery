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