import HomeHero from "../home-page/homeHero";
import HomeHighlight from "./homeHighlight";
import HomeRecent from "./homeRecent";
import HomeServices from "./homeServices";
import HomeTrending from "./homeTrending";

function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        background: "linear-gradient(148.9deg, #070320 18.81%, #3B2A9F 199.4%)",
      }}
    >
      <HomeHero />
      <HomeTrending />
      <HomeHighlight />
      <HomeServices />
      <HomeRecent />
    </div>
  );
}

export default Home;