import { getSpecificNews } from "@/server/actions";
import { NewsIds } from "@/variables";
import Image from "next/image";
import styles from "./page.module.scss";
import { notFound } from "next/navigation";
import { FC } from "react";

type Props = {
  params: Promise<{
    blog: NewsIds;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { blog } = await params;

  try {
    const responce = await getSpecificNews(blog);
    console.log("hre", responce);
    const { title, info, img } = responce;

    // const { title, info, img } = await getSpecificNews(blog);
    return (
      <div className={styles.wrapper}>
        <div className={styles["image-wrapper"]}>
          <Image src={img} alt={title} width={"200"} height={"200"} />
        </div>
        <div className={styles.title}>{title}</div>
        <div>{info}</div>
      </div>
    );
  } catch (e: unknown) {
    //TODO can do like this?
    const errorMessage = (await e) as { message: string };
    console.log(errorMessage.message);
    notFound();
  }
};

export default Page;
