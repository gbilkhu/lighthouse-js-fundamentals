function concat(array1, array2) {
  if (array1.constructor != Array || array2.constructor != Array) {
    return undefined;
  } else if (array1 !== undefined && array2 !== undefined){
    for (var i = 0; i < array2.length; i++){
      array1.push(array2[i]);
    }
    return array1;
  } else if (array1 !== undefined && array2 === undefined){
    return array1;
  } else if (array1 === undefined && array2 !== undefined) {
    return  array2;
  }
}