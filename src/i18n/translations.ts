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
  /** Use [[1000]] or [[60]] to render an animated counter */
  bullets: string[];
}

export interface ProjectText {
  category: string;
  title: string;
  description: string;
  badge?: string;
}

export interface NewspaperHeader {
  volume: string;
  location: string;
  date: string;
  price: string;
  weather: string;
  circulation: string;
  masthead: string;
  subTitle: string;
  motto: string;
  leadKicker: string;
  leadHeadline: string;
  leadSubhead: string;
  byline: string;
  photoCaption: string;
  pullQuote: string;
  indexTitle: string;
  academicTitle: string;
  academicSubtitle: string;
  sectionExperience: string;
  sectionLeadership: string;
  sectionProjects: string;
  sectionHobbies: string;
  wireLinks: { github: string; linkedin: string; email: string };
  teletypeTitle: string;
  metricDefects: string;
  metricOnTime: string;
  metricRating: string;
  metricInfra: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: { front: string; experience: string; projects: string; lounge: string };
  footer: { tagline: string; github: string; linkedin: string; email: string; colophon: string };
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
  theme: { toggle: string; morning: string; midnight: string };
  newspaper: NewspaperHeader;
}

const en: Dictionary = {
  meta: {
    title: "The Maliki Chronicle | Akbar Maliki",
    description: "The Independent Journal of Distributed Systems & Enterprise B2B Backend Architecture by Akbar Maliki.",
  },
  nav: {
    front: "Front Page",
    experience: "Industry Dispatches",
    projects: "Patents & Projects",
    lounge: "Sunday Comics",
  },
  footer: {
    tagline: "© 2026 THE MALIKI CHRONICLE · PUBLISHED DAILY IN JAKARTA · ALL RIGHTS RESERVED",
    github: "TELEGRAPH / GITHUB",
    linkedin: "WIRE / LINKEDIN",
    email: "DISPATCH / EMAIL",
    colophon: "SET IN NEWSPAPER TYPES NEWSREADER & PLAYFAIR DISPLAY · COMPILED WITH ZERO CRITICAL DEFECTS",
  },
  profile: {
    role: "Software Engineer II (Backend Lead / System Design)",
    bio: "Software Engineer II at Hypefast (Indonesia's leading brand aggregator), leading backend system design and scalable microservices in Go, PostgreSQL, Google Cloud Tasks, Pub/Sub, and Terraform. Consecutively awarded 'Exceeds Expectations' with 0 critical defects across all production releases.",
    highlight: "Architecting B2B Systems for Top Indonesian Brands · 0 Critical Defects · 100% On-Time Delivery",
    education: "Bachelor of Computer Science, Universitas Indonesia (Graduated with Distinction / Cum Laude) · English: IELTS 7.0 (Business) · Japanese: Basic Learner (Duolingo A1/A2)",
  },
  experience: {
    workTitle: "INDUSTRY CHRONICLES & WORK EXPERIENCE",
    leadershipTitle: "CIVIC FORUM & LEADERSHIP INITIATIVES",
    work: {
      hypefast: {
        period: "Aug 2024 - Present",
        role: "Software Engineer II (Backend Lead)",
        company: "Hypefast",
        location: "Jakarta, Indonesia",
        bullets: [
          "Backend Lead for mission-critical B2B enterprise initiatives, translating Product and Design specs into scalable microservices and database schemas supporting Indonesia's leading consumer brands at Hypefast.",
          "Architected a high-throughput bulk order creation pipeline using Go, Google Cloud Tasks, and PostgreSQL, processing up to [[1000]] orders per upload with automated pre-checkout SKU stock validation and zero race conditions.",
          "Engineered an append-only consignment stock ledger with SKU row-level locking and idempotent webhooks, recovering accountability for ~20% of previously untracked consignment stock across retail outlets.",
          "Designed a centralized B2B Customer Hub merging multi-vendor ERP and accounting data (Jurnal & Jubelio) into a single source of truth with hash-encrypted PII and rate-limited Pub/Sub workers.",
          "Codified 100% of cloud infrastructure with Terraform, slashing environment replication time by 80%, while maintaining 0 critical defects and a 100% on-time delivery record (2 consecutive years 'Exceeds Expectations').",
          "Handled P0 production incidents in on-call rotations, maintaining zero carry-over delays and delivering key milestones up to 2 weeks ahead of schedule.",
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
  stackTitle: "COMMODITIES & TECH WIRE",
  projectsTitle: "SCIENTIFIC PATENTS & PROJECTS",
  projects: {
    bulkOrder: {
      category: "ENTERPRISE B2B PIPELINE",
      title: "High-Throughput Bulk Order Creation System",
      badge: "1,000 ORDERS / BATCH",
      description:
        "Scalable bulk order processing pipeline handling hundreds of B2B orders from single XLSX uploads. Features Google Cloud Tasks async queuing, pre-checkout SKU stock validation, database-level locking to prevent race conditions, and automated XLSX recap reports.",
    },
    salesSystem: {
      category: "WORKFLOW ENGINE & STATE MACHINE",
      title: "B2B Unified Sales & Multi-Tier Approval Platform",
      badge: "3-LEVEL APPROVAL FLOW",
      description:
        "Enterprise sales platform digitalizing order creation with up to 3-level configurable approval workflows based on order amounts. Enforces strict consistency via database transactions with automated rollback on third-party failure and table locks during pending state transitions.",
    },
    consignment: {
      category: "INVENTORY AUDIT & INTEGRITY",
      title: "B2B Consignment Stock Ledger System",
      badge: "RECOVERED ~20% UNTRACKED STOCK",
      description:
        "Per-customer verified stock ledger tracking consignment goods placed across retail outlets, replacing error-prone manual spreadsheets where ~20% of inventory was unaccounted for. Implemented append-only event logging, SKU row-level locking, and idempotent webhook reconciliation.",
    },
    customerHub: {
      category: "DATA RECONCILIATION & SEC",
      title: "B2B Customer Hub & Single Source of Truth",
      badge: "UNIFIED ERP & CRM DATA",
      description:
        "Centralized platform merging disparate third-party data sources (Jurnal & Jubelio) into a single high-performance customer directory. Features hash-based encrypted PII search, rate-limited Pub/Sub background workers, and automated historical order reconciliation.",
    },
    uav: {
      category: "DISTRIBUTED STREAMING & AI",
      title: "Multi-UAV Disaster Area Monitoring (Kafka Framework)",
      badge: "PUBLISHED RESEARCH PAPER",
      description:
        "Real-time multi-drone video streaming and human detection pipeline using Apache Kafka (FogVerse framework) and YOLOv8n. Achieved under 0.5s average streaming latency and higher FPS than existing state-of-the-art benchmarks in resource-constrained environments.",
    },
  },
  lounge: {
    title: "Sunday Comics & Amusements",
    items: {
      games: { category: "Gaming Dispatch", subtitle: "Tactical arenas & digital recreation" },
      comics: { category: "Serialized Comics", subtitle: "Manga, Manhwa & Weekly Chronicles" },
    },
  },
  language: { label: "Select Broadsheet Edition" },
  theme: { toggle: "Toggle Printing Edition", morning: "Morning Edition", midnight: "Midnight Wire" },
  newspaper: {
    volume: "VOL. XXVI · NO. 104",
    location: "JAKARTA BUREAU",
    date: "SUNDAY, OCTOBER 18, 2026",
    price: "RELEASE QUALITY: 0 CRITICAL DEFECTS",
    weather: "DELIVERY: 100% ON-TIME · 0 DELAYS",
    circulation: "PRODUCTION SCALE: 1,000+ ORDERS/BATCH",
    masthead: "THE MALIKI CHRONICLE",
    subTitle: "THE INDEPENDENT JOURNAL OF DISTRIBUTED SYSTEMS & ENTERPRISE B2B ARCHITECTURE",
    motto: "ALL THE SERVICES FIT TO SCALE · FOUNDED MMXX",
    leadKicker: "FRONT PAGE SPECIAL DISPATCH · ENTERPRISE SYSTEM ARCHITECTURE",
    leadHeadline: "BACKEND LEAD ARCHITECTS B2B SYSTEMS FOR INDONESIA'S FAMOUS CONSUMER BRANDS",
    leadSubhead: "At Hypefast, Akbar Maliki spearheads high-concurrency order pipelines, audited stock ledgers, and automated cloud workflows—eliminating inventory loss and maintaining 0 critical defects for 2 consecutive years.",
    byline: "SPECIAL DISPATCH BY OUR CHIEF TECHNICAL CORRESPONDENT",
    photoCaption: "FIG. 1 — Akbar Maliki, Software Engineer II & Backend Lead. (Photo: Maliki Archive)",
    pullQuote: "“Architecting resilient B2B platforms, idempotent event pipelines, and zero-defect cloud infrastructure for Indonesia's premier consumer brands.”",
    indexTitle: "TECHNICAL COMMODITIES EXCHANGE",
    academicTitle: "ACADEMIC & CREDENTIAL RECORD",
    academicSubtitle: "Bachelor of Computer Science, Universitas Indonesia · Graduated with Distinction / Cum Laude",
    sectionExperience: "PAGE II — CAREERS & CHRONICLES OF INDUSTRY",
    sectionLeadership: "PAGE III — PUBLIC FORUM & LEADERSHIP INITIATIVES",
    sectionProjects: "PAGE IV — SPECIAL PATENTS & APPLIED INVENTIONS",
    sectionHobbies: "THE SUNDAY SUPPLEMENT — COMICS & AMUSEMENTS",
    wireLinks: { github: "TELEGRAPH / GITHUB", linkedin: "WIRE / LINKEDIN", email: "DIRECT DISPATCH" },
    teletypeTitle: "TELETYPE LOG · CLOUD TASKS ASYNC PIPELINE",
    metricDefects: "CRITICAL DEFECTS ON RELEASES",
    metricOnTime: "1-YEAR ON-TIME DELIVERY",
    metricRating: "CONSECUTIVE EXCEEDS EXPECTATIONS",
    metricInfra: "TERRAFORM REPLICATION TIME",
  },
};

const id: Dictionary = {
  meta: {
    title: "Kronik Maliki | Akbar Maliki",
    description: "Warta Independen Sistem Terdistribusi & Arsitektur Backend B2B Enterprise oleh Akbar Maliki.",
  },
  nav: {
    front: "Halaman Utama",
    experience: "Warta Industri",
    projects: "Paten & Proyek",
    lounge: "Suplemen Komik",
  },
  footer: {
    tagline: "© 2026 KRONIK MALIKI · DITERBITKAN SETIAP HARI DI JAKARTA · HAK CIPTA DILINDUNGI",
    github: "TELEGRAF / GITHUB",
    linkedin: "KABEL WARTA / LINKEDIN",
    email: "SURAT LANGSUNG / EMAIL",
    colophon: "DICETAK DENGAN TIPOGRAFI NEWSREADER & PLAYFAIR DISPLAY · DIRANCANG TANPA CACAT KRITIS",
  },
  profile: {
    role: "Software Engineer II (Backend Lead / System Design)",
    bio: "Software Engineer II di Hypefast (brand aggregator terdepan di Indonesia), memimpin perancangan sistem backend dan arsitektur microservices berskala tinggi dengan Go, PostgreSQL, Google Cloud Tasks, Pub/Sub, dan Terraform. Meraih predikat 'Exceeds Expectations' 2 tahun berturut-turut dengan 0 cacat kritis pada seluruh rilis produksi.",
    highlight: "Merancang Sistem B2B untuk Brand Ternama Indonesia · 0 Cacat Kritis · 100% Tepat Waktu",
    education: "S1 Ilmu Komputer, Universitas Indonesia (Lulus dengan Predikat Cum Laude) · Bahasa Inggris: IELTS 7.0 (Bisnis) · Bahasa Jepang: Pemula (Duolingo A1/A2)",
  },
  experience: {
    workTitle: "KRONIK INDUSTRI & PENGALAMAN KERJA",
    leadershipTitle: "FORUM KEPEMIMPINAN & INISIATIF PUBLIK",
    work: {
      hypefast: {
        period: "Agu 2024 - Sekarang",
        role: "Software Engineer II (Backend Lead)",
        company: "Hypefast",
        location: "Jakarta, Indonesia",
        bullets: [
          "Backend Lead untuk inisiatif enterprise B2B krusial, menerjemahkan kebutuhan Produk dan Desain menjadi arsitektur microservices dan skema database yang skalabel bagi deretan brand konsumen terkemuka di Indonesia.",
          "Merancang pipeline pemrosesan pesanan massal berkinerja tinggi dengan Go, Google Cloud Tasks, dan PostgreSQL, memproses hingga [[1000]] pesanan per unggahan dengan validasi stok SKU pra-checkout dan nol race condition.",
          "Membangun buku besar konsinyasi append-only dengan penguncian level baris SKU dan webhook idempoten, mengembalikan transparansi pencatatan untuk ~20% stok konsinyasi yang sebelumnya tidak terlacak di gerai ritel.",
          "Merancang B2B Customer Hub terpadu yang merekonsiliasi data ERP dan akuntansi multi-vendor (Jurnal & Jubelio) menjadi single source of truth dengan pencarian PII terenkripsi dan worker Pub/Sub berbatas laju.",
          "Mengotomatisasi 100% infrastruktur cloud dengan Terraform, memangkas waktu replikasi lingkungan hingga 80%, serta mempertahankan 0 cacat kritis dan rekor 100% pengiriman tepat waktu (2 tahun berturut-turut predikat 'Exceeds Expectations').",
          "Menangani insiden produksi P0 dalam rotasi on-call, menjaga nol penundaan tugas, dan menyelesaikan rilis utama hingga 2 minggu lebih cepat dari jadwal.",
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
  stackTitle: "KOMODITAS & INDEKS TEKNIK",
  projectsTitle: "PATEN SAINS & PROYEK REKAYASA",
  projects: {
    bulkOrder: {
      category: "PIPELINE B2B ENTERPRISE",
      title: "High-Throughput Bulk Order Creation System",
      badge: "1.000 PESANAN / BATCH",
      description:
        "Pipeline pemrosesan pesanan massal berskala tinggi untuk memproses ratusan pesanan B2B dari satu file XLSX. Dilengkapi antrean asinkron Google Cloud Tasks, validasi stok SKU pra-checkout, penguncian level database untuk mencegah race condition, serta rekap otomatis via email dan XLSX.",
    },
    salesSystem: {
      category: "ENGINE WORKFLOW & STATE MACHINE",
      title: "Platform Penjualan B2B & Persetujuan Multi-Level",
      badge: "ALUR PERSETUJUAN 3 TINGKAT",
      description:
        "Platform penjualan B2B enterprise yang mendigitalkan pembuatan pesanan dengan alur persetujuan hingga 3 tingkat berdasarkan nilai pesanan. Menjamin konsistensi data melalui transaksi database dengan rollback otomatis saat pihak ketiga gagal serta penguncian tabel selama proses persetujuan.",
    },
    consignment: {
      category: "AUDIT & INTEGRITAS INVENTARIS",
      title: "Sistem Buku Besar Konsinyasi B2B",
      badge: "SELAMATKAN ~20% STOK HILANG",
      description:
        "Buku besar stok terverifikasi per pelanggan untuk melacak barang konsinyasi di gerai ritel, menggantikan formulir manual di mana ~20% inventaris sebelumnya tidak terlacak. Menggunakan buku besar append-only, penguncian level baris SKU, dan rekonsiliasi webhook yang idempoten.",
    },
    customerHub: {
      category: "REKONSILIASI DATA & KEAMANAN",
      title: "B2B Customer Hub & Single Source of Truth",
      badge: "INTEGRASI ERP & CRM",
      description:
        "Platform terpusat yang menggabungkan data pihak ketiga yang terfragmentasi (Jurnal & Jubelio) menjadi satu direktori pelanggan terpadu berkinerja tinggi. Dilengkapi pencarian PII terenkripsi berbasis hash, worker Pub/Sub berbatas laju, dan rekonsiliasi pesanan historis.",
    },
    uav: {
      category: "WARTA SISTEM TERDISTRIBUSI",
      title: "Multi-UAV Real-Time Data Stream (Kafka Framework)",
      badge: "PUBLIKASI MAKALAH RESMI",
      description:
        "Pipeline streaming video multi-drone real-time dan deteksi manusia menggunakan Apache Kafka (framework FogVerse) dan YOLOv8n. Mencapai latensi rata-rata di bawah 0,5 detik serta FPS yang lebih stabil dibanding benchmark state-of-the-art di lingkungan jaringan terbatas.",
    },
  },
  lounge: {
    title: "Suplemen Minggu & Hiburan",
    items: {
      games: { category: "Warta Permainan", subtitle: "Arena taktis & hiburan digital" },
      comics: { category: "Komik Bersambung", subtitle: "Manga, Manhwa & Catatan Mingguan" },
    },
  },
  language: { label: "Pilih Edisi Koran" },
  theme: { toggle: "Ganti Edisi Cetak", morning: "Edisi Pagi", midnight: "Edisi Malam" },
  newspaper: {
    volume: "VOL. XXVI · EDISI 104",
    location: "BIRO JAKARTA",
    date: "MINGGU, 18 OKTOBER 2026",
    price: "KUALITAS RILIS: 0 CACAT KRITIS",
    weather: "PENGIRIMAN: 100% TEPAT WAKTU · 0 KETERLAMBATAN",
    circulation: "SKALA PRODUKSI: 1.000+ PESANAN/BATCH",
    masthead: "KRONIK MALIKI",
    subTitle: "WARTA INDEPENDEN SISTEM TERDISTRIBUSI & ARSITEKTUR B2B ENTERPRISE",
    motto: "SELURUH LAYANAN YANG ANDAL DAN SKALABEL · BERDIRI MMXX",
    leadKicker: "WARTA UTAMA HALAMAN DEPAN · ARSITEKTUR SISTEM ENTERPRISE",
    leadHeadline: "RANCANG & PIMPIN SISTEM BACKEND B2B UNTUK DERETAN BRAND TERNAMA INDONESIA",
    leadSubhead: "Di Hypefast, Akbar Maliki memimpin perancangan pipeline order massal, buku besar stok terverifikasi, dan alur kerja cloud otomatis—menghapus risiko selisih inventaris serta mempertahankan 0 cacat kritis selama 2 tahun berturut-turut.",
    byline: "LAPORAN KHUSUS OLEH KORESPONDEN TEKNIK UTAMA",
    photoCaption: "GMB. 1 — Akbar Maliki, Software Engineer II & Backend Lead. (Foto: Arsip Maliki)",
    pullQuote: "“Merancang platform B2B yang tangguh, pipeline event yang idempoten, dan infrastruktur cloud tanpa cacat untuk brand konsumen terkemuka di Indonesia.”",
    indexTitle: "INDEKS KOMODITAS & TEKNOLOGI",
    academicTitle: "CATATAN DEWAN AKADEMIK",
    academicSubtitle: "Sarjana Ilmu Komputer, Universitas Indonesia · Lulus dengan Predikat Cum Laude",
    sectionExperience: "HALAMAN II — KRONIK KARIER & INDUSTRI",
    sectionLeadership: "HALAMAN III — FORUM PUBLIK & KEPEMIMPINAN",
    sectionProjects: "HALAMAN IV — PATEN REKAYASA & KARYA KHUSUS",
    sectionHobbies: "SUPLEMEN MINGGU — KOMIK & HIBURAN",
    wireLinks: { github: "TELEGRAF / GITHUB", linkedin: "KABEL WARTA / LINKEDIN", email: "SURAT LANGSUNG" },
    teletypeTitle: "CATATAN TELETIK · PIPELINE ASINKRON CLOUD TASKS",
    metricDefects: "CACAT KRITIS PADA RILIS",
    metricOnTime: "PENGIRIMAN 1 TAHUN TEPAT WAKTU",
    metricRating: "PREDIKAT EXCEEDS EXPECTATIONS",
    metricInfra: "EFISIENSI WAKTU REPLIKASI INFRA",
  },
};

const ja: Dictionary = {
  meta: {
    title: "マリキ・クロニクル紙 | Akbar Maliki",
    description: "分散システムとエンタープライズB2Bバックエンド設計の独立日刊紙（Akbar Maliki 著）。",
  },
  nav: {
    front: "第一面",
    experience: "産業通信",
    projects: "特許・研究",
    lounge: "日曜漫画欄",
  },
  footer: {
    tagline: "© 2026 マリキ・クロニクル紙 · ジャカルタ日刊発行 · 無断転載を禁ず",
    github: "電報通信 / GITHUB",
    linkedin: "有線通信 / LINKEDIN",
    email: "直行電書 / EMAIL",
    colophon: "NEWSREADERおよびPLAYFAIR DISPLAY活字使用 · 致命的不具合ゼロにて組版",
  },
  profile: {
    role: "ソフトウェアエンジニアII (バックエンドリード / システム設計)",
    bio: "インドネシア最大手ブランドアグリゲーターHypefastのソフトウェアエンジニアII。Go、PostgreSQL、Cloud Tasks、Pub/Sub、Terraformによる高負荷B2Bマイクロサービスのシステム設計とリードを担当。2年連続で最高評価「期待以上（Exceeds Expectations）」を獲得し、本番重大欠陥ゼロを継続。",
    highlight: "インドネシア有数ブランドのB2B基幹システムを設計 · 重大欠陥ゼロ · 100%納期遵守",
    education: "インドネシア大学 コンピュータサイエンス学部 卒業（優等／Cum Laude取得） · 英語：IELTS 7.0（ビジネスレベル） · 日本語：基礎学習中（A1/A2レベル）",
  },
  experience: {
    workTitle: "職務経歴・産業通信録",
    leadershipTitle: "指導力発揮・公共事業記録",
    work: {
      hypefast: {
        period: "2024年8月 - 現在",
        role: "ソフトウェアエンジニア II (バックエンドリード)",
        company: "Hypefast",
        location: "インドネシア・ジャカルタ",
        bullets: [
          "インドネシア有数の消費者ブランドを統括するHypefastにて、ミッションクリティカルなB2B基幹マイクロサービスのテクニカルリードおよびシステム設計を担当。",
          "Go、Google Cloud Tasks、PostgreSQLを用いた高負荷一括注文処理パイプラインを設計。1ファイルあたり最大[[1000]]件の注文を並行処理し、全SKU事前在庫引当とDB排他制御でデータ競合ゼロを達成。",
          "店舗預託在庫の約20%が使途不明となっていた課題を解決するため、追記専用（Append-only）台帳、SKU単位の行ロック、冪等なWebhook処理を備えた委託在庫システムを構築。",
          "複数外部システム（JurnalおよびJubelio）に分散していた顧客・購買データを統合するB2B顧客基盤を構築。PII暗号化検索およびPub/Subレートリミットを実装。",
          "Terraformによるインフラの完全コード化（IaC）を主導し、環境構築時間を80%短縮。全機能で本番重大障害ゼロ、1年間のタスク遅延ゼロ（100%納期遵守）を維持し、2年連続で最高評価「期待以上（Exceeds Expectations）」を獲得。",
          "オンコール体制でのP0重大障害対応および迅速な復旧を主導し、タスク配分最適化によりスケジュールを最大2週間前倒しで達成。",
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
        company: "Bangkit Academy (Google、Gojek、Tokopedia、Traveloka主導)",
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
  stackTitle: "技術相場・通信インデックス",
  projectsTitle: "特別特許・応用科学記録",
  projects: {
    bulkOrder: {
      category: "エンタープライズB2Bパイプライン",
      title: "大量一括受発注処理システム (Bulk Order System)",
      badge: "バッチあたり1,000件処理",
      description:
        "1つのXLSXファイルから数百〜1,000件規模のB2B注文をバックグラウンド並行処理する一括注文基盤。Cloud Tasks非同期キュー、全SKU事前在庫引当判定、DB排他ロックによるデータ競合ゼロ、自動結果レポート配信を設計。",
    },
    salesSystem: {
      category: "ワークフローエンジン・承認基盤",
      title: "B2B統合販売 & 多階層承認プラットフォーム",
      badge: "3段階 承認スキーマ",
      description:
        "金額条件に応じた最大3段階の承認フローを備えたB2B受発注プラットフォーム。外部WMS連携失敗時の自動ロールバック付きDBトランザクションと、承認待ち状態のテーブル排他制御により厳格な整合性を担保。",
    },
    consignment: {
      category: "在庫監査・データ整合性基盤",
      title: "B2B委託販売 在庫台帳システム (Consignment Ledger)",
      badge: "不明在庫約20%を解消",
      description:
        "店舗預託在庫の約20%が使途不明となっていた手動管理を撤廃し、顧客ごとの厳密な在庫台帳システムを構築。追記専用（Append-only）台帳、SKU単位の行ロック、二重計上を防ぐ冪等なWebhook処理を実装。",
    },
    customerHub: {
      category: "データ統合・セキュリティ",
      title: "B2B顧客統合ハブ (Customer Hub)",
      badge: "外部ERP・在庫データ統合",
      description:
        "JurnalとJubelioの複数外部システムに分散していた顧客・購買データを一元集約する基盤。個人情報（PII）のハッシュ化暗号化検索、外部API制限を遵守するPub/Subレートリミットワーカー、過去注文の紐付けバックフィルを実現。",
    },
    uav: {
      category: "分散ストリーミング & AI",
      title: "Multi-UAV 災害監視映像配信網 (Kafkaフレームワーク)",
      badge: "学会発表・公式論文採択",
      description:
        "災害被災地を想定し、複数ドローンからのリアルタイム映像配信とYOLOv8n深層学習による遭難者検知システムを構築。KafkaによるPub/Sub分散パイプラインにより、平均0.5秒未満の低遅延かつ高安定FPSを実証。",
    },
  },
  lounge: {
    title: "日曜付録・娯楽欄",
    items: {
      games: { category: "競技電玩通信", subtitle: "戦術アリーナと電脳娯楽" },
      comics: { category: "連載漫画選集", subtitle: "漫画・マンファ・週刊連載録" },
    },
  },
  language: { label: "新聞版の選択" },
  theme: { toggle: "版（テーマ）切替", morning: "朝刊版", midnight: "夜刊・電信版" },
  newspaper: {
    volume: "第26巻 · 第104号",
    location: "ジャカルタ総局",
    date: "2026年10月18日 (日曜日)",
    price: "品質実績: 重大欠陥ゼロ",
    weather: "納期実績: 100%納期遵守 · 遅延ゼロ",
    circulation: "稼働規模: バッチあたり1,000件以上",
    masthead: "マリキ・クロニクル紙",
    subTitle: "分散システムとエンタープライズB2Bバックエンド設計の独立日刊紙",
    motto: "拡張に耐えうるすべての設計をここに · 2020年創刊",
    leadKicker: "一面独占速報 · エンタープライズシステム設計",
    leadHeadline: "インドネシア有数ブランドを支えるB2B基幹バックエンドシステムを設計・主導",
    leadSubhead: "Hypefastにて大規模B2B一括発注、在庫台帳、顧客基盤マイクロサービスをリードし、在庫不整合リスクを根絶。2年連続「期待以上」評価と重大欠陥ゼロを達成。",
    byline: "特任システム特派員による特別報道",
    photoCaption: "写真1 — Akbar Maliki（ソフトウェアエンジニア II & バックエンドリード）。（写真提供：マリキ写真部）",
    pullQuote: "“インドネシア有数ブランドのため、高並行B2Bプラットフォーム、冪等なイベントパイプライン、障害ゼロのクラウド基盤を設計する。”",
    indexTitle: "技術相場・通信インデックス",
    academicTitle: "学術評議会録・語学資格",
    academicSubtitle: "インドネシア大学 コンピュータサイエンス学士 · 優等卒業（Cum Laude取得）",
    sectionExperience: "第二面 — 産業通信録・職務経歴",
    sectionLeadership: "第三面 — 公共フォーラム・指導力記録",
    sectionProjects: "第四面 — 特別特許・応用科学記録",
    sectionHobbies: "日曜付録 — 漫画・娯楽選集",
    wireLinks: { github: "電報 / GITHUB", linkedin: "有線 / LINKEDIN", email: "直行電書" },
    teletypeTitle: "電信受信記録 · CLOUD TASKS 非同期パイプライン",
    metricDefects: "本番リリース時の重大不具合",
    metricOnTime: "1年間の納期遵守率（遅延ゼロ）",
    metricRating: "2期連続 最高評価「期待以上」",
    metricInfra: "Terraformによる環境構築削減率",
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, id, ja };
export const defaultLocale: Locale = "en";
