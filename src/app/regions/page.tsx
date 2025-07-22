import styles from "./page.module.scss";
import { getRegions } from "@/server/actions";
import Image from "next/image";

const Page = async () => {
  const { img, data } = await getRegions();
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Locations</div>
        <div>
          The world of V Rising is called Vardoran - it is split into eight
          regions, each with their own unique enemies, trees, plants, resources
          & loot.
        </div>
        {data.map(({ name, content }) => (
          <div className={styles["regions-description"]} key={name}>
            <div className={styles.title}>{name}</div>
            <div>{content}</div>
          </div>
        ))}
      </div>
      <div className={styles["image-wrapper"]}>
        <Image src={img} alt="regions" width={400} height={200} />
      </div>
    </div>
  );
};
export default Page;
