/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig, {
    env: {
        OPENAI_API_KEY: process.env.OPENAI_API_KEY,
        AUTH_SECRET: process.env.AUTH_SECRET,
        KV_URL: process.env.KV_URL,
        KV_REST_API_URL: process.env.KV_REST_API_URL,
        KV_REST_API_TOKEN: process.env.KV_REST_API_TOKEN,
        KV_REST_API_READ_ONLY_TOKEN: process.env.KV_REST_API_READ_ONLY_TOKEN
    }
}
