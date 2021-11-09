const v1 = [30, 22, 1,2,3,5,5,5];
const v2 = [4,5,6,10,30, 22];

console.log(intersect(v1,v2));

function intersect(one, two){
    const result = [];
    v1.forEach(x => v2.includes(x) && !result.includes(x) && result.push(x));
    return result;
}

