import { News } from "./News";
import { getNews } from "@/app/actions";
export const Bla = async () => {
  const response = await getNews();
  const { data, totalCount, itemsPerPage } = response;
  console.log(response, "res");
  return (
    <News
      initialData={data}
      totalCount={totalCount}
      itemsPerPage={itemsPerPage}
    />
  );
};
