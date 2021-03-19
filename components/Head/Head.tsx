import React from "react";
import NextHead from "next/head";
import { GoogleFonts } from "next-google-fonts";

type Props = {
  title?: string;
};

export const Head: React.FC<Props> = ({ children, title }) => (
  <>
    <GoogleFonts
      href={
        "https://fonts.googleapis.com/css2" +
        "?family=Crete+Round:wght@400&family=Rubik:wght@400" +
        "&family=Source+Serif+Pro:wght@400;700" +
        "&family=Playfair+Display:wght@600" +
        "&family=Great+Vibes:wght@400" +
        "&family=Roboto+Condensed:wght@300;700" +
        "&family=Open+Sans:wght@400" +
        "&display=swap"
      }
    />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {title ? <title>{title}</title> : undefined}

      {children}
    </NextHead>
  </>
);
