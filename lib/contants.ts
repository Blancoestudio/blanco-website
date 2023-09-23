const siteURL = new URL(
  process.env.NEXT_PUBLIC_SITE_URL as string | URL
);
const siteOrigin = siteURL.origin;

export {siteURL, siteOrigin};
