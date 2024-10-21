function solution(numbers, num1, num2) {
   return numbers.slice(num1, num2 + 1);
}

/*slice와 splice에 대해 짚고 넘어가게 된 문제였다. 안그래도 헷갈렸던 부분인데 이참에 공부해야겠다 싶었다. 
- slice(start : 추출을 시작할 인덱스, end: 추출을 끝낼 인덱스)
그런데 end 파라미터는 지정된 인덱스를 포함하여 끝내지않고 지정된 인덱스 앞에서 추출을 끝내므로, end파라미터 앞에 + 1을 붙여주는 게 좋다.
- splice(start : 자르기 시작할 인덱스, deleteCount : start부터 어디까지 삭제할지에 대한 값)
splice 메소드의 deleteCount 파라미터는 start부터 n개를 삭제하겠다에 대한 값이다.
*/
