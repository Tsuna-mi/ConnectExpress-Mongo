var express = require('express');
var router = express.Router();
var getRestaurants = require('./getRestaurants');

function getRouter(db) {

	router.get('/restaurants', getRestaurants.bind(null,db) )
	return router;

}

module.exports = getRouter;
