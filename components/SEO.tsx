import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function generateSEO({
  title,
  description,
  keywords = 'HR consulting, HR compliance, fractional HR director, employee handbook, workplace investigations, HR audits',
  image = '/images/logo.png',
  url = 'https://rootedpeopleservices.com',
}: SEOProps): Metadata {
  return {
    title: `${title} | Rooted People Services`,
    description,
    keywords,
    authors: [{ name: 'Jessika Hanger' }],
    creator: 'Rooted People Services',
    publisher: 'Rooted People Services',
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      title,
      description,
      siteName: 'Rooted People Services',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

