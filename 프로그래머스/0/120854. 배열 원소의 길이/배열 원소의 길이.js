function solution(strlist) {
    let answer = [];
   for (let i = 0; i < strlist.length; i++) {
       answer.push(strlist[i].length);
   }
    return answer;
}

// 각 배열 원소의 길이를 구해야 했던 문제
// 가독성이 더 좋은 코드
function solution(strlist) {
    return strlist.map((el) => el.length)
}
// 메소드를 사용하는 방향으로 고민해봐야겠다.
