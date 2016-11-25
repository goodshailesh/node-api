process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'http://localhost:3000';
let should = chai.should();

chai.use(chaiHttp);
describe('/GET customers', () => {
	it('it should get all customers', (done) => {
		chai.request(server)
		.get('/customers')
		.end((err, res) => {
			res.should.have.status(200);
			done();
		});
	});
	it('it should be an array', (done) => {
		chai.request(server)
		.get('/customers')
		.end((err, res) => {
			res.body.should.be.a('array');
			done();
		});
	});
});
