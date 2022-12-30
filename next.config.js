/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  i18n: {
    locales: ["ru", "en", "sp"],
    defaultLocale: "ru",
  }
}
