/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gehaltly.de',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_next/*', '/static/*', '/robots.txt', '/kontakt'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/*_buildManifest.js$',
          '/*_middlewareManifest.js$',
          '/*_ssgManifest.js$',
          '/*.js.map$',
        ],
      },
    ],
  },
  transform: async (config, path) => {
    // Custom priority for specific pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }

    // Main calculator pages - high priority
    else if (['/gehaltsrechner', '/lohnrechner', '/netto-brutto-rechner', '/netto-rechner'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    }

    // Rechner sub-pages - high priority
    else if (path.startsWith('/rechner/')) {
      priority = 0.85;
      changefreq = 'weekly';
    }

    // Amount pages (e.g. /3000-brutto-in-netto) - high priority
    else if (path.match(/^\/\d+-brutto-in-netto$/)) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Guide pages - high priority
    else if (path.startsWith('/ratgeber/')) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    // Regional pages - medium priority
    else if (path.startsWith('/bundesland/')) {
      priority = 0.75;
      changefreq = 'monthly';
    }

    // Legal pages - low priority
    else if (path.match(/\/(impressum|datenschutz)$/)) {
      priority = 0.3;
      changefreq = 'yearly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
