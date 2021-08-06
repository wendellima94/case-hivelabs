import mongoose from 'mongoose';

// Função que define um min e um max de caracteres
// tslint:disable-next-line: no-var-keyword
const optionalWithLength = function (minLength: any, maxLength: any) {
  // tslint:disable-next-line: no-parameter-reassignment
  minLength = minLength || 0;
  // tslint:disable-next-line: no-parameter-reassignment
  maxLength = maxLength || Infinity;
  return {
    validator(value: any) {
      if (value === undefined) return true;
      return value.length >= minLength && value.length <= maxLength;
    },
    // tslint:disable-next-line: prefer-template
    message: 'Optional field is shorter than the minimum allowed length (' + minLength + ') or larger than the maximum allowed length (' + maxLength + ')',
  };
};

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  nickname: { type: String, required: true, maxLength: 30 },
  address: [
    {
      street: { type: String },
      complement: { type: String },
      number: { type: String },
    },
  ]
  ,
  bio: { type: String, maxLength: 100 },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
