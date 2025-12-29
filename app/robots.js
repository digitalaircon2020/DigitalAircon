export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://musk-appliance.vercel.app/sitemap.xml",
  };
}
