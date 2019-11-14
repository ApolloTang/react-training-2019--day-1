var shell = require('shelljs');

shell.exec('node_modules/.bin/http-server libs -p 29090', function(code, stdout, stderr) {
  console.log('http-server: Exit code:', code);
  console.log('http-server: output:', stdout);
  console.log('http-server: stderr:', stderr);
});


shell.exec('node_modules/.bin/browser-sync start --server "src" --files "src" -c "bs-config.js" --directory & ', function(code, stdout, stderr) {
  console.log('browser-sync: Exit code:', code);
  console.log('browser-sync: output:', stdout);
  console.log('browser-sync: stderr:', stderr);
});
