import NextHead from "next/head";
import { FC } from "react";

type HeadProps = {
  title: string;
  description?: string;
};

const DEFAULT_DESC: string =
  "Hey! I'm Alan (stylessh), a creative Web Developer. Come on and take a look into my projects!";

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const Head: FC<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta name="description" content={description || DEFAULT_DESC} />
      <title>Stylessh | {capitalize(title)}</title>

      <meta name="theme-color" content="#0f0f0f" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stylessh - Web Developer" />
      <meta name="twitter:description" content={description || DEFAULT_DESC} />
      <meta name="twitter:image:src" content="/img/me.jpeg" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://stylessh.vercel.app" />
      <meta property="og:site_name" content="Stylessh" />
      <meta property="og:title" content={`Stylessh | ${capitalize(title)}`} />
      <meta property="og:description" content={description || DEFAULT_DESC} />
      <meta property="og:image" content="/img/me.jpeg" />
      <meta property="og:type" content="object" />
    </NextHead>
  );
};

export default Head;
