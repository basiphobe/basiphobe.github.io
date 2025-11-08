# basiphobe.github.io# basiphobe.github.io# create-svelte



Personal portfolio site showcasing my public GitHub projects.



## OverviewPersonal portfolio site showcasing my public GitHub projects.Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).



This is a simple, clean portfolio page that automatically fetches and displays all my public GitHub repositories using the GitHub API.



## Features## Overview## Creating a project



- Automatically displays all public repositories

- Shows repository descriptions, languages, stars, and forks

- Displays repository topics as tagsThis is a simple, clean portfolio page that automatically fetches and displays all my public GitHub repositories using the GitHub API.If you're seeing this, you've probably already done this step. Congrats!

- Responsive design that works on all devices

- No build process required - pure HTML, CSS, and JavaScript



## Local Development## Features```bash



Simply open `index.html` in your browser, or use a local server:# create a new project in the current directory



```bash- Automatically displays all public repositoriesnpm create svelte@latest

# Python 3

python -m http.server 8000- Shows repository descriptions, languages, stars, and forks



# Node.js (with http-server installed)- Displays repository topics as tags# create a new project in my-app

npx http-server

```- Responsive design that works on all devicesnpm create svelte@latest my-app



Then visit `http://localhost:8000`- No build process required - pure HTML, CSS, and JavaScript```



## Deployment



This site is deployed via GitHub Pages. Any changes pushed to the `main` branch will be automatically published.## Local Development## Developing



## License



MITSimply open `index.html` in your browser, or use a local server:Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:




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
