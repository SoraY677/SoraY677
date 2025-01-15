export type SkillSingle = {
  name: string;
  image: string;
  content: string;
  experience: string;
};

export type SkillExample = {
  name: string;
  url: string;
  period: string;
};

export type SkillGroup = {
  name: string;
  skillList: SkillSingle[];
  color: string;
};

export type SkillList = SkillGroup[];
