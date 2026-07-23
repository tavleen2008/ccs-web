import {
  AlvinImg,
  AndrewImg,
  AnurajImg,
  BenjaminImg,
  BinalImg,
  BoyaImg,
  BradleyImg,
  CarsonImg,
  CarterImg,
  DanielchenImg,
  DanielyuImg,
  EmilyImg,
  EmmaImg,
  EugeneImg,
  FaizaanImg,
  HargunImg,
  HimaImg,
  IngridImg,
  IvanImg,
  JasmineImg,
  JeffImg,
  JenniferImg,
  JosephImg,
  KaileyImg,
  KateImg,
  KevinImg,
  KrystalImg,
  LamImg,
  LaurenImg,
  LeonImg,
  LilyImg,
  LisaImg,
  MedhaImg,
  NickImg,
  OanaImg,
  PhoebeImg,
  PhuongImg,
  RebeccaImg,
  RoselynImg,
  SerenaImg,
  ShubImg,
  StephanieImg,
  TanishiImg,
  YassineImg,
  YinanImg,
} from "src/assets/img";

export interface Organizer {
  name: string;
  team:
    | "Design"
    | "Frontend"
    | "Backend"
    | "Data Science"
    | "Infrastructure"
    | "Finance"
    | "Logistics"
    | "Marketing"
    | "Sponsorship"
    | "Product Manager"
    | "Internal Operations"
    | "Co-director"
    | "Design Advisor"
    | "Marketing Advisor"
    | "Sponsorship Advisor"
    | "Logistics Advisor";
  emoji: string;
  img: string;
  srcSet?: string;
}

export const ORGANIZERS: Organizer[] = [
  // backend
  {
    name: "Faizaan Madhani",
    team: "Backend",
    emoji: "😶",
    img: FaizaanImg,
  },
  {
    name: "Boya Zhang",
    team: "Backend",
    emoji: "🗿",
    img: BoyaImg,
  },
  {
    name: "Daniel Chen",
    team: "Backend",
    emoji: "🛏️",
    img: DanielchenImg,
  },
  {
    name: "Daniel Yu",
    team: "Backend",
    emoji: "🙂",
    img: DanielyuImg,
  },
  {
    name: "Carson Tang",
    team: "Backend",
    emoji: "👨‍🚀",
    img: CarsonImg,
  },
  {
    name: "Stephanie Xu",
    team: "Backend",
    emoji: "😴",
    img: StephanieImg,
  },
  {
    name: "Andrew Dong",
    team: "Data Science",
    emoji: "😮",
    img: AndrewImg,
  },

  // design
  {
    name: "Krystal Truong",
    team: "Design",
    emoji: "🥐",
    img: KrystalImg,
  },
  {
    name: "Lam Pham",
    team: "Design",
    emoji: "🥴",
    img: LamImg,
  },
  {
    name: "Yinan Zhang",
    team: "Design",
    emoji: "💜",
    img: YinanImg,
  },
  {
    name: "Kate Lee",
    team: "Design",
    emoji: "😗",
    img: KateImg,
  },
  {
    name: "Phuong Tu",
    team: "Design",
    emoji: "🌷",
    img: PhuongImg,
  },
  {
    name: "Ingrid Wong",
    team: "Design",
    emoji: "😽",
    img: IngridImg,
  },

  // frontend
  {
    name: "Jennifer Lu",
    team: "Frontend",
    emoji: "🔥",
    img: JenniferImg,
  },
  {
    name: "Roselyn Huynh",
    team: "Frontend",
    emoji: "🤠",
    img: RoselynImg,
  },
  {
    name: "Eugene Zhang",
    team: "Frontend",
    emoji: "🤔",
    img: EugeneImg,
  },
  {
    name: "Bradley Herrera Contreras",
    team: "Frontend",
    emoji: "😧",
    img: BradleyImg,
  },
  {
    name: "Emma Huang",
    team: "Frontend",
    emoji: "😌",
    img: EmmaImg,
  },
  {
    name: "Lisa Zhao",
    team: "Frontend",
    emoji: "😻",
    img: LisaImg,
  },
  {
    name: "Ivan Yu",
    team: "Frontend",
    emoji: "👹",
    img: IvanImg,
  },

  // finance
  {
    name: "Rebecca Lee",
    team: "Finance",
    emoji: "🍜",
    img: RebeccaImg,
  },
  {
    name: "Jeff Zhu",
    team: "Finance",
    emoji: "😔",
    img: JeffImg,
  },
  // internal ops
  {
    name: "Serena Pang",
    team: "Internal Operations",
    emoji: "🦖",
    img: SerenaImg,
  },

  // leadership
  {
    name: "Oana Binder",
    team: "Co-director",
    emoji: "😎",
    img: OanaImg,
  },
  {
    name: "Joseph Wang",
    team: "Co-director",
    emoji: "🤩",
    img: JosephImg,
  },
  {
    name: "Nick Ng",
    team: "Product Manager",
    emoji: "🅿",
    img: NickImg,
  },

  // logistics
  {
    name: "Hima Sheth",
    team: "Logistics",
    emoji: "🤠",
    img: HimaImg,
  },
  {
    name: "Phoebe Luo",
    team: "Logistics",
    emoji: "😼",
    img: PhoebeImg,
  },
  {
    name: "Shub Mano",
    team: "Logistics",
    emoji: "😎",
    img: ShubImg,
  },
  {
    name: "Kailey Chen",
    team: "Logistics",
    emoji: "💪",
    img: KaileyImg,
  },
  {
    name: "Jasmine Jiang",
    team: "Logistics",
    emoji: "😋",
    img: JasmineImg,
  },
  {
    name: "Yassine Elhedhli",
    team: "Logistics",
    emoji: "😈",
    img: YassineImg,
  },
  {
    name: "Alvin Dai",
    team: "Logistics",
    emoji: "🐼",
    img: AlvinImg,
  },
  {
    name: "Kevin Guo",
    team: "Logistics",
    emoji: "🆒",
    img: KevinImg,
  },
  {
    name: "Tanishi Naik",
    team: "Logistics",
    emoji: "🍊",
    img: TanishiImg,
  },
  {
    name: "Lily Ni",
    team: "Logistics",
    emoji: "😤",
    img: LilyImg,
  },
  {
    name: "Binalpreet Kalra",
    team: "Logistics",
    emoji: "🐝",
    img: BinalImg,
  },

  // marketing
  {
    name: "Carter Watkinson",
    team: "Marketing",
    emoji: "😁",
    img: CarterImg,
  },
  {
    name: "Emily Dai",
    team: "Marketing",
    emoji: "🧍‍♀️",
    img: EmilyImg,
  },
  {
    name: "Catherine Ye",
    team: "Marketing",
    emoji: "👀",
    img: "",
  },

  // sponsorship
  {
    name: "Leon Han",
    team: "Sponsorship",
    emoji: "🦄",
    img: LeonImg,
  },
  {
    name: "Benjamin Chung",
    team: "Sponsorship",
    emoji: "🍯",
    img: BenjaminImg,
  },
  {
    name: "Anuraj Shah",
    team: "Sponsorship",
    emoji: "👑",
    img: AnurajImg,
  },
  {
    name: "Medha Gupta",
    team: "Sponsorship",
    emoji: "🤩",
    img: MedhaImg,
  },
  {
    name: "Hargun Sibal",
    team: "Sponsorship",
    emoji: "🤙",
    img: HargunImg,
  },
  {
    name: "Lauren Yoshida",
    team: "Sponsorship",
    emoji: "😂",
    img: LaurenImg,
  },
];
