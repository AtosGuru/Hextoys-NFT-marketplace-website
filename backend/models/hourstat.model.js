const mongoose = require('mongoose');

const hourstatSchema = new mongoose.Schema({
  timestamp: Number,
  address: { type: String, lowercase: true, index: true },  
  name: String,
  category: String,
  image: String,
  lowLogo: String, //item 100 X 100 image
  mediumLogo: String, //item 250 X 250 image
  highLogo: String, //item 500 X 500 image
  reviewStatus: Number,

  tradingVolume: Number,
  tradingCount: Number,
  floorPrice: Number,
  prevTradingVolume: Number,
  prevTradingCount: Number,

  totalItemCount: Number,
  totalOwners: Number,
  coinPrice: Number
});

hourstatSchema.index({ tradingVolume: 1, floorPrice: 1});

const Hourstat = mongoose.model('hourstats', hourstatSchema);

module.exports = Hourstat;
