import { SkillList } from "../types/skill";

export const SKILL_LIST: SkillList = [
  {
    name: "Front-end",
    skillList: [
      {
        name: "React / TS / Next.js",
        image: "/skill/react.svg",
        content: "SPA・SSGでの個人Webサイト・アプリ開発",
        experience: "1year",
      },
      {
        name: "Vue2 / JS / Nuxt.js",
        image: "/skill/vue.svg",
        content: "SPA・SSGでの個人Webサイト・アプリ開発/業務用ツール開発",
        experience: "1year",
      },
    ],
    color: "#32cd32",
  },
  {
    name: "Back-end",
    skillList: [
      {
        name: "Java / SpringFramework",
        image: "/skill/java.svg",
        content:
          "業務でのアプリケーション開発他(オブジェクト指向・API設計・DB接続(JPA)・セキュリティ制御・SSRによるアプリケーション設計と実装)",
        experience: "1year",
      },
      {
        name: "Kotlin / SpringFramework",
        image: "/skill/kotlin.svg",
        content:
          "業務でのアプリケーション開発他(API設計・セキュリティ制御・SSRによるサイト構築)",
        experience: "2year",
      },
    ],
    color: "#1e90ff",
  },
  {
    name: "Infrastructure",
    skillList: [
      {
        name: "AWS",
        image: "/skill/aws.svg",
        content: "業務・個人でのインフラ構築(設計・CFnによるIaC・CICD構築)",
        experience: "2year",
      },
    ],
    color: "#ba55d3",
  },
  {
    name: "MachineLearning",
    skillList: [
      {
        name: "Python",
        image: "/skill/python.svg",
        content: "進化計算アルゴリズムによる計算量最適化他",
        experience: "2year",
      },
    ],
    color: "#ffa500",
  },

  {
    name: "Tools",
    skillList: [
      {
        name: "GA4/GTM",
        image: "/skill/gtm.svg",
        content: "サイト内イベント計測・GA3からの移行",
        experience: "2year",
      },
      {
        name: "GitHub",
        image: "/skill/github.svg",
        content: "コード管理・ドキュメント管理・GitHub Actionsを用いたCICD設計",
        experience: "2year",
      },
    ],
    color: "#cd5c5c",
  },
];
