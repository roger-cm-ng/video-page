import express from 'express';
import mongoose from 'mongoose'
const Api = express.Router();
const Schema = mongoose.Schema;
const mongodbUri = 'mongodb://ffx:ffx123@ds111748.mlab.com:11748/heroku_4fv3kgzm';

mongoose.connect(mongodbUri, () => {
  console.log('connected');
});

const widgetSchema = new Schema({
  title: String,
  unit: String,
  wind: Boolean
});

const Widgets = mongoose.model('widgets', widgetSchema);

Api.get('/widgets', (req, res) => {
  Widgets.find()
    .then((results) => {
      res.json({
        status: 200,
        results
      });
    })
});

export default Api;
