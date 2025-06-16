"use client";
import { NewsCard } from "@/components/NewsCard";
import styles from "./news.module.scss";
import { useState, FC, Suspense } from "react";
import { getNews } from "@/app/actions";

type NewsItem = {
  id: string;
  data: string;
  img: string;
};

type Props = {
  initialData: NewsItem[];
  totalCount: number;
  itemsPerPage: number;
};

export const News: FC<Props> = ({ initialData, totalCount, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [news, setNews] = useState<NewsItem[]>(initialData);
  console.log(initialData, totalCount, itemsPerPage);
  const handleClick = async () => {
    const nextPage = currentPage + 1;
    const res = await getNews(nextPage);
    console.log("resolve", res);
    setCurrentPage(nextPage);
    setNews([...news, ...res.data]);
  };

  return (
    <>
      <div className={styles["news-title"]}>Latest news</div>
      <div className={styles["cards-container"]}>
        {news.map(({ id, data, img }) => (
          <Suspense key={id} fallback={<div>no data hddd</div>}>
            <NewsCard id={id} img={img} data={data} />
          </Suspense>
        ))}
      </div>
      <button className={styles.button} onClick={handleClick}>
        Add more
      </button>
    </>
  );
};
