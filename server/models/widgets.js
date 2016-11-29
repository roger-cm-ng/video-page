import mongoose from 'mongoose';

const widgetSchema = {
  title: String,
  unit: String,
  wind: Boolean,
  id: String
}

export default const widget = mongoose.model('widget', widgetSchema, 'widgets');
