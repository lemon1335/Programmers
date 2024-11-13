function solution(money) {
    var answer = [];
    answer[0] = Math.floor(money / 5500);
    answer[1] = money - (5500 * answer[0]);
    return answer;
}

// 배열에 어떻게 넣을 지 고민했던 문제
// 더 간단하고, 가독성 좋은 코드가 있어서 덧붙인다.
function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}
