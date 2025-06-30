import { getSkillsBriefDescription } from "@/server/actions";
import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const { skillsBriefDescription, skillsList } =
    await getSkillsBriefDescription();
  console.log(skillsBriefDescription, skillsList);
  const {
    staticInfo: { abilitiesInfo, weaponsSkills },
    abilities,
  } = skillsBriefDescription;
  return (
    <div className={styles.wrapper}>
      <div>{abilitiesInfo.title}</div>
      <div>{abilitiesInfo.description}</div>
      <div>{weaponsSkills.title}</div>
      <div>{weaponsSkills.description}</div>
      <div>{abilities["blood-powers"].title}</div>
      <div>
        {abilities["blood-powers"].vampirePowerIds.map((power) => {
          const { id, title, img } = skillsList[power];
          return (
            <div key={id}>
              <Link href={`/abilities/${id}`}>{title}</Link>
              <Image src={img} width={20} height={20} alt={id} />
            </div>
          );
        })}
      </div>
      <div>{abilities["shapeshifting-powers"].title}</div>
      <div>
        {abilities["shapeshifting-powers"].vampirePowerIds.map((power) => {
          const { id, title, img } = skillsList[power];
          return (
            <div key={id}>
              <Link href={`/abilities/${id}`}>{title}</Link>
              <Image src={img} width={20} height={20} alt={id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Page;
