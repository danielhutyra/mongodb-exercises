NBDdata = db.people

m = function() {
	for (i = 0; i < this.credit.length; i++) {
		emit(this.credit[i].currency, {"sum": parseFloat(this.credit[i].balance), "counter": 1});
	}
}

r = function(key, values) {
	var value = values.reduce(function(acc, cur) {
		acc.sum = acc.sum + cur.sum;
		acc.counter = acc.counter + cur.counter;
		return acc;
	})
	return value;
}

f = function(key, values) {
	values_return = { sum:0, average:0 }
	values_return.sum = values.sum
	values_return.average = values.sum / values.counter
	return values_return;
}

NBDdata.mapReduce(m, r, {out:{inline: 1}, query: {sex: "Female", nationality: "Poland"}, finalize: f})
