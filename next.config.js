const ContentSecurityPolicy = `
  child-src *.google.com streamable.com;
  connect-src *;
  default-src 'self';
  font-src 'self';
  img-src * blob: data:;
  media-src 'none';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.splitbee.io;
  style-src 'self' 'unsafe-inline' *.googleapis.com;
  worker-src 'self' 'unsafe-inline' blob:;
`;

const config = {
  images: {
    domains: [
      // Discord assets
      "cdn.discordapp.com",

      // cloudinary
      "res.cloudinary.com",

      // Netflix assets
      "occ-0-6246-2164.1.nflxso.net",

      //imgur
      "i.imgur.com",

      //wiki
      "upload.wikimedia.org",

      //reddit
      "cdn.rcd.gg",

      // GitHub assets
      "raw.githubusercontent.com",
      "avatars.githubusercontent.com",

      // Spotify Album Art
      "i.scdn.co",

      // Streamable thumbnails
      "cdn-cf-east.streamable.com",

      // Unsplash
      "source.unsplash.com",
      "images.unsplash.com",

      //Leetcode
      "assets.leetcode.com",

      //Simple Icons
      "simpleicons.org",

      //Clipart
      "www.clipartmax.com",

      //Pixabay
      "cdn.pixabay.com",
      "pixabay.com",

      //chess.com
      "images.chesscomfiles.com",

      //icons8
      "icons8.com",
      "img.icons8.com",
    ],
  },
  // Inspired by: https://github.com/leerob/leerob.io/blob/main/next.config.js#L44-L81
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy.replace(/\n/g, ""),
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy
          // Opt-out of Google FLoC: https://amifloced.org/
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { dev, isServer }) => {
    // TODO: Temp disabled as since upgrading `next` to v12.2.3 production builds fail & this seems to be the cause
    // Replace React with Preact only in client production build
    // if (!dev && !isServer) {
    // 	Object.assign(config.resolve.alias, {
    // 		react: 'preact/compat',
    // 		'react-dom/test-utils': 'preact/test-utils',
    // 		'react-dom': 'preact/compat',
    // 	});
    // }

    config.module.rules.push({
      test: /\.(glsl|vs|fs|frag|vert)$/,
      use: ["ts-shader-loader"],
    });

    return config;
  },
};

module.exports = config;
