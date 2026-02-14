/** @type {import('next-sitemap').IConfig} */

const AMOUNT_PAGES = [
  1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000,
  7000, 8000, 9000, 10000, 15000, 20000, 25000, 30000, 35000,
  40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000, 80000,
  85000, 90000, 95000, 100000, 110000, 120000, 130000, 140000,
  150000, 200000,
];

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gehaltly.de',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/_next/*', '/static/*', '/robots.txt', '/kontakt'],
  additionalPaths: async (config) => {
    return AMOUNT_PAGES.map((amount) => ({
      loc: `/${amount}-brutto-in-netto`,
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
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
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (['/gehaltsrechner', '/lohnrechner', '/netto-brutto-rechner', '/netto-rechner'].includes(path)) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/rechner/')) {
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.match(/^\/\d+-brutto-in-netto/)) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/ratgeber/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.match(/\/(impressum|datenschutz)$/)) {
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
