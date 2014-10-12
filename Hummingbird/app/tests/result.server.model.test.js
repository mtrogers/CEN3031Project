'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Inventory = mongoose.model('Inventory'),
	Result = mongoose.model('Result');

/**
 * Globals
 */
var user, inventory, result;

/**
 * Unit tests
 */
describe('Result Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			userId: '12345',
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local',
			dateOfBirth: '1992-06-14',
			gender: 'male'
		});

		inventory = new Inventory({
				itemId: '123456789',
				name: 'Test kit',
				count: '10',
				price: '1000'
			});

		user.save(function() { 
			result = new Result({
				user: user,
				item: inventory
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return result.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Result.remove().exec();
		User.remove().exec();

		done();
	});
});