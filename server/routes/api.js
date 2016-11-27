import express from 'express';
const Api = express.Router();

Api
.route('/widgets')
.get((req, res) => {
  const responseJson = {
    status: 200,
    results: [
      {
        title: 'The quick brown fox',
        unit: 'metric',
        wind: true
      },
      {
        title: 'Rain in Spain',
        unit: 'metric',
        wind: true
      },
      {
        title: 'Junmps over the lazy fox',
        unit: 'imperial',
        wind: true
      }
    ]
  };
  res.json(responseJson);
});

export default Api;
