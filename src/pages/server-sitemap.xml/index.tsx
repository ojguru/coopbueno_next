// pages/server-sitemap.xml/index.tsx
const SITE_URL = process.env.SITE_URL;

import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { GetServerSideProps } from "next";
import { graphql, query } from "client";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const academia =
    query
      .articles({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/academia/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const categorias =
    query
      .categories({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/categoria/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const noticias =
    query
      .noticias({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/noticias/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const servicios =
    query
      .servicios({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/servicios/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const sucursales =
    query
      .sucursals({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/sucursales/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const landings =
    query
      .landings({
        pagination: {
          pageSize: 1000,
        },
      })
      ?.data?.map((item) => {
        const field: ISitemapField = {
          loc: `${SITE_URL}/landing/${item.attributes?.slug}`, // Absolute url
          lastmod: new Date().toISOString(),
          priority: 0.7,
          changefreq: "daily",
        };

        return field;
      }) || [];

  const fields: ISitemapField[] = [
    ...academia,
    ...categorias,
    ...noticias,
    ...servicios,
    ...sucursales,
    ...landings,
  ];

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
