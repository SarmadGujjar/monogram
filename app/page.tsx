import Diff from "./components/Diff";
import Diff2 from "./components/Diff2";
import Footer from "./components/Footer";
import Last from "./components/Last";
import Made from "./components/Made";
import Main from "./components/Main";
import Seclast from "./components/Seclast";
import Second from "./components/Second";
import Vid from "./components/Vid";

export default function Home() {
  return (
    <div className="gap-5">
      <Main />
      <Second />
      <Diff />
      <Diff2 />
      <Made />
      <Vid />
      <Seclast />
      <Last />
      <Footer />
    </div>
  );
}
