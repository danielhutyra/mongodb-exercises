db.people.aggregate([
{$addFields: {
	height_num: {$toDouble: "$height"}
	}
},
{$match: {
	height_num: {$lte: 190}
	}
},
{$out: "people"}
])

