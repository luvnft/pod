# Podcast Network Template

<a href="https://cosmic-podcast-network.vercel.app/">
  <img src="https://imgix.cosmicjs.com/f2eeb900-4b9b-11ef-b1ea-f56c65dfade9-cosmic-podcast-network-screenshot.png?w=2000&auto=forat,compression" />
</a>

[[View Live Demo](https://cosmic-podcast-network.vercel.app)]

A podcast network template that shows you how to build a podcast / video entertainment website using Cosmic CMS, Next.js, the [Cosmic JavaScript SDK](https://www.npmjs.com/package/@cosmicjs/sdk), and React Server Actions.

## Features

- React Server Actions
- Server Actions (No exposed API keys)
- Tailwind CSS

## Getting Started

First, clone this repo.

```bash
git clone https://github.com/cosmicjs/cosmic-podcast-network
cd cosmic-podcast-network
```

Then install packages.

```bash
npm i
# or
yarn
# or
pnpm
# or
bun i
```

## Install the template and connect to Cosmic

1. Log in to the [Cosmic dashboard](https://app.cosmicjs.com/) and create a new Project and select the Podcast Network template.

2. Then copy the `.env.copy` to a new `.env.local` file. And add your API keys found in the Cosmic dashboard at _Project / API keys_.

```
# .env.local
COSMIC_BUCKET_SLUG=your_bucket_slug
COSMIC_READ_KEY=your_bucket_read_key
COSMIC_WRITE_KEY=your_bucket_write_key
```

## Run the app

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see your message app. Add / delete your messages. See your messages in the Cosmic dashboard as well.

## Contributing

Contributions welcome!
