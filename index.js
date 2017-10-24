const shx = require('shelljs');
const moment = require('moment');


shx.cd('..');
// const some = shx.exec('ls -lh', {silent: true}).split(' ');
// console.log('some: ', some);

shx.ls('-l').forEach(file => {
    let { atime, ctime, mtime, birthtime, size, name} = file;
    if(name === 'video') {
        shx.cd('video');
        shx.echo(process.cwd());
        shx.ls('-l').forEach(v => console.log(v))
    }
    // let aTime = moment(atime).startOf('day').fromNow();
    // let cTime = moment(ctime).startOf('day').fromNow();
    // let mTime = moment(mtime).startOf('day').fromNow();
    // let birth = moment(birthtime).startOf('day').fromNow();
    // console.log('ACCESSED: ', aTime);
    // console.log('CHANGED: ', cTime);
    // console.log('MODIFIED: ', mTime);
    // console.log('BIRTHED: ', birth);
    // console.log(`the file ${name} is ${size}`);
});



// \d+\w[B] todo: regex to grep number in Bytes
//todo: convert Bytes / Kilobytes / Megabytes