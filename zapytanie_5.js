db.people.aggregate([
{$addFields: {
	year: {$toInt: {$substrBytes: ["$birth_date", 0, 4]}}
	}
},
{$match: {
	year: {$gt: 2000}
	}
},
{$unwind: "$location"},
{$project: {
	first_name: "$first_name",
	last_name: "$last_name",
	city: "$location.city"
	}
}
]).pretty()