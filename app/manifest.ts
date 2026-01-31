import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Era Eliya Tours - Sri Lanka Tour Packages',
    short_name: 'Era Eliya Tours',
    description: 'Discover Sri Lanka with Era Eliya Tours. Premium tour packages and travel services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/images/logo/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
