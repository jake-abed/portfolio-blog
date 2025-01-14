import { ProjectProps } from "../utils/interfaces.ts";

const projects: Array<ProjectProps> = [
  {
    name: "Lore CLI",
    url: "https://github.com/jake-abed/lore",
    imagePath: "/lore.webp",
    desc:
      "A CLI for managing custom campaign information for dungeon masters. Born out of frustration with existing tools (and my handwriting) and a desire to organize my campaigns better.",
    icons: [
      "/badges/go.svg",
    ],
    repoUrl: "https://github.com/jake-abed/lore",
  },
  {
    name: "Geistfeld",
    url: "https://genya-games.itch.io/geistfeld",
    imagePath: "/geistfeld.webp",
    desc:
      "A top-down survival horror game featuring asynchronous multiplayer inspired by Dark Souls. Made for Godot Wild Jam #74. The game and server were made from scratch in 9 days!",
    icons: [
      "/badges/godot.svg",
      "/badges/deno.svg",
    ],
    repoUrl: "https://github.com/jake-abed/geistfeld",
  },
  {
    name: "Koku: A Void Ant",
    url: "https://genya-games.itch.io/koku-a-void-ant",
    imagePath: "/koku.webp",
    desc:
      "A mini metroidvania game made for Godot Wild Jame #69! Aside from the font & engine, all art, music, & code were made from scratch in 9 days by yours truly.",
    icons: [
      "/badges/godot.svg",
    ],
    repoUrl: "https://github.com/jake-abed/a-void-ant",
  },
  {
    name: "WTRMLN CHAT",
    url: "https://wtrmln.chat/",
    imagePath: "/wtrmln-chat.webp",
    desc:
      "Anonymous chat rooms built with Elixir and Phoenix. The rooms persist, but any user may choose to 'spit the seed' and eject all users from the room while deleting all messages.",
    icons: [
      "/badges/elixir.svg",
      "/badges/phoenix.svg",
      "/badges/tailwind.svg",
    ],
    repoUrl: "https://github.com/jake-abed/wtrmln",
  },
  {
    name: "AOS Inventory Sync",
    url: "#",
    imagePath: "/inventory-sync.webp",
    desc:
      "A production web app to sync inventory between two disparate platforms. Features a RESTful API, lightweight Deno KV database, and a hand-rolled auth system.",
    icons: [
      "/badges/typescript.svg",
      "/badges/deno.svg",
      "/badges/tailwind.svg",
    ],
  },
];

export { projects };
