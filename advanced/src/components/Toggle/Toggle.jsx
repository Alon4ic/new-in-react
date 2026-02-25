import React from "react";
import useEffectOnUpdate from "../../hooks/useEffectOnUpdate";
import useToggle from "../../hooks/useToggle";

const ToggleContext = React.createContext();

export default function Toggle({ children, onToggle = () => {} }) {
  const [on, toggle] = useToggle()
  // const [on, setOn] = React.useState(false);
  // const firstRender = React.useRef(true)

  // function toggle() {
  //   setOn((prevOn) => !prevOn);
  // }

  useEffectOnUpdate(() => onToggle(), [on])
  // useEffect(() => {
  //   firstRender.current ? firstRender.current = false : onToggle?.(on)
  //   console.log(firstRender.current)
  // }, [on, onToggle])

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
