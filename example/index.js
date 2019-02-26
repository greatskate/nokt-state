var State = require('nokt-state');
const {example} = require('./example');
State.createInstance();
State.getInstance().test = 'This is an example of Nokt State'
example();
