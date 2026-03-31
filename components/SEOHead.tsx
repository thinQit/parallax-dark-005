"use client";

import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  ogImage?: string
  url?: string
}

export default function SEOHead({
  title = 'Aurora Digital Studio | Cinematic Growth Agency',
  description = 'Aurora Digital Studio builds cinematic, conversion-focused digital systems for premium brands.',
  ogImage = 'https://res.cloudinary.com/dwc294mzm/image/upload/c_fill,w_1600,h_900,g_auto,q_auto:best,f_auto/v1771577649/site-images/automotive/20095286.jpg',
  url = 'https://auroradigital.studio',
}: Partial<SEOHeadProps>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aurora Digital Studio',
    url,
    description,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  )
}
