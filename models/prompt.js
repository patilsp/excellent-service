import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  firstname: {
    type: String,
    required: [true, 'Customer First Name is required.'],
  },
  lastname: {
    type: String,
    required: [true, 'Customer Last Name is required.'],
  },
  phoneno: {
    type: String,
    required: [true, 'Customer Phone Number is required.'],
  },
  email: {
    type: String,
  },
  state: {
    type: String,
  },
  city: {
    type: String,
  },
  address: {
    type: String,
  },
  
  pincode: {
    type: String,
  },
  dateofbirth: {
    type: String,
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;