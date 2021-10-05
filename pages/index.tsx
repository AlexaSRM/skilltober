import Footer from "../components/footer/footer";
import LandingPage from "../components/landingPage/landingPage";
import MainPage from "../components/mainPage/MainPage";
import SpeakerList from "../components/speakerList/speakerList";
import Register from "../components/register/register";

const HeroPage = () => {
  return (
   <div className="bg-bgMain h-full w-full absolute overflow-hidden hover:overflow-y-auto hover:scrollbar-thin hover:scrollbar-thumb-bgMain hover:scrollbar-thumb-textSecondary hover:scrollbar-track-bgMain hover:scrollbar-thumb-rounded-full hover:scrollbar-track-rounded-full hover:scrollbar-rounded-full">
      <MainPage />
      <LandingPage />
      <SpeakerList />
      <Register />
      <Footer />
    </div>
  );
};
export default HeroPage;
