const config = {
  siteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://cpplus.pw",
  generateRobotsTxt: true,
  priority: 0.3,
  changefreq: "monthly",
  exclude: ["/blog/*", "/manage*"],
  transform: async (config, path) => {
    let { changefreq, priority } = config;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    }

    if (path === "/blog") {
      priority = 0.7;
      changefreq = "daily";
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};

module.exports = config;
