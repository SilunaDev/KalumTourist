# LankaHorizon - Travel Website

A modern, responsive travel website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Responsive Header**: Logo, brand name "LankaHorizon", and navigation menu
- **Colorful Navigation**: Hover effects with green, blue, and yellow gradient underlines
- **Auto-Rotating Carousel**: 4 beautiful images that automatically cycle
- **Animated Text**: Dynamic text animations appearing and disappearing in the carousel
- **Mobile Optimized**: Fully responsive design for all screen sizes
- **Color Theme**: Blue, yellow, and green color scheme throughout

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Navigation Items

- HOME
- SERVICES
- LICENSE
- CUSTOMERS
- ABOUT US
- PLACES

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Customization

### Change Carousel Images

Edit the `slides` array in `components/Carousel.tsx` to use your own images.

### Modify Animated Text

Update the `texts` array in `components/Carousel.tsx` to change the carousel text.

### Adjust Colors

Modify the color theme in `tailwind.config.ts` under the `theme.extend.colors` section.

## Build for Production

```bash
npm run build
npm start
```

## License

ISC
