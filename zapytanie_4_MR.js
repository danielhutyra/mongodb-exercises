NBDdata = db.people

m = function() {
	
	var BMI = (parseFloat(this.weight) / (parseFloat(this.height) * parseFloat(this.height)))*10000
	
	emit(this.nationality, {"min": BMI, "max": BMI, "sum": BMI, "counter": 1});
}

r = function(key, values) {
	var value = values.reduce(function(acc, cur) {
		if (cur.min < acc.min) acc.min = cur.min;
		if (cur.max > acc.max) acc.max = cur.max;
		acc.sum = acc.sum + cur.sum;
		acc.counter = acc.counter + cur.counter;
		return acc;
	})
	return value;
}

f = function(key, values) {

	values_return = { min_BMI:0, max_BMI:0, avg_BMI:0 }

	values_return.min_BMI = values.min
	values_return.max_BMI = values.max
	values_return.avg_BMI = values.sum / values.counter

	return values_return;
}

NBDdata.mapReduce(m, r, {out:{inline: 1}, finalize: f})
