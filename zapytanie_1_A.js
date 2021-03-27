db.people.aggregate([
{$addFields: {
	height_num: {$toDouble: "$height"},
	weight_num: {$toDouble: "$weight"}
	}
},
{$group: {
	_id: "$sex",
	avg_height: {$avg: "$height_num"},
	avg_weight: {$avg: "$weight_num"}
	}
}])