let express = require('express')
let app = express();
let customers = require('./sample.json');
let _ = require("lodash");

app.get('/customers', function (req, res) {
  res.json(customers);
})
app.get('/customers/:id', (req, res) => {
	let cust = _.find(customers, (c) => parseInt(c.user_id) === parseInt(req.params.id));
	res.json(cust);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})



