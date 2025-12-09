import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

import Home from "./pages/home-page/home";
import About from "./pages/about-page/about";
import Services from "./pages/services-page/services";
import News from "./pages/news-page/news";
import Contact from "./pages/contact-page/contact";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showNewsletter={true} newsletterBg="bg-[#123456]">
            <Home />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout showNewsletter={false}>
            <About />
          </Layout>
        }
      />

      <Route
        path="/services"
        element={
          <Layout showNewsletter={true} newsletterBg="bg-[#654321]">
            <Services />
          </Layout>
        }
      />

      <Route
        path="/news"
        element={
          <Layout showNewsletter={true} newsletterBg="bg-[#abcdef]">
            <News />
          </Layout>
        }
      />

      <Route
        path="/contact"
        element={
          <Layout showNewsletter={true} newsletterBg="bg-[#07042B]">
            <Contact />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;