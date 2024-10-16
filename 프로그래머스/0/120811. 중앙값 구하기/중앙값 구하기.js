function solution(array) {
   array.sort((a, b) => b - a );
    return array[Math.trunc(array.length / 2)];
    
}