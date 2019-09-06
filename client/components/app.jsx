import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer">
          <div onClick={window.scrollTo(0, 0)} id="footer-top">
              <span id="footer-toptext">Back to top</span>
          </div>
          <div id="footer-middle">
              <div id="footer-middlebox">
                  <div id="footer-middleCols">
                      <div className="footer-row">
                          <div className="footer-rowtitle">Get to Know Us</div>
                          <ul className="footer-ul">
                              <li className="footer-list">Careers</li>
                              <li className="footer-list">Blog</li>
                              <li className="footer-list">About Shazamazon</li>
                              <li className="footer-list">Press Center</li>
                              <li className="footer-list">Investor Relations</li>
                              <li className="footer-list">Shazamazon Devices</li>
                              <li className="footer-list">Shazamazon Tours</li>
                          </ul>
                      </div>
                      <div className="footer-spacer"></div>
                      <div className="footer-row">
                          <div className="footer-rowtitle">Make Money with Us</div>
                          <ul className="footer-ul">
                            <li className="footer-list">Sell on Shazamazon</li>
                            <li className="footer-list">Sell Under Private Brands</li>
                            <li className="footer-list">Sell on Shazamazon Handmade</li>
                            <li className="footer-list">Sell Your Services on Shazamazon</li>
                            <li className="footer-list">Sell on Shazamazon Business</li>
                            <li className="footer-list">Sell Your Apps on Shazamazon</li>
                            <li className="footer-list">Become an Affiliate</li>
                            <li className="footer-list">Advertise Your Products</li>
                            <li className="footer-list">Self-Publish with Us</li>
                          </ul>
                      </div>
                      <div className="footer-spacer"></div>
                      <div className="footer-row">
                          <div className="footer-rowtitle">Shazamazon Payment Products</div>
                          <ul>
                            <li className="footer-list">Shazamazon Rewards Visa Signature Cards</li>
                            <li className="footer-list">Shazamazon.com Store Card</li>
                            <li className="footer-list">Shazamazon Business Card</li>
                            <li className="footer-list">Shazamazon.com Corporate Credit Line</li>
                            <li className="footer-list">Shop with Points</li>
                            <li className="footer-list">Credit Card Marketplace</li>
                            <li className="footer-list">Reload Your Balance</li>
                            <li className="footer-list">Shazamazon Currency Converter</li>
                          </ul>
                      </div>
                      <div className="footer-spacer"></div>
                      <div className="footer-row">
                          <div className="footer-rowtitle">Let Us Help You</div>
                          <ul className="footer-ul">
                            <li className="footer-list">Your Account</li>
                            <li className="footer-list">Your Orders</li>
                            <li className="footer-list">Shipping Rates & Policies</li>
                            <li className="footer-list">Shazamazon Prime</li>
                            <li className="footer-list">Returns & Replacements</li>
                            <li className="footer-list">Manage Your Content and Devices</li>
                            <li className="footer-list">Shazamazon Assistant</li>
                            <li className="footer-list">Help</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div id="footer-bottom">
              <img src="https://nav-search-bar.s3.us-east-2.amazonaws.com/nav-icons/shazamazon_logo_ember_bold.png" id="footer-logo"></img>
          </div>
      </div>
    );
  }
}

export default App;