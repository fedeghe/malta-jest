const path = require('path'),
    cp = require("child_process");
function maltaJest(obj, options) {
    const self = this,
        start = new Date(),
        pluginName = path.basename(path.dirname(__filename)),
        targetFile = this.data.name;
    let msg;
    options = options || {};
    return (solve, reject) => {
        const next = () => {
                solve(obj);
                self.notifyAndUnlock(start, msg);
            },
            jest = cp.exec(`"jest" ${options?.argz}`);
        console.log(`${pluginName}: ${targetFile}`)
        jest.stdout.on("data", data => {
            console.log(data);
            next();
        });
        jest.stderr.on("data", data => {
            console.log(data);
            next();
        });
    }
}
maltaJest.ext = ['js', 'jsx'];
module.exports = maltaJest;