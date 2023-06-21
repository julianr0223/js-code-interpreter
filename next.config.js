/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/:path*', // Replace with your API route pattern
            headers: [
              {
                key: 'Access-Control-Allow-Origin',
                value: '*',
              },
              {
                key: 'Access-Control-Allow-Headers',
                value: '*',
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
