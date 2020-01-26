
const init = async (): Promise<any> => {
    try {
        console.log('yohay test asd');
    }
    catch(err) {
        console.log(err);
        throw err;
    }
}
export default { init };