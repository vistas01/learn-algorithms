/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    function parser(arr, index) {
        if (arr[index] === '(') {
            if (arr[index + 1] === 'a') {
                return 'al';
            }
            if (arr[index + 1] === ')') {
                return 'o';
            }
        }
        if (arr[index] === 'G') {
            return 'G';
        }
        return '';
    }
    let parsed = '';
    for (let i = 0; i < command.length; i++) {
        parsed += parser(command, i);
    }
    return parsed;
};

/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let interpretedCommmand = command.replaceAll("()", "o").replaceAll("(al)", "al")
    return interpretedCommmand
};





/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    var ans = '';
    while (command != '') {
        if (command[0] == "G") {
            ans += "G";
            command = command.slice(1);
            continue
        } if (command.slice(0, 2) == "()") {
            ans += "o";
            command = command.slice(2);
            continue
        } if (command.slice(0, 4) == "(al)") {
            ans += "al";
            command = command.slice(4);
            continue
        }
    }
    return ans;
};