
const getHeshOfString = (str) => {
    let charCodes = str.split('').map(value => value.charCodeAt(0));
    let result = '';
    for(let item of charCodes){
        result+= '#0#';
        result+= `${(Number(item)*2)}`;
    }
    return result
}

const getStringFromHesh = (str) => {
    let charCodes = str
        .split('#0#')
        .filter(value => value != 0 ? value : null)
        .map(value => String.fromCharCode((Number(value/2))))
        .join('');
    return charCodes
}

module.exports = {
    getHeshOfString,
    getStringFromHesh,
}