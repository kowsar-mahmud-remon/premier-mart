import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div data-theme="night">
      <Navbar></Navbar>
      <div>
        <main>
          {children}
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layout;