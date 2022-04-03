import { useEffect } from "react";
import Navbar from "../../common/navbar/navbar";
import SectionBest from "../../SectionBest/SectionBest";
import SectionBlog from "../../SectionBlog/SectionBlog";
import SectionCity from "../../SectionCity/SectionCity";
import SectionContact from "../../SectionContact/SectionContact";
import SectionExplore from "../../SectionExplore/SectionExplore";
import SectionSpecial from "../../SectionSpecial/SectionSpecial";
import Slider from "../../Slider/Slider";


import './Home.scss';

const Home = ()=>{
  useEffect(()=>{
      window.scrollTo({
        top:0,
      })
  },[]);
    return(
        <div className="homepage">
            <Slider></Slider>
            <div className="container">
            <div className="section-main">
                <SectionCity name="sdfnjsd fjd "></SectionCity>
                <SectionBest className="section-best"></SectionBest>
                <SectionSpecial className="section-special"></SectionSpecial>
                <SectionBlog className="section-blog"></SectionBlog>
            </div>
            <SectionExplore></SectionExplore>
            </div>
            <SectionContact></SectionContact>
        </div>
    )
}
export default Home;