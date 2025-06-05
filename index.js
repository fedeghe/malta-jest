const path = require('path'),
    cp = require("child_process");
function maltaJest(obj, options) {
    const self = this,
        start = new Date(),
        pluginName = path.basename(path.dirname(__filename)),
        targetFile = this.data.name;
    let msg,
        output = '',
        errorOutput = '';
    options = options || {};
    return (solve, reject) => {
        const next = () => {
                solve(obj);
                self.notifyAndUnlock(start, msg);
            },
            jest = cp.exec(`"jest" ${options?.argz}`);
        
        console.log(`${pluginName}: ${targetFile}`)
        jest.stdout.on("data", data => {
            output += data;
            next();
        });
        jest.stderr.on("data", data => {
            errorOutput += data;
        });
        jest.on("close", code => {
            if (code === 0) {
                console.log(output);
                solve(obj);
                self.notifyAndUnlock(start, msg);
            } else {
                console.log("ERROR".red());
                msg = 'plugin ' + pluginName.white() + ' compilation error';
                console.log((output + errorOutput).white());
                reject(`ERROR: some tests are failing\nplugin ${pluginName}: SOME TESTS ARE FAILING`);
                self.notifyAndUnlock(start, msg);
            }
        });
    }
}
maltaJest.ext = ['js', 'jsx'];
module.exports = maltaJest;