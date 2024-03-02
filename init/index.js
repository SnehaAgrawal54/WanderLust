const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

let Mongo_url = 'mongodb://127.0.0.1:27017/wanderlust';

main()
    .then(() => {console.log("connected to db")})
    .catch((err) => {console.log(err)});

async function main() {
  await mongoose.connect(Mongo_url);
};

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '65db4596e85c464d5976601b'}));
    await Listing.insertMany(initData.data);
    console.log("data initialized");
};

initDB();