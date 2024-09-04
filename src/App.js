import React from 'react';
import LandingPage from './components/LandingPage';
import WhoWeAre from './components/WhoWeAre';
import OurCampaign from './components/OurCampaign';
import LatestNews from './components/LatestNews';
import Testimonials from './components/Testimonials';
import ActionSection from './components/ActionSection';
import NeedHelp from './components/NeedHelp';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <LandingPage />
      <WhoWeAre />
      <OurCampaign/>
      <LatestNews/>
      <Testimonials/>
      <ActionSection/>
      <NeedHelp/>
      <Footer/>
    </div>
  );
}

export default App;
