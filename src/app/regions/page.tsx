import { Fragment } from "react";
import styles from "./page.module.scss";
import { getRegions } from "@/server/actions";

const Page = async () => {
  const data = await getRegions();
  console.log(data);
  return (
    <div className={styles.wrapper}>
      <div>Locations</div>
      <div>
        The world of V Rising is called Vardoran - it is split into eight
        regions, each with their own unique enemies, trees, plants, resources &
        loot.
      </div>

      {data.map(({ name, content }) => (
        <Fragment key={name}>
          <div>{name}</div>
          <div>{content}</div>
        </Fragment>
      ))}
    </div>
  );
};
export default Page;
