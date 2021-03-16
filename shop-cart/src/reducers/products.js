let initialState = [
  {
    id: 1,
    name: "IPhone 7",
    image:
      "https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-7-dora-pl-p2_1.jpg",
    description: "Apple",
    price: 500,
    inventory: 10,
    rating: 4,
  },
  {
    id: 2,
    name: "IPhone 6",
    image: "http://i.ebayimg.com/images/i/201631543418-0-1/s-l1000.jpg",
    description: "Apple",
    price: 400,
    inventory: 10,
    rating: 3,
  },
  {
    id: 3,
    name: "IPhone 11",
    image:
      "https://www.mrphonedeals.com/21212-large_default/apple-iphone-11-pro-64gb-green.jpg",
    description: "Apple",
    price: 700,
    inventory: 10,
    rating: 5,
  },
  {
    id: 4,
    name: "Samsung Galaxy S20",
    image:
      "https://cdn.movertix.com/media/catalog/product/cache/image/1200x/s/a/samsung-galaxy-s20-plus-5g-en-gris-de-128gb-y-12gb-ram-sm-g986b.jpg",
    description: "SamSung",
    price: 700,
    inventory: 10,
    rating: 5,
  },
  {
    id: 5,
    name: "Vsmart Live",
    image:
      "https://cdn.nguyenkimmall.com/images/detailed/679/10047200-dien-thoai-vsmart-live4-6-64gb-trang-tinh-thach-1.jpg",
    description: "Vsmart",
    price: 700,
    inventory: 10,
    rating: 5,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
