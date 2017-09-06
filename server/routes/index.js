import express from 'express';
const Index = express.Router();

Index.get(/^.*$/, (req, res) => {
	res.render('../public/bundles/index');
});

export default Index;
