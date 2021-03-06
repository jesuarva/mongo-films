const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const Character = mongoose.Schema({
  name: { type: String, required: true },
  edited: Date,
  created: Date,
  gender: String,
  height: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  key: { type: Number, unique: true },
  homeworld_key: Number,
  // add homeworld field that links the character to it's planet
  homeworld: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Planet' }],
});

// Character.post('find', function(next) {
//   this.populate('Planet');
//   next();
// });

module.exports = mongoose.model('Character', Character);
