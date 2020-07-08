'use strict';
var _ = require('lodash')

module.exports = shared;

function shared() {
    console.log('this is come from shared lib')
  console.log('update 123456')
    return _.max
}
