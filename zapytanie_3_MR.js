NBDdata = db.people

m = function() {
	emit(this.job, 0)
}

r = function(key, values) {
	return key;
}


NBDdata.mapReduce(m, r, {out:{inline: 1}})
