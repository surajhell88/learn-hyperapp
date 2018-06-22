export default {
  productList: [
    {
      id: Date.now() + 1,
      name: 'Teddy',
      description: 'A teddy bear is a soft toy in the form of a bear. Teddy bears are among the most popular gifts for children and are often given to adults to signify love, congratulations, or sympathy',
      imgUrl: '/assets/img/teddy.jpeg',
      price: '3.5$',
      quantity: 12,
      inCartCount: 0,
    },
    {
      id: Date.now() + 2,
      name: 'Cup',
      description: 'Cups have been used for thousands of years for the purpose of carrying food and drink. Most cups are well suited to hold drinkable liquids.',
      imgUrl: '/assets/img/cup.jpeg',
      price: '2.9$',
      quantity: 8,
      inCartCount: 0,
    },
    {
      id: Date.now() + 3,
      name: 'Unicorn Duck',
      description: 'The Unicorn duck is a toy with a horn attached on its forehead. It\'s  different than a normal duck which makes squeaky noises.',
      imgUrl: '/assets/img/duck.jpeg',
      price: '4.1$',
      quantity: 3,
      inCartCount: 0,
    },
  ],
  cart: [],
};
