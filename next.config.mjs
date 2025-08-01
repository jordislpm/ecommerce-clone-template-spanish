/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
  },
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"images.pexels.com"
      },
      {
         protocol:"https",
        hostname:"i.pinimg.com"
      },
        {
         protocol:"https",
        hostname:"static.wixstatic.com"
      }
    ]
  }
};

export default nextConfig;