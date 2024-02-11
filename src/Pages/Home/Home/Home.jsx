
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import NewProduct from "../NewProduct/NewProduct";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Banner></Banner>
      <CategorySection></CategorySection>
      <NewProduct />
      <FaqQuestion />
      <Testimonials />
     
    </div>
  );
};

export default Home;
