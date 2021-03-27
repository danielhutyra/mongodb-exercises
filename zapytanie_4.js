db.people.aggregate([
{$addFields: {
	weight_num: {$toDouble: "$weight"}
	}
},
{$match: {
	weight_num: {$gte: 68, $lt: 71.5}
	}
},
{$project: {
	_id: 1,
	}
}
]).pretty()