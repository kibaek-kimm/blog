/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

enum MetaDataEnum {
  Title,
  Image,
  Description,
}

const metaData = (type: MetaDataEnum) => {
  switch (type) {
    case MetaDataEnum.Title:
      return [
        {
          keyword: `name`,
          keywordValue: `twitter:title`,
        },
        {
          keyword: `property`,
          keywordValue: `og:title`,
        },
      ]
    case MetaDataEnum.Image:
      return [
        {
          keyword: `itemprop`,
          keywordValue: `image`,
        },
        {
          keyword: `property`,
          keywordValue: `og:image`,
        },
        {
          keyword: `name`,
          keywordValue: `twitter:image`,
        },
      ]
    case MetaDataEnum.Description:
      return [
        {
          keyword: `name`,
          keywordValue: "description",
        },
        {
          keyword: `itemprop`,
          keywordValue: "description",
        },
        {
          keyword: `property`,
          keywordValue: "og:description",
        },
        {
          keyword: `name`,
          keywordValue: "twitter:description",
        },
      ]
  }
}

const generateMetaData = (type: MetaDataEnum, content: string) => {
  const data = metaData(type)

  return data.map(metaKey => {
    return {
      [metaKey.keyword]: metaKey.keywordValue,
      content,
    }
  })
}

function SEO({ lang, title, description, image = null, propsMeta = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  )

  const snsTitle = title ? `${title} | ${site.siteMetadata.title}` : title
  const snsImage = image ? image : site.siteMetadata.image

  const metaImage = generateMetaData(MetaDataEnum.Image, snsImage)
  const metaTitle = generateMetaData(MetaDataEnum.Title, snsTitle)
  const metaDescription = generateMetaData(
    MetaDataEnum.Description,
    description
  )

  const metaData = [
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
  ].concat([...metaTitle, ...metaDescription, ...metaImage, ...propsMeta])

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
    >
      <title>
        {title
          ? `${title} | ${site.siteMetadata.title}`
          : site.siteMetadata.title}
      </title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui"
      />
      <meta name="format-detection" content="telephone=no" />
      {metaData.map((metaObj, index: number) => (
        <meta key={index} {...metaObj} />
      ))}
    </Helmet>
  )
}

export default SEO
