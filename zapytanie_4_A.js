db.people.aggregate([
{$addFields: {
	height_num: {$toDouble: "$height"},
	weight_num: {$toDouble: "$weight"},
	height_num_squared: {$multiply: ["$height_num", "$height_num"]}
	}
},
{$addFields: {
	BMI_to_multiply: {$divide: ["$weight_num", "$height_num_squared"]}
	}
},
{$addFields: {
	BMI: {$multiply: ["$BMI_to_multiply", 10000]}
	}
},
{$group: {
	_id: "$nationality",
	avg_BMI: {$avg: "$BMI"},
	max_BMI: {$max: "$BMI"},
	min_BMI: {$min: "$BMI"}
	}
}]).pretty()