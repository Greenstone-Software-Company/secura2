const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: '**.microsoft.com',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
