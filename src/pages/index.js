import * as React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DailyPrayerTimes from "../components/DailyPrayerTimes";
import HadithOfTheDay from "../components/HadithOfTheDay";
import MakeADonetion from "../components/MakeADonetion";
import Services from "../components/Services";
import ProgramsAndEvent from "../components/ProgramsAndEvent";
import { Main, BackgroundImage, Overlay } from "../styles";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <BackgroundImage src="https://darwenmosque.co.uk/wp-content/uploads/2017/07/events-3-1.jpg">
          <HadithOfTheDay />
          <Overlay />
        </BackgroundImage>
        <DailyPrayerTimes />
        <MakeADonetion />
        <Services />
        <ProgramsAndEvent />
      </Main>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
