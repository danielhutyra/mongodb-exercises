db.people.aggregate([
{$group: {
	_id: null,
	unique_jobs: {$addToSet: "$job"}
	}
}]).pretty()