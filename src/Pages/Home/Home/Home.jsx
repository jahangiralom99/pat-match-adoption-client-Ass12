
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";
import FaqQuestion from "../FaqQuestion/FaqQuestion";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    // const { user } = useAuth();
    

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Banner></Banner>
      <CategorySection></CategorySection>
      <FaqQuestion />
      <Testimonials/>
    </div>
  );
};

export default Home;
