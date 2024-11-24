import gameCardHolder1 from "../assets/Sports/GameCardHolderStand/gc1.png";
import gameCardHolder2 from "../assets/Sports/GameCardHolderStand/gc2.png";
import gameCardHolder3 from "../assets/Sports/GameCardHolderStand/gc3.png";

import gameDisplay1 from "../assets/Sports/GameDisplayCase/GameDisplay1.png";
import gameDisplay2 from "../assets/Sports/GameDisplayCase/GameDisplay2.png";

import cardStand1 from "../assets/Sports/CardStand/CardStand1.png";

import hsh1 from "../assets/Sports/HorizontalSixCardStand/h1.png";
import hsh2 from "../assets/Sports/HorizontalSixCardStand/h2.png";

import s1 from "../assets/Sports/SixCardStand/s1.png";
import s2 from "../assets/Sports/SixCardStand/s2.png";
import s3 from "../assets/Sports/SixCardStand/s3.png";
import s4 from "../assets/Sports/SixCardStand/s4.png";

import h1 from "../assets/Sports/ThreeCardStand/h1.png";
import h2 from "../assets/Sports/ThreeCardStand/h2.png";
import h3 from "../assets/Sports/ThreeCardStand/h3.png";

import cs1 from "../assets/DeskToppers/CityStand/cs1.png";
import cs2 from "../assets/DeskToppers/CityStand/cs2.png";
import cs3 from "../assets/DeskToppers/CityStand/cs3.png";

import f1 from "../assets/DeskToppers/FunkoPop/f1.png";
import f2 from "../assets/DeskToppers/FunkoPop/f2.png";

import k1 from "../assets/DeskToppers/Keychains/k1.png";
import k2 from "../assets/DeskToppers/Keychains/k2.png";
import k3 from "../assets/DeskToppers/Keychains/k3.png";
import k4 from "../assets/DeskToppers/Keychains/k4.png";

const commonCustomizations = [
  { name: "Color of Holder", value: "" },
  { name: "Color of Letterings", value: "" },
  { name: "Custom Lettering (OR DM us your logo)", value: "" },
];

// card stand
const cardStand = {
  name: "Custom Stand for Sports Cards",
  price: 25.0,
  bulkOptions: [
    { quantity: 2, price: 45.0 },
    { quantity: 3, price: 60.0 },
    { quantity: 4, price: 75.0 },
    { quantity: 5, price: 90.0 },
    { quantity: 6, price: 105.0 },
    { quantity: 8, price: 128.0 },
    { quantity: 10, price: 150.0 },
    { quantity: 20, price: 320.0 },
    { quantity: 25, price: 375.0 },
  ],
  shortDetails: [
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Please specify in the personalization section which Primary Color (Stand) and which Secondary Color (Players Name) you would like!",
    "Please specify which player's name/nickname you want and we will send you the design to confirm approval.",
    "Purchase multiple for discounts!",
    "Holds any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Lead times are currently anywhere between 7-10 days for production.",
    "The product is 4 inches wide x 1-inch tall x 1-inch in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder! *Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits for you.",
  ],
  images: [cardStand1],
  desc: "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
  quantity: 1,
  id: 1,
  type: "Sports",
  learnMoreLink: "/products/1",
};

// video game holder
const gameDisplay = {
  name: "Unique Custom Game Display Case",
  price: 27.99,
  requiredCustomizations: commonCustomizations,
  shortDetails: [
    "Game Display Case consist of a backing piece and a shelf, which push fit together and attach to the wall with a single Command Strip.",
    "We present to your attention our Video Game Storage for Wall of the highest quality. It is a unique administrative professionals day gift.",
    "Game Display Case, Custom Logo Video Game Storage Stand, Display Stand For Video Games, Game Room Decor, Personalized Stand",
  ],
  details: [
    "You can now show off all of your favorite characters from the Games. You can place the shelf anywhere that is convenient for you - on the wall, wallpaper, or tile. This is a great way to show off your Game Room collection while keeping everything organized at the same time!",
    "You can choose the color from the drop-down, but if you want a mix, or if you want Game Display and backing plates to be different colors or whatever, just add a note to let me know.",
    "We have the following colors:Black, White, Grey, Red, Green, Yellow, Blue, Orange, Blue-Green, Magenta, and Glow in the Dark",
    "Please specify in the personalization section which Primary Color (Stand) and which Secondary Color (Players Name) you would like!",
    "We will send you the design to confirm approval.",
    "The product is 5.5 inches wide x 2 inches tall x 1-inch in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder!",
    "*Video Game in picture NOT included",
    "If you have any problems after the purchase, please contact us for customer service, which will make your purchase risk-free and you can enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [gameDisplay1, gameDisplay2],
  desc: "",
  quantity: 1,
  id: 2,
  type: "Sports",
  learnMoreLink: "/products/2",
};

// game display
const gameCardHolder = {
  name: "Game Display Card Holder Stand",
  price: 15.0,
  shortDetails: [
    "We present to your attention our Game Display Card Holder Stand for desk of the highest quality. It is a unique administrative professionals day gift.",
    "Card Storage Stand is the perfect way to display your affirmation card, business card. The perfect Card Organizer for people who just want to showcase their information cards in the workplace.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Display your favorite sports, trading cards or Display Tier Business Card Stand IN FASHION.",
    "Game Display Card Holder Stand is the best gift for business owners and other professionals.",
    "EXCELLENT VALUE - each order includes 2 Grandstand Display Stands - which fits 4 cards on display and 40 top loaders for storage!",
    "UNIVERSAL - fits all sized cards; PSA, CGC, BGS slabs, top loaders, one-touch cases, etc",
    "*Cards in the pictures are not included",
    "Lead time for orders is 3 days or less for manufacturing!",
    "Please message us if you would like it in a different color.",
    "The product is 8in tall x 4.25in wide x 4.75in in depth.",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [gameCardHolder1, gameCardHolder2, gameCardHolder3],
  desc: "",
  quantity: 1,
  id: 3,
  type: "Sports",
  learnMoreLink: "/products/3",
};

// horizontal
const horizontalSixCardStand = {
  name: "6 Card (Horizontal) Custom Logo Card Stand",
  price: 85.0,
  shortDetails: [
    "We present to your attention our 6 Card (Horizontal) Custom Logo Card Stand for desk of the highest quality. It is a unique administrative professional's day gift.",
    "Sports card displays are the perfect way to display your sports cards along with your brand!",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Display your favorite sports or trading card with YOUR logo or your own personalized wording. Lead time for custom orders is around 7-10 days for manufacturing!",
    "This custom stand fits 6 cards of any size!",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Purchase multiple for discounts! Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Customizing is simple! Please specify in the personalization section which Primary Color (Stand) and which Secondary Color (Players Name) you would like!",
    "Message us with the personalization you want and we will send you the mock-up of the design to confirm your approval.",
    "The product is 19in wide x 2in tall x 3in in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder!*Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits you",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [hsh1, hsh2],
  desc: "",
  quantity: 1,
  id: 4,
  type: "Sports",
  learnMoreLink: "/products/4",
};

// 6 card
const sixCardStand = {
  name: "6 Cards Custom Logo Card Stand",
  price: 94.99,
  requiredCustomizations: commonCustomizations,
  shortDetails: [
    "We present to your attention our 6 Cards Custom Logo Card Stand for desk of the highest quality. It is a unique administrative professionals day gift.",
    "Business Card Stand is the perfect way to display your affirmation card, business card. The perfect Card Organizer for people who just want to showcase their information cards in the workplace.",
  ],
  details: [
    "Display your favorite sports or trading card with YOUR logo or your own personalized wording. Lead time for custom orders is around 7-10 days for manufacturing!",
    "6 Cards Custom Logo Card Stand is the best gift for business owners and other professionals.",
    "This custom stand fits 6 cards of any size!",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Lead time for custom orders is around 5-7 days for manufacturing!",
    "Purchase multiple for discounts! Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Customizing is simple! Please specify in the personalization section which Primary Color (Stand). Message us with the personalization you want and we will send you the mock-up of the design to confirm your approval.",
    "The product is 11.5in wide x 2in tall x 2.5in in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder! *Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits you.",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [s1, s2, s3, s4],
  desc: "6 Cards Custom Logo Card Stand",
  quantity: 1,
  id: 5,
  type: "Sports",
  learnMoreLink: "/products/5",
};

// 3 card
const threeCardStand = {
  name: "3 Cards Custom Logo Card Stand",
  price: 49.99,
  requiredCustomizations: commonCustomizations,
  shortDetails: [
    "We present to your attention our 3 Cards Custom Logo Card Stand for desk of the highest quality. It is a unique administrative professionals day gift.",
    "Sports Card Display is the perfect way to display your affirmation card, business card. The perfect Card Organizer for people who just want to showcase their information cards in the workplace.",
  ],
  details: [
    "Display your favorite sports or trading card with YOUR logo or your own personalized wording. Lead time for custom orders is around 7-10 days for manufacturing!",
    "3 Cards Custom Logo Card Stand is the best gift for business owners and other professionals.",
    "This custom stand fits 3cards of any size!",
    "Display your favorite sports or trading cards with YOUR logo or your own personalized wording.",
    "Lead time for custom orders is around 5-7 days for manufacturing!",
    "Purchase multiple for discounts! Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Hold any sized card! PSA+BGS Slabs / One-Touch / Top Loader",
    "Please specify in the personalization section which Primary Color (Stand)",
    "Message us with the personalization you want and we will send you the mock-up of the design to confirm your approval.",
    "The product is 11.5in wide x 2in tall x 2.5in in depth.",
    "Or specify if you want your OWN LOGO displayed on the holder! *Card/Slab in picture NOT included",
    "We will try our best to accommodate requests for custom logos but 3D printers have a maximum level of detail. We will work with you to yield the design that best fits you.",
    "If you have any problems after the purchase, please feel free to contact us for customer service, which will make your purchase absolutely risk-free and you could enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [h1, h2, h3],
  desc: "3 Cards Custom Logo Card Stand, Sports Card Display, Trading Card Display Stand, Business Card Stand, Card Organizer, Card Holder Stand",
  quantity: 1,
  id: 6,
  type: "Sports",
  learnMoreLink: "/products/6",
};

// city stand
const cityStand = {
  name: "Unique Custom New York City Skyline",
  price: 10.0,
  shortDetails: [
    "This is a listing for custom orders only. Choosing this option will be set between buyer and seller for details.",
    "Once we agree on your request you will receive the design via email within 24 hours.",
    "Please DO NOT purchase unless your request was already approved by me, thank you.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "This New York City Sign New York skyline sign is the perfect way to display your love for the city of New York! Whether you're a New York native or just a fan from afar, this 3D laser cut sign is sure to impress.",
    "We have the following colors: Black, White, Grey, Red, Green, Yellow, Blue, Orange, Blue-Green, Magenta, and Glow in the Dark",
    "The product is 4 inches tall x 6.5 inches wide x 3 inches in depth.",
    "*If you would like a different city (skyline and wording) message us and we'll work with you! We'll design it, confirm you like the design, and then print it for you!",
    "If you have any problems after the purchase, please contact us for customer service, which will make your purchase risk-free and you can enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [cs1, cs2, cs3],
  desc: "Custom City Stand!",
  quantity: 1,
  id: 8,
  type: "Desk-Topper",
  learnMoreLink: "/products/8",
};

// funko pop
const funkoPop = {
  name: "Unique Custom Funko Pop Stands",
  price: 23.0,
  requiredCustomizations: commonCustomizations,
  shortDetails: [
    "Custom Funko Pop Stands consist of a backing piece and a shelf, which push fit together and attach to the wall with a single Command Strip (included). Funko pop not included.",
    "You can choose the color from the drop-down, but if you want a mix, or if you want shelves and backing plates to be different colors or whatever, just add a note to let me know.",
  ],
  details: [
    "We present to your attention our Funko Pop Display for Wall of the highest quality. It is a unique administrative professionals day gift.",
    "You can now show off all of your favorite characters from movies and TV shows",
    "You can place the shelf anywhere that is convenient for you – on the wall, wallpaper, or tile. This is a great way to show off your Funko Pop collection while keeping everything organized at the same time!",
    "Custom Funko Pop Stands Crafted with high-quality materials, our wall mounts are strong enough to hold all of your Funko Pop. Their sleek and modern design ensures that all attention remains on your collection, while the fall-proof feature ensures your items are protected from accidents.",
    "You can combine Funko Box mount with our Custom Character wall mount for figurines.",
    "Please direct message if you would like a landscape-oriented stand or a larger sized stand",
    "Display your favorite Funko Pops with your logo on it!",
    "We have the following colors: Black, White, Grey, Red, Green, Yellow, Blue, Orange, Blue-Green, Magenta, and Glow in the Dark",
    "Please specify in the personalization section which Primary Color (Stand) you would like!",
    "Or specify if you want your OWN LOGO displayed on the holder!",
    "If you have any problems after the purchase, please contact us for customer service, which will make your purchase risk-free and you can enjoy the quality and durability. And we do hope you have a pleasant shopping experience.",
  ],
  images: [f1, f2],
  desc: "Custom Funko Pop Stands, Funko Pop Display Stand For Wall, Landscape Design Personalized Funko Pop Case",
  quantity: 1,
  id: 9,
  type: "Desk-Topper",
  learnMoreLink: "/products/9",
};

// keychains
const keyChain = {
  name: "Unique Custom Signature Keychain - With your Logo",
  price: 10.0,
  shortDetails: [
    "Custom Keychains are small, circular accessories made from a durable piece that is commonly used to hold keys.",
    "Unique Backpack Keychain is a popular item due to its simplicity and versatility, and Aesthetic Safety Keychain can be used for personal use or given to your friends.",
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Custom Keychains with a message, date, name or coordinate for a gift that is both sweet and practical.",
    "Personalize Keychain, it is sure to be a special charm they will treasure for many moments to come. Double-sided engravings are also available for double the sweet sentiments.",
    "Send these out as giveaways to your subscribers/customers to show off and advertise your brand. It's like a walking advertisement! Or just gain style points walking around with your logo on your keychain or backpack! Our design team will work with you to come up with the perfect unique design that you want to show off!",
    "This Custom Keychains is designed exactly how you want it!",
    "Material: PLA (Polylactic acid)",
    "Size: Typically 1.5in. x 1.5in. (varies on customization)",
    "After placing your order:",
    "- Send us your logo and we will send you a mock-up of how the keychains will come out.",
    "- You comment or approve the rendering",
    "- We go into production and ship out ASAP!",
  ],
  images: [k1, k2, k3, k4],
  desc: "Your Personalized Keychain",
  quantity: 1,
  id: 7,
  type: "Desk-Topper",
  learnMoreLink: "/products/7",
};

export const products = [
  cardStand,
  gameCardHolder,
  gameDisplay,
  horizontalSixCardStand,
  sixCardStand,
  threeCardStand,
  keyChain,
  funkoPop,
  cityStand,
];
