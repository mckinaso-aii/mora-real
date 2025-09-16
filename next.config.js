/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  // Enable Spanish language support
  i18n: {
    locales: ['es'],
    defaultLocale: 'es',
  },
}

module.exports = nextConfig
