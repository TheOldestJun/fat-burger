import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
