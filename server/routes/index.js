import express from 'express';
const Index = express.Router();

Index.get('/*/', (req, res) => {
	res.render('index', (err, html) => {
      res.send(html.replace(/CDN_BUNDLE_PATH\//g, '/bundles/'));
  });
});

export default Index;
