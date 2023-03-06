enum Layout {
  TriPlat,
  BiPlat,
  MonoPlat,
  FinalD,
  Deadline,
  WarioWare,
  TriplatMoving,
  BiplatMoving,
  MonoPlatMoving,
  ReasonableTransform,
  DkJungle,
  HyruleCastle64,
  Asymmetric,
  Unknown,
}

type Stage = { display_name: string; layout: Layout };
export const UNKNOWN_STAGE = { display_name: 'Unknown Stage Name', layout: Layout.Unknown};
export const UNKNOWN_STAGE_NAME = "UnknownStageName";

export function displayNames() {
  return stageNames().map(properName => toDisplay(properName)).sort();
}

export function stageNames() {
  return Object.keys(stageInfo).sort();
}

export function toDisplay(properName: string) {
  let display = stageInfo[properName]?.display_name;
  if (display === undefined) {
    return UNKNOWN_STAGE.display_name;
  }
  return display;
}

/**
 * gets the proper stageName from the display name
 * @param displayName the display name
 * @returns the internal stageName
 */
export function fromDisplay(displayName: string): string {
  let properName = stageNames().find(name => stageInfo[name]?.display_name == displayName);
  if (properName === undefined) {
    return UNKNOWN_STAGE_NAME;
  }
  return properName;
}

export const stageInfo: Record<string, Stage> = {
  //Random: { display_name: 'Random (All)', layout: Layout.Unknown },
  //RandomNormal: { display_name: 'Normal Random', layout: Layout.Unknown },
  UNKNOWN_STAGE_NAME: UNKNOWN_STAGE,
  BattleField: { display_name: 'Battlefield', layout: Layout.TriPlat },
  BattleFieldL: { display_name: 'Deadline', layout: Layout.Deadline },
  End: { display_name: 'Final Destination', layout: Layout.FinalD },
  Mario_Castle64: {
    display_name: "Peach's Castle 64",
    layout: Layout.BiplatMoving,
  },
  DK_Jungle: { display_name: 'DK Jungle 64', layout: Layout.DkJungle },
  Zelda_Hyrule: {
    display_name: 'Hyrule Castle 64',
    layout: Layout.HyruleCastle64,
  },
  Kirby_Pupupu64: { display_name: 'Dreamland', layout: Layout.TriPlat },
  Poke_Yamabuki: { display_name: 'Saffron City', layout: Layout.Unknown },
  Mario_Past64: { display_name: 'Mushroom Kingdom', layout: Layout.Unknown },
  Mario_CastleDx: {
    display_name: "Princess Peach's Castle",
    layout: Layout.Unknown,
  },
  Mario_Rainbow: { display_name: 'Rainbow Cruise', layout: Layout.BiPlat },
  DK_WaterFall: { display_name: 'Kongo Falls', layout: Layout.WarioWare },
  DK_Lodge: { display_name: 'Jungle Japes', layout: Layout.Unknown },
  Zelda_Greatbay: { display_name: 'Great Bay', layout: Layout.MonoPlat },
  Zelda_Temple: { display_name: 'Hyrule Temple', layout: Layout.Unknown },
  Metroid_ZebesDx: { display_name: 'Brinstar', layout: Layout.Unknown },
  Yoshi_Yoster: {
    display_name: "Yoshi's Island (Melee)",
    layout: Layout.Unknown,
  },
  Yoshi_CartBoard: { display_name: "Yoshi's Story", layout: Layout.TriPlat },
  Kirby_Fountain: {
    display_name: 'Fountain of Dreams',
    layout: Layout.TriplatMoving,
  },
  Kirby_Greens: { display_name: 'Green Greens', layout: Layout.BiPlat },
  Fox_Corneria: { display_name: 'Corneria', layout: Layout.Unknown },
  Fox_Venom: { display_name: 'Venom', layout: Layout.Unknown },
  Poke_Stadium: {
    display_name: 'Pokémon Stadium',
    layout: Layout.ReasonableTransform,
  },
  Mother_Onett: { display_name: 'Onett', layout: Layout.Unknown },
  Mario_PastUsa: {
    display_name: 'Mushroom Kingdom II',
    layout: Layout.Unknown,
  },
  Metroid_Kraid: { display_name: 'Brinstar Depths', layout: Layout.Unknown },
  Yoshi_Story: {
    display_name: "Yoshi's Island (Brawl)",
    layout: Layout.Unknown,
  },
  Fzero_Bigblue: { display_name: 'Big Blue', layout: Layout.Unknown },
  Mother_Fourside: { display_name: 'Fourside', layout: Layout.MonoPlatMoving },
  Mario_Dolpic: { display_name: 'Delfino Plaza', layout: Layout.Unknown },
  Mario_PastX: { display_name: 'Mushroomy Kingdom', layout: Layout.Unknown },
  Kart_CircuitX: { display_name: 'Figure 8 Circuit', layout: Layout.Unknown },
  Wario_Madein: { display_name: 'WarioWare, Inc.', layout: Layout.WarioWare },
  Zelda_Oldin: { display_name: 'Bridge of Elden', layout: Layout.Asymmetric },
  Metroid_Norfair: { display_name: 'Norfair', layout: Layout.Unknown },
  Metroid_Orpheon: {
    display_name: 'Frigate Orpheon',
    layout: Layout.BiplatMoving,
  },
  Yoshi_Island: { display_name: "Yoshi's Island", layout: Layout.MonoPlat },
  Kirby_Halberd: { display_name: 'Halberd', layout: Layout.Unknown },
  Fox_LylatCruise: { display_name: 'Lylat Cruise', layout: Layout.Unknown },
  Poke_Stadium2: { display_name: 'Pokémon Stadium 2', layout: Layout.BiPlat },
  Fzero_Porttown: {
    display_name: 'Port Town Aero Dive',
    layout: Layout.Unknown,
  },
  FE_Siege: { display_name: 'Castle Siege', layout: Layout.Unknown },
  Pikmin_Planet: { display_name: 'Distant Planet', layout: Layout.Unknown },
  Animal_Village: { display_name: 'Smashville', layout: Layout.MonoPlatMoving },
  Mother_Newpork: { display_name: 'New Pork Town', layout: Layout.Unknown },
  Ice_Top: { display_name: 'Summit', layout: Layout.Unknown },
  Icarus_SkyWorld: { display_name: 'Skyworld', layout: Layout.Unknown },
  MG_Shadowmoses: {
    display_name: 'Shadow Moses Island',
    layout: Layout.BiPlat,
  },
  LuigiMansion: { display_name: "Luigi's Mansion", layout: Layout.BiPlat },
  Zelda_Pirates: { display_name: 'Pirate Ship', layout: Layout.Unknown },
  Poke_Tengam: { display_name: 'Spear Pillar', layout: Layout.BiPlat },
  MarioBros: { display_name: 'Mario Bros.', layout: Layout.Unknown },
  Plankton: { display_name: 'Electroplankton', layout: Layout.Unknown },
  Sonic_Greenhill: { display_name: 'Green Hill Zone', layout: Layout.Unknown },
  Mario_3DLand: { display_name: '3D Land', layout: Layout.Unknown },
  Mario_NewBros2: {
    display_name: 'Mushroom Kingdom 2',
    layout: Layout.Unknown,
  },
  Mario_Paper: { display_name: 'Paper Mario', layout: Layout.Unknown },
  Zelda_Gerudo: { display_name: 'Gerudo Valley', layout: Layout.Asymmetric },
  Zelda_Train: { display_name: 'Spirit Tracks', layout: Layout.Unknown },
  Kirby_Gameboy: { display_name: 'Dreamland GB', layout: Layout.Unknown },
  Poke_Unova: { display_name: 'Unova Pokemon League', layout: Layout.BiPlat },
  Poke_Tower: { display_name: 'Prism Tower', layout: Layout.Unknown },
  Fzero_Mutecity3DS: { display_name: 'Mute City', layout: Layout.Unknown },
  Mother_Magicant: { display_name: 'Magicant', layout: Layout.Unknown },
  FE_Arena: { display_name: 'Arena Ferox', layout: Layout.ReasonableTransform },
  Icarus_Uprising: {
    display_name: 'Reset Bomb Forest',
    layout: Layout.Asymmetric,
  },
  Animal_Island: { display_name: 'Tortimer Island', layout: Layout.Unknown },
  BalloonFight: { display_name: 'Balloon Fight', layout: Layout.Unknown },
  NintenDogs: { display_name: 'NintenDogs', layout: Layout.Unknown },
  StreetPass: { display_name: 'Find Mii', layout: Layout.Unknown },
  Tomodachi: { display_name: 'Tomodachi Life', layout: Layout.Unknown },
  Pictochat2: { display_name: 'Pictochat 2', layout: Layout.Unknown },
  Mario_Uworld: { display_name: 'Mushroom Kingdom U', layout: Layout.MonoPlat },
  Mario_Galaxy: { display_name: 'Mario Galaxy', layout: Layout.Unknown },
  Kart_CircuitFor: { display_name: 'Mario Circuit', layout: Layout.Unknown },
  Zelda_Skyward: { display_name: 'Skyloft', layout: Layout.Unknown },
  Kirby_Cave: { display_name: 'Great Cave Offensive', layout: Layout.Unknown },
  Poke_Kalos: { display_name: 'Kalos Pokemon League', layout: Layout.Unknown },
  FE_Colloseum: { display_name: 'Colloseum', layout: Layout.Unknown },
  FlatZoneX: { display_name: 'Flat Zone', layout: Layout.Unknown },
  Icarus_Angeland: { display_name: "Palutena's Temple", layout: Layout.BiPlat },
  Wario_Gamer: { display_name: 'Gamer', layout: Layout.Unknown },
  Pikmin_Garden: { display_name: 'Garden of Hope', layout: Layout.Unknown },
  Animal_City: {
    display_name: 'Town & City',
    layout: Layout.ReasonableTransform,
  },
  WiiFit: { display_name: 'Wii Fit Studio', layout: Layout.BiPlat },
  PunchOutSB: { display_name: 'Boxing Ring (SSB)', layout: Layout.MonoPlat },
  Xeno_Gaur: { display_name: 'Guar Plains', layout: Layout.BiPlat },
  DuckHunt: { display_name: 'Duck Hunt', layout: Layout.Unknown },
  WreckingCrew: { display_name: 'Wrecking Crew', layout: Layout.Unknown },
  Pilotwings: { display_name: 'Pilotwings', layout: Layout.Unknown },
  WufuIsland: { display_name: 'Wuhu Island', layout: Layout.Unknown },
  Sonic_Windyhill: { display_name: 'Windy Hill Zone', layout: Layout.Unknown },
  Rock_Wily: { display_name: "Wily's Castle", layout: Layout.Unknown },
  Pac_Land: { display_name: 'Pac Land', layout: Layout.Unknown },
  Mario_Maker: { display_name: 'Mario Maker', layout: Layout.Unknown },
  SF_Suzaku: { display_name: 'Suzaku Castle', layout: Layout.Unknown },
  FF_Midgar: { display_name: 'Midgar', layout: Layout.TriplatMoving },
  Bayo_Clock: { display_name: 'Umbra Clock Tower', layout: Layout.Unknown },
  Mario_Odyssey: { display_name: 'New Donk City', layout: Layout.Unknown },
  Zelda_Tower: { display_name: 'Great Plateau Tower', layout: Layout.MonoPlat },
  Spla_Parking: { display_name: 'Moray Towers', layout: Layout.Unknown },
  Dracula_Castle: { display_name: "Dracula's Castle", layout: Layout.BiPlat },
  //Training: { display_name: 'Training', layout: Layout.FinalD },
  Jack_Mementoes: { display_name: 'Mementos', layout: Layout.Unknown },
  Brave_Altar: { display_name: "Yggdrasil's Altar", layout: Layout.Unknown },
  Buddy_Spiral: { display_name: 'Spiral Mountain', layout: Layout.Unknown },
  Dolly_Stadium: { display_name: 'KoF Stadium', layout: Layout.FinalD },
  FE_Shrine: { display_name: 'Garreg Mach Monastery', layout: Layout.BiPlat },
  Tantan_Spring: { display_name: 'Spring Stadium', layout: Layout.Unknown },
  Pickel_World: { display_name: 'Minecraft World', layout: Layout.FinalD },
  FF_Cave: { display_name: 'Northern Cave', layout: Layout.Unknown },
  Xeno_Alst: { display_name: 'Cloud Sea of Alrest', layout: Layout.Unknown },
  Demon_Dojo: { display_name: 'Demon Dojo', layout: Layout.FinalD },
  Trail_Castle: { display_name: 'Hallow Bastion', layout: Layout.MonoPlat },
  BattleFieldS: { display_name: 'Small Battlefield', layout: Layout.BiPlat },
};
