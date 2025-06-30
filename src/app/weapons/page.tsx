import styles from "./page.module.scss";
import { getAllWeapons } from "@/server/actions";
import Image from "next/image";
import Link from "next/link";
import type { TypesOfWeaponIds } from "@/variables";

const Page = async () => {
  const { weaponsList, bossesList } = await getAllWeapons();
  const weaponsKeys = Object.keys(weaponsList);
  //TODO what if it was 3 of them how to type it all with as typeof?
  const additionalConditions = weaponsKeys.filter(
    (d) => weaponsList[d as TypesOfWeaponIds].additionalCondition
  );
  // const meleeWeaponsWithConditionsKeys = additionalConditions.filter(
  //   (d) => weaponsData[d as TypesOfWeaponIds].type === "melee"
  // );
  // const rangeWeaponsWithConditionsKeys = additionalConditions.filter(
  //   (d) => weaponsData[d as TypesOfWeaponIds].type === "range"
  // );

  return (
    <div className={styles.wrapper}>
      <div>This page lists all weapons & their respective stats.</div>
      <div>Weapons</div>
      <div className={styles["cards-container"]}>
        {weaponsKeys.map((key) => {
          const { title, img, id } = weaponsList[key as TypesOfWeaponIds];
          return (
            <Link href={`/weapons/${id}`} key={title}>
              <div>{title}</div>
              <Image width={20} height={20} src={img} alt={title} />
            </Link>
          );
        })}
      </div>
      <div className={styles["type-container"]}>
        <div className={styles.title}>Additional conditions for receiving</div>
        {additionalConditions.map((key) => {
          const { title, additionalCondition } =
            weaponsList[key as TypesOfWeaponIds];
          //TODO how to do it correct for typing cause additionalCondition can be undefined bot not in this arr
          const currentBoss = additionalCondition && {
            id: bossesList[additionalCondition].id,
            title: bossesList[additionalCondition].title,
          };

          console.log(currentBoss);
          return (
            <div key={title} className={styles["weapon-description"]}>
              <div>{title}</div>
              {currentBoss?.id && (
                <div>
                  Recipe unlocks after feeding on{" "}
                  <Link href={`/blood-carriers/${currentBoss.id}`}>
                    {currentBoss.title}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
