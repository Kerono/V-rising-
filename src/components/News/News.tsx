"use client";
import { NewsCard } from "@/components/NewsCard";
import styles from "./news.module.scss";
import { useState, FC, useRef } from "react";
import { getNews } from "@/server/actions";
import { NewsList } from "@/variables";

type Props = {
  initialData: NewsList[];
  totalCount: number;
};

export const News: FC<Props> = ({ initialData, totalCount }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [news, setNews] = useState<NewsList[]>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  //TODO types?
  const totalCountRef = useRef<number>(totalCount);

  const handleClick = async () => {
    setIsLoading(true);
    const nextPage = currentPage + 1;
    const { data } = await getNews(nextPage);
    setCurrentPage(nextPage);
    setNews([...news, ...data]);
    setIsLoading(false);
  };

  return (
    <>
      <div className={styles["news-title"]}>Latest news</div>
      <div className={styles["cards-container"]}>
        {news.map(({ id, title, img }) => (
          <NewsCard key={id} id={id} img={img} data={title} />
        ))}
      </div>
      {news.length < totalCountRef.current && (
        <button
          disabled={isLoading}
          className={styles.button}
          onClick={handleClick}
        >
          {isLoading ? "loading..." : "add more"}
        </button>
      )}
    </>
  );
};
