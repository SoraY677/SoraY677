import useIsClientHook from "../hooks/useIsClientHook";
import Link from "next/link";

type Props = {
  routes?: Routes;
};

const Menu = ({ routes = [] }: Props) => {
  const isClient = useIsClientHook();

  if (!isClient) return <></>;
  return (
    <div>
      {routes.map((v) => {
        return (
          <Link href={v.path} key={v.path}>
            {v.text}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
