import { getAllResources } from "@/server/actions";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Page = async () => {
  const data = await getAllResources();
  const { resourcesGroups, resourcesList } = data;

  return (
    <div className={styles.wrapper}>
      {resourcesGroups.map(({ title, ids }) => {
        return (
          <Fragment key={title}>
            <div>{title}</div>
            <div className={styles.content}>
              {ids.map((id) => {
                console.log(ids, resourcesList, resourcesList);
                const { name, img } = resourcesList[id];
                return (
                  <Link href={`/items/${id}`} key={id}>
                    <Image width={20} height={20} src={img} alt={name} />
                    <div>{name}</div>
                  </Link>
                );
              })}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};
export default Page;
