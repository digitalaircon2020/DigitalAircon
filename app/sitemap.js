export default function sitemap() {
  const baseUrl = "https://musk-appliance.vercel.app";
  const lastModified = new Date();

  return [
    // Home
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // About
    {
      url: `${baseUrl}/AboutUs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Contact
    {
      url: `${baseUrl}/ContactUs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },

    // Services (PARAM BASED)
    {
      url: `${baseUrl}/services?service=ac`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services?service=washing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services?service=refrigerator`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/services?service=microwave`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
  ];
}
