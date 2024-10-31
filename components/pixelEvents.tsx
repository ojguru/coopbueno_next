"use client";

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID ?? "";

import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const FacebookPixelEvents: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(`${FACEBOOK_PIXEL_ID}`); //don't forget to change this
        ReactPixel.pageView();
      });

    try {
      window.eval(`
          _hsq.push(["trackPageView"]);
        `);
    } catch (error) {
      console.log(error);
    }
  }, [pathname, searchParams]);

  return null;
};
