function solution(n) {
       let x = Math.sqrt(n);
     return n === Math.ceil(x) * Math.floor(x) ? 1 : 2;
    }