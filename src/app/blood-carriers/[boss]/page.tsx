import { getSpecificBoss } from "@/server/actions";
import { BossesIds } from "@/variables";
import Image from "next/image";
import styles from "./page.module.scss";
import { Fragment } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ boss: BossesIds }>;
};
const Page = async ({ params }: Props) => {
  const { boss } = await params;
  const { searchId, bossesList, skillsList, resourcesList, weaponsList } =
    await getSpecificBoss(boss);
  const currentBoss = bossesList[searchId];

  //TODO доделать
  if (!currentBoss) return <div>smt went wrong</div>;

  const { title, description, location, rewards, img, level } = currentBoss;

  return (
    <div className={styles.wrapper}>
      <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>Location</div>
        <div>{location}</div>
        {rewards.skills && (
          <>
            <div>Rewards</div>
            {rewards.skills.map((skillId) => {
              const { id, title, img } = skillsList[skillId];
              return (
                <div key={id}>
                  <div>{title}</div>
                  <Image src={img} alt={title} width={20} height={20} />
                </div>
              );
            })}
          </>
        )}
        <div>Drops</div>
        {rewards.drop.map((resourceId) => {
          const { id, img, name } = resourcesList[resourceId];
          return (
            <div key={id}>
              <div>{name}</div>
              <Image src={img} alt={name} width={20} height={20} />
            </div>
          );
        })}
        {rewards.recipes && (
          <>
            <div>Weapons</div>
            {rewards.recipes.map((recipe) => {
              const { title, id } = weaponsList[recipe];
              return (
                <Link key={id} href={`/weapons/${id}`}>
                  {title}
                </Link>
              );
            })}
          </>
        )}
      </div>

      <div>
        <Image src={img} alt={title} width={120} height={120} />
        <div>
          <div>Level</div>
          <div>{level}</div>
          <div>Location</div>
          <div>{location}</div>
          {rewards.skills && (
            <div>
              {rewards.skills.map((skillId) => {
                const { id, title, img } = skillsList[skillId];
                return (
                  <Fragment key={id}>
                    <div>Unlocked Vampire Powers</div>
                    <Link href={`/abilities/${id}`}>{title}</Link>
                    <Image src={img} alt={title} width={20} height={20} />
                  </Fragment>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Page;
