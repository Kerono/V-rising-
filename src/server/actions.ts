import {
  newsData,
  weaponsList,
  regions,
  resourcesList,
  resourcesGroups,
  enemiesList,
  skillsBriefDescription,
  skillsList,
  briefDecriptionBosses,
  bossesList,
} from "@/variables";
import type {
  NewsData,
  WeaponsList,
  ResourcesGroups,
  Regions,
  ResourceIds,
  BriefResourcesInfo,
  ResourcesList,
  EnemiesList,
  SkillsBriefDescription,
  SkillsList,
  TypesOfWeaponIds,
  SkillsFullInfoIds,
  BriefDecriptionBosses,
  BossesList,
  BossesIds,
} from "@/variables";

// skillsList: SkillsFullInfo
type NewsResponse = {
  totalCount: number;
  data: NewsData[];
  itemsPerPage: number;
};

export async function getNews(page: number = 0): Promise<NewsResponse> {
  const newsPerPage = 3;
  const start = page * newsPerPage;
  const end = (page + 1) * newsPerPage;
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    totalCount: newsData.length,
    data: newsData.slice(start, end),
    itemsPerPage: newsPerPage,
  };
}

type GetAllWeapons = {
  weaponsList: WeaponsList;
  bossesList: BossesList;
};
export function getAllWeapons(): Promise<GetAllWeapons> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({ weaponsList, bossesList });
    }, 1000)
  );
}

type GetSpecificWeapon = {
  weaponsList: WeaponsList;
  searchId: TypesOfWeaponIds;
  bossesList: BossesList;
};

//TODO what if incorrect url searchWeapon
export function getSpecificWeapon(
  id: TypesOfWeaponIds
): Promise<GetSpecificWeapon> {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ searchId: id, weaponsList, bossesList }), 1000)
  );
}

export async function getRegions(): Promise<Regions[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(regions), 1000);
  });
}

type AllResourcesRes = {
  resourcesGroups: ResourcesGroups[];
  resourcesList: BriefResourcesInfo;
};

export function getAllResources(): Promise<AllResourcesRes> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          resourcesGroups,
          resourcesList,
        }),
      1000
    );
  });
}

type SpecificItem = {
  id: ResourceIds;
  enemiesList: EnemiesList;
  resourcesList: ResourcesList;
};

//TODO what if incorrect url searchName
export function getSpecificItem(id: ResourceIds): Promise<SpecificItem> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          id,
          enemiesList,
          resourcesList,
        }),
      1000
    );
  });
}

type GetSkillsBriefDescription = {
  skillsBriefDescription: SkillsBriefDescription;
  skillsList: SkillsList;
};

export function getSkillsBriefDescription(): Promise<GetSkillsBriefDescription> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ skillsBriefDescription, skillsList }), 1000);
  });
}

type GetSpecificSkill = {
  skillsList: SkillsList;
  searchId: SkillsFullInfoIds;
  bossesList: BossesList;
};

export function getSpecificSkill(
  id: SkillsFullInfoIds
): Promise<GetSpecificSkill> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ skillsList, searchId: id, bossesList }), 1000);
  });
}

type GetBriefDescriptionBosses = {
  briefDecriptionBosses: BriefDecriptionBosses;
  bossesList: BossesList;
};
export function getBriefDescriptionBosses(): Promise<GetBriefDescriptionBosses> {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ briefDecriptionBosses, bossesList }), 1000);
  });
}

export type GetSprecificBoss = {
  searchId: BossesIds;
  bossesList: BossesList;
  skillsList: SkillsList;
  resourcesList: ResourcesList;
  weaponsList: WeaponsList;
};
export function getSpecificBoss(id: BossesIds): Promise<GetSprecificBoss> {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          searchId: id,
          bossesList,
          skillsList,
          resourcesList,
          weaponsList,
        }),
      1000
    );
  });
}
