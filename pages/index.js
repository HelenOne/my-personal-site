import { Scroll } from "../components/Scroll";
import { NavMenu } from "../components/NavMenu";
export default function Index() {
  return (
    <div>
      <Scroll />
      <NavMenu />
      <img className="myphoto" src="/myphoto.jpg"></img>
    </div>
  );
}
