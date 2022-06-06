const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL

export async function fetchAPI(
  query: string,
  { variables }: any,
): Promise<any> {
  const headers = { 'Content-Type': 'application/json' }

  // if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
  //   headers[
  //     'Authorization'
  //   ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  // }
  console.log(API_URL)
  const res = await fetch(API_URL + '/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export function getStrapiURL(path = '') {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
  }${path}`
}
