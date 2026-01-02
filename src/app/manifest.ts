import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Hiruna Dissanayake Portfolio',
        short_name: 'Hiruna',
        description: 'Personal portfolio of Hiruna Dissanayake, Software Engineer & Designer.',
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#000000',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    };
}
