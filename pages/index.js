import { Scroll } from "../components/Scroll";
import { NavMenu } from "../components/NavMenu";
export default function Index() {
  return (
    <div>
      <Scroll />
      <div className="placeholder"></div>
      <NavMenu />
      <img src="../assets/myphoto"></img>
    </div>
  );
}
