const shx = require('shelljs');

console.time('start');
shx.cd('..')
const dirNames = []
let totalSizeRemoved = 0
const startDir = shx.pwd().stdout


shx.ls('-l').forEach(({name, atime}, i) => (
    dirNames.push({ num: i, name, lastAccessed: atime, complete: null }))
);

let removeContainer = n => {
    let {num, name, lastAccessed} = dirNames[n];
    let cwd = shx.pwd().stdout;
    reset(cwd);

    switch (n <= 0) {
        case true: return;
            break;
        case false: deleteDir(name)
            break;
        default: console.log('something has gone wrong');
    }
    removeContainer(n - 1)
}
removeContainer(dirNames.length - 1)


function reset(cwd) {
    (cwd !== startDir) ? shx.cd('..') : null;
}

function deleteDir(dir) {
    shx.cd(dir)
    shx.ls('-l').forEach(({name, size}) => {
        if(name === 'node_modules') {
            console.log('inside: ', shx.pwd().stdout);
            totalSizeRemoved = totalSizeRemoved + size;
            shx.rm('-rf', name)
            shx.cd('..')
        } else {
           return shx.pwd().stdout
        }
    })
}
console.timeEnd('start')
// shx.echo(totalDirectories)
// console.log('names: ', dirNames);
// const some = shx.exec('ls -lh', {silent: true}).split(' ');
// console.log('some: ', some);

// let dirRemover = n => {
//     console.log('inside dir: ')
// }

// shx.ls('-l').forEach(dir => {
//     let { atime, ctime, mtime, birthtime, size, name} = dir;
//     console.log('name: ', name);
//     shx.exec(`cd ${name}`);
//         shx.ls('-l');
//
//     // let aTime = moment(atime).startOf('day').fromNow();
//     // let cTime = moment(ctime).startOf('day').fromNow();
//     // let mTime = moment(mtime).startOf('day').fromNow();
//     // let birth = moment(birthtime).startOf('day').fromNow();
//     // console.log('ACCESSED: ', aTime);
//     // console.log('CHANGED: ', cTime);
//     // console.log('MODIFIED: ', mTime);
//     // console.log('BIRTHED: ', birth);
//     // console.log(`the file ${name} is ${size}`);
// });




// \d+\w[B] todo: regex to grep number in Bytes
//todo: convert Bytes / Kilobytes / Megabytes