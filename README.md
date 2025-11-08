# basiphobe.github.io# create-svelte



Personal portfolio site showcasing my public GitHub projects.Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).



## Overview## Creating a project



This is a simple, clean portfolio page that automatically fetches and displays all my public GitHub repositories using the GitHub API.If you're seeing this, you've probably already done this step. Congrats!



## Features```bash

# create a new project in the current directory

- Automatically displays all public repositoriesnpm create svelte@latest

- Shows repository descriptions, languages, stars, and forks

- Displays repository topics as tags# create a new project in my-app

- Responsive design that works on all devicesnpm create svelte@latest my-app

- No build process required - pure HTML, CSS, and JavaScript```



## Local Development## Developing



Simply open `index.html` in your browser, or use a local server:Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:



```bash```bash

# Python 3npm run dev

python -m http.server 8000

# or start the server and open the app in a new browser tab

# Node.js (with http-server installed)npm run dev -- --open

npx http-server```

```

## Building

Then visit `http://localhost:8000`

To create a production version of your app:

## Deployment

```bash

This site is deployed via GitHub Pages. Any changes pushed to the `main` branch will be automatically published.npm run build

```

## License

You can preview the production build with `npm run preview`.

MIT

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
