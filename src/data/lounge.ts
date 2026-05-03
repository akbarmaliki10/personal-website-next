export interface LoungeItem {
  id: string;
  category: string;
  subtitle: string;
  iconName: string;
  images: { id: string; name: string; url: string }[];
}

export const loungeItems: LoungeItem[] = [
  {
    id: "games",
    category: "Playing Games",
    subtitle: "Downtime adventures",
    iconName: "Gamepad2",
    images: [
      { id: "Valorant", name: "Valorant", url: "/images/jett.gif" },
    ],
  },
  {
    id: "comics",
    category: "Reading Comics",
    subtitle: "Manga, Manhwa, Manhua",
    iconName: "BookOpen",
    images: [
      { id: "op", name: "One Piece", url: "/images/op.gif" },
    ],
  },
];
