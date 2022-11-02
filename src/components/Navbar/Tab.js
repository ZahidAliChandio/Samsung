import { Fragment, useState } from "react";
import Tabss from "./Tabss";

const Tab = (props) => {
  const [tabState, changeTabState] = useState({
    activeTab: null,
    tabs: [
      { index: 0 },
      { index: 1 },
      { index: 2 },
      { index: 3 },
      { index: 4 },
      { index: 5 },
      { index: 6 },
      { index: 7 },
    ],
  });
  // const toggleTab = (index) => {
  //   changeTabState({ ...tabState, activeTab: tabState.tabs[index] });
  // };
  // const toggleActiveStyle = tabState.activeTab.index;
  // return (
  //   <div>
  //     {tabState.tabs.map((elem, index) => (
  //       <div key={index} onMouseOver={() => toggleTab(index)}>
  //         {toggleActiveStyle}
  //       </div>
  //     ))}
  //   </div>
  // );
  return <Fragment>{props.component}</Fragment>;
};

export default Tabss(Tab);
