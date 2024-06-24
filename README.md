# Jokes and Facts

This is a simple project to test developers.
It consists of a backend in [nestjs](https://nestjs.com/) and a Frontend in [Nextjs](https://nextjs.org/) (using app routers).

## Installation

1. Clone this repository.
2. Run `pnpm install` in the root folder.

## Running the project

1. Run `pnpm dev` in the root folder.

The backend and frontend will be running in watch/dev mode in the following urls:

- http://localhost:3000/ (Frontend)
- http://localhost:3001/ (Backend)

All update to the code will be automatically detected and the corresponding project (back or front) will be reloaded.

## Challenge

The challenge is to create a simple application that shows a list of jokes when the user selects a joke type. All jokes and joke types can be retrieved [here](https://github.com/15Dkatz/official_joke_api). Limit to only 10 jokes and 10 types.

### contraints

- jokes and joke types must be retrieved like this : Frontend interaction -> backend -> [Joke API] -> backend -> Frontend. So there is no static data on the frontend and no direct call from the frontend to the [Joke API].
- joke types may be static on the backend.
- jokes are dynamically retrieved
- in the frontend, the user must be able to select a joke type and see the jokes of that type being fetched from the backend.
- when the user change the joke type, the jokes must be updated (refecthed from the backend).
- You can be inspired by the Cat fact example in the frontend/backend.
