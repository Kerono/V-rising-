import { getSpecificNews } from "@/server/actions";
import { NewsIds } from "@/variables";
import Image from "next/image";
import styles from "./page.module.scss";

type Props = {
  params: Promise<{
    blog: NewsIds;
  }>;
};
const Page = async ({ params }: Props) => {
  const { blog } = await params;

  const { news } = await getSpecificNews(blog);
  const { title, img, info } = news;

  return (
    <div className={styles.wrapper}>
      <div>{title}</div>
      <div>{info}</div>
      <Image src={img} alt={title} width={120} height={120} />
    </div>
  );
};
export default Page;
