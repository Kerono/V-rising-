import { News } from "../News";
import { getNews } from "@/server/actions";

export const NewsWrapper = async () => {
  const response = await getNews();
  const { data, totalCount } = response;

  return <News initialData={data} totalCount={totalCount} />;
};
