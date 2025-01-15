import { ReactElement, useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import { PAGE_TRANSITION_STYLE } from "../config/PageTransitionConfig";

type Props = {
  children: ReactElement;
};

const PageTransitionLayout = ({ children }: Props) => {
  const [isStart, setIsStart] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    setIsStart(true);
  }, []);

  return (
    <div>
      <Transition nodeRef={ref} in={isStart} timeout={3000}>
        {(state) => {
          return (
            <div ref={ref} style={PAGE_TRANSITION_STYLE[state]}>
              {children}
            </div>
          );
        }}
      </Transition>
    </div>
  );
};

export default PageTransitionLayout;
