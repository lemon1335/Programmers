function solution(my_string) {
 // 먼저 배열로 쪼개기 위한 변수 num을 선언한다.
 const num = my_string.split('');
 // 쪼갠 배열의 숫자를 합산 할 변수 total을 선언한다.
 let total = 0;
    
    for (let i = 0; i < num.length; i++) {
     // num[i]를 Number 함수를 사용하여 숫자로 변환하고, 숫자로 변환할 수 있는 문자열이면 total에 그 값을 더한다.
        if (Number(num[i])) total += Number(num[i])
    } 
 // 최종적으로 total 반환
 return total
}
