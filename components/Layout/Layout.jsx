import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default ({ children }) => {
  return (
    <div className='content'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
