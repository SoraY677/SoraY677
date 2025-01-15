export const PAGE_TRANSITION_DURATION_MS = 1000;

export const PAGE_TRANSITION_STYLE = {
  unmounted: {
    transition: "opacity 1s ease",
    opacity: 0,
  },
  entering: {
    transition: "opacity 1s ease",
    opacity: 1,
  },
  entered: {
    transition: "opacity 1s ease",
    opacity: 1,
  },
  exiting: {
    transition: "opacity 1s ease",
    opacity: 0,
  },
  exited: {
    transition: "opacity 1s ease",
    opacity: 0,
  },
};
