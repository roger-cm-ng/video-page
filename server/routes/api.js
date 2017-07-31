import express from 'express';
const Api = express.Router();

Api.get('/content', (req, res) => {
  res.json({
    status: 200,
    data: {
      result: { foo: 'bar' }
    }
  });
});

export default Api;
