
import ScrollToTop from "react-scroll-to-top";
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import NewProduct from "../NewProduct/NewProduct";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div >
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <Banner></Banner>
      <div className="">
      <CategorySection></CategorySection>
      <NewProduct />
      <FaqQuestion />
      <Testimonials />
      </div>
     
    </div>
  );
};

export default Home;
