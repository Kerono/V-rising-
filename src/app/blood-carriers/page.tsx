import { getBriefDescriptionBosses } from "@/server/actions";
import styles from "./page.module.scss";
import Link from "next/link";

const Page = async () => {
  const { bossesList, briefDecriptionBosses } =
    await getBriefDescriptionBosses();
  const { description, title, bosesIds } = briefDecriptionBosses;

  return (
    <div className={styles.wrapper}>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        <div>V Blood Carriers</div>
        <div>Location</div>
        <div>Region</div>
        {bosesIds.map((bossId) => {
          const { id, title, location, region } = bossesList[bossId];
          return (
            <div key={id}>
              <Link href={`/blood-carriers/${id}`}>{title}</Link>
              <div>{location}</div>
              <div>{region}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
