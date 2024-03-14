This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Convex

This app uses Convex as a simple backend to server project data, and later things like blog posts and other media that I will share on my site.

To start:
```bash
npm i convex
npx convex dev
```

More quickstart notes:
https://docs.convex.dev/quickstart/nextjs

To deploy any updates to Convex functions or mutations:
```bash
npx convex deploy
```


## Deployed on Heroku with Github Integration

To deploy just push to main and it will be automatically built and deployed on Heroku
```bash
git add []
git commit -m ""
git push
```
