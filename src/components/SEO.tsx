import { Helmet } from 'react-helmet-async'
import { siteUrl, ogImage } from '../data/seo'

interface SEOProps {
  title: string
  description: string
  pathname?: string
}

export default function SEO({ title, description, pathname = '' }: SEOProps) {
  const url = `${siteUrl}${pathname}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
    </Helmet>
  )
}
