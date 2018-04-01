import React from 'react';

const Natsuki = () => <img src={require('../assets/Promo_art/natsuki_promo_small.png')} alt="Natsuki" className="natsuki" />;
const Monika = () => <img src={require('../assets/Promo_art/monika_promo_small.png')} alt="Monika" className="monika" />;
const Sayori = () => <img src={require('../assets/Promo_art/sayori_promo_small.png')} alt="Sayori" className="sayori" />;
const Yuri = () => <img src={require('../assets/Promo_art/yuri_promo_small.png')} alt="Yuri" className="yuri" />;

const data = [
  {
    background: "red",
    title: "This is the Title",
    image: <Natsuki />
  },
  {
    background: "pink",
    image: <Sayori />
  },
  {
    background: "green",
    image: <Yuri />
  }
];

export default data;
