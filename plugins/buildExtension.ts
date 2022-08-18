const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const PackageJSON = require('../package.json');
const ManifestJSON = require('../extension/manifest.json');

const resolve = (dir) => path.resolve(__dirname, dir);
const currentVersion = PackageJSON.version;


class buildExtension {
    apply(compiler) {
        compiler.hooks.done.tap('buildExtension', (stats) => {
            execSync(`cp dist/bundle.js extension/bundle.js`);
            ManifestJSON.version = currentVersion;
            fs.writeFileSync(
                resolve('../extension/manifest.json'),
                JSON.stringify(ManifestJSON, null, 2),
                'utf8'
            );
            console.log('✨ extension generate complete!');
        });
    }
}

module.exports = buildExtension; 