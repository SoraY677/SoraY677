import { Link, BrowserRouter } from "react-router-dom";
import useIsClientHook from "../hooks/useIsClientHook";

type Props = {
  routes?: Routes;
};

const Menu = ({ routes = [] }: Props) => {
  const isClient = useIsClientHook();

  if (!isClient) return <></>;
  return (
    <>
      {routes && (
        <BrowserRouter>
          {routes.map((v) => {
            return (
              <Link to={v.path} key={v.path}>
                {v.text}{" "}
              </Link>
            );
          })}
        </BrowserRouter>
      )}
    </>
  );
};

export default Menu;
