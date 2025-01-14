export type WorkList = WorkSingle[];

export type WorkSingle = {
  title: string;
  descritption: string;
  path: string;
  url: string;
  skills: SkillItem[];
};

export type SkillItem = {
  name: string;
  path: string;
};
