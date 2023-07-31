const DISCORD_URL = process.env.NEXT_PUBLIC_DISCORD_URL || "https://discord.gg/bm28TJfvWr";

const config = {
  public: {
    websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.cpplus.pw",
    websiteTitle: process.env.NEXT_PUBLIC_WEBSITE_TITLE || "Club Penguin Plus",
    websiteDescription: process.env.NEXT_PUBLIC_WEBSITE_DESCRIPTION || "Club Penguin Plus is an independent fan-run remake of Club Penguin™ (2005-2017). We are not affiliated with The Walt Disney Company. Create a free account to waddle around and make new friends!",
    announcement: process.env.NEXT_PUBLIC_ANNOUNCEMENT || "Welcome to Club Penguin Plus!",
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-K8PKTKP676",

    menuLinks: [
      { label: "Blog", href: "/blog", target: "_self" },
      { label: "Discord", href: DISCORD_URL, target: "_blank" },
      { label: "Create a Penguin", href: "/create", target: "_self" },
    ],

    footerLinks: [
      { label: "Terms of Service", href: "/terms", target: "_self" },
      { label: "Privacy Policy", href: "/privacy", target: "_self" },
    ],

    socialLinks: {
      twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL || "https://twitter.com/cpplusr",
      discordUrl: DISCORD_URL,
    },

    playUrl: process.env.NEXT_PUBLIC_PLAY_URL || "https://play.cpplus.pw/",
  },

  server: {
    blogUrl: process.env.BLOG_URL || "http://wordpress.cpplus.pw",
    database: {
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST || "localhost",
      port: process.env.DATABASE_PORT || 3306,
      database: process.env.DATABASE_NAME,
      timezone: "Z",
    },
    sendgrid: {
      apiKey: process.env.SENDGRID_API_KEY,
    },
  },
};

export default config;
