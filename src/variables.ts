import { CSSProperties } from "react";

type CssVariables = {
  "--text-color": string;
  "--background": string;
} & CSSProperties;

export const darkThemeStyles: CssVariables = {
  ["--text-color"]: "white",
  ["--background"]: "lightblue",
};

export const lightThemeStyles: CssVariables = {
  ["--text-color"]: "black",
  ["--background"]: "white",
};

export type NewsData = {
  id: string;
  data: string;
  img: string;
};

type TierWeaponInfo = {
  img: string;
  info: string;
};

type WeaponSkill = TierWeaponInfo;

type WeaponSkillsIds =
  | "whirlwind"
  | "shockwave"
  | "primary"
  | "frenzy"
  | "x-strike"
  | "crushing-blow"
  | "smack"
  | "a-thousand-spears"
  | "harpoon"
  | "tendon-swing"
  | "howling-reaper"
  | "great-cleaver"
  | "death-from-above"
  | "rain-of-bolts"
  | "snapshot"
  | "multishot"
  | "guided-arrow"
  | "throw-dagger"
  | "rain-of-daggers"
  | "release-daggers";

type Skills = {
  id: WeaponSkillsIds;
  skill: WeaponSkill;
  description: string;
  cooldown?: string;
  tierRequirement: TierWeaponInfo;
};

export type WeaponsListContent = {
  id: TypesOfWeaponIds;
  title: string;
  type: "melee" | "range";
  img: string;
  needReceiving: boolean;
  additionalCondition?: BossesIds;
  bossId?: BossesIds;
  bonuses: string;
  skills: Skills[];
};

export type TypesOfWeaponIds =
  | "sword"
  | "axes"
  | "mace"
  | "spear"
  | "greatsword"
  | "crossbow"
  | "longbow"
  | "dagger";

export type WeaponsList = {
  [key in TypesOfWeaponIds]: WeaponsListContent;
};

export const weaponsList: WeaponsList = {
  sword: {
    id: "sword",
    title: "Sword",
    type: "melee",
    needReceiving: false,
    img: "/assets/vrising.png",
    bonuses: `An all-round Weapon that deals slash damage.
Has a +25% physical damage bonus to vegetation and thickets.`,
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description:
          "Perform a combo of melee attacks dealing 35% / 35% / 40% physical damage.",
        tierRequirement: { img: "/assets/vrising.png", info: "Bone Sword" },
      },
      {
        id: "whirlwind",
        skill: { img: "/assets/vrising.png", info: "Whirlwind" },
        description: `Spin around and slice nearby enemies dealing 175% physical damage over 1.1s.Notes: movement speed is increased during the spin.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Copper Sword" },
      },
      {
        id: "shockwave",
        skill: { img: "/assets/vrising.png", info: "Shockwave" },
        description: `Send forth a shockwave dealing 100% physical damage and launching the enemy hit into the air for 1.6s. 
        Recast the ability to teleport to the target striking it three times, each strike dealing 20% physical damage.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Iron Sword" },
      },
    ],
  },
  axes: {
    id: "axes",
    title: "Axes",
    type: "melee",
    needReceiving: false,
    img: "/assets/vrising.png",
    bonuses: `Dual-wield axes that deal chop damage.
Has a +25% physical damage bonus to wood.`,
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Perform a combo of melee attacks dealing 45% / 45% / 55% physical damage.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Bone Axes" },
      },
      {
        id: "frenzy",
        skill: { img: "/assets/vrising.png", info: "Frenzy" },
        description: `Dash forward and strike the first enemy dealing 100% physical damage. Enter a state of frenzy 
        that increases your movement speed by 25% and increases attack speed by 50% for 1s on a successful hit.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Copper Axes" },
      },
      {
        id: "x-strike",
        skill: { img: "/assets/vrising.png", info: "X-strike" },
        description: `Throw two axes in the shape of an X. Each hit deals 80% physical damage and slows the enemy for 1.5s. 
        Hitting the enemy where both axes intersect inflicts a 1s incapacitate.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Iron Axes" },
      },
    ],
  },
  mace: {
    id: "mace",
    title: "Mace",
    type: "melee",
    needReceiving: false,
    bonuses: `A heavy Weapon that deals blunt damage.
Has a +25% physical damage bonus to Minerals.`,
    img: "/assets/vrising.png",
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Perform a Combo of melee attacks dealing 50% / 50% / 60% physical damage.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Bone Mace" },
      },
      {
        id: "crushing-blow",
        skill: { img: "/assets/vrising.png", info: "Crushing blow" },
        description: `Vault towards the cursor and slam your mace into the ground dealing 150% physical
        damage and inflicting a 2s fading snare.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Copper Mace" },
      },
      {
        id: "smack",
        skill: { img: "/assets/vrising.png", info: "Smack" },
        description: `Smack enemies in front of you dealing 70% physical damage, 
        knocking them back and incapacitating them for 1s.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Iron Mace" },
      },
    ],
  },
  spear: {
    id: "spear",
    title: "Spear",
    type: "melee",
    needReceiving: false,
    img: "/assets/vrising.png",
    bonuses: `Perform a Combo of melee attacks dealing 40% / 40% / 50% 
    physical damage.`,
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Perform a Combo of melee attacks dealing 40% / 40% / 50% physical damage.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Bone Spear" },
      },
      {
        id: "a-thousand-spears",
        skill: { img: "/assets/vrising.png", info: "Thousand spears" },
        description: `Perform a multi-stab attack, dealing 140% physical damage and interrupting enemy actions over 1.15s.
        (8 stabs total)Recast during the effect to perform a thrust attack dealing 50% physical damage and knocking enemies back.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Copper Spear" },
      },
      {
        id: "harpoon",
        skill: { img: "/assets/vrising.png", info: "Harpoon" },
        description: `Throw a spear that deals 110% physical damage, pulls the enemy towards you and inflict a 1.5s fading snare.`,
        tierRequirement: { img: "/assets/vrising.png", info: "Iron Spear" },
      },
    ],
  },
  greatsword: {
    id: "greatsword",
    title: "Greatsword",
    type: "melee",
    needReceiving: true,
    additionalCondition: "tristan-the-vampire-hunter",
    bonuses: `A great heavy sword that deals physical damage.
Has a greater effect on wood. +25% Physical Damage to Wood`,
    img: "/assets/vrising.png",
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Perform a Combo of melee attacks dealing 70% / 70% / 80% physical damage.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Greatsword",
        },
      },
      {
        id: "tendon-swing",
        skill: { img: "/assets/vrising.png", info: "Tendon swing" },
        description: `Charge forward and swing your greatsword upward dealing 125% physical damage
        in an area and launching enemies into the air for 0.65s.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Greatsword",
        },
      },
      {
        id: "death-from-above",
        skill: { img: "/assets/vrising.png", info: "Death from Above" },
        description: `Leap into the air and descend upon your enemy dealing 125% physical damage in an area.
        Note: Turns immaterial during leap`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Greatsword",
        },
      },
    ],
  },
  //range
  crossbow: {
    id: "crossbow",
    title: "Crossbow",
    type: "range",
    needReceiving: true,
    additionalCondition: "rufus-the-foreman",
    bonuses: `A ranged Weapon that fires bolts.`,
    img: "/assets/vrising.png",
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Fire a projectile that deals 100% physical damage on hit.
        Consumes Marked dealing 25% bonus damage and increasing your attack speed by 7% for 10s, this effect stacks up to 3 times.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Bone Crossbow",
        },
      },
      {
        id: "rain-of-bolts",
        skill: { img: "/assets/vrising.png", info: "Rain of Bolts" },
        description: `Fire a salvo of 5 bolts into the air that rains down on your enemies dealing 40%
        physical damage each in an area, inflicts Marked and inflicts a 1.5s fading snare.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Copper Crossbow",
        },
      },
      {
        id: "snapshot",
        skill: { img: "/assets/vrising.png", info: "Snapshot" },
        description: `Fire a quick bolt that deals 75% physical damage, interrupts attacks, inflicts Marked and
        inflicts a 1.5s fading snare. The bolt splits into two upon hit.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Crossbow",
        },
      },
    ],
  },
  longbow: {
    id: "longbow",
    title: "Longbow",
    type: "range",
    needReceiving: true,
    additionalCondition: "lidia-the-chaos-archer",
    bonuses: `A ranged Weapon that fires arrows.`,
    img: "/assets/vrising.png",
    skills: [
      {
        id: "primary",
        skill: { img: "/assets/vrising.png", info: "Primary" },
        description: `Hold to charge a projectile that deals 60% - 120% physical damage on hit and grants Focus.
        Focus stacks up to 3 times and increases the effectiveness of your other Longbow skills.
        Fully charged shots pierces up to 2 enemies, subsequent hits deal 50% damage of the previous hit.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Copper Longbow",
        },
      },
      {
        id: "multishot",
        skill: { img: "/assets/vrising.png", info: "Multishot" },
        description: `Fire 5 piercing arrows in a cone dealing 100% physical damage and knocking enemies back. 
        Consumes Focus launching one additional arrow per stack, each dealing 20% bonus damage.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Copper Longbow",
        },
      },
      {
        id: "guided-arrow",
        skill: { img: "/assets/vrising.png", info: "Guided arrow" },
        description: `Fire an arrow dealing 120% physical damage and inflicting a 2s fading snare. 
        The arrow turns to hit the same target again after impact dealing 50% damage.
        Consumes Focus increasing the number of times the arrow turns by one per stack.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Longbow",
        },
      },
    ],
  },
  dagger: {
    id: "dagger",
    title: "Dagger",
    type: "range",
    needReceiving: true,
    additionalCondition: "bane-the-shadowblade",
    bonuses: `A throwing weapon that deals physical damage.`,
    img: "/assets/vrising.png",
    skills: [
      {
        id: "throw-dagger",
        skill: { img: "/assets/vrising.png", info: "Throw dagger" },
        description: `Throw up to 4 daggers, each dealing 40% physical damage. Hitting an enemy or a solid object causes the 
        dagger to stick to the ground. Gain one dagger stack every 1.1s.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Daggers",
        },
      },
      {
        id: "rain-of-daggers",
        skill: { img: "/assets/vrising.png", info: "Rain of daggers" },
        description: `Leap into the air and throw 4 daggers in front of you, 
        each dagger dealing 40% physical damage and inflicting a 2s fading snare. Daggers remain on the ground for 8s.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Daggers",
        },
      },
      {
        id: "release-daggers",
        skill: { img: "/assets/vrising.png", info: "Guided arrow" },
        description: `Inflict a 1.5s fading snare and release all nearby daggers that are stuck in the ground.
        Released daggers return to you, piercing enemies and dealing 40% physical damage. 
        Each dagger that returns grant one dagger stack and reduces the cooldown of Rain of Daggers by 0.2s.`,
        tierRequirement: {
          img: "/assets/vrising.png",
          info: "Iron Daggers",
        },
      },
    ],
  },
};

export const newsData: NewsData[] = [
  {
    id: "Invaders-of-Oakveil",
    data: "Invaders of Oakveil Out Now!",
    img: "/assets/vrising.png",
  },
  {
    id: "DevUpdate-30",
    data: "Dev Update #30 - The Heart of Oakveil",
    img: "/assets/vrising.png",
  },
  {
    id: "Update-1.1",
    data: "Update 1.1 Servers and Saves",
    img: "/assets/vrising.png",
  },
  {
    id: "Invaders-of-Oakveil-startdate",
    data: "Invaders of Oakveil - Coming April 28!",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev-Update-29",
    data: "Dev Update #29 - Weapons of the Night",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev Update-28",
    data: "Dev Update #28 - Fueled by Blood",
    img: "/assets/vrising.png",
  },
  {
    id: "Art Contest Winners",
    data: "Slashers of Vardoran Art Contest Winners Announced!",
    img: "/assets/vrising.png",
  },
  {
    id: "Dev Update -27",
    data: "Dev Update #27 - Whispers of Darkness",
    img: "/assets/vrising.png",
  },
];

export type Regions = {
  name: string;
  content: string;
};
export const regions: Regions[] = [
  {
    name: "Farbane Woods",
    content: `Farbane Woods is first zone the player enters through the eastern or western Vampire Waygate after awakening. 
    Farbane Woods takes up most of the southern half of the map and is the easiest of the regions. 
    The landscape is primarily pine forests, dotted with stone and copper nodes. 
    Sulphur can also be found at the Bandit Sulphur Quarry and Bandit Stronghold. 
    The enemies found here are bandits, undead and hostile wildlife. 
    Blood purity is usually low in creatures here. All Cave Passages lead here.`,
  },
  {
    name: "Dunley Farmlands",
    content: `Dunley Farmlands is in the middle section of the map. It is characterised by fields of green grass and many human settlements. 
    Here the player can access higher tier resources like iron, cotton and quartz. The enemies here have a higher blood purity, typically around 20%.`,
  },
  {
    name: "Hallowed Mountains",
    content: `Hallowed Mountains is the smallest region, and doesn't contain many points of interest. 
    It is to the east of the map, and connects to both Dunley Farmlands and Farbane Woods.
    Players usually come here to fight the V-blood carriers Frostmaw the Mountain Terror and Terrorclaw the Ogre.`,
  },
  {
    name: "Cursed Forest",
    content: `The Cursed Forest is located in the far north-east, and is home to even more dangerous creatures. 
    It is connected to Dunley Farmlands by the werewolf village. Here the player can find ghost crystals, silkworms and ghost shrooms. 
    The enemies here are even more dangerous and bestial, with no human settlements.`,
  },
  {
    name: "Silverlight Hills",
    content: `Silverlight Hills is considered to be the most dangerous region. It is located to the west of Dunley Farmlands. 
    The landscape is similar to a forest in autumn, with many orange-leaved trees and grass. Human patrols wander the area, 
    including soldiers and clerics. The largest human settlement, Brighthaven, and the Fortress of Light are both located here. 
    Some of the highest tier loot can also be found here, such as silver ore, Gold Jewelry and Goldsun Coins, and the creatures here have very high blood purity.`,
  },
];

//TODO ask if correct? all items route resourcesData
type Item = {
  name: string;
  img: string;
  id: ResourceIds;
  description: string;
};

export type ResourceIds =
  | "simple-wood"
  | "hallow-wood"
  | "simple-stone"
  | "stone-dust"
  | "copper-ore"
  | "iron-ore"
  | "plank"
  | "sawdust"
  | "oil"
  | "fish-bone"
  | "fish"
  | "whetstone"
  | "copper-ingot"
  | "iron-ingot"
  | "reinforced-plank"
  | "bone"
  | "grave-dust"
  | "rugged-hide"
  | "leather";

export type ResourcesGroups = {
  title: string;
  ids: ResourceIds[];
};

//TODO TS stop it extends item with change id not work

type EnemiesIds =
  | "treant"
  | "flesh-golem"
  | "emery-golem"
  | "iron-golem"
  | "stone-golem"
  | "blood-elemental"
  | "skeleton"
  | "banshee"
  | "ghoul"
  | "bear";

type Enemy = {
  name: string;
  id: EnemiesIds;
};

export type EnemiesList = {
  [keys in EnemiesIds]: Enemy;
};

export const enemiesList: EnemiesList = {
  bear: {
    id: "bear",
    name: "Bear",
  },

  treant: {
    id: "treant",
    name: "treant",
  },
  "flesh-golem": {
    id: "flesh-golem",
    name: "Flesh golem",
  },
  "emery-golem": {
    id: "emery-golem",
    name: "Emery Golem",
  },
  "iron-golem": {
    id: "iron-golem",
    name: "Iron Golem",
  },
  "stone-golem": {
    id: "stone-golem",
    name: "Stone Golem",
  },
  "blood-elemental": {
    id: "blood-elemental",
    name: "Blood Elemental",
  },
  skeleton: {
    id: "skeleton",
    name: "Skeleton",
  },
  banshee: {
    id: "banshee",
    name: "Banshee",
  },
  ghoul: {
    id: "ghoul",
    name: "Ghoul",
  },
};

type Caregory = "Material" | "Alchemy" | "Fish" | "Tailoring";

type ResourceList = {
  recipe: ResourceIds[];
  resultItems: ResourceIds[];
};

export type ResourcesFullInfo = Item & {
  category: Caregory;
  isTeleportable: boolean;
  stackSize: number;
  groups: {
    enemiesList: EnemiesIds[];
    resoursesList: ResourceList[];
  };
};

export type BriefResourcesInfo = {
  [id in ResourceIds]: Item;
};

export type ResourcesList = {
  [id in ResourceIds]: ResourcesFullInfo;
};

export const resourcesList: ResourcesList = {
  bone: {
    id: "bone",
    name: "Bone",
    category: "Alchemy",
    isTeleportable: true,
    stackSize: 1000,
    description: `Bone is a resource in V Rising. It is consumed to power 
    Mist Braziers. It can be looted in graveyards, and is dropped by Undead and 
    Creature Enemies. This includes enemies summoned using the Tomb.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["skeleton"],
      resoursesList: [
        {
          recipe: ["bone"],
          resultItems: ["grave-dust"],
        },
      ],
    },
  },
  "grave-dust": {
    id: "grave-dust",
    name: "Grave dust",
    category: "Alchemy",
    isTeleportable: false,
    stackSize: 50,
    description: `Grave Dust is a resource in V Rising. It can be looted from graveyards and dropped by 
    Ghoul, Skeleton Priest, Banshee, Skeleton Mage and Skeleton Bishop and can be purchased from 
    Shady Goods Dealer for 8 Copper Coins.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["ghoul", "banshee"],
      resoursesList: [
        {
          recipe: ["bone"],
          resultItems: ["grave-dust"],
        },
      ],
    },
  },
  "simple-wood": {
    id: "simple-wood",
    name: "Wood",
    category: "Material",
    isTeleportable: true,
    stackSize: 1000,
    description: `Wood is a core resource in V Rising that is used in many recipes once turned into planks. 
     It can be harvested from trees throughout the world, and drops from Woodcutter and Treant.
     (Farmed 25% faster from trees using an Axe or Greatsword)`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["treant"],
      resoursesList: [
        {
          recipe: ["simple-wood"],
          resultItems: ["plank", "sawdust"],
        },
      ],
    },
  },
  plank: {
    id: "plank",
    name: "Plank",
    category: "Material",
    isTeleportable: true,
    stackSize: 250,
    description: `Plank is a common resource used for Weapons and many building structures in V Rising`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["simple-wood"],
          resultItems: ["plank", "sawdust"],
        },
        {
          recipe: ["hallow-wood"],
          resultItems: ["plank", "oil"],
        },
      ],
    },
  },
  sawdust: {
    id: "sawdust",
    name: "Sawdust",
    category: "Material",
    isTeleportable: true,
    stackSize: 250,
    description: `Sawdust is a resource in V Rising. It is obtained by refining Wood in a Sawmill. `,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["simple-wood"],
          resultItems: ["plank", "sawdust"],
        },
      ],
    },
  },
  "hallow-wood": {
    id: "hallow-wood",
    name: "Hallow Wood",
    category: "Material",
    isTeleportable: true,
    stackSize: 250,
    description: `Hallow Wood is a resource in V Rising. It can be harvested from trees in the Hallowed Mountains. (Farmed 25% faster from trees using an Axe or Greatsword)`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["hallow-wood"],
          resultItems: ["plank", "oil"],
        },
      ],
    },
  },
  oil: {
    id: "oil",
    name: "Oil",
    category: "Alchemy",
    isTeleportable: false,
    stackSize: 100,
    description: `Oil is a resource in V Rising. It can be looted at Mosswick Village in the Dunley Farmlands and is most abundant at the Brighthaven Docks. 
    It is sold by the Rural Goods Merchant for 6 Silver Coins.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["hallow-wood"],
          resultItems: ["plank", "oil"],
        },
        {
          recipe: ["fish"],
          resultItems: ["fish-bone", "oil"],
        },
      ],
    },
  },
  "fish-bone": {
    id: "fish-bone",
    name: "Fish bone",
    category: "Alchemy",
    isTeleportable: false,
    stackSize: 50,
    description: `Fish Bone is a resource in V Rising. It can be obtained by Fishing, as random loot, or by 
    salvaging any fish (other than The Fish) in a Blood Press.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["fish"],
          resultItems: ["fish-bone", "oil"],
        },
      ],
    },
  },
  fish: {
    id: "fish",
    name: "Fish",
    category: "Fish",
    isTeleportable: true,
    stackSize: 10,
    description: `Fat Goby is a Common Fish which can be found all over Vardoran, but is more common in the Hallowed Mountains. 
    It is also sold by Shady Goods Dealer for 28 Copper Coins, Rural Goods Merchant for 12 Silver Coins or City Goods Vendor 
    for 20 Goldsun Coins.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["flesh-golem"],
      resoursesList: [
        {
          recipe: ["fish"],
          resultItems: ["fish-bone", "oil"],
        },
      ],
    },
  },
  "simple-stone": {
    id: "simple-stone",
    name: "Stone",
    category: "Material",
    isTeleportable: true,
    stackSize: 1000,
    description: `Stone is a resource in V Rising. It can be obtained by smashing rocks and ruins throughout the world.
    Is gathered 25% faster using any Mace, or 50% if using Miner's Mace.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["emery-golem", "iron-golem", "stone-golem"],
      resoursesList: [
        {
          recipe: ["simple-stone"],
          resultItems: ["stone-dust"],
        },
      ],
    },
  },
  "stone-dust": {
    id: "stone-dust",
    name: "Stone Dust",
    category: "Material",
    isTeleportable: true,
    stackSize: 200,
    description:
      "Stone Dust is a resource in V Rising. It is created as a byproduct of creating Stone Brick.",
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["stone-golem"],
      resoursesList: [
        {
          recipe: ["copper-ore", "stone-dust"],
          resultItems: ["whetstone"],
        },
      ],
    },
  },
  whetstone: {
    id: "whetstone",
    name: "Whetstone",
    category: "Material",
    isTeleportable: false,
    stackSize: 20,
    description: `Whetstone is a resource in V Rising. It can commonly be found inside Bandit Camps. Unlocks for crafting after slaying Grayson the Armourer. 
    It can also be acquired from the Shady Goods Dealer for 8 Copper Coins.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["stone-golem"],
      resoursesList: [
        {
          recipe: ["copper-ingot", "stone-dust"],
          resultItems: ["whetstone"],
        },
      ],
    },
  },
  "copper-ore": {
    id: "copper-ore",
    name: "Copper Ore",
    category: "Material",
    isTeleportable: false,
    stackSize: 200,
    description: `Copper Ore is a resource in V Rising. It's the first tier of ore used for the creation of Copper Weapons. 
    Copper Ore is collected by mining Copper Ore Nodes that can be found throughout the world. Copper Ore is especially abundant within the Bandit Copper Mine. 
    It can also be found inside crates and barrels in various Locations within the Farbane Woods.Copper Ore requires a Gear Level 6 
    (Reinforced Bone) weapon tier or higher to mine.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["blood-elemental"],
      resoursesList: [
        {
          recipe: ["copper-ore"],
          resultItems: ["copper-ingot"],
        },
      ],
    },
  },
  "copper-ingot": {
    id: "copper-ingot",
    name: "Copper Ingot",
    category: "Material",
    isTeleportable: false,
    stackSize: 100,
    description: `Copper Ingot is a resource in V Rising. It's the first metal resource you encounter in V Rising, and is used in crafting the early tier of Weapons and Armour.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["copper-ore"],
          resultItems: ["copper-ingot"],
        },
      ],
    },
  },
  "iron-ore": {
    id: "iron-ore",
    name: "Iron Ore",
    category: "Material",
    isTeleportable: false,
    stackSize: 200,
    description: `Iron Ore is a resource in V Rising. It's the second tier of ore after Copper Ore, and will allow for the creation of Iron Weapons. Iron Ore is collected
     by mining Iron Ore Nodes that can be found throughout the world beyond the Farbane Woods. Iron Ore is especially abundant within the Haunted Iron Mine. It 
     can also be found inside barrels and chests within the Dunley Farmlands.Iron Ore requires a Gear Level 12 (Merciless Copper) weapon tier or higher to mine.
     Iron Ore Deposits contain larger amounts of Iron Ore, but these are exclusive to the Iron Mine. They require Gear Level 18 (Merciless Iron) weapon tier or higher & 
     Bear Form active to mine. Or the use of Minor Explosive Boxes.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["blood-elemental", "iron-golem"],
      resoursesList: [
        {
          recipe: ["iron-ore"],
          resultItems: ["iron-ingot"],
        },
      ],
    },
  },
  "iron-ingot": {
    id: "iron-ingot",
    name: "Iron Ingot",
    category: "Material",
    isTeleportable: false,
    stackSize: 100,
    description: `Iron Ingot is a resource in V Rising. It's the second metal resource you encounter in V Rising, 
    and is used in crafting the middle tier of Weapons and Armour.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["blood-elemental", "iron-golem"],
      resoursesList: [
        {
          recipe: ["iron-ore"],
          resultItems: ["iron-ingot"],
        },
        {
          recipe: ["iron-ingot", "plank"],
          resultItems: ["reinforced-plank"],
        },
      ],
    },
  },
  "reinforced-plank": {
    id: "reinforced-plank",
    name: "Reinforced Plank",
    category: "Material",
    isTeleportable: false,
    stackSize: 100,
    description: `Reinforced Plank is a resource in V Rising. It is sold by the Rural Goods Merchant for 
    10 Silver Coins. Drops frequently from breakables in the Sacred Silver Mine.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["blood-elemental", "iron-golem"],
      resoursesList: [
        {
          recipe: ["iron-ingot", "plank"],
          resultItems: ["reinforced-plank"],
        },
      ],
    },
  },
  "rugged-hide": {
    id: "rugged-hide",
    name: "Rugged hide",
    category: "Tailoring",
    isTeleportable: true,
    stackSize: 500,
    description: `Rugged Hide is a common resource in V Rising.
    It is dropped by all creatures in Farbane Woods, such as Bears and Wolves. Also commonly found in Bandit Camps.
    Can be refined into Leather, a component in the Nightstalker Set.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: ["bear"],
      resoursesList: [
        {
          recipe: ["rugged-hide"],
          resultItems: ["leather"],
        },
      ],
    },
  },
  leather: {
    id: "leather",
    name: "Leather",
    category: "Tailoring",
    isTeleportable: false,
    stackSize: 100,
    description: `Leather is a resource in V Rising. It can be looted throughout the Farbane Woods and is 
    most abundant within the Bandit Trapper Camp. It can also be acquired from the Shady Goods Dealer for 4 Copper Coins.`,
    img: "/assets/vrising.png",
    groups: {
      enemiesList: [],
      resoursesList: [
        {
          recipe: ["rugged-hide"],
          resultItems: ["leather"],
        },
      ],
    },
  },
};

export const resourcesGroups: ResourcesGroups[] = [
  {
    title: "Woods",
    ids: ["simple-wood", "hallow-wood", "plank", "sawdust", "reinforced-plank"],
  },
  {
    title: "Stones",
    ids: ["simple-stone", "stone-dust", "whetstone"],
  },
  {
    title: "Ores & Ingots",
    ids: ["copper-ore", "iron-ore", "copper-ingot", "iron-ingot"],
  },
  {
    title: "Fish",
    ids: ["fish", "oil", "fish-bone"],
  },
  {
    title: "Bones & Hides",
    ids: ["bone", "grave-dust", "rugged-hide", "leather"],
  },
];

type ShapeshiftingPowersIds = "wolf-form" | "bear-form" | "rat-form";
type BloodPowers = "expose-vein" | "blood-mend" | "blood-hunger";
type StaticSkillsBriefDecriptionIds = "abilitiesInfo" | "weaponsSkills";

export type SkillsBriefDescription = {
  staticInfo: {
    [key in StaticSkillsBriefDecriptionIds]: {
      title: "Abilities" | "Weapon Skills";
      description: string;
    };
  };
  abilities: {
    "shapeshifting-powers": {
      title: "Shapeshifting Powers";
      //TODO I see doubels but cant union cause its different vampirePowerIds[]
      vampirePowerIds: ShapeshiftingPowersIds[];
    };
    "blood-powers": {
      title: "Blood Powers";
      vampirePowerIds: BloodPowers[];
    };
  };
};
export const skillsBriefDescription: SkillsBriefDescription = {
  staticInfo: {
    abilitiesInfo: {
      title: "Abilities",
      description: `Abilities in V Rising come in the form of Weapon Skills, Spells, Passives and Vampire Powers.
      Skills are tied to the currently equipped weapon, whereas Spells, Passives and Vampire Powers depend on knowledge acquired from slaying V Bloods.
      Your spells and power layout is changed via the Spellbook.The game currently offers 14 unique weapon types, 6 spell schools, 24 passives and 12 vampire powers to choose from.
      Of which the player can have up to 3 Weapon Skills, 1 travel spell, 2 basic spells, 1 ultimate spell, 12 vampire powers and 5 passives equipped at once.
      (Although only one Vampire Power may be active at a time.) Ultimates and defensive spells cannot crit. All abilities and actions can be cancelled early (default key X).`,
    },
    weaponsSkills: {
      title: "Weapon Skills",
      description: `Equipping a weapon will grant your vampire up to 3 weapon skills that differ based on type of weapon equipped. Not having a weapon equipped will leave you with only the
      Unarmed Primary Attack ability (See Weapon Skills for more details).
      You can also feed on living beings below 25% health to fill your blood pool. Doing so turns you briefly immaterial and replaces your Primary Attack with the
      Bite ability, which ends the feeding early and kills the target instantly. If feeding on a V Blood Carrier, you become invulnerable during the channel.`,
    },
  },
  abilities: {
    "shapeshifting-powers": {
      title: "Shapeshifting Powers",
      vampirePowerIds: ["bear-form", "wolf-form", "rat-form"],
    },
    "blood-powers": {
      title: "Blood Powers",
      vampirePowerIds: ["blood-hunger", "expose-vein", "blood-mend"],
    },
  },
};

export type SkillsFullInfoIds = ShapeshiftingPowersIds | BloodPowers;

type Skill = {
  id: SkillsFullInfoIds;
  title: string;
  img: string;
  description: string;
  unlock?: BossesIds;
  type: string;
  castTime: string;
  notes?: {
    title: string;
    content: string[];
  };
};

export type SkillsList = {
  [key in SkillsFullInfoIds]: Skill;
};

//TODO доделать ссылки на боссов где нужно
export const skillsList: SkillsList = {
  "wolf-form": {
    id: "wolf-form",
    title: "Wolf Form",
    img: "/assets/vrising.png",
    notes: {
      title: "Notes",
      content: [
        `If any Wolves were already attacking you when you transformed, they will cease attacking you and instead just follow you until you 
        either revert back to your true form or leave their aggro range.`,
        `Taking damage, attacking, using abilities, items, or Emotes will bring you out of Wolf Form.`,
        `While not nearly as stealthy as the Rat Form, the Wolf Form does seem to reduce detection rates by humanoid Enemies. 
        Humans will generally only attack you in Wolf form if you get too close or linger.`,
      ],
    },
    description: `Wolf Form is a Shapeshifting Power that allows a vampire to travel faster than running, but slower than riding a Horse. While in Wolf Form, Wolves will not attack you. 
    This include Frost Wolves, the Alpha Wolf and Bandit Wolves, however Cursed Wolves and Mutated Wolves will still attack you on sight.
    While in Wolf Form, your Dash Spell is replaced by a Spectral Leap ability with 2 charges and a 8 second cooldown. 
    Can be used to leap through most types of solid objects. Your Ultimate Spell is replaced by a Howl, with no combat usage. 
    The Founder's Pack: Eldest Bloodline & Legacy of Castlevania DLCs each add a variant of this Ability called  Stygian Wolf & Soul of the Wolf respectively, 
    these variations being purely cosmetic.`,
    unlock: "alpha-the-white-wolf",
    type: "Transformation",
    castTime: "~2.5s",
  },
  "bear-form": {
    id: "bear-form",
    title: "Bear form",
    img: "/assets/vrising.png",
    notes: {
      title: "Notes",
      content: [
        `You can still build and access buildings/storage, though. This does not apply to chests in the world outside your castle, 
        which will cause you to cancel the transformation as soon as you access them.`,
      ],
    },
    description: `Bear Form is a Shapeshifting Power that replaces your weapon skills with 2 new abilities: Smash and 
    Crush. The Bear form's melee attacks scale with gear level and with a high enough score can be used to break large 
    ore deposits and other world objects that would otherwise require a Minor Explosive Box, 
    this includes the barrier to Quincey the Bandit King's stronghold and the large stone deposit blocking the Iron Cave. 
    Your Ultimate Spell is replaced by a Roar, with no combat usage.Bear Form also grants resistance to sunlight, garlic, silver, fire and holy. 
    It's especially useful for more quickly dissipating the garlic debuff stacks.`,
    unlock: "kodia-the-ferocious-bear",
    type: "Transformation",
    castTime: "~3s",
  },
  "rat-form": {
    id: "rat-form",
    title: "Rat Form",
    img: "/assets/vrising.png",
    notes: {
      title: "Notes",
      content: [
        `Taking damage, attacking, using abilities, items, or Emotes will bring you out of Rat Form.`,
        `You can still build and access buildings/storage, though. This does not apply to chests in the world outside your castle, 
        which will cause you to cancel the transformation as soon as you access them.`,
      ],
    },
    description: `Rat Form is a Shapeshifting Power that is obtained after defeating Putrid Rat after summoning it from a 
    Vermin Nest, this small and stealthy form allows you to slink through the night (or day) to avoid combat. 
    Beware however, as some more perceptive V Blood Carriers and enemies in Silverlight will still be able to detect you. 
    It can notably be used to access a secret area in the back of the Silver Mine.`,
    unlock: "nibbles-the-putrid-rat",
    type: "Transformation",
    castTime: "~2s",
  },
  "blood-hunger": {
    id: "blood-hunger",
    title: "Blood hunger",
    img: "/assets/vrising.png",
    description: `Upon activating this buff, your vision turns red, in return allowing you to see the blood types and quality of nearby targets 
    (containing drainable blood) within your field of vision. When using any other vampire powers, the buff is removed. 
    Best used when searching for high quality blood or specific blood types to charm Servants for the Servant Coffin OR replenishing blood prior to a 
    boss fight in order to secure the more combat useful traits.`,
    unlock: "tristan-the-vampire-hunter",
    type: "Buff",
    castTime: "Instant",
  },
  "expose-vein": {
    id: "expose-vein",
    title: "Expose vein",
    img: "/assets/vrising.png",
    description: `Expose Vein is one of the 2 default starting Vampire Powers.
    Using this skill will put your character in a channeled state for 13s, whereby 
    any movement or action will cancel the cast. While in this state, other friendly vampires are able to drink from your neck, 
    and in return you share half your current blood pool and type with them. This is useful for when clan members are in 
    dire need to replenish their blood pool and are unable to find any other source of blood.`,
    type: "Channeled",
    castTime: "Instant",
  },
  "blood-mend": {
    id: "blood-mend",
    title: "Blood Mend",
    img: "/assets/vrising.png",
    description: `Blood Mend is one of the 2 default starting Vampire Powers.
    Using this power will put your character in a channeled state, whereby any movement or action will cancel the cast. For every second that Blood Mend is channeled, you will drain 0.1 liters of blood, but recover 5% of your max health. Your character has a 10 liter capacity by default.
    Before using the power, make sure you have sufficient blood left, or you may suffer the blood loss penalty, slowly losing health down to 1 hp.
    The amount of health recovered is increased by 15% after unlocking the Blood Passive Improved Blood Mend.While in combat, you're only able to recover up to 25% Max HP 
    at a time. For example, if you're at 50% health, you can only heal up to 75% max health until you leave combat. Blood Orbs bypass this limitation.`,
    type: "Recovery",
    castTime: "1.5s",
  },
};
type Bosses = {
  id: BossesIds;
  title: string;
  img: string;
  description: string;
  location: string;
  level: number;
  rewards: {
    skills?: SkillsFullInfoIds[];
    drop: ResourceIds[];
    recipes?: TypesOfWeaponIds[];
  };
  attacks: string[];
  region: string;
};
// SkillsFullInfoId
export type BossesIds =
  | "tristan-the-vampire-hunter"
  | "alpha-the-white-wolf"
  | "keely-the-frost-archer"
  | "kodia-the-ferocious-bear"
  | "nibbles-the-putrid-rat"
  | "rufus-the-foreman"
  | "lidia-the-chaos-archer"
  | "bane-the-shadowblade";

export type BriefDecriptionBosses = {
  title: "V Blood Carriers";
  description: string;
  bosesIds: BossesIds[];
};

export const briefDecriptionBosses: BriefDecriptionBosses = {
  title: "V Blood Carriers",
  description: `This page lists all V Blood Carriers. for a list of all non-V Blood Enemies, see its respective page.
  Tracking V Bloods is done through the V Blood Menu (default key K) after completing the Journal quest Getting Ready for the Hunt.
   At 50% health, V Bloods spawn at least 3 Blood Orbs, restoring 7.5% max health on pick-up. 
   On Relaxed Difficulty they deal 40% less damage & have 20% less health. On Brutal Difficulty they deal 70% more damage, 
   have 25% more health, are 3 levels higher and often have more abilities and combat behaviours. 
   On Relaxed Difficulty they deal 40% less damage & have 20% less health. On Brutal Difficulty they deal 70% more damage, have 25% more health, 
   are 3 levels higher and often have more abilities and combat behaviours.`,
  bosesIds: [
    "alpha-the-white-wolf",
    "keely-the-frost-archer",
    "tristan-the-vampire-hunter",
    "kodia-the-ferocious-bear",
    "nibbles-the-putrid-rat",
    "rufus-the-foreman",
    "lidia-the-chaos-archer",
    "bane-the-shadowblade",
  ],
};

export type BossesList = {
  [key in BossesIds]: Bosses;
};
export const bossesList: BossesList = {
  "bane-the-shadowblade": {
    id: "bane-the-shadowblade",
    title: "Bane the Shadowblade",
    description: `Once a formidable swordsman and legendary graverobber, Bane was caught by the Cult of the
    Damned during one of his many heists. Seeing the benefit of his talent for infiltration, 
    instead of killing him, they corrupted him into a servant of undeath. It's said that his clandestine 
    abilities were crucial in the capture and corruption of the Iron Mine over the Militia.`,
    location: `Bane can be found roaming the roads of Dunley Farmlands, disguised as a human.`,
    img: "/assets/vrising.png",
    level: 50,
    rewards: {
      drop: ["oil", "rugged-hide"],
      recipes: ["dagger"],
    },
    attacks: [
      "Triple Slash - He will slash at you three times. Third attack is a lunge which will incapacitate you.",
      `Triple Knife Throw - He will dash away from you and throw three knives at you.`,
      `Dark Spin - His phrases will be all about Darkness or Black magic, He will do a 
      purple AoE slash that surrounds him.`,
      `Teleport Strike - He will teleport out of view and reappear near you to strike, which will incapacitate you.`,
    ],
    region: "Dunley Farmlands",
  },
  "lidia-the-chaos-archer": {
    id: "lidia-the-chaos-archer",
    title: "Lidia the Chaos Archer",
    description: `An adept but undisciplined archer, she lets her arrows fly and trusts that fate knows
    where to take them, and it works. Lidia is a force of chaos that cannot be contained, and the bandit
    king is happy to let her do as she likes as long as it benefits him.`,
    location: `Lidia can be found patrolling the roadway between Bandit Copper Mine and Bandit Logging Camp in central Farbane Woods.`,
    img: "/assets/vrising.png",
    level: 30,
    rewards: {
      drop: ["simple-wood", "hallow-wood"],
      recipes: ["longbow"],
    },
    attacks: [
      "Row Shots - She shoots 3 arrows in a row that inflict Ignite.",
      `Invisibility - She goes turns invisible in order to run away and reposition.`,
      `Arrow Barrage - She shouts "Think on your feet!" and shoot 4 
      arrows that leave an area of effect that inflicts Ignite.`,
    ],
    region: "Farbane Woods",
  },
  "rufus-the-foreman": {
    id: "rufus-the-foreman",
    title: "Rufus the Foreman",
    description: `A lieutenant of the bandit forces charged with looking over the logging camp. Just because he's an expert woodworker
     doesn't mean he doesn't know his way around a crossbow, though. He didn't rise up in the bandit ranks for nothing.`,
    location: `Rufus can be found in the Bandit Logging Camp in Farbane Woods alongside some other bandits. `,
    img: "/assets/vrising.png",
    level: 20,
    rewards: {
      drop: ["simple-wood", "hallow-wood"],
      recipes: ["crossbow"],
    },
    attacks: [
      "Bite - Standard melee attack.",
      `Lunge - The Alpha Wolf will crouch down for a second in 
      preparation and then launch itself forward in a straight line.`,
      `Rage - The Alpha Wolf howls and glows red, launch itself in a straight line and bite 2 times.`,
      `Summon Minions - The Alpha Wolf stops for a moment, howls, and summons 2 regular wolves to join the fight.`,
    ],
    region: "Farbane Woods",
  },
  "alpha-the-white-wolf": {
    id: "alpha-the-white-wolf",
    title: "Alpha the White Wolf",
    description: `Alpha the White Wolf is the lowest level (Level 16) V Blood Carrier in V Rising, 
    and likely the first that a player will successfully hunt. The Alpha Wolf will attack any non-wolf creatures that it meets along its path. 
    Interestingly, if the player is in Wolf Form the Alpha Wolf will ignore them.`,
    location: `Alpha Wolf can be found roaming the roads of the Farbane Woods region. `,
    img: "/assets/vrising.png",
    level: 16,
    rewards: {
      skills: ["wolf-form"],
      drop: ["simple-wood", "rugged-hide"],
    },
    attacks: [
      "Bite - Standard melee attack.",
      `Lunge - The Alpha Wolf will crouch down for a second in 
      preparation and then launch itself forward in a straight line.`,
      `Rage - The Alpha Wolf howls and glows red, launch itself in a straight line and bite 2 times.`,
      `Summon Minions - The Alpha Wolf stops for a moment, howls, and summons 2 regular wolves to join the fight.`,
    ],
    region: "Farbane Woods",
  },
  "keely-the-frost-archer": {
    id: "keely-the-frost-archer",
    title: "Keely the frost archer",
    location:
      "Keely can be found in the Bandit Trapper Camp in eastern Farbane Woods.",
    description: `A cold-hearted bandit lieutenant, she oversees the animal husbandry and leather tanning camp in Farbane. 
    Once a member of the Dunley militia, she was removed from her position for her brutal battlefield decision-making. 
    Aside from being a crack shot, her enchanted arrows rain down icy death.`,
    img: "/assets/vrising.png",
    level: 20,
    rewards: {
      drop: ["bone", "grave-dust", "fish"],
    },
    attacks: [
      "Triple Shot - She shoots 3 arrows at the same time in multiple directions and inflict Chill.",
      "Invisibility - She turns invisible while running to reposition herself.",
      `Arrow Barrage - She shouts "Freeze!" and shoots 10 arrows upward that fall around her and inflict Chill.`,
    ],
    region: "Farbane Woods",
  },
  "tristan-the-vampire-hunter": {
    id: "tristan-the-vampire-hunter",
    title: "Tristan the vampire hunter",
    location: `Tristan can be found patrolling on the northern roads of the Farbane Woods. 
    The Militia and Bandits are passive to him and will allow him to pass by them without issue,
    but he is hostile towards Undead and Creature enemies.`,
    description: `A cold-blooded killer, and the scion of a long line of vampire hunters.
     Few are as prepared to face the rising tide of vampire threat as Tristan, 
     and his drive to exterminate the last of the unholy threat is second to none.`,
    img: "/assets/vrising.png",
    level: 44,
    rewards: {
      skills: ["blood-hunger"],
      drop: ["copper-ingot", "copper-ore", "grave-dust"],
      recipes: ["greatsword"],
    },
    attacks: [
      `Flaming strike - He coats his sword with fire and then swipes forward in an overhead swing after a short delay. This attack lights the player on fire if it hits them.`,
      `Icy swing - He coats his sword with ice and then immediately sweeps it in a wide arc in front of him that inflicts Chill.
      He often uses this as a follow-up attack after Flaming strike.`,
      `Lunge - He leaps forward while thrusting his sword. This attack briefly snares the player if it hits them, but can be blocked by counter or shield abilities.`,
      `Fire Bombs - He throws a fire bomb in the air which explodes into 5 separate bombs, lighting the ground on fire for several seconds when they land. 
      He will often follow up this attack by firing his crossbow immediately afterwards.`,
    ],
    region: "Farbane Woods",
  },
  "kodia-the-ferocious-bear": {
    id: "kodia-the-ferocious-bear",
    title: "Kodia the Ferocious Bear",
    location: `Kodia can be found in the Bear Cave in eastern Farbane Woods.`,
    description: `This mother bear is said to be ancient. Rumor has it that she wears a scar from every Bandit King that has ever lived,
     a rite of passage for the position. Her life stands as testament to the fact that no bandit leader has ever done well enough to finish the job.`,
    img: "/assets/vrising.png",
    level: 35,
    rewards: {
      skills: ["bear-form"],
      drop: ["oil", "fish-bone", "bone", "grave-dust", "leather"],
    },
    attacks: [
      "Smash - Basic melee attack.",
      "Crush - It slams the ground, causing a large number of rocks to fall from the ceiling 4 times in a circle radiating out from them. These rocks cannot be blocked by counters.",
      `Rage - It roars and glows red, automatically snaring the player and gaining increased attack speed for 3 attacks.`,
      `Charge - It crouches on its haunches before charging forward in a straight line.`,
    ],
    region: "Farbane Woods",
  },
  "nibbles-the-putrid-rat": {
    id: "nibbles-the-putrid-rat",
    title: "Nibbles the Putrid Rat",
    location: `Nibbles cannot spawn naturally, it only appears when summoned via the 
    Vermin Nest. Nibbles will be summoned where the Vermin Nest is placed and will 
    return to that location if de-aggroed. It will not change locations even 
    if the Vermin Nest is moved by the player after it was summoned.`,
    description: `Farmers try to be diligent in keeping their pest problems under control, as legend says that any place too infested 
    might find themselves visited by the Putrid Rat. No one is quite sure how it gets in, 
    but they know it by the stench of rotting flesh and its carnivorous appetite.`,
    img: "/assets/vrising.png",
    level: 35,
    rewards: {
      skills: ["rat-form"],
      drop: ["simple-stone", "hallow-wood", "bone"],
    },
    attacks: [
      "Bite - The standard melee attack.",
      "Rage - Nibbles glows red, then melee attacks 6 times in a row.",
      `Poison Explosion - Nibbles shakes its coat and releases a green poison mist that explodes in an area around it after a delay.`,
      `Summon Minions - Nibbles burrows into the ground, 
      temporarily leaving the fight while summoning 3 Giant Rats.`,
    ],
    region: "anywhere",
  },
};
