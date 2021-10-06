import Footer from "../components/footer";
import LandingPage from "../components/about";
import MainPage from "../components/landing";
import SpeakerList from "../components/speakerList";
import Register from "../components/register";

const SitePage = () => {
  return (
    <div className="bg-bgMain h-full w-full absolute overflow-hidden hover:overflow-y-auto hover:scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-textSecondary hover:scrollbar-track-bgMain hover:scrollbar-thumb-rounded-full hover:scrollbar-track-rounded-full hover:scrollbar-rounded-full">
      <MainPage />
      <LandingPage />
      <SpeakerList />
      <Register />
      <Footer />
    </div>
  );
};
export default SitePage;
