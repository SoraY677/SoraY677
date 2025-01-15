type Route = {
  path: string;
  text: string;
  icon: ({ fillStyle }: { fillStyle: string }) => React.ReactElement;
};

export type Routes = Route[];
