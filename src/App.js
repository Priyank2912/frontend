import logo from './logo.svg';
import './sassStyles/abstracts/_variables.scss';
import './App.scss';

import Navbar from './components/common/navbar/navbar';

// import Navbar from './components/navbar/navbar';
// import Slider from './components/Slider/Slider';
// import Card from './components/Cards/Card-black';
// import SectionCity from './components/SectionCity/SectionCity';
// import SectionBest from './components/SectionBest/SectionBest';
// import SectionSpecial from './components/SectionSpecial/SectionSpecial';
// import SectionBlog from './components/SectionBlog/SectionBlog';
// import CardExplore from './components/Cards/Card-explore';
// import SectionExplore from './components/SectionExplore/SectionExplore';
// import SectionContact from './components/SectionContact/SectionContact';
// import Footer from './components/Footer/Footer';

// MUN Page

// import MUNMain from './components/MUNmain/MUNmain';
// import MUNTimer from './components/MUNTimer/MUNTimer';
// import MUNIncludes from './components/MUNIncludes/MUNIncludes';
// import GetInTouch from './components/GetInTouch/GetInTouch';
// import Commety from './components/Commety/Commety';
// import SectionCommety from './components/SectionCommety/SectionCommety';

// Briefcase Page

// import Briefcase from './components/Briefcase/Briefcase';

// Booking page

import Footer from './components/common/Footer/Footer';
import SectionCommety from './components/SectionCommety/SectionCommety';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import PopUp, { PopUpContext } from './components/common/popUp/PopUp';
import Login from './components/forms/login/Login';
import SignUp from './components/forms/signup/signUp';
import ResetPassword from './components/forms/resetPassword/ResetPassword';
import ResetPasswordOTP from './components/forms/resetPassword/ResetPasswordOTP';
import NewPassword from './components/forms/resetPassword/NewPassword';
import Home from './components/pages/Home/Home';
import Blog from './components/blog/Blog';
import RadioButton from './components/common/button/RadioButton';
import Feedback from './components/feedback/Feedback';
import NotFound from './components/pages/NotFound/NotFound';
import MUN from './components/pages/MUN/MUN';
import BookingSummary from './components/pages/BookingSummary/BookingSummary';
import Recipt from './components/pages/Recipt/Recipt';
import BriefcasePage from './components/pages/BriefcasePage/BriefcasePage';
import BookingPage from './components/pages/BookingPage/BookingPage'

// import SectionBooking from './components/SectionBooking/SectionBooking';

// Recipt Page

// import SectionRecipt from './components/SectionRecipt/SectionRecipt';

// Booking Form page

// import BookingForm from './components/forms/BookingForm/BookingForm';

// import { Route } from 'react-router-dom';
// import { useContext, useEffect } from 'react';
// import PopUp, { PopUpContext } from './components/common/popUp/PopUp';
// import Login from './components/forms/login/Login';
// import SignUp from './components/forms/signup/signUp';
// import ResetPassword from './components/forms/resetPassword/ResetPassword';
// import ResetPasswordOTP from './components/forms/resetPassword/ResetPasswordOTP';
// import NewPassword from './components/forms/resetPassword/NewPassword';

// import Splide from '@splidejs/splide';
// import Navbar from './components/navbar/navbar';
// import Blog from './components/blog/Blog';

// new Splide( '.splide' ).mount();

function App() {

  const popUp = useContext(PopUpContext);
  useEffect(() => {
    popUp.showPopUp("small",<Login />,false);
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/MUN" component={MUN} />
          <Route exact path="/booking" component={BookingPage} />
          <Route exact path="/summary" component={BookingSummary} />
          <Route exact path="/recipt" component={Recipt} />
          <Route exact path="/briefcase" component={BriefcasePage} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
