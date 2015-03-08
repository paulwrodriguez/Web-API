'use strict';

var util = require('util');
var jQuery = require('jQuery');
var db = [];


module.exports = {
  testGet: testGet,
  testPut: testPut, 
  testDelete: testDelete, 
  testPost: testPost, 
  error: error
};

// healper funcction for output
function output(res, path, headers, q) {
	var out = path + '';
	res.json({Request_to: path+ '', 
			  Headers_recieved: headers, 
			  Query: q+''});
	return;
};

// error function
function error(req, res) {
	res.status(405);
	res.json({Request: req.path, 
			  Error: 'Does not support this method' });
	res.end();
};
function testDefault(req, res) {
	res.write('could not process request\n');
	res.end();
};
// get request
function testGet(req, res) {
	var q = req.swagger.params.name.value || 'non sent';
	output(res, req.path, req.headers, q);
	res.end();
};

// put request
function testPut(req, res) {
	var q = req.swagger.params.item.value || 'non sent';
	output(res, req.path, req.headers, q);
	res.end();
};

// handles delete request
function testDelete(req, res) {
	var q = req.swagger.params.item.value || 'non sent';
	output(res, req.path, req.headers, q);
	res.end();
};

// handles post request
function testPost(req, res) {
	var q = req.swagger.params.item.value || 'non sent';
	output(res, req.path, req.headers, q);
	res.end();
};
