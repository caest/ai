import React from "react";
import "./styles.common.scss";
import "./styles.scss";
import Services from "./components/Services/Services";
import Advantages from "./components/Advantages/Advantages";
import Development from "./components/Development/Development";
import Cta from "./components/Cta/Cta";
import Outrun from "./components/Outrun/Outrun";
import Solution from "./components/Solutions/Solution";
import Products from "./components/Products/Products";
import Support from "./components/Support/Support";
import News from "./components/News/News";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

const App = () => {
  return (
    <div dir="ltr">
      <Main />
      <Services />
      <Advantages />
      <Development />
      <Cta />
      <Outrun />
      <Solution />
      <Products />
      <Support />
      <News />
      <Footer />
    </div>
  );
};

export default App;
