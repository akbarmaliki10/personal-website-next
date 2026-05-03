export interface ProfileData {
  name: string;
  role: string;
  company: string;
  bio: string;
  highlight: string;
  imageUrl: string;
  education: string;
  socials: {
    github: string;
    linkedin: string;
    email: string;
  };
}

export const profileData: ProfileData = {
  name: "Akbar Maliki",
  role: "Backend Software Engineer",
  company: "Hypefast",
  bio: "Backend Software Engineer at Hypefast, specializing in high-performance APIs and distributed systems.",
  highlight: "Engineering Scalable Systems. Reducing Latency.",
  imageUrl: "/images/profile.png",
  education: "Bachelor of Computer Science from Universitas Indonesia",
  socials: {
    github: "https://github.com/akbarmaliki10",
    linkedin: "https://www.linkedin.com/in/akbar-maliki/",
    email: "akbar.maliki.work@gmail.com",
  },
};
