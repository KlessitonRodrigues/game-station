export const initialNavState: NavigationState = {
  path: ["home", "gamelist"],
  buttonMap: {
    LeftStick: () => console.log("PREV"),
    RightStick: () => console.log("NEXT"),
  },
};
