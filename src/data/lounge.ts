/** Localized category/subtitle live in `@/i18n/translations`. */
export interface LoungeItem {
  id: string;
  iconName: string;
  images: { id: string; name: string; url: string }[];
}

export const loungeItems: LoungeItem[] = [
  {
    id: "games",
    iconName: "Gamepad2",
    images: [
      { id: "Valorant", name: "Valorant", url: "/images/jett.gif" },
    ],
  },
  {
    id: "comics",
    iconName: "BookOpen",
    images: [
      { id: "op", name: "One Piece", url: "/images/op.gif" },
    ],
  },
];
