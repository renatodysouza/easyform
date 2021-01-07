
const packageJson = require('./projects/angular-easy-form/package.json');

// tslint:disable-next-line: radix
const version = packageJson.version;
const buildMajor = packageJson.version.match(/[0-9]+\D/g)[0];
const buildMinor = packageJson.version.match(/[0-9]+\D/g)[1];
const buildTag = packageJson.version.match(/\D\d+$/g)[0];

console.log(process.argv.includes('--maj'));

if (process.argv.includes('--maj')) {
    console.log(`${buildMajor}${buildMinor}${parseInt(buildTag.replace('.', '')) + 1}` );
}

