import Link from "next/link";
import Image from "next/image";
import styles from "./newsCard.module.scss";
import { FC } from "react";

type Props = {
  id: string;
  img: string;
  data: string;
};

export const NewsCard: FC<Props> = ({ id, img, data }) => {
  return (
    <Link href={`./news/${id}`} className={styles.card} key={id}>
      <Image
        src={img}
        width={100}
        height={100}
        className={styles["card-img"]}
        alt="Picture of the author"
      />
      <div>{data}</div>
    </Link>
  );
};
