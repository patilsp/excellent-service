import { Schema, model, models } from 'mongoose';

const CustomerSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  firstname: {
    type: String,
    required: [true, 'first name is required.'],
  },
  firstname: {
    type: String,
    required: [true, 'last name is required.'],
  },
  email: {
    type: String,
    required: [true, 'email is required.'],
  }
});

const Customer = models.Customer || model('Customer', CustomerSchema);

export default Customer;