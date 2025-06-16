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

export const data: {
  name: string;
  type: string;
  needReceiving: boolean;
  additionalCondition?: string;
}[] = [
  {
    name: "Sword",
    type: "melee",
    needReceiving: false,
  },
  {
    name: "Axes",
    type: "melee",
    needReceiving: false,
  },
  {
    name: "Mace",
    type: "melee",
    needReceiving: false,
  },
  {
    name: "Spear",
    type: "melee",
    needReceiving: false,
  },
  {
    name: "Reaper",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Reaper recipe unlocks after feeding on Kriig the Undead General",
  },
  {
    name: "Greatsword",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Greatsword recipe unlocks after feeding on Tristan the Vampire Hunter.",
  },
  {
    name: "Whip",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Whip recipe unlocks after feeding on Domina the Blade Dancer",
  },
  {
    name: "Sanguine",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Sanguine Tier Whip recipe unlocks after feeding on Simon Belmont the Vampire Hunter.",
  },
  {
    name: "Claw",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Claw recipe unlocks after feeding on Frostmaw the Mountain Terror",
  },
  {
    name: "Twinblade",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Twinblade recipe unlocks after feeding on Gaius the Cursed Champion",
  },
  {
    name: "Slashers",
    type: "melee",
    needReceiving: true,
    additionalCondition:
      "Iron Slashers recipe unlocks after feeding on Jakira the Shadow Huntress.",
  },

  //range
  {
    name: "Crossbow",
    type: "range",
    needReceiving: true,
    additionalCondition:
      "Copper Crossbow recipe unlocks after feeding on Rufus the Foreman.",
  },
  {
    name: "Longbow",
    type: "range",
    needReceiving: true,
    additionalCondition:
      "Copper Longbow recipe unlocks after feeding on Lidia the Chaos Archer.",
  },
  {
    name: "Dagger",
    type: "range",
    needReceiving: true,
    additionalCondition:
      "Iron Dagger recipe unlocks after feeding on Bane the Shadowblade",
  },
  {
    name: "Pistols",
    type: "range",
    needReceiving: true,
    additionalCondition:
      "Iron Pistols recipe unlocks after feeding on Jade the Vampire Hunter.",
  },
];
