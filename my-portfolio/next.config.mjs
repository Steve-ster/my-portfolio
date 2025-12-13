/** @type {import('next').NextConfig} */
const nextConfig = {
    // image optimization settings
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
            {
                protocol:'https',
                hostname: 'images.unsplash.com',
            },
        ],
        formats: ['image/webp', 'image/avif'],
    },

    // Performance optimizations
    experimental: {
        optimizeCss: true,
    },

    // compress responses
    compress: true,

    // security headers
    async headers() {
        return [
            {
                source: '/(,*)',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key:'X-Content-Type-Options',
                        value:'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                ],
            },
        ]
    },
}


export default nextConfig;
