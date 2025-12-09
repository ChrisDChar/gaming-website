import HomeHero from "../home-page/homeHero";
import HomeHighlight from "./homeHighlight";
import HomeServices from "./homeServices";
import HomeTrending from "./homeTrending";

function Home() {
  return (
    <>
      <HomeHero />
      <HomeTrending />
      <HomeHighlight />
      <HomeServices />
    </>
  );
}

export default Home;