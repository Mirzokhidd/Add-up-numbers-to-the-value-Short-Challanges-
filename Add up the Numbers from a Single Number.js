//You can run the code through the terminal by specifying the path and running the text, "node java.ja"
//Or you can just run it rhought the 'Run code' to output function of visual studious

//-------------------------------------------------------------------------------------------------------------

/*Program which adds up to the number inputted


examples:
(1) = 1
(2) = 3
(4) 10
*/
function addUp(num) {
    var value = 1;
    var number = num;
    for (var i = 1; i < num; i++) {
        value = number + (num - i);
        number = value;
    }
    return value;
};

console.log(addUp(4));
