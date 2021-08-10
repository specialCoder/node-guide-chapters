const delFile = () => {
    fs.unlink('./assert/text3.txt', () => {
        console.log('file deleted!');
    });
}