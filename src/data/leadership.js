import { mowanza } from "./roster.js";

export const guildMaster = {
  name: "BathTissue",
  characterName: "Bathtissue",
  class: "Paladin",
  spec: "Holy",
  role: "Healer",
  avatar: "bathtissue-avatar.jpg",
};

export const officers = [
  {
    ...mowanza,
    also: "also Charlie's raid lead",
  },
  {
    name: "Gorothy",
    characterName: "Gorothy",
    class: "Priest",
    spec: "Shadow",
    role: "DPS",
    avatar: "gorothy-avatar.jpg",
  },
  {
    name: "Orcface",
    characterName: "Orcface",
    class: "Warlock",
    spec: "Affliction",
    role: "DPS",
    avatar: "orcface-avatar.jpg",
  },
  {
    name: "Desmo",
    characterName: "Desmoo",
    class: "Warrior",
    spec: "Fury",
    role: "DPS",
    avatar: "desmo-avatar.jpg",
  },
  {
    name: "Stun",
    characterName: "Ohms",
    class: "Shaman",
    spec: "Restoration",
    role: "Healer",
    avatar: "stun-avatar.jpg",
    also: "Slacker Prime!",
  },
];
