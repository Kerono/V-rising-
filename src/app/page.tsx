import styles from "./page.module.scss";
// import { News } from "@/components/News";
// import { getNews } from "./actions";
//TODO this test import
import { NewsWrapper } from "@/components/NewsWrapper";
import { Suspense } from "react";
export default function Home() {
  // const response = await getNews();
  // const { data, totalCount, itemsPerPage } = response;
  return (
    <div className={styles.wrapper}>
      <div>
        V Rising is an open world survival game developed and published by
        Stunlock Studios and released on May 17, 2022. Awaken as a vampire. Hunt
        for blood in nearby settlements to restore your strength and avoid the
        scorching sun to survive. V Rising is an open-world top-down hack n
        slash sandbox survival game developed and published by Stunlock Studios.
      </div>
      <div>
        It was released in Early Access on Steam for Microsoft Windows on May
        17, 2022. As part of V Risings first Halloween Event, the game was first
        made free-to-play from October 28th to November 1st, 2022, and later
        again from September 12th to September 16th, 2024.
      </div>
      <div>
        A year after its early access release on May 17th, 2023, it received its
        first major update: The Secrets of Gloomrot.
      </div>
      <div>Premise</div>
      <div>
        Awaken after hundreds of years of slumber, weakened and thirsty for
        blood. Gather a clan of allies online or play the part of the lone wolf
        as you explore a vast open world of dark horrors and, worse: the deadly
        sunlight. Raise a mighty castle worthy of your name, and convert the
        most promising humans into thralls to serve within it. Pillage villages,
        raid bandit camps and traverse the territories of supernatural beasts.
        Drink their blood to steal their knowledge and power to become the
        greatest predator of them all. In a world of conflict, only one vampire
        shall reign supreme. Dare you challenge the throne of Dracula?
      </div>
      {
        //todo Loading state
      }
      <Suspense fallback={<div>Im loading loading now</div>}>
        <NewsWrapper />
      </Suspense>
    </div>
  );
}
