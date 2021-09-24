const array=[1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
let summ=0;
array.map(function (array1) {
    summ+=Math.pow(array1,2);
});
 console.log(summ);