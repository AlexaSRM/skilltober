import Footer from "../components/footer/footer";
import LandingPage from "../components/landingPage/landingPage";
import MainPage from "../components/mainPage/MainPage";
import SpeakerList from "../components/speakerList/speakerList";
import Register from "../components/Register/Register";

const HeroPage = () => {
  return (
    <div className="bg-bgMain w-full h-full">
      <MainPage />
      <LandingPage />
      <SpeakerList />
      <Register />
      <Footer />
    </div>
  );
};
export default HeroPage;
