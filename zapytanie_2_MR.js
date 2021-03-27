NBDdata = db.people

m = function() {
	for (i = 0; i < this.credit.length; i++) {
		emit(this.credit[i].currency, parseFloat(this.credit[i].balance));
	}
}

r = function(key, values) {
	return Array.sum(values);
}

NBDdata.mapReduce(m, r, {out:{inline: 1}})
