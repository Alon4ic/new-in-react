import React from "react";
import Toggle from "./Toggle/index";
import { BsStarFill, BsStar } from "react-icons/bs";
import useToggle from "../hooks/useToggle";
import useEffectOnUpdate from "../hooks/useEffectOnUpdate";

export default function Star({ onChange }) {
  const [on, toggle] = useToggle();
  useEffectOnUpdate(() => onChange(), [on]);
  return (
    <>
      {on ? (
        <BsStarFill onClick={toggle} className="star filled" />
      ) : (
        <BsStar onClick={toggle} className="star" />
      )}
    </>
    // <div onClick={toggle}>
    //   {on ? (
    //     <BsStarFill className="star filled" />
    //   ) : (
    //     <BsStar className="star" />
    //   )}
    // </div>
  );
  // <Toggle onToggle={() => onChange()}>
  //   <Toggle.Button>
  //     <Toggle.On>
  //       <BsStarFill className="star filled" />
  //     </Toggle.On>
  //     <Toggle.Off>
  //       <BsStar className="star" />
  //     </Toggle.Off>
  //   </Toggle.Button>
  // </Toggle>
}

// import React from "react";
// import { BsStar, BsStarFill } from "react-icons/bs";
// import { ToggleContext } from "./Toggle";

// export default function Star() {
//     const {on, toggle} = React.useContext(ToggleContext)

//     return (
//         on ?
//         <BsStarFill className="star filled" onClick={toggle} /> :
//         <BsStar className="star" onClick={toggle} />
//     )
// }
