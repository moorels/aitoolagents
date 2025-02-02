import { Metadata } from 'next';
import { metadata as siteMetadata } from '../metadata';

export function generateMetadata(page: keyof typeof siteMetadata): Metadata {
  const pageMetadata = siteMetadata[page];
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.metaDescription,
    keywords: pageMetadata.keywords.join(', '),
    openGraph: {
      title: pageMetadata.ogTitle,
      description: pageMetadata.ogDescription,
      type: pageMetadata.ogType as 'website' | 'article',
      images: [
        {
          url: pageMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: pageMetadata.ogTitle,
        },
      ],
      siteName: 'AI Tool Agents',
      publishedTime: pageMetadata.publishedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: pageMetadata.ogTitle,
      description: pageMetadata.ogDescription,
      images: [pageMetadata.ogImage],
    },
  };
}
