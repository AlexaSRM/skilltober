import LandingPage from "../components/LandingPage/landingPage";
import MainPage from "../components/mainPage/MainPage";
import Services from "../components/ServicesComp/services";
const HeroPage = () => {
  return (
    <div className="bg-BGMain w-full h-full">
      <MainPage />
      <LandingPage />
      <Services />
    </div>
  );
};
export default HeroPage;
