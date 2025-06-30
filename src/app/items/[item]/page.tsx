import { getSpecificItem } from "@/server/actions";
import styles from "./page.module.scss";
import { ResourceIds } from "@/variables";
import Image from "next/image";
import { Item } from "@/components/Item";
import { Fragment } from "react";

type Props = {
  params: Promise<{ item: ResourceIds }>;
};

const Page = async ({ params }: Props) => {
  const { item } = await params;
  const data = await getSpecificItem(item);

  const { id, enemiesList, resourcesList } = data;
  //TODO ask is type valid cause user can write url that dont math material and it cause undefined
  const resource = resourcesList[id];

  //TODO change
  if (!resource) return <div>smth went wrong </div>;

  const {
    name,
    description,
    img,
    groups,
    category,
    isTeleportable,
    stackSize,
    id: currentMaterialId,
  } = resource;

  return (
    <div className={styles.wrapper}>
      <div>
        <div>{name}</div>
        <div>{description}</div>
        {groups.enemiesList.length > 0 && (
          <>
            <div>Drops from </div>
            {groups.enemiesList.map((enemy) => {
              const { name } = enemiesList[enemy];
              return <div key={enemy}>{name}</div>;
            })}
          </>
        )}
        <div>Recipes</div>
        <div className={styles["table-wrapper"]}>
          <div>Recipe</div>
          <div>Resulting Item</div>
          {groups.resoursesList.map(({ recipe, resultItems }, index) => {
            return (
              //TODO can it be custom component with multiple places but dufferent passed data
              <Fragment key={index}>
                <div>
                  {recipe.map((res) => {
                    const { img, name, id } = resourcesList[res];
                    const isCurrentlySelected = currentMaterialId === id;
                    return (
                      <div key={id}>
                        <Item
                          id={id}
                          name={name}
                          img={img}
                          isCurrentlySelected={isCurrentlySelected}
                        />
                      </div>
                    );
                  })}
                </div>
                <div>
                  {resultItems.map((item) => {
                    const { img, name, id } = resourcesList[item];
                    const isCurrentlySelected = currentMaterialId === id;
                    return (
                      <Fragment key={id}>
                        <Item
                          id={id}
                          name={name}
                          img={img}
                          isCurrentlySelected={isCurrentlySelected}
                        />
                      </Fragment>
                    );
                  })}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
      <div>
        <Image width={120} height={120} src={img} alt={name} />
        <div>
          <div>name</div>
          <div>{name}</div>
        </div>
        <div>
          <div>Category</div>
          <div>{category}</div>
        </div>
        <div>
          <div>Teleportable</div>
          <div>{isTeleportable ? "Yes" : "No"}</div>
        </div>
        <div>
          <div>Max stack size</div>
          <div>{stackSize}</div>
        </div>
      </div>
    </div>
  );
};
export default Page;
