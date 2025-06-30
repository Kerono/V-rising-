import { getSpecificSkill } from "@/server/actions";
import type { SkillsFullInfoIds } from "@/variables";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

type Props = {
  params: Promise<{ ability: SkillsFullInfoIds }>;
};
const Page = async ({ params }: Props) => {
  const { ability } = await params;
  const { searchId, skillsList, bossesList } = await getSpecificSkill(ability);

  const currentSkill = skillsList[searchId];
  //TODO доделать
  if (!currentSkill) return <div>smth went wrong</div>;

  const { title, img, description, notes, unlock, type, castTime } =
    currentSkill;

  const requirements = unlock && {
    bossName: bossesList[unlock].title,
    id: bossesList[unlock].id,
  };
  console.log(requirements);
  return (
    <div className={styles.wrapper}>
      <div>
        <div>{title}</div>
        <div>Overview</div>
        <div>{description}</div>
        {notes && (
          <>
            <div>{notes.title}</div>
            <ul>
              {notes.content.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div>
        <Image src={img} alt={title} width={120} height={120} />
        <div>
          <div>Unlock Requirement</div>
          {requirements ? (
            <Link href={`/blood-carriers/${requirements.id}`}>
              {requirements.bossName}
            </Link>
          ) : (
            <div>Default power</div>
          )}
          <div>{unlock}</div>
        </div>
        <div>
          <div>Type</div>
          <div>{type}</div>
        </div>
        {castTime && (
          <div>
            <div>Cast time</div>
            <div>{castTime}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
