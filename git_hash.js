const { exec } = require('child_process');
const { EOL } = require('os');

module.exports = function git_hash (callback) {


  if (process.env.GIT_REV) { 
    return callback(null, process.env.GIT_REV, null);
  }

  return exec('git rev-parse HEAD', function(e, stdout, stderr) {
    return callback(e, stdout.replace(EOL, ''), stderr);
  });
}
