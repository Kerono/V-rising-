"use server";

type Data = {
  id: string;
  data: string;
  img: string;
};

const data: Data[] = [
  {
    id: "InvadersofOakveil",
    data: "Invaders of Oakveil Out Now!",
    img: "/assets/vrising.png",
  },
  {
    id: "DevUpdate#30",
    data: "Dev Update #30 - The Heart of Oakveil",
    img: "/assets/vrising.png",
  },
  {
    id: "Update1.1",
    data: "Update 1.1 Servers and Saves",
    img: "/assets/vrising.png",
  },
  {
    id: "InvadersofOakveilstartdate",
    data: "Invaders of Oakveil - Coming April 28!",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev-Update#29",
    data: "Dev Update #29 - Weapons of the Night",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev Update #28",
    data: "Dev Update #28 - Fueled by Blood",
    img: "/assets/vrising.png",
  },
  {
    id: "Art Contest Winners",
    data: "Slashers of Vardoran Art Contest Winners Announced!",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev Update #27",
    data: "Dev Update #27 - Whispers of Darkness",
    img: "/assets/vrising.png",
  },
];

// const response = {
//     totalCount: 10,
//     data: ...4штуки
// }

type NewsResponse = {
  totalCount: number;
  data: Data[];
  itemsPerPage: number;
};

export async function getNews(page: number = 0): Promise<NewsResponse> {
  const newsPerPage = 4;
  // const pageFirstNewsIndex = page * newsPerPage - 1;
  const start = page * newsPerPage;
  const end = (page + 1) * newsPerPage;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalCount: data.length,
        data: data.slice(start, end),
        itemsPerPage: newsPerPage,
      });
    }, 4000);
  });
}
