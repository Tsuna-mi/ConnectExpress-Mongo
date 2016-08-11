function getRestaurants(db, req, res) {
	findDocuments(db, function( data ) {
			res.json(data);
	});
}


function findDocuments(db, callback) {

	// Get the documents collection
	var collection = db.collection('restaurants');

	// Find some documents
	collection.find({}).toArray(function(err, docs) {
	  //console.dir(docs);
	  callback(docs);
	});

}

module.exports = getRestaurants;
