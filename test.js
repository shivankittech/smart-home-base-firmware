const { compileCode } = require('./compile/compile');

console.log('received config: ', JSON.parse(process.env.firmware_config));

compileCode(null, JSON.parse(process.env.firmware_config));