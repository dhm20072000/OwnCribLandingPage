import React, {useEffect, Component} from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

//Components
import Nav from "./Components/Nav";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import Form from "./Components/Form";
import Footer from "./Components/Footer";
import BuyMain from "./Components/Pages/Buy/BuyMain";
import SellMain from "./Components/Pages/Sell/SellMain";
import SearchMain from "./Components/Pages/Search/SearchMain";
import Login from "./Components/Pages/Login/Login";
import MainImage from "./Components/MainImage";
import Carousel from "./Components/Carousel";
import Register from "./Components/Pages/Register/Register";
import Listing from "./Components/Pages/Listing/Listing";
import ListingDetail from "./Components/Pages/Listing/ListingDetail";

const fadeIn = keyframes`
0%{
  opacity: 0;
},
100%{
  opacity: 1;
}`;

const StyledApp = styled.div`
  .fadeInAnimation {
    animate: ${fadeIn} 2s ease-in 0s 1;
  }
  .startHidden {
    opacity: 0;
  }
`;

// class App extends Component{

//   componentDidMount(){
//     window.$crisp=[];
//     window.CRISP_WEBSITE_ID="9053bada-402a-4309-8b2a-c085caf6818c";
//     (function(){
//       var d=document;
//       var s=d.createElement("script");
//       s.src="https://client.crisp.chat/l.js";
//       s.async=1;
//       d.getElementsByTagName("head")[0].appendChild(s);
//     })();
//   };

//   render(){
//     return (
//       <Router>
//         <StyledApp>
//           <Nav />
//           <Switch>
//             <Route exact path="/">
//               <Banner />
//               <Main />
//               <Form />
//             </Route>
//             <Route exact path="/buy">
//               <BuyMain />
//             </Route>
//             <Route exact path="/sell">
//               <SellMain />
//             </Route>
//             <Route exact path="/register" component={Login}></Route>
//             <Route exact path="/login" component={Login}></Route>
//             <Route exact path="/search" component={SearchMain}></Route>
//           </Switch>
//           <Footer />
//         </StyledApp>
//       </Router>
//     );
//   }

// }

const App = () => {

  useEffect(() => {
    window.$crisp=[];
    window.CRISP_WEBSITE_ID="9053bada-402a-4309-8b2a-c085caf6818c";
    (function(){
      var d=document;
      var s=d.createElement("script");
      s.src="https://client.crisp.chat/l.js";
      s.async=1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, [])

  return (
    <Router>
      <StyledApp>
        <Nav />
        <Switch>
          <Route exact path="/">
            <MainImage />
            <Carousel />
            <Banner />
            <Main />
            <Form />
          </Route>
          <Route exact path="/buy">
            <BuyMain />
          </Route>
          <Route exact path="/sell">
            <SellMain />
          </Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/search" component={SearchMain}></Route>
          <Route exact path='/listing'>
            <MainImage />
            <Listing />
          </Route>
          <Route exact path='/listingdetail/:id' component={ListingDetail} />
        </Switch>
        <Footer />
      </StyledApp>
    </Router>
  );
};

export default App;
