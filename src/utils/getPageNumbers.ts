import { SITE } from "@config";

const getPageNumbers = (numberOfPosts: number) => {
  const numberOfPages = numberOfPosts / Number(SITE.postPerPage);

  // スプレッド構文によるループ内コピーをやめて push に変更
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
};

export default getPageNumbers;
