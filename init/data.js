const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    "title": "Seaside Villa",
    "description": "Beautiful villa overlooking the ocean, ideal for beach lovers. Spacious rooms, private pool, and stunning sunset views.",
    "price": 200,
    "location": "Sunset Cove",
    "country": "Spain",
    "image": {
      "filename": "listingimage",
      "url": "https://source.unsplash.com/featured/?villa"
    }
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 800,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 10000,
    location: "Fiji",
    country: "Fiji",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Montana",
    country: "United States",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Charleston",
    country: "United States",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New Hampshire",
    country: "United States",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 6000,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
  },
];

module.exports = { data: sampleListings };  


  // [
  //   {
  //     "title": "Seaside Villa",
  //     "description": "Beautiful villa overlooking the ocean, ideal for beach lovers. Spacious rooms, private pool, and stunning sunset views.",
  //     "image": "https://source.unsplash.com/featured/?villa",
  //     "price": 200,
  //     "location": "Sunset Cove",
  //     "country": "Spain"
  //   },
  //   {
  //     "title": "Mountain Cabin Getaway",
  //     "description": "Cozy cabin nestled in the mountains, surrounded by pine trees. Perfect for hiking, skiing, or simply relaxing by the fireplace.",
  //     "image": "https://source.unsplash.com/featured/?cabin",
  //     "price": 150,
  //     "location": "Mountain Retreat",
  //     "country": "Canada"
  //   },
  //   {
  //     "title": "Urban Loft",
  //     "description": "Modern loft apartment in the heart of the city. Close to restaurants, cafes, and cultural attractions. Stylish decor and city views.",
  //     "image": "https://source.unsplash.com/featured/?urban",
  //     "price": 120,
  //     "location": "Downtown Metropolis",
  //     "country": "United States"
  //   },
  //   {
  //     "title": "Rustic Farmhouse",
  //     "description": "Quaint farmhouse surrounded by fields and meadows. Ideal for a peaceful countryside getaway. Fresh air, starry nights, and farm-fresh breakfast.",
  //     "image": "https://source.unsplash.com/featured/?farmhouse",
  //     "price": 90,
  //     "location": "Rural Retreat",
  //     "country": "France"
  //   },
  //   {
  //     "title": "Luxury Penthouse",
  //     "description": "Opulent penthouse with panoramic city views. High-end amenities, rooftop terrace, and exclusive access to a spa and fitness center.",
  //     "image": "https://source.unsplash.com/featured/?penthouse",
  //     "price": 300,
  //     "location": "Skyline Heights",
  //     "country": "United States"
  //   },
  //   {
  //     "title": "Beachfront Bungalow",
  //     "description": "Quaint bungalow steps away from the beach. Relax on the veranda and enjoy the sound of the waves. Perfect for a romantic getaway.",
  //     "image": "https://source.unsplash.com/featured/?bungalow",
  //     "price": 120,
  //     "location": "Sandy Shores",
  //     "country": "Australia"
  //   },
  //   {
  //     "title": "Historic Townhouse",
  //     "description": "Charming townhouse in a historic neighborhood. Walking distance to museums, galleries, and quaint cafes. Vintage decor and cobblestone streets.",
  //     "image": "https://source.unsplash.com/featured/?townhouse",
  //     "price": 110,
  //     "location": "Old Town",
  //     "country": "United Kingdom"
  //   },
  //   {
  //     "title": "Lakeside Retreat",
  //     "description": "Tranquil lakeside cottage surrounded by nature. Perfect for fishing, kayaking, or simply unwinding by the water. Serene atmosphere and beautiful sunsets.",
  //     "image": "https://source.unsplash.com/featured/?lakeside",
  //     "price": 140,
  //     "location": "Lakeview Haven",
  //     "country": "Canada"
  //   },
  //   {
  //     "title": "Ski Chalet",
  //     "description": "Cozy chalet nestled in the snowy mountains. Ski-in/ski-out access, hot tub, and apres-ski fireplace. Perfect for winter sports enthusiasts.",
  //     "image": "https://source.unsplash.com/featured/?chalet",
  //     "price": 180,
  //     "location": "Powder Peak",
  //     "country": "Switzerland"
  //   },
  //   {
  //     "title": "Tropical Paradise Villa",
  //     "description": "Luxurious villa surrounded by lush tropical gardens. Private pool, outdoor shower, and hammocks for ultimate relaxation. Close to pristine beaches.",
  //     "image": "https://source.unsplash.com/featured/?tropical",
  //     "price": 250,
  //     "location": "Palm Beach",
  //     "country": "Thailand"
  //   },
  //   {
  //     "title": "City Center Apartment",
  //     "description": "Modern apartment in the heart of the bustling city center. Walking distance to shops, restaurants, and major landmarks. Bright and airy space.",
  //     "image": "https://source.unsplash.com/featured/?apartment",
  //     "price": 90,
  //     "location": "Central Plaza",
  //     "country": "Germany"
  //   },
  //   {
  //     "title": "Desert Oasis Retreat",
  //     "description": "Spectacular desert retreat with stunning views of sand dunes and starry skies. Private patio, outdoor fireplace, and desert adventures.",
  //     "image": "https://source.unsplash.com/featured/?desert",
  //     "price": 160,
  //     "location": "Sandscape Valley",
  //     "country": "United Arab Emirates"
  //   },
  //   {
  //     "title": "Riverside Cabin",
  //     "description": "Charming cabin nestled along the riverbank. Fishing, boating, and wildlife watching right outside your door. Rustic decor and tranquil atmosphere.",
  //     "image": "https://source.unsplash.com/featured/?riverside",
  //     "price": 110,
  //     "location": "River Bend",
  //     "country": "United States"
  //   },
  //   {
  //     "title": "Serenity Lodge",
  //     "description": "Peaceful lodge surrounded by forested hills. Hiking trails, wildlife sightings, and meditation spots. Escape the hustle and bustle of everyday life.",
  //     "image": "https://source.unsplash.com/featured/?lodge",
  //     "price": 130,
  //     "location": "Tranquil Heights",
  //     "country": "Canada"
  //   },
  //   {
  //     "title": "Secluded Treehouse",
  //     "description": "Magical treehouse tucked away in the forest canopy. Birdsong, gentle breezes, and stunning views. Disconnect from technology and reconnect with nature.",
  //     "image": "https://source.unsplash.com/featured/?treehouse",
  //     "price": 120,
  //     "location": "Forest Haven",
  //     "country": "Costa Rica"
  //   },
  //   {
  //     "title": "Cosy Cottage",
  //     "description": "Quaint cottage with a warm and inviting atmosphere. Crackling fireplace, country charm, and scenic views. Perfect for a romantic getaway.",
  //     "image": "https://source.unsplash.com/featured/?cottage2",
  //     "price": 100,
  //     "location": "Misty Meadows",
  //     "country": "Ireland"
  //   },
  //   {
  //     "title": "Island Paradise",
  //     "description": "Exclusive island retreat surrounded by turquoise waters. Private beach, infinity pool, and luxury accommodations. Ultimate relaxation and tranquility.",
  //     "image": "https://source.unsplash.com/featured/?island",
  //     "price": 500,
  //     "location": "Tropical Island",
  //     "country": "Maldives"
  //   },
  //   {
  //     "title": "Historic Castle",
  //     "description": "Magnificent castle steeped in history and grandeur. Lavish furnishings, opulent gardens, and breathtaking architecture. Live like royalty for a night.",
  //     "image": "https://source.unsplash.com/featured/?castle",
  //     "price": 400,
  //     "location": "Royal Estate",
  //     "country": "France"
  //   },
  //   {
  //     "title": "Safari Tent Experience",
  //     "description": "Authentic safari tent nestled in the heart of the wilderness. Wildlife sightings, guided safaris, and starlit evenings around the campfire.",
  //     "image": "https://source.unsplash.com/featured/?safari",
  //     "price": 180,
  //     "location": "Savannah Plains",
  //     "country": "Kenya"
  //   },
  //   {
  //     "title": "Coastal Cottage",
  //     "description": "Quaint cottage overlooking the rugged coastline. Coastal walks, beachcombing, and fresh seafood. Relax and unwind in a coastal paradise.",
  //     "image": "https://source.unsplash.com/featured/?coastal",
  //     "price": 130,
  //     "location": "Seashell Cove",
  //     "country": "United Kingdom"
  //   },
  //   {
  //     "title": "Mountain View Chalet",
  //     "description": "Charming chalet with breathtaking mountain views. Skiing, snowboarding, and hiking trails right outside your door. Cozy evenings by the fireplace.",
  //     "image": "https://source.unsplash.com/featured/?mountain",
  //     "price": 170,
  //     "location": "Alpine Retreat",
  //     "country": "Austria"
  //   },
  //   {
  //     "title": "Tropical Rainforest Retreat",
  //     "description": "Secluded retreat in the heart of the tropical rainforest. Wildlife encounters, canopy walks, and waterfall hikes. Immerse yourself in nature's beauty.",
  //     "image": "https://source.unsplash.com/featured/?rainforest",
  //     "price": 190,
  //     "location": "Jungle Paradise",
  //     "country": "Costa Rica"
  //   },
  //   {
  //     "title": "Historic Manor House",
  //     "description": "Stately manor house dating back centuries. Antique furnishings, formal gardens, and historic charm. Step back in time and experience the elegance of the past.",
  //     "image": "https://source.unsplash.com/featured/?manor",
  //     "price": 350,
  //     "location": "Grand Estate",
  //     "country": "England"
  //   },
  //   {
  //     "title": "Ski-In/Ski-Out Lodge",
  //     "description": "Ski-in/ski-out lodge located at the base of the mountain. Direct access to slopes, hot tub, and après-ski bar. Perfect for winter sports enthusiasts.",
  //     "image": "https://source.unsplash.com/featured/?skilodge",
  //     "price": 220,
  //     "location": "Snowy Peaks",
  //     "country": "United States"
  //   },
  //   {
  //     "title": "Lakefront Log Cabin",
  //     "description": "Rustic log cabin nestled along the shores of a tranquil lake. Fishing, canoeing, and campfires under the stars. Escape to the great outdoors.",
  //     "image": "https://source.unsplash.com/featured/?logcabin",
  //     "price": 160,
  //     "location": "Lakeside Retreat",
  //     "country": "Canada"
  //   },
  //   {
  //     "title": "Rural Farmstay",
  //     "description": "Authentic farmstay experience in the heart of the countryside. Fresh air, farm-to-table meals, and hands-on activities. Connect with nature and farm life.",
  //     "image": "https://source.unsplash.com/featured/?farm",
  //     "price": 80,
  //     "location": "Green Acres",
  //     "country": "New Zealand"
  //   },
  //   {
  //     "title": "Modern Beach House",
  //     "description": "Sleek and stylish beach house with panoramic ocean views. Private beach access, infinity pool, and rooftop terrace. Experience luxury by the sea.",
  //     "image": "https://source.unsplash.com/featured/?beachhouse",
  //     "price": 280,
  //     "location": "Oceanfront Oasis",
  //     "country": "Australia"
  //   },
  //   {
  //     "title": "Scenic Mountain Retreat",
  //     "description": "Tranquil retreat nestled in the foothills of the mountains. Sweeping mountain views, hiking trails, and birdwatching. Escape the hustle and bustle.",
  //     "image": "https://source.unsplash.com/featured/?mountainretreat",
  //     "price": 150,
  //     "location": "Majestic Peaks",
  //     "country": "Canada"
  //   },
  //   {
  //     "title": "Seaside Cottage",
  //     "description": "Quaint cottage overlooking the sandy shores. Relax on the porch and listen to the sound of the waves. Perfect for a peaceful seaside escape.",
  //     "image": "https://source.unsplash.com/featured/?seaside",
  //     "price": 110,
  //     "location": "Coastal Haven",
  //     "country": "United States"
  //   },
  //   {
  //     "title": "Modern Urban Loft",
  //     "description": "Sleek and stylish loft apartment in the heart of the city. Open floor plan, industrial-chic design, and skyline views. Live in style in the urban jungle.",
  //     "image": "https://source.unsplash.com/featured/?urban2",
  //     "price": 130,
  //     "location": "Metropolitan Heights",
  //     "country": "Canada"
  //   }
  // ]
  