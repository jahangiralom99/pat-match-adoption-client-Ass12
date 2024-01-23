
import Banner from "../Banner/Banner";
import CategorySection from "../CategorySection/CategorySection";

const Home = () => {
    // const { user } = useAuth();
    

  return (
    <div className="max-w-screen-xl mx-auto px-2">
      <Banner></Banner>
      <CategorySection></CategorySection>
    </div>
  );
};

export default Home;
