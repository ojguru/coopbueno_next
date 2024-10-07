import { REVALIDATE } from "./constants";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "";
const FB_ACCESS_TOKEN = process.env.NEXT_PUBLIC_FB_ACCESS_TOKEN ?? "";
const FB_TEST_CODE = process.env.NEXT_PUBLIC_FB_TEST_CODE ?? "";

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

export default async function getUserIpAddress() {
  const ip = await fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      return data.ip;
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  return ip;
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export async function sendEvent(
  eventName: string,
  custom = false,
  { user_data, custom_data }: any
): Promise<any> {
  const headers = { "Content-Type": "application/json" };
  const eventID = crypto.randomUUID();
  const ip = await getUserIpAddress();
  const test_event_code = FB_TEST_CODE || null;
  const fbp = getCookie("_fbp");
  const fbc = getCookie("_fbc");

  const data = {
    event_name: eventName,
    event_id: eventID,
    event_time: Math.floor(Date.now() / 1000),
    action_source: "website",
    event_source_url: window.location.href,
    user_data: {
      ...user_data,
      fbp,
      fbc,
      client_user_agent: navigator.userAgent,
      client_ip_address: ip,
    },
    custom_data: {
      ...custom_data,
    },
  };

  const res = await fetch(
    `https://graph.facebook.com/v19.0/${FACEBOOK_PIXEL_ID}/events?access_token=${FB_ACCESS_TOKEN}`,
    {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: [data],
        test_event_code,
      }),
      next: { revalidate: REVALIDATE },
    }
  );

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  await import("react-facebook-pixel")
    .then((x) => x.default)
    .then((ReactPixel) => {
      ReactPixel.init(`${FACEBOOK_PIXEL_ID}`); //don't forget to change this
      ReactPixel.fbq(
        custom ? "trackCustom" : "track",
        eventName,
        { ...custom_data },
        { eventID }
      );
    });

  if (eventName !== "PageView") {
    await window?.gtag("event", eventName, { ...custom_data });
  }

  return json.data;
}
