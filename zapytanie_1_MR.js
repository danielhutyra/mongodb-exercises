NBDdata = db.people

m = function() {
	emit(this.sex, {"height" : parseFloat(this.height), "weight": parseFloat(this.weight), "counter": 1});
}

r = function(key, values) {
	var value = values.reduce(function(acc, cur) {
		acc.height = acc.height + cur.height;
		acc.weight = acc.weight + cur.weight;
		acc.counter = acc.counter + cur.counter;
		return acc;
	})
	return value;
}

f = function(key, values) {

	values_return = { avg_height:0, avg_weight:0 }

	values_return.avg_height = values.height / values.counter
	values_return.avg_weight = values.weight / values.counter

	return values_return;
}

NBDdata.mapReduce(m, r, {out:{inline: 1}, finalize: f})
