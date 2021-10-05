import Footer from "../components/footer/footer";
import LandingPage from "../components/landingPage/landingPage";
import MainPage from "../components/mainPage/MainPage";
import SpeakerList from "../components/speakerList/speakerList";
const HeroPage = () => {
  return (
    <div className="bg-bgMain w-full h-full">
      <MainPage />
      <LandingPage />
      <SpeakerList />
      <Footer />
    </div>
  );
};
export default HeroPage;
