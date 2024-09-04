import { REVALIDATE } from "./constants";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(
  query: string,
  { variables }: any
): Promise<any> {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL + "/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
    next: { revalidate: REVALIDATE },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export function getImageURL(path = "") {
  const isExternal = path.includes("http");

  if (isExternal) {
    return path;
  }

  return `${
    process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"
  }${path}`;
}

export function getURL(path = "") {
  const isExternal = path.includes("http");

  if (isExternal) {
    return path;
  }

  return `${path || "/"}`;
}
