function solution(num_list) {
   // even과 odd를 먼저 배열로 선언
   let even = [];
   let odd = [];
    for (let i = 0; i <num_list.length; i++) {
       //배열을 2로 나눈 나머지값이 0 이면 짝수이기 때문에 even에 push
        if (num_list[i] % 2 === 0) {
            even.push(i)
        } else {
           //그 외는 홀수이니까 odd에 push
            odd.push(i)
        }
    } 
   // 그 후 even 배열의 길이 (개수) ,  odd 배열의 길이 (개수)를 return
   return [even.length, odd.length]
}

// filter 메소드를 활용한 더 간단한 풀이
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
