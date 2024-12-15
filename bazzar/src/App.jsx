import Location from "./body/location";
import Header from "./component/header";
import Productcategory from "./body/productcategory";
import Imageslider from "./body/imageslider";
import Festsale from "./body/festsale";
import Featureditem from "./body/featureditem";
import Footernav from "./body/footernav";
import Footer from "./body/footer";
import Loader from "./component/loader";
import React, { useState, useEffect } from 'react';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
       <Location />
       <Header />
       <Productcategory />
       <Imageslider />
       <Festsale/>
       <Featureditem/>
       <Footernav/>
       <Footer/>
      </>
  );
};

export default App;
