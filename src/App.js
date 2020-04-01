import React, { Component } from "react";
import Header from "./components/header/header";
import About from "./components/about/about";
import Resume from "./components/resume/resume";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import ContactUs from "./components/contactus/contactus";
import Footer from "./components/footer/footer";
import resumeData from "./resumeData";
import "./scss/style.scss";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./langs/en";
import fr from "./langs/fr";

const resources = {
  en: { translation: en },
  fr: { translation: fr },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "fr",
    debug: false,
    react: {
      wait: true,
    },
    interpolation: {
      escapeValue: false,
    },
  });

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Testimonials resumeData={resumeData} />
        <ContactUs resumeData={resumeData} />
        <Footer resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
