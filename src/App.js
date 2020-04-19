import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import HeaderBar from './Components/HeaderBar.jsx';
import MobileMenuList from './Components/MobileMenuList.jsx';
import CoverImage from './Components/CoverImage.jsx';
import FooterBar from './Components/FooterBar.jsx';
import GeneralNews from './Components/Router/GeneralNews.jsx';
import BusinessNews from './Components/Router/BusinessNews.jsx';
import TechNews from './Components/Router/TechNews.jsx';
import WallStreet from './Components/Router/WallStreet.jsx';
import sunIcon from './Components/Images/sun.svg';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export default class MyComponent extends Component {

  constructor() {
    super();

    this.state = {
      newsList: ["Awais", "Ali"],
      isMenuEnabled: false,
      isNightModeEnabled: false,
    }

    this.enableMenu = this.enableMenu.bind(this);
    this.toggleMode = this.toggleMode.bind(this);

  }

  componentDidMount() {
    axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9f4facc956ea46a588bd624555af94e2')
      .then(response => {
        this.setState({
          newsList: response.data.articles,
          isMenuEnabled: this.state.isMenuEnabled,
          isNightModeEnabled: this.state.isNightModeEnabled,
        })
      })
  }

  enableMenu() {
    this.setState({
      newsList: this.state.newsList,
      isMenuEnabled: this.state.isMenuEnabled === false ?  true :  false,
      isNightModeEnabled: this.state.isNightModeEnabled
    })
  }

  toggleMode() {
    this.setState({
      newsList: this.state.newsList,
      isMenuEnabled: this.state.isMenuEnabled,
      isNightModeEnabled: this.state.isNightModeEnabled === true ? false : true
    })
  }

  render() {

    const nightMode = {
      backgroundColor : "#3a454e",
      color: "#fbfcfd",
    }

    const dayMode = {
      background : "#fbfcfd"
    }

    const mobileHeader = {
      marginTop: "282px"
    }

    return (
      

      <Router>

        <main className="App">

          <HeaderBar 
            enableMenu={this.enableMenu} 
            menu1={this.menu1} 
            mode={this.state.isNightModeEnabled === false ? faMoon : faSun}
            switchMode={this.toggleMode}
            // giveColor={this.state.isNightModeEnabled === true ? nightMode : dayMode}
          />

          {this.state.isMenuEnabled === true ? <MobileMenuList /> : null}

          <div className="slider-background" style={this.state.isMenuEnabled == true ? mobileHeader : null}></div>

          <CoverImage />

          <div className="news-container">

            <div className="news-main">

              <Switch>

                <Route path="/business-news">
                  <BusinessNews />
                </Route>

                <Route path="/tech-news">
                  <TechNews />
                </Route>

                <Route path="/wall-street">
                  <WallStreet />
                </Route>

                <Route path="/">
                  <GeneralNews />
                </Route>

              </Switch>



            </div>

          </div>


          <FooterBar />

        </main>

      </Router>

    );
  }
}