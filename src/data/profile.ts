/**
 * Non-translatable profile data. Localized text (role, bio, highlight,
 * education) lives in `@/i18n/translations`.
 */
export interface ProfileData {
  name: string;
  imageUrl: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: ProfileData = {
  name: "Akbar Maliki",
  imageUrl: "/images/profile.png",
  socials: {
    github: "https://github.com/akbarmaliki10",
    linkedin: "https://www.linkedin.com/in/akbar-maliki/",
    email: "akbar.maliki.work@gmail.com",
  },
};
