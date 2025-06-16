import styles from "./page.module.scss";
// import { News } from "@/components/News";
// import { getNews } from "./actions";
//TODO this test import
import { Bla } from "@/components/tesxt";
import { Suspense } from "react";
export default async function Home() {
  // const response = await getNews();
  // const { data, totalCount, itemsPerPage } = response;
  // console.log(response, "res");
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
      <Suspense fallback={<div>loading</div>}>
        <Bla />
      </Suspense>
      {/* <News
        initialData={data}
        totalCount={totalCount}
        itemsPerPage={itemsPerPage}
      /> */}
    </div>
  );
}
