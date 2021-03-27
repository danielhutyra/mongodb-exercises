db.people.aggregate([
{$match: {
	sex: "Female",
	nationality: "Poland"
	}
},
{$unwind: "$credit"},
{$addFields: {
	'credit.balance': {$toDouble: "$credit.balance"}
	}
},
{$group: {
	_id: "$credit.currency",
	avg_balance: {$avg: "$credit.balance"},
	sum_balance: {$sum: "$credit.balance"}
	}
}]).pretty()