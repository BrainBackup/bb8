const convertArrayToObject = (array: any, key: string) => {
    const initialValue = {};
    return array.reduce((obj: any, item: any) => {
        return {
        ...obj,
        [item[key]]: item,
        };
    }, initialValue);
};
export default { convertArrayToObject };