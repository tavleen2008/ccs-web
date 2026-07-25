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
    emoji: "≡ƒÿ╢",
    img: FaizaanImg,
  },
  {
    name: "Boya Zhang",
    team: "Backend",
    emoji: "≡ƒù┐",
    img: BoyaImg,
  },
  {
    name: "Daniel Chen",
    team: "Backend",
    emoji: "≡ƒ¢Å∩╕Å",
    img: DanielchenImg,
  },
  {
    name: "Daniel Yu",
    team: "Backend",
    emoji: "≡ƒÖé",
    img: DanielyuImg,
  },
  {
    name: "Carson Tang",
    team: "Backend",
    emoji: "≡ƒæ¿ΓÇì≡ƒÜÇ",
    img: CarsonImg,
  },
  {
    name: "Stephanie Xu",
    team: "Backend",
    emoji: "≡ƒÿ┤",
    img: StephanieImg,
  },
  {
    name: "Andrew Dong",
    team: "Data Science",
    emoji: "≡ƒÿ«",
    img: AndrewImg,
  },

  // design
  {
    name: "Krystal Truong",
    team: "Design",
    emoji: "≡ƒÑÉ",
    img: KrystalImg,
  },
  {
    name: "Lam Pham",
    team: "Design",
    emoji: "≡ƒÑ┤",
    img: LamImg,
  },
  {
    name: "Yinan Zhang",
    team: "Design",
    emoji: "≡ƒÆ£",
    img: YinanImg,
  },
  {
    name: "Kate Lee",
    team: "Design",
    emoji: "≡ƒÿù",
    img: KateImg,
  },
  {
    name: "Phuong Tu",
    team: "Design",
    emoji: "≡ƒî╖",
    img: PhuongImg,
  },
  {
    name: "Ingrid Wong",
    team: "Design",
    emoji: "≡ƒÿ╜",
    img: IngridImg,
  },

  // frontend
  {
    name: "Jennifer Lu",
    team: "Frontend",
    emoji: "≡ƒöÑ",
    img: JenniferImg,
  },
  {
    name: "Roselyn Huynh",
    team: "Frontend",
    emoji: "≡ƒñá",
    img: RoselynImg,
  },
  {
    name: "Eugene Zhang",
    team: "Frontend",
    emoji: "≡ƒñö",
    img: EugeneImg,
  },
  {
    name: "Bradley Herrera Contreras",
    team: "Frontend",
    emoji: "≡ƒÿº",
    img: BradleyImg,
  },
  {
    name: "Emma Huang",
    team: "Frontend",
    emoji: "≡ƒÿî",
    img: EmmaImg,
  },
  {
    name: "Lisa Zhao",
    team: "Frontend",
    emoji: "≡ƒÿ╗",
    img: LisaImg,
  },
  {
    name: "Ivan Yu",
    team: "Frontend",
    emoji: "≡ƒæ╣",
    img: IvanImg,
  },

  // finance
  {
    name: "Rebecca Lee",
    team: "Finance",
    emoji: "≡ƒì£",
    img: RebeccaImg,
  },
  {
    name: "Jeff Zhu",
    team: "Finance",
    emoji: "≡ƒÿö",
    img: JeffImg,
  },
  // internal ops
  {
    name: "Serena Pang",
    team: "Internal Operations",
    emoji: "≡ƒªû",
    img: SerenaImg,
  },

  // leadership
  {
    name: "Oana Binder",
    team: "Co-director",
    emoji: "≡ƒÿÄ",
    img: OanaImg,
  },
  {
    name: "Joseph Wang",
    team: "Co-director",
    emoji: "≡ƒñ⌐",
    img: JosephImg,
  },
  {
    name: "Nick Ng",
    team: "Product Manager",
    emoji: "≡ƒà┐",
    img: NickImg,
  },

  // logistics
  {
    name: "Hima Sheth",
    team: "Logistics",
    emoji: "≡ƒñá",
    img: HimaImg,
  },
  {
    name: "Phoebe Luo",
    team: "Logistics",
    emoji: "≡ƒÿ╝",
    img: PhoebeImg,
  },
  {
    name: "Shub Mano",
    team: "Logistics",
    emoji: "≡ƒÿÄ",
    img: ShubImg,
  },
  {
    name: "Kailey Chen",
    team: "Logistics",
    emoji: "≡ƒÆ¬",
    img: KaileyImg,
  },
  {
    name: "Jasmine Jiang",
    team: "Logistics",
    emoji: "≡ƒÿï",
    img: JasmineImg,
  },
  {
    name: "Yassine Elhedhli",
    team: "Logistics",
    emoji: "≡ƒÿê",
    img: YassineImg,
  },
  {
    name: "Alvin Dai",
    team: "Logistics",
    emoji: "≡ƒÉ╝",
    img: AlvinImg,
  },
  {
    name: "Kevin Guo",
    team: "Logistics",
    emoji: "≡ƒåÆ",
    img: KevinImg,
  },
  {
    name: "Tanishi Naik",
    team: "Logistics",
    emoji: "≡ƒìè",
    img: TanishiImg,
  },
  {
    name: "Lily Ni",
    team: "Logistics",
    emoji: "≡ƒÿñ",
    img: LilyImg,
  },
  {
    name: "Binalpreet Kalra",
    team: "Logistics",
    emoji: "≡ƒÉ¥",
    img: BinalImg,
  },

  // marketing
  {
    name: "Carter Watkinson",
    team: "Marketing",
    emoji: "≡ƒÿü",
    img: CarterImg,
  },
  {
    name: "Emily Dai",
    team: "Marketing",
    emoji: "≡ƒºìΓÇìΓÖÇ∩╕Å",
    img: EmilyImg,
  },
  {
    name: "Catherine Ye",
    team: "Marketing",
    emoji: "≡ƒæÇ",
    img: "",
  },

  // sponsorship
  {
    name: "Leon Han",
    team: "Sponsorship",
    emoji: "≡ƒªä",
    img: LeonImg,
  },
  {
    name: "Benjamin Chung",
    team: "Sponsorship",
    emoji: "≡ƒì»",
    img: BenjaminImg,
  },
  {
    name: "Anuraj Shah",
    team: "Sponsorship",
    emoji: "≡ƒææ",
    img: AnurajImg,
  },
  {
    name: "Medha Gupta",
    team: "Sponsorship",
    emoji: "≡ƒñ⌐",
    img: MedhaImg,
  },
  {
    name: "Hargun Sibal",
    team: "Sponsorship",
    emoji: "≡ƒñÖ",
    img: HargunImg,
  },
  {
    name: "Lauren Yoshida",
    team: "Sponsorship",
    emoji: "≡ƒÿé",
    img: LaurenImg,
  },
];
