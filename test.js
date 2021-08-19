const { compileCode } = require('./compile');

compileCode(null, JSON.parse(process.env.firmware_config));