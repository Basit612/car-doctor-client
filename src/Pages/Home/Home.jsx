import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Customer from "../Customer/Customer";
import Products from "../Products/Products";

import Services from "../Services/Services";
import Teams from "../Teams/Teams";
import TimeSection from "../TimeSection/TimeSection";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <TimeSection></TimeSection>
      <Products></Products>
      <Teams></Teams>
      <ChooseUs></ChooseUs>
      <Customer></Customer>
    </div>
  );
};

export default Home;