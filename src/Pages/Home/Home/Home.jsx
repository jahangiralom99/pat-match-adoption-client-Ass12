import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import NewProduct from "../NewProduct/NewProduct";
import Testimonials from "../Testimonials/Testimonials";
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <Banner></Banner>
      <CategorySection></CategorySection>
      <NewProduct />
      <FaqQuestion />
      <Testimonials />
    </div>
  );
};

export default Home;
