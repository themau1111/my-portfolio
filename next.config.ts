import type { NextConfig } from "next";
const { i18n } = require("./next-i18next.config");

const nextConfig: NextConfig = {
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
  },
  /* config options here */
};

export default nextConfig;
