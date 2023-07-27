---
pubDatetime: 2023-07-24
title: こんにちは世界
postSlug: first
featured: false
draft: false
tags:
  - others
  - tech
ogImage: ""
description: ブログをはじめました。
modDatetime: 2023-07-25
---

### Table of contents

## 経緯

ドメインとサーバと適度な現実逃避の必要から、ブログが立った。

## 構成

astro で SSG（静的サイト生成）をしている。[AstroPaper](https://github.com/satnaing/astro-paper)を下地に作成した。理由は、自力ではうまいこと一覧系のページのページネーションができなかったため。

サイトのスタイルは[mythfinder（haxibami.net）](https://www.haxibami.net)にかなり多くの影響を受けている。

### ライブラリ

以下の一覧を見ると早い。概ね md/mdx がちゃんと動くといいな、快適になりたいな、という拡張をしている。

```txt
"dependencies": {
    "@astrojs/image": "^0.17.2",
    "@astrojs/mdx": "^0.19.7",
    "@astrojs/rss": "^2.4.1",
    "@resvg/resvg-js": "^2.4.1",
    "astro": "^2.9.1",
    "astro-compress": "^1.1.49",
    "fuse.js": "^6.6.2",
    "github-slugger": "^2.0.0",
    "rehype-accessible-emojis": "^0.3.2",
    "rehype-external-links": "^2.1.0",
    "rehype-katex": "^6.0.3",
    "remark-collapse": "^0.1.2",
    "remark-gemoji": "^7.0.1",
    "remark-gfm": "^3.0.1",
    "remark-jaruby": "^0.1.0",
    "remark-rehype": "^10.1.0",
    "remark-toc": "^8.0.1",
    "satori": "^0.8.1",
    "sharp": "^0.32.4",
    "tailwindcss": "^3.3.3"
}
```

### 展開

#### 実装したい機能

- [ ] リンクカード
- [x] OG 画像生成の正常化
  - 今ちょっと日本語が化ける。
  - 微妙だが、直してはある。
- [ ] 画像処理の最適化
  - 今一応`astro/image`が入っているものの設定をちゃんとしていないのでまじめに働いてくれない。画像を大量に使う予定が発生したら考える。

#### コンテンツ

- [ ] はてなブログの移行
- [ ] その他どこかに書き散らしてきたものの集約
  - どこに書いて消えていったのかわからないので困った困った。

## その他

コードは GitHub にあげました[^1]。

[^1]: <https://github.com/ginnannman/ginnannman.com>
