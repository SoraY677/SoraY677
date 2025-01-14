export type OtherList = OtherGroup[];

export type OtherGroup = {
  name: string;
  example: OtherSingle[];
};

export type OtherSingle = {
  name: string;
  url: string;
};
