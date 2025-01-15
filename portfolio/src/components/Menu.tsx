import { useEffect, useMemo, useRef, useState } from "react";
import AppIcon from "../assets/AppIcon";
import useIsClientHook from "../hooks/useIsClientHook";
import { calcMenuItemPosList } from "../logic/Menu";
import Link from "next/link";

const ANIMATION_DURATION_MS = 3000;
const DISTANCE_MAGNIFICATION = 1.4;
const ADJUST_MAGNIFICATION = 1.0;

type Props = {
  routes?: Routes;
};

const Menu = ({ routes = [] }: Props) => {
  const isClient = useIsClientHook();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const [menuItemPosList, setMenuItemPosList] = useState<[number, number][]>(
    []
  );

  /**
   * メニューの位置調整用に監視
   */
  const [firstItem, setFirstItem] = useState<HTMLLIElement | null>(null);
  const firstItemRef = useRef<HTMLLIElement | null>(null);
  firstItemRef.current = firstItem;
  const setMenuItemPosListHandler = () => {
    setMenuItemPosList(
      calcMenuItemPosList(
        (firstItemRef.current?.getBoundingClientRect().width ?? 0) *
          DISTANCE_MAGNIFICATION,
        routes.length,
        ADJUST_MAGNIFICATION
      )
    );
  };
  useEffect(() => {
    if (!firstItemRef.current) return;
    setMenuItemPosListHandler();
    window.addEventListener("resize", () => {
      setMenuItemPosListHandler();
    });
  }, [firstItemRef.current]);

  if (!isClient) return <></>;
  return (
    <div>
      <ul className={`absolute flex flex-col gap-2`}>
        {routes.map((route, index) => {
          return (
            <li
              key={`${route.path}-${index}`}
              ref={(node) => {
                setFirstItem(node);
              }}
              className={`absolute duration-100 ${
                isOpen ? "opacity-100 z-10" : "opacity-0 z-[-1]"
              }`}
              style={{
                transform: isOpen
                  ? `translate(${menuItemPosList?.[index]?.[0] ?? 0}px, ${
                      menuItemPosList?.[index]?.[1] ?? 0
                    }px)`
                  : "translate(0,0)",
              }}
            >
              <div
                className="flex items-center justify-center bg-white text-black rounded-full aspect-square animate-floating md:w-[96px] w-[64px] p-2"
                style={{
                  animationDelay: `${
                    (index * ANIMATION_DURATION_MS) / routes.length
                  }ms`,
                  animationDuration: `${ANIMATION_DURATION_MS}ms`,
                }}
              >
                <Link
                  href={isOpen ? route.path : ""}
                  className="flex flex-col items-center justify-center"
                  target={
                    route.path.match(/^http(|s)?:\/\//) === null ? "" : "_blank"
                  }
                >
                  <div className="w-1/2">
                    <route.icon />
                  </div>
                  <span className=" leading-3 md:text-lg text-md">
                    {route.text}
                  </span>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="flex justify-center items-center rounded-full bg-white w-[3rem] md:w-[5rem] z-50 aspect-square"
      >
        <div className="p-1 md:p-0">
          <AppIcon color="black" />
        </div>
      </button>
    </div>
  );
};

export default Menu;
