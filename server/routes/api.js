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
  fallBackLocation: String,
  unit: String,
  wind: Boolean
});

const Widgets = mongoose.model('widgets', widgetSchema);

Api.get('/get-all', (req, res) => {
  Widgets.find()
    .then((results) => {
      res.json({
        status: 200,
        results
      });
    })
});

Api.post('/insert', (req, res) => {
  const item = {
    title: req.body.title,
    fallBackLocation: req.body.fallBackLocation,
    unit: req.body.unit,
    wind: req.body.wind,
  }

  const data = new Widgets(item);
  data.save(() => {
    Widgets.find()
      .then((results) => {
        res.json({
          status: 200,
          results
        });
      })
  });
});

export default Api;
