import Header from "./header";
import Footer from "./footer";
import Newsletter from "./newsletter";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[75px]">{children}</main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Layout;