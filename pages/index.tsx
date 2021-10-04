import type { NextPage } from 'next'
import LandingPage from "../components/LandingPage/landingPage";

const Home: NextPage = () => {
  return (
    <div className="bg-BGMain w-full h-full">
      <LandingPage />
    </div>
  )
}

export default Home
