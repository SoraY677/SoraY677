import Universe from "../components/Universe/index";

type Props = {
  children: React.ReactElement;
};

export default function CommonLayout({ children }: Props) {
  return <main className="absolute top-0 left-0 h-dvh w-dvw">{children}</main>;
}
