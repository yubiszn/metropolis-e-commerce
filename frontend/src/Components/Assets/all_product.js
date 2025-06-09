import mens_1 from "./mens_1.jpg";
import mens_2 from "./mens_2.jpg";
import mens_3 from "./mens_3.jpg";
import mens_4 from "./mens_4.jpg";
import mens_5 from "./mens_5.jpg";
import mens_6 from "./mens_6.jpg";
import mens_7 from "./mens_7.jpg";
import mens_8 from "./mens_8.jpg";
import mens_9 from "./mens_9.jpg";
import mens_10 from "./mens_10.jpg";
import mens_11 from "./mens_11.jpg";
import mens_12 from "./mens_12.jpg";

import womens_1 from "./womens_1.jpg";
import womens_2 from "./womens_2.jpg";
import womens_3 from "./womens_3.jpg";
import womens_4 from "./womens_4.jpg";
import womens_5 from "./womens_5.jpg";
import womens_6 from "./womens_6.jpg";
import womens_7 from "./womens_7.jpg";
import womens_8 from "./womens_8.jpg";
import womens_9 from "./womens_9.jpg";
import womens_10 from "./womens_10.jpg";
import womens_11 from "./womens_11.jpg";
import womens_12 from "./womens_12.jpg";

import kids_1 from "./kids_1.jpg";
import kids_2 from "./kids_2.jpg";
import kids_3 from "./kids_3.jpg";
import kids_4 from "./kids_4.jpg";
import kids_5 from "./kids_5.jpg";
import kids_6 from "./kids_6.jpg";
import kids_7 from "./kids_7.jpg";
import kids_8 from "./kids_8.jpg";
import kids_9 from "./kids_9.jpg";
import kids_10 from "./kids_10.jpg";
import kids_11 from "./kids_11.jpg";
import kids_12 from "./kids_12.jpg";


let all_product = [
  {
    id: 1,
    name: "Yellow State Park Varsity Jacket - Men",
    category: "men",
    image: mens_1,
    new_price: 60.0,
    old_price: 85.5,
    description: "Bold yellow varsity jacket with park emblem, perfect for casual outings.",
  },
  {
    id: 2,
    name: "Orange and Blue Sweater - Men",
    category: "men",
    image: mens_2,
    new_price: 30.0,
    old_price: 35.5,
    description: "Comfortable knit sweater featuring vibrant orange and blue color blocks.",
  },
  {
    id: 3,
    name: "Navy Blue Cropped Cardigan - Men",
    category: "men",
    image: mens_3,
    new_price: 32.0,
    old_price: 40.5,
        description: "Trendy cropped cardigan in navy blue, great for layering year-round.",
  },
  {
    id: 4,
    name: "Light Beige Slim Fit Linen Jacket - Men",
    category: "men",
    image: mens_4,
    new_price: 120.0,
    old_price: 150.0,
    description: "Sophisticated slim-fit linen jacket ideal for formal or semi-formal wear.",
  },
  {
    id: 5,
    name: "Orange Textured Jacket - Men",
    category: "men",
    image: mens_5,
    new_price: 55.0,
    old_price: 85.5,
    description: "Textured orange jacket that brings energy to your fall and winter wardrobe.",
  },
  {
    id: 6,
    name: "Modern Fit Plaid Linen Blend Sport Coat - Men",
    category: "men",
    image: mens_6,
    new_price: 85.0,
    old_price: 110.5,
    description: "Stylish sport coat with a plaid pattern for the modern gentleman.",
  },
  {
    id: 7,
    name: "Emerald Green Zipper Jacket - Men",
    category: "men",
    image: mens_7,
    new_price: 60.0,
    old_price: 70.5,
    description: "Vibrant green zip-up jacket, lightweight and bold for streetwear flair.",
  },
  {
    id: 8,
    name: "Navy Blue & Green Cropped Cardigan - Men",
    category: "men",
    image: mens_8,
    new_price: 45.0,
    old_price: 55.5,
    description: "Color-blocked cropped cardigan offering a modern, sporty style."
  },
  {
    id: 9,
    name: "Patterned Zip Sweater Polo - Men",
    category: "men",
    image: mens_9,
    new_price: 35.0,
    old_price: 50.5,
    description: "Patterned polo with a convenient zip closure and breathable fabric.",
    
  },
  {
    id: 10,
    name: "Blue and Green Sweater - Men",
    category: "men",
    image: mens_10,
    new_price: 25.0,
    old_price: 30.5,
    description: "Classic color-block sweater that blends comfort with everyday style.",
  },
  {
    id: 11,
    name: "Slim Fit White Polo - Men",
    category: "men",
    image: mens_11,
    new_price: 30.0,
    old_price: 50.5,
    description: "Clean white slim-fit polo, a timeless essential for any man’s wardrobe.",
  },
  {
    id: 12,
    name: "Forest Green Polo - Men",
    category: "men",
    image: mens_12,
    new_price: 25.0,
    old_price: 30.5,
    description: "Comfortable forest green polo shirt made with breathable cotton.",
  },
  {
    id: 13,
    name: "Sleeveless Cropped Puffer Vest- Women",
    category: "women",
    image: womens_1,
    new_price: 50.0,
    old_price: 80.5,
    description: "Trendy cropped vest ideal for transitional weather layering.",
  },
  {
    id: 14,
    name: "Shaggy Pink Faux Fur Jacket - Women",
    category: "women",
    image: womens_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "Fluffy faux fur jacket in pink for bold and cozy street style.",
  },
  {
    id: 15,
    name: "Blue Hollow Out Crotchet Top - Women",
    category: "women",
    image: womens_3,
    new_price: 20.0,
    old_price: 30.5,
    description: "Delicate crotchet top with hollow out design, great for layering.",
  },
  {
    id: 16,
    name: "Pretty in Pink Puffer Jacket - Women",
    category: "women",
    image: womens_4,
    new_price: 70.0,
    old_price: 90.0,
    description: "Warm and vibrant pink puffer jacket with a feminine cut.",
  },
  {
    id: 17,
    name: "Patterned Orange Summer Dress - Women",
    category: "women",
    image: womens_5,
    new_price: 55.0,
    old_price: 70.5,
    description: "Flowy summer dress with bright orange patterns and flattering fit."
  },
  {
    id: 18,
    name: "Striped Blue Shirt - Women",
    category: "women",
    image: womens_6,
    new_price: 15.0,
    old_price: 20.5,
    description: "Relaxed fit blue shirt with vertical white stripes, easy to style.",
  },
  {
    id: 19,
    name: "Biege Contrast Collar Jacket - Women",
    category: "women",
    image: womens_7,
    new_price: 55.0,
    old_price: 70.5,
    description: "Chic beige jacket featuring a contrast collar for a modern twist.",
  },
  {
    id: 20,
    name: "Cropped White Vest - Women",
    category: "women",
    image: womens_8,
    new_price: 25.0,
    old_price: 40.5,
    description: "Minimalist cropped vest in white, perfect for layering or solo wear.",
  },
  {
    id: 21,
    name: "Casual Light Brown Sweater - Women",
    category: "women",
    image: womens_9,
    new_price: 45.0,
    old_price: 60.5,
    description: "Comfy light brown sweater for an effortless everyday look.",
  },
  {
    id: 22,
    name: " White and Navy Blue Sports Top - Women",
    category: "women",
    image: womens_10,
    new_price: 65.0,
    old_price: 80.5,
    description: "Sporty top with breathable fabric and a navy-white color scheme.",
  },
  {
    id: 23,
    name: "Purple and Cream Striped Sweater - Women",
    category: "women",
    image: womens_11,
    new_price: 35.0,
    old_price: 50.5,
    description: "Soft knit sweater with bold purple and cream horizontal stripes.",
  },
  {
    id: 24,
    name: "Red Turtleneck - Women",
    category: "women",
    image: womens_12,
    new_price: 45.0,
    old_price: 60.5,
    description: "Elegant red turtleneck ideal for chilly days and seasonal style.",
  },
  {
    id: 25,
    name: "Half Zipped Biege Sweater - Kid",
    category: "kid",
    image: kids_1,
    new_price: 85.0,
    old_price: 120.5,
    description: "Cozy half-zip sweater in a neutral beige tone for versatile wear.",
  },
  {
    id: 26,
    name: "Plum T-Shirt - Kid",
    category: "kid",
    image: kids_2,
    new_price: 85.0,
    old_price: 120.5,
    description: "Soft cotton t-shirt in a vibrant plum hue perfect for everyday play.",
  },
  {
    id: 27,
    name: "Cadet Gray Button Front Knit Shirt - Kid",
    category: "kid",
    image: kids_3,
    new_price: 85.0,
    old_price: 120.5,
    description: "Smart casual shirt with knit fabric and button-front design.",
  },
  {
    id: 28,
    name: "Faux Leather Shearling Biker Jacket - Kid",
    category: "kid",
    image: kids_4,
    new_price: 85.0,
    old_price: 120.5,
    description: "Edgy faux leather biker jacket with warm shearling lining.",
  },
  {
    id: 29,
    name: "Atomic Tangerine T-Shirt - Kid",
    category: "kid",
    image: kids_5,
    new_price: 85.0,
    old_price: 120.5,
    description: "Bright and playful t-shirt in an energetic orange hue.",
  },
  {
    id: 30,
    name: "Lightweight Green Plaid Flannel Shirt - Kid",
    category: "kid",
     image: kids_6,
    new_price: 85.0,
    old_price: 120.5,
    description: "Soft flannel shirt with classic green plaid for cozy layering.",
  },
  {
    id: 31,
    name: "Sky Blue Polo Shirt - Kid",
    category: "kid",
    image: kids_7,
    new_price: 85.0,
    old_price: 120.5,
    description: "Breathable polo shirt in a calm sky blue tone for kids' comfort.",
  },
  {
    id: 32,
    name: "Long Sleeve Red Striped Shirt - Kid",
    category: "kid",
    image: kids_8,
    new_price: 85.0,
    old_price: 120.5,
    description: "Classic long sleeve with bold red stripes, great for school days.",
  },
  {
    id: 33,
    name: "Navy Blue and Red Striped Tracksuit - Kid",
    category: "kid",
    image: kids_9,
    new_price: 85.0,
    old_price: 120.5,
    description: "Athletic tracksuit with dynamic red and navy striping for active kids.",
  },
  {
    id: 34,
    name: "Metallic Rain Jacket - Kid",
    category: "kid",
    image: kids_10,
    new_price: 85.0,
    old_price: 120.5,
    description: "Fun metallic rain jacket that keeps kids dry in style.",
  },
  {
    id: 35,
    name: "Red White & Blue Button Up Shirt - Kid",
    category: "kid",
    image: kids_11,
    new_price: 85.0,
    old_price: 120.5,
    description: "Patriotic themed button-up perfect for holidays and events.",
  },
   {
    id: 36,
    name: "Green & Navy Blue Hooded Sweatshirt - Kid",
    category: "kid",
    image: kids_12,
    new_price: 85.0,
    old_price: 120.5,
    description: "Warm and soft hoodie in green and navy for daily comfort and play.",
  },
];

export default all_product;
