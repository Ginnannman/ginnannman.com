import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ginnannman.com",
  author: "Ginnnannman",
  desc: "ぎんなんまんに関する情報、連絡先、ブログ記事等を掲載",
  title: "Ginnannman",
  ogImage: "favicon.svg",
  lightAndDarkMode: false,
  postPerPage: 5,
};

export const LOCALE = ["ja-JP"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Mail",
    href: "mailto:contact@ginnannman.com",
    linkTitle: `メールを送信`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Ginnannman",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discordapp.com/users/ginnannman",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Misskey",
    href: "https://mi.ginnannman.com/@ginnannman",
    linkTitle: `${SITE.title} on Misskey(Fediverse)`,
    active: false,
  },

  {
    name: "Github",
    href: "https://github.com/Ginnannman",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/uzbekistanmann",
    linkTitle: `${SITE.title} on Instagram`,
    active: false,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title}のRSS`,
    active: true,
  },
];
