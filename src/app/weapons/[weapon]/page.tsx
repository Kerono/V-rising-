import { FC, Fragment } from "react";
import { getSpecificWeapon } from "@/server/actions";
import styles from "./page.module.scss";
import { TypesOfWeaponIds } from "@/variables";
import Image from "next/image";
import Link from "next/link";

//TODO asked about type
type Props = {
  params: Promise<{
    weapon: string;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { weapon } = await params;
  const { searchId, weaponsList, bossesList } = await getSpecificWeapon(
    weapon as TypesOfWeaponIds
  );
  const currentWeapon = weaponsList[searchId];
  if (!currentWeapon) return <div>something went wrong</div>;
  const { title, bonuses, skills, additionalCondition } = currentWeapon;
  //TODO is correct typing cause can be undefined
  const dropFrom = additionalCondition && bossesList[additionalCondition];
  return (
    <div className={styles.wrapper}>
      <div>{title}</div>
      <div>{bonuses}</div>
      {dropFrom && (
        <div>
          Recipes unlock upon slaying{" "}
          <Link href={`/blood-carriers/${dropFrom.id}`}>{dropFrom.title}</Link>
        </div>
      )}
      <div className={styles["skills-wrapper"]}>
        <div>Skill</div>
        <div>Description</div>
        <div>Tier Requirement</div>
        {skills.map(({ id, skill, description, tierRequirement }) => {
          return (
            <Fragment key={id}>
              <div>
                <div>{skill.info}</div>
                <Image
                  src={skill.img}
                  alt={skill.info}
                  width={20}
                  height={20}
                />
              </div>
              <div>{description}</div>
              <div>
                <div>{tierRequirement.info}</div>
                <Image
                  src={tierRequirement.img}
                  alt={tierRequirement.info}
                  width={20}
                  height={20}
                />
              </div>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
