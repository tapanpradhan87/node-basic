const fs = require('fs')

const readFile = (path) => {
    return new Promise((onSuccess, onFailure) => {
        fs.readFile(path, 'utf-8', (error, data) => {
            if (error) onFailure(error);
            onSuccess(data);
        });
    })
}

const initApp = async () => {
    const data = await readFile('src/tests/test.txt');
    console.log(data);
    console.log('Hello World');
}

initApp();