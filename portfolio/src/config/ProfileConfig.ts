import { getAge } from "../logic/profile";

export const PROFILE_IMAGES = [
  "https://noted.run/wp-content/uploads/2024/07/B0008382-1.webp",
  "/normal-icon.png",
];
export const PROFILE_IMAGE_FADE_DURATION = 5000;

export const PROFILE_NAME = "SoraY";
export const PROFILE_BASE_INFO_MAP = {
  BIRTH: `1998.11.19 (${getAge("1998-11-19")} years old)`,
  ADDRESS: `Kanagawa, Japan.`,
  HOBBY:
    "コーディング（ほぼ毎日）・筋トレ(さぼりがち)・サウナ(東京・神奈川周辺)・日本酒（自宅に日本酒セラー作成を画策中）",
};
export const PROFILE_CONTENT = `こんにちは！
エンジニアのSoraです。
とは言いつつ、「ITなんでも屋さん」と思ってもらえれば。

既存の型や体裁にとらわれず、
時には現場に赴き、時にはじっくりと腰を据えて、
ユーザの「本当の悩み」に向き合って解決することを大事にしています。

悩みはありませんか？大小や領域は問いません。
なんとなく形になっていなくても、
一緒に悩むことで言語化して解決のお手伝いができるはずです。

是非お気軽にご連絡ください。
`;
