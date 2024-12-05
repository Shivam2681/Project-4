import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Mahayagya from "./components/Mahayagya";
import Meditation from "./components/Meditation";
import Navbar from "./components/Navbar";
import OnlineVardan from "./components/OnlineVardan";
import Overview from "./components/Overview";
import Science from "./components/Science";
import Sharad from "./components/Sharad";
import Vardaan from "./components/Vardaan";
import VardaanSiddhi from "./components/VardaanSiddhi";
import Video from "./components/Video";

export default function Home() {
  return (
    <div>
      <Navbar />
      <VardaanSiddhi/>
      <OnlineVardan/>
      <Sharad/>
      <Mahayagya/>
      <Science/>
      <Feedback/>
      <Video/>
      <Contact/>
      <Footer/>
      {/* Rest of your page content */}
    </div>
  );
}
