/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let arr = coordinates.map(el => {
        return {x: el[0], y:el[1]}
    }) 
    if(arr.every((val, i, arr) => val.x === arr[0].x)) return true;
    const slope = (arr[1].y - arr[0].y) / (arr[1].x - arr[0].x);
    function cal_slope(p1, p2){
        return (p2.y - p1.y) / (p2.x - p1.x)
    }
    for(let i = 1; i < arr.length; i++){
        if(cal_slope(arr[0], arr[i]) !== slope) return false;
    }
    return true;
}
checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]);