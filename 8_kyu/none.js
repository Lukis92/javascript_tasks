//https://www.codewars.com/kata/enumerable-magic-number-4-true-for-none/
function none(arr, fun){
  return !arr.some(fun);
}

//some wykonuje funkcję callback na każdym elemencie tablicy, aż znajdzie taki,
//dla którego callback wróci prawdę(true) w przeciwnym wypadki some zwróci false.
//arr.some(callback[, thisArg])
//callback - funckja sprawdzająca dla każdego elementu
//thisArg - obiekt do użycia jako this gdy wywołukemy funkcję callback
