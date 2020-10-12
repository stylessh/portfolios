import NextHead from "next/head";
import { FC } from "react";

type HeadProps = {
  title: string;
  description?: string;
};

const DEFAULT_DESC = "A markdown blog.";

const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1);

const Head: FC<HeadProps> = ({ title, description }) => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="description" content={description || DEFAULT_DESC} />
      <title>Blogdown | {capitalize(title)}</title>
    </NextHead>
  );
};

export default Head;
