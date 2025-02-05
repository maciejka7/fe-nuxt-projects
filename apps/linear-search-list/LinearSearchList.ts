/**
 *  linear search
 *  przeszukuje wszystkie elemety tablicy i zwracam true jezeli znajdzie dany element
 * 
 * moze zakonczyc sie na pierwszym albo na ostatnim elemencie z array co oznacza ze czas
 * jego wykonywania bedzie tak dlugi jak dlugi bedzie input
 * 
 * time complexity: O(n)
 */ 
 export const linear_fn = (haystack: number[], needle:number ):boolean=> {

    let result = false

    for (let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle) {
            result = true
        }
    }
    return result 
 }