import shake from "../assets/icons/Shake.png";
import lasagna from "../assets/icons/HomeIcons/lasagna.png";
import sushi from "../assets/icons/HomeIcons/sushi.png";
import burger from "../assets/icons/HomeIcons/burger.png";
import pizza from "../assets/icons/HomeIcons/Pizza.png";
import pasta from "../assets/icons/HomeIcons/pasta.png";
import cupcake from "../assets/icons/HomeIcons/cupcake.png";
import rolls from "../assets/icons/HomeIcons/rolls.png";

export const foodData = {
  Snacks: [
    {
      id: 1,
      name: "Mexican Appetizer",
      image: sushi,
      price: 15.00,
      rating: "5.0",
      desc: "Tortilla Chips With Toppins",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Guacamole", price: 2.99 },
        { name: "Jalapenos", price: 3.99 },
        { name: "Ground Beef", price: 3.99 },
        { name: "Pico de Gallo", price: 2.99 },
      ],
    },
    {
      id: 2,
      name: "Pork Skewer",
      image: rolls,
      price: 12.99,
      rating: "4.0",
      desc: "Marinated and grilled with spices",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Guacamole", price: 2.99 },
        { name: "Jalapenos", price: 3.99 },
        { name: "Ground Beef", price: 3.99 },
        { name: "Pico de Gallo", price: 2.99 },
      ],
    },
  ],
  Meal: [
    {
      id: 3,
      name: "Fresh Prawn Ceviche",
      image: pasta,
      price: 15.00,
      rating: "4.7",
      desc: "Shrimp marinated in zesty lime juice",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Shrimp", price: 2.99 },
        { name: "Crisp Onion", price: 3.99 },
        { name: "Sweet Corn", price: 3.99 },
        { name: "Pico de Gallo", price: 2.99 },
      ],
    },
    {
      id: 4,
      name: "Chicken Burger",
      image: burger,
      price: 12.99,
      rating: "4.0",
      desc: "Tender grilled chicken breast",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Shrimp", price: 2.99 },
        { name: "Crisp Onion", price: 3.99 },
        { name: "Sweet Corn", price: 3.99 },
        { name: "Pico de Gallo", price: 2.99 },
      ],
    },
  ],
  Vegan: [
    {
      id: 5,
      name: "Mushroom Risotto",
      image: pizza,
      price: 15.00,
      rating: "4.8",
      desc: "Creamy mushroom risotto",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Vegan Mayo", price: 2.99 },
        { name: "Sliced Tomatoes", price: 1.99 },
        { name: "Whole Wheat Buns", price: 2.00 },
        { name: "Bell Peppers", price: 1.25 },
      ],
    },
    {
      id: 6,
      name: "Broccoli Lasagna",
      image: lasagna,
      price: 12.99,
      rating: "4.5",
      desc: "Tender broccoli florets, creamy ricotta cheese",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Vegan Mayo", price: 2.99 },
        { name: "Sliced Tomatoes", price: 1.99 },
        { name: "Whole Wheat Buns", price: 2.00 },
        { name: "Bell Peppers", price: 1.25 },
      ],
    },
  ],
  Dessert: [
    {
      id: 7,
      name: "Chocolate Brownie",
      image: cupcake,
      price: 15.00,
      rating: "4.8",
      desc: "Rich in cocoa, melted chocolate",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Sliced Nuts", price: 3.00 },
        { name: "Whipped Cream", price: 9.99 },
        { name: "Sliced Strawberries", price: 4.00 },
        { name: "Lemon Zest", price: 1.25 },
      ],
    },
    {
      id: 8,
      name: "Macarons",
      image: cupcake,
      price: 12.99,
      rating: "4.8",
      desc: "Delicate vanilla and chocolate macarons",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Sliced Nuts", price: 3.00 },
        { name: "Whipped Cream", price: 9.99 },
        { name: "Sliced Strawberries", price: 4.00 },
        { name: "Lemon Zest", price: 1.25 },
      ],
    },
  ],
  Drinks: [
    {
      id: 9,
      name: "Mojito",
      image: shake,
      price: 15.00,
      rating: "4.8",
      desc: "Fresh mint, lime juice, simple syrup",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Green Tea", price: 6.00 },
        { name: "White Tea", price: 10.00 },
        { name: "Black Tea", price: 6.00 },
        { name: "Herbal Infusion", price: 5.25 },
      ],
    },
    {
      id: 10,
      name: "Iced Coffee",
      image: shake,
      price: 12.99,
      rating: "4.8",
      desc: "Espresso chilled with sweetness",
      fullDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      addons: [
        { name: "Green Tea", price: 6.00 },
        { name: "White Tea", price: 10.00 },
        { name: "Black Tea", price: 6.00 },
        { name: "Herbal Infusion", price: 5.25 },
      ],
    },
  ],
};