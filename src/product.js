// src/product.js
import ball from './images/ball.jpg';
import cleats from './images/cleats.jpg';
import tshirt from './images/tshirt.jpg';
import socks from './images/socks.jpg';

const products = [
  {
    name: 'Football',
    price: '$20.99',
    description: 'High-quality football for training and matches.',
    imageUrl: ball
  },
  {
    name: 'Cleats',
    price: '$45.99',
    description: 'Durable football cleats for all playing surfaces.',
    imageUrl: cleats
  },
  {
    name: 'Sports T-shirt',
    price: '$15.99',
    description: 'Comfortable and breathable sports t-shirt.',
    imageUrl: tshirt
  },
  {
    name: 'Socks',
    price: '$7.99',
    description: 'High-quality, comfortable football socks.',
    imageUrl: socks
  }
];

export default products;
