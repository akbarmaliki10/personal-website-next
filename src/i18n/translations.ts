export type Locale = "en" | "id" | "ja";

export const locales: { code: Locale; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "ja", label: "JA", name: "日本語" },
];

export interface ExperienceText {
  period: string;
  role: string;
  company: string;
  location: string;
  /** Use [[60]] to render an animated counter */
  bullets: string[];
}

export interface ProjectText {
  category: string;
  title: string;
  description: string;
  badge?: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { experience: string; projects: string; lounge: string };
  footer: { tagline: string; github: string; linkedin: string; email: string };
  profile: {
    role: string;
    bio: string;
    highlight: string;
    education: string;
  };
  experience: {
    workTitle: string;
    leadershipTitle: string;
    work: Record<string, ExperienceText>;
    leadership: Record<string, ExperienceText>;
  };
  stackTitle: string;
  projectsTitle: string;
  projects: Record<string, ProjectText>;
  lounge: {
    title: string;
    items: Record<string, { category: string; subtitle: string }>;
  };
  language: { label: string };
  theme: { toggle: string };
}

const en: Dictionary = {
  meta: {
    title: "Akbar Maliki",
    description: "Software Engineer II specializing in backend and distributed systems.",
  },
  nav: { experience: "Experience", projects: "Projects", lounge: "Hobbies" },
  footer: {
    tagline: "© 2026 AKBAR MALIKI - SOFTWARE ENGINEER",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    email: "EMAIL",
  },
  profile: {
    role: "Software Engineer II",
    bio: "Software Engineer II at Hypefast, building high-performance backend APIs and distributed systems in Go, TypeScript, and Python.",
    highlight: "Engineering Scalable Systems. Reducing Latency.",
    education: "Bachelor of Computer Science, Universitas Indonesia (Graduated with Distinction)",
  },
  experience: {
    workTitle: "WORK EXPERIENCE",
    leadershipTitle: "LEADERSHIP EXPERIENCE",
    work: {
      hypefast: {
        period: "Aug 2024 - Present",
        role: "Software Engineer II",
        company: "Hypefast",
        location: "Jakarta, Indonesia",
        bullets: [
          "Technical lead for critical backend initiatives, working with the engineering manager to refine Product and Design specs into scalable system designs.",
          "Owned end-to-end design of multiple medium-to-large projects, from architecture and API contracts to implementation, and led cross-functional review with QA to ship with zero critical defects.",
          "Engineered high-performance APIs in Go, TypeScript, and Python, cutting average response times by up to [[60]]%.",
          "Architected a distributed system on Google Cloud Pub/Sub for asynchronous microservice communication, provisioned with Terraform to improve fault tolerance.",
          "Handled P0 production incidents in on-call rotations using Cloud Monitoring and Cloud Logging; implemented data encryption and security hardening for customer data across e-commerce and B2B platforms.",
          "Maintain Bitbucket CI/CD pipelines and integrated third-party APIs such as payment gateways and logistics aggregators.",
        ],
      },
      csl: {
        period: "Oct 2024 - Dec 2024",
        role: "Research Assistant",
        company: "Universitas Indonesia, Computer Systems Lab",
        location: "Remote",
        bullets: [
          "Built a real-time human detection system for a Multi-UAV data stream research project using Python, Kafka, and the YOLOv8 computer vision model.",
          "Analyzed system performance, reducing latency by up to 1000 ms and improving FPS by up to 50% compared to similar systems.",
          "Co-authored the official research paper through literature review, manuscript structuring, and publication standards.",
        ],
      },
      telkom: {
        period: "Jul 2023 - Dec 2023",
        role: "Backend Developer Intern",
        company: "Telkom Indonesia",
        location: "Jakarta, Indonesia",
        bullets: [
          "Developed a scalable Go web server with clean architecture and over 90% unit test coverage.",
          "Doubled table loading speed with server-side pagination and advanced PostgreSQL window functions.",
          "Streamlined project workflows with Jira and Bitbucket in a SCRUM framework, boosting team productivity by an estimated 25%.",
        ],
      },
    },
    leadership: {
      bangkit: {
        period: "Feb 2023 - Jul 2023",
        role: "Cloud Computing Cohort",
        company: "Bangkit Academy led by Google, Gojek, Tokopedia & Traveloka",
        location: "Indonesia",
        bullets: [
          "Led the capstone team: devised the project plan, designed the database architecture, and ran weekly progress meetings.",
          "Delivered the final project on schedule and presented it to a judging panel from Google, Gojek, Tokopedia, and Traveloka.",
        ],
      },
      compfest: {
        period: "Apr 2022 - Nov 2022",
        role: "Technical Committee",
        company: "COMPFEST",
        location: "Depok, Indonesia",
        bullets: [
          "Led a team of technical committee members to deploy and maintain all Capture The Flag (CTF) challenges with high availability.",
          "Built a load balancer for CTF problems using Dewacloud, and robust configurations with Docker Compose and NGINX, adding rate limiting to prevent DDoS attacks.",
        ],
      },
    },
  },
  stackTitle: "TECHNICAL STACK",
  projectsTitle: "PROJECTS",
  projects: {
    uav: {
      category: "DISTRIBUTED SYSTEMS",
      title: "Multi-UAV Data Stream",
      description:
        "Real-time human detection over multiple UAV video streams using YOLOv8 and Kafka. Cut latency by up to 1000 ms and improved FPS by up to 50%, and co-authored the published research paper.",
    },
    ajambeh: {
      category: "E-COMMERCE",
      title: "Pokemon Ajambeh Collectibles",
      description:
        "Developed a robust backend for a niche e-commerce platform specializing in rare collectibles, implementing secure inventory management and payment gateways.",
    },
    bangkit: {
      category: "MACHINE LEARNING",
      title: "Bangkit Academy Capstone",
      description:
        "Designed and deployed scalable API endpoints serving machine learning models for the final capstone project at Bangkit Academy.",
      badge: "DISTINCTION (TOP 500)",
    },
  },
  lounge: {
    title: "Hobbies",
    items: {
      games: { category: "Playing Games", subtitle: "" },
      comics: { category: "Reading Comics", subtitle: "Manga, Manhwa, Manhua" },
    },
  },
  language: { label: "Change language" },
  theme: { toggle: "Toggle theme" },
};

const id: Dictionary = {
  meta: {
    title: "Akbar Maliki",
    description: "Software Engineer II yang berfokus pada backend dan sistem terdistribusi.",
  },
  nav: { experience: "Pengalaman", projects: "Proyek", lounge: "Hobi" },
  footer: {
    tagline: "© 2026 AKBAR MALIKI - SOFTWARE ENGINEER",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    email: "EMAIL",
  },
  profile: {
    role: "Software Engineer II",
    bio: "Software Engineer II di Hypefast, membangun API backend berperforma tinggi dan sistem terdistribusi dengan Go, TypeScript, dan Python.",
    highlight: "Membangun Sistem Skalabel. Menekan Latensi.",
    education: "S1 Ilmu Komputer, Universitas Indonesia",
  },
  experience: {
    workTitle: "PENGALAMAN KERJA",
    leadershipTitle: "PENGALAMAN KEPEMIMPINAN",
    work: {
      hypefast: {
        period: "Agu 2024 - Sekarang",
        role: "Software Engineer II",
        company: "Hypefast",
        location: "Jakarta, Indonesia",
        bullets: [
          "Technical lead untuk inisiatif backend kritis, bekerja sama dengan engineering manager untuk menerjemahkan spesifikasi Product dan Design menjadi desain sistem yang skalabel.",
          "Memegang desain end-to-end untuk beberapa proyek skala menengah-besar, dari arsitektur dan kontrak API hingga implementasi, serta memimpin review lintas fungsi dengan QA sehingga rilis tanpa cacat kritis.",
          "Membangun API berperforma tinggi dengan Go, TypeScript, dan Python, memangkas rata-rata waktu respons hingga [[60]]%.",
          "Merancang sistem terdistribusi dengan Google Cloud Pub/Sub untuk komunikasi microservice asinkron, diprovisioning dengan Terraform untuk meningkatkan fault tolerance.",
          "Menangani insiden produksi P0 dalam rotasi on-call menggunakan Cloud Monitoring dan Cloud Logging; menerapkan enkripsi data dan penguatan keamanan untuk data pelanggan di platform e-commerce dan B2B.",
          "Mengelola pipeline CI/CD Bitbucket dan mengintegrasikan API pihak ketiga seperti payment gateway dan agregator logistik.",
        ],
      },
      csl: {
        period: "Okt 2024 - Des 2024",
        role: "Asisten Peneliti",
        company: "Universitas Indonesia, Computer Systems Lab",
        location: "Remote",
        bullets: [
          "Membangun sistem deteksi manusia real-time untuk proyek riset Multi-UAV data stream menggunakan Python, Kafka, dan model computer vision YOLOv8.",
          "Menganalisis performa sistem, menurunkan latensi hingga 1000 ms dan meningkatkan FPS hingga 50% dibandingkan sistem serupa.",
          "Turut menulis makalah penelitian resmi melalui kajian literatur, penyusunan naskah, dan pemenuhan standar publikasi.",
        ],
      },
      telkom: {
        period: "Jul 2023 - Des 2023",
        role: "Backend Developer Intern",
        company: "Telkom Indonesia",
        location: "Jakarta, Indonesia",
        bullets: [
          "Mengembangkan web server Go yang skalabel dengan clean architecture dan cakupan unit test di atas 90%.",
          "Menggandakan kecepatan pemuatan tabel dengan pagination sisi server dan PostgreSQL window function tingkat lanjut.",
          "Merapikan alur kerja proyek dengan Jira dan Bitbucket dalam kerangka SCRUM, meningkatkan produktivitas tim sekitar 25%.",
        ],
      },
    },
    leadership: {
      bangkit: {
        period: "Feb 2023 - Jul 2023",
        role: "Cohort Cloud Computing",
        company: "Bangkit Academy oleh Google, Gojek, Tokopedia & Traveloka",
        location: "Indonesia",
        bullets: [
          "Memimpin tim capstone: menyusun rencana proyek, merancang arsitektur database, dan memimpin rapat progres mingguan.",
          "Menyelesaikan proyek akhir tepat waktu dan mempresentasikannya di depan juri dari Google, Gojek, Tokopedia, dan Traveloka.",
        ],
      },
      compfest: {
        period: "Apr 2022 - Nov 2022",
        role: "Technical Committee",
        company: "COMPFEST",
        location: "Depok, Indonesia",
        bullets: [
          "Memimpin tim technical committee untuk men-deploy dan memelihara seluruh soal Capture The Flag (CTF) dengan ketersediaan tinggi.",
          "Membangun load balancer untuk soal CTF dengan Dewacloud, serta konfigurasi Docker Compose dan NGINX dengan rate limiting untuk mencegah serangan DDoS.",
        ],
      },
    },
  },
  stackTitle: "TECH STACK",
  projectsTitle: "PROYEK",
  projects: {
    uav: {
      category: "SISTEM TERDISTRIBUSI",
      title: "Multi-UAV Data Stream",
      description:
        "Deteksi manusia real-time dari beberapa aliran video UAV menggunakan YOLOv8 dan Kafka. Menurunkan latensi hingga 1000 ms dan meningkatkan FPS hingga 50%, serta turut menulis makalah penelitian yang dipublikasikan.",
    },
    ajambeh: {
      category: "E-COMMERCE",
      title: "Pokemon Ajambeh Collectibles",
      description:
        "Mengembangkan backend yang tangguh untuk platform e-commerce khusus barang koleksi langka, dengan manajemen inventaris yang aman dan payment gateway.",
    },
    bangkit: {
      category: "MACHINE LEARNING",
      title: "Bangkit Academy Capstone",
      description:
        "Merancang dan men-deploy endpoint API skalabel yang melayani model machine learning untuk proyek capstone akhir di Bangkit Academy.",
      badge: "DISTINCTION (TOP 500)",
    },
  },
  lounge: {
    title: "Hobi",
    items: {
      games: { category: "Main Game", subtitle: "" },
      comics: { category: "Baca Komik", subtitle: "Manga, Manhwa, Manhua" },
    },
  },
  language: { label: "Ganti bahasa" },
  theme: { toggle: "Ganti tema" },
};

const ja: Dictionary = {
  meta: {
    title: "Akbar Maliki",
    description: "バックエンドと分散システムを専門とするソフトウェアエンジニアII。",
  },
  nav: { experience: "経歴", projects: "プロジェクト", lounge: "趣味" },
  footer: {
    tagline: "© 2026 AKBAR MALIKI - ソフトウェアエンジニア",
    github: "GITHUB",
    linkedin: "LINKEDIN",
    email: "メール",
  },
  profile: {
    role: "ソフトウェアエンジニアII",
    bio: "Hypefastのソフトウェアエンジニア II。Go、TypeScript、Pythonで高性能なバックエンドAPIと分散システムを構築しています。",
    highlight: "スケーラブルなシステムを設計し、レイテンシを削減する。",
    education: "インドネシア大学 コンピュータサイエンス学士(優等卒業)",
  },
  experience: {
    workTitle: "職務経歴",
    leadershipTitle: "リーダーシップ経験",
    work: {
      hypefast: {
        period: "2024年8月 - 現在",
        role: "ソフトウェアエンジニア II",
        company: "Hypefast",
        location: "インドネシア・ジャカルタ",
        bullets: [
          "重要なバックエンド施策のテクニカルリードとして、エンジニアリングマネージャーと協力し、プロダクト・デザインの仕様をスケーラブルなシステム設計に落とし込みました。",
          "中〜大規模の複数プロジェクトで、アーキテクチャやAPI契約から実装までエンドツーエンドの設計を担当し、QAとのクロスファンクショナルなレビューを主導して、重大な不具合ゼロでリリースしました。",
          "Go、TypeScript、Pythonで高性能APIを開発し、平均応答時間を最大[[60]]%短縮しました。",
          "Google Cloud Pub/Subによる非同期マイクロサービス間通信の分散システムを設計し、Terraformでプロビジョニングして耐障害性を向上させました。",
          "オンコール当番でCloud MonitoringとCloud Loggingを用いてP0障害に対応。ECおよびB2Bプラットフォームの顧客データに対するデータ暗号化とセキュリティ強化を実施しました。",
          "BitbucketのCI/CDパイプラインの運用や、決済ゲートウェイ・物流アグリゲーターなどの外部API連携を行っています。",
        ],
      },
      csl: {
        period: "2024年10月 - 2024年12月",
        role: "リサーチアシスタント",
        company: "インドネシア大学 コンピュータシステムズラボ",
        location: "リモート",
        bullets: [
          "Python、Kafka、コンピュータビジョンモデルYOLOv8を用いて、Multi-UAVデータストリーム研究向けのリアルタイム人物検知システムを開発しました。",
          "システム性能を分析し、類似システムと比較してレイテンシを最大1000ms削減、FPSを最大50%向上させました。",
          "文献調査、原稿構成、出版基準への適合を通じて、公式の研究論文を共同執筆しました。",
        ],
      },
      telkom: {
        period: "2023年7月 - 2023年12月",
        role: "バックエンド開発インターン",
        company: "Telkom Indonesia",
        location: "インドネシア・ジャカルタ",
        bullets: [
          "クリーンアーキテクチャに基づくスケーラブルなGo製Webサーバーを開発し、90%以上のユニットテストカバレッジを達成しました。",
          "サーバーサイドページネーションとPostgreSQLの高度なウィンドウ関数により、テーブル読み込み速度を2倍に改善しました。",
          "SCRUMの枠組みでJiraとBitbucketを導入してワークフローを効率化し、チームの生産性を約25%向上させました。",
        ],
      },
    },
    leadership: {
      bangkit: {
        period: "2023年2月 - 2023年7月",
        role: "クラウドコンピューティング コホート",
        company: "Bangkit Academy(Google、Gojek、Tokopedia、Traveloka主導)",
        location: "インドネシア",
        bullets: [
          "キャップストーンチームを率い、プロジェクト計画の策定、データベース設計、毎週の進捗ミーティングを主導しました。",
          "最終プロジェクトを期限内に完成させ、Google、Gojek、Tokopedia、Travelokaの審査員団の前で発表しました。",
        ],
      },
      compfest: {
        period: "2022年4月 - 2022年11月",
        role: "テクニカル委員会",
        company: "COMPFEST",
        location: "インドネシア・デポック",
        bullets: [
          "技術委員会のメンバーを率い、すべてのCapture The Flag(CTF)問題を高可用性でデプロイ・運用しました。",
          "Dewacloudを用いたCTF問題用ロードバランサーと、Docker ComposeおよびNGINXによる堅牢な構成を構築し、レート制限でDDoS攻撃を防止しました。",
        ],
      },
    },
  },
  stackTitle: "技術スタック",
  projectsTitle: "プロジェクト",
  projects: {
    uav: {
      category: "分散システム",
      title: "Multi-UAV Data Stream",
      description:
        "YOLOv8とKafkaを用いた、複数UAV映像ストリームのリアルタイム人物検知。レイテンシを最大1000ms削減、FPSを最大50%向上させ、公開された研究論文を共同執筆しました。",
    },
    ajambeh: {
      category: "Eコマース",
      title: "Pokemon Ajambeh Collectibles",
      description:
        "希少なコレクターズアイテムに特化したニッチなECプラットフォームの堅牢なバックエンドを開発し、安全な在庫管理と決済ゲートウェイを実装しました。",
    },
    bangkit: {
      category: "機械学習",
      title: "Bangkit Academy Capstone",
      description:
        "Bangkit Academyの最終キャップストーンプロジェクトとして、機械学習モデルを提供するスケーラブルなAPIエンドポイントを設計・デプロイしました。",
      badge: "優等(上位500名)",
    },
  },
  lounge: {
    title: "趣味",
    items: {
      games: { category: "ゲーム", subtitle: "" },
      comics: { category: "漫画を読む", subtitle: "マンガ、マンファ、マンホア" },
    },
  },
  language: { label: "言語を変更" },
  theme: { toggle: "テーマを切り替え" },
};

export const dictionaries: Record<Locale, Dictionary> = { en, id, ja };
export const defaultLocale: Locale = "en";
