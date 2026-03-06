import React from "react";
import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export default function SEOHead({
  title = "Aurelia Estates | Luxury Real Estate",
  description = "Discover curated luxury listings, expert agents, and market insights with Aurelia Estates.",
  canonicalUrl = "",
  ogImage = "/images/hero.jpg",
}: Partial<SEOHeadProps>) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
