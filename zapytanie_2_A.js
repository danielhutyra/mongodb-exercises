db.people.aggregate([
{$unwind: "$credit"},
{$addFields: {
	'credit.balance': {$toDouble: "$credit.balance"}
	}
},
{$group: {
	_id: "$credit.currency",
	sum_balance: {$sum: "$credit.balance"}
	}
}]).pretty()