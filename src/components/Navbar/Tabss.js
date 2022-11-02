import Mobile from "./DropDown/Mobile";
import TVAV from "./DropDown/TVAV";

const Tabss = (Component) => {
  const NewTab = (props) => {
    const components = [<Mobile />, <TVAV />];
    return <Component {...props} component={components[props.index]} />;
  };
  return NewTab;
};

export default Tabss;
