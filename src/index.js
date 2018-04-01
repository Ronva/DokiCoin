import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';

import LazyLoad from 'react-lazy-load';
import Content from './components/Content';
import Logo from './assets/logo';

const replaceVerticalScrollByHorizontal = (event) => {
  if (event.deltaY !== 0) {
    // manually scroll horizonally instead
    window.scroll(window.scrollX + event.deltaY * 2, window.scrollY);

    // prevent vertical scroll
    event.preventDefault();
  }
};

/* Listener on window once we start scrolling, we run our function */
window.addEventListener('wheel', replaceVerticalScrollByHorizontal);

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="nav">
          <Logo />
          <a href="#natsuki" className="menuBtn pink">Information</a>
          <a href="#yuri" className="menuBtn purple">Resources</a>
          <a href="#block-chan" className="menuBtn green">Block-chan</a>
          <a href="#live-feed" className="menuBtn red">Live Feed</a>
        </div>
        <div className="background">
          <Content>
            <LazyLoad offsetHorizontal={50}>
              <img src={require('./assets/Promo_art/sayori_promo_small.png')} alt="Sayori" />
            </LazyLoad>
            <div className="getStarted">
              <h1>DokiCoin is a decentralized cryptocurrency designed to create the perfect waifu and make anime real.</h1>
              <a href="#natsuki">Get Started</a>
            </div>
          </Content>
          <Content
            name="natsuki"
            background="pink"
            title="Information">
            <LazyLoad offsetHorizontal={50}>
              <img src={require('./assets/Promo_art/natsuki_promo_small.png')} alt="Natsuki" />
            </LazyLoad>
          </Content>
          <Content
            name="yuri"
            background="purple"
            title="Resources">
            <LazyLoad offsetHorizontal={50}>
              <img src={require('./assets/Promo_art/yuri_promo_small.png')} alt="Yuri" />
            </LazyLoad>
          </Content>
          <Content name="block-chan" background="green">
            <img src={require('./assets/block-chan.png')} alt="block-chan diagram" className="diagram"/>
          </Content>
          <Content name="live-feed" background="red" />
          <Content />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
