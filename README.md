# Creative Computing Society (CCS) website

The website for the Creative Computing Society (CCS) at Thapar Institute of Engineering and Technology.

> Adapted from the open-source Hack the North website. Interactions, animations, and layout are inherited from that project; the visual language has been rebranded for CCS. See [MODERNIZATION.md](./MODERNIZATION.md) for the ongoing cleanup/rebrand log.

### Running locally

```
$ npm install
$ npm start
```

Then open `localhost:3000`.

> Runs on Node 22 with the `--openssl-legacy-provider` flag already wired into the `start`/`build` scripts (required for react-scripts 5 on modern Node).

### Scripts

- `npm start` — dev server
- `npm run build` — production build (`./build`)
- `npm run type-check` — TypeScript, no emit
- `npm run lint` — ESLint (`--fix`)
- `npm run analyze` — build + bundle analysis

### Tech stack

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://github.com/facebook/create-react-app/)
- [TailwindCSS](https://tailwindcss.com/) + [twin.macro](https://github.com/ben-rogerson/twin.macro)
- [styled-components](https://styled-components.com/)
- [Framer Motion](https://www.framer.com/motion/)

### License

Code is licensed under the MIT license.
