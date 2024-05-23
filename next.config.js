/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '**'
            }
        ]
    },
    env: {
        AUTH_SECRET: process.env.AUTH_SECRET,
        OPENAI_API_KEY: process.env.OPENAI_API_KEY
    }
}
