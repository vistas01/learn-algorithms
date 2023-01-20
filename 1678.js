/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    function parser(arr, index){
        if(arr[index] === '('){
            if(arr[index + 1] === 'a'){
                return 'al';
            }
            if(arr[index + 1] === ')'){
                return 'o';
            }
        }
        if(arr[index] === 'G'){
            return 'G';
        }
        return '';
    }
    let parsed = '';
    for(let i = 0; i< command.length; i++){
    parsed += parser(command, i);
    }
    return parsed;
};