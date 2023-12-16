# Astro Blog Template

Created using the [Build your first Astro Blog tutorial](https://docs.astro.build/en/tutorial/0-introduction/).

It also has

1. Astro Island with Preact
2. Extended with Content Collections
3. Extended with View Transitions

## 🚀 Project Structure

Basic project structure

```text
/
├── public/
├── src/
│   └── components/
│       └── Header.astro
│       └── ....
│   └── content/
│       └── posts/
│           └── post1.md
│           └── post2.md
│           └── ....
│   └── layouts/
│       └── BaseLayout.astro
│       └── MarkdownPostLayoutLayout.astro
│   └── pages/
│       └── posts/
│       └── tags/
│       └── index.astro
│       └── ....
│       └── rss.xml.js
│   └── scripts/
│   └── styles/
└── package.json
```

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want more information?

Feel free to check [Astro Docs](https://docs.astro.build) or jump into [Astro Lounge(Discord)](https://astro.build/chat).
