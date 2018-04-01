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
  state = {
    scrolled: window.addEventListener('scroll', () => {return document.all ? iebody.scrollLeft : pageXOffset}),
    show: {
      natsuki: false,
      sayori: false,
      yuri: false
    }
  };

  revealImage = (image) => {
    const images = this.state.show;
    images[image] = true;
    console.log(images);

    this.setState({
      show: images
    });
  };

  render() {
    const scrolled = this.state.scrolled;

    return (
      <div className="app">
        <div className="nav">
          <Logo />
          <a href="#natsuki" className="menuBtn">Information</a>
          <a href="#sayori" className="menuBtn">Resources</a>
          <a href="#yuri" className="menuBtn">Blah</a>
        </div>
        <div className="background">
          <Content>
            <div className="getStarted">
              <h1>DokiCoin is a decentralized cryptocurrency designed to create the perfect waifu and make anime real.</h1>
              <a href="#natsuki">Get Started</a>
            </div>
          </Content>
          <Content
            name="natsuki"
            background="pink"
            title="Information"
            reveal={this.revealImage}>
            <LazyLoad offsetHorizontal={50} onContentVisible={() => this.revealImage('natsuki')}>
              <img src={require('./assets/Promo_art/natsuki_promo_small.png')} alt="Natsuki" data-show={this.state.show["natsuki"]} />
            </LazyLoad>
          </Content>
          <Content
            name="sayori"
            background="red"
            title="Resources"
            reveal={this.revealImage}>
            <LazyLoad offsetHorizontal={50} onContentVisible={() => this.revealImage('sayori')}>
              <img src={require('./assets/Promo_art/sayori_promo_small.png')} alt="Sayori" data-show={this.state.show["natsuki"]} />
            </LazyLoad>
          </Content>
          <Content
            name="yuri"
            background="green"
            title="Blah"
            reveal={this.revealImage}>
            <LazyLoad offsetHorizontal={50} onContentVisible={() => this.revealImage('yuri')}>
              <img src={require('./assets/Promo_art/yuri_promo_small.png')} alt="Yuri" data-show={this.state.show["natsuki"]} />
            </LazyLoad>
          </Content>
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
