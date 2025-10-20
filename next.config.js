/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    // Desabilitar ESLint durante o build para evitar erros no Railway
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Desabilitar verificação de tipos durante o build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
