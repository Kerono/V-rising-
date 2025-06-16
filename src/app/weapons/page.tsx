import styles from "./page.module.scss";
import { data } from "@/../src/variables";

const Page = () => {
  const additionalConditions = data.filter((d) => d.needReceiving);
  const meleeWeaponsWithConditions = additionalConditions.filter(
    (d) => d.type === "melee"
  );
  const rangeWeaponsWithConditions = additionalConditions.filter(
    (d) => d.type === "range"
  );

  console.log(additionalConditions);
  return (
    <div className={styles.wrapper}>
      <div>This page lists all weapons & their respective stats.</div>
      <div className={styles["cards-container"]}>
        {data.map(({ name }) => (
          <div key={name}>{name}</div>
        ))}
      </div>
      <div className={styles["type-container"]}>
        <div className={styles.title}>Melee Weapons</div>
        {meleeWeaponsWithConditions.map(({ name, additionalCondition }) => (
          <div key={name} className={styles["weapon-description"]}>
            <div>{name}</div>
            <div>{additionalCondition}</div>
          </div>
        ))}
      </div>
      <div className={styles["type-container"]}>
        <div className={styles.title}>Range Weapons</div>
        {rangeWeaponsWithConditions.map(({ name, additionalCondition }) => (
          <div key={name} className={styles["weapon-description"]}>
            <div>{name}</div>
            <div>{additionalCondition}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
