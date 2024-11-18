function solution(rsp) {
    let result = '';
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            result += '0';
        } else if (rsp[i] === '0') {
            result += '5';
        } else if (rsp[i] === '5') {
            result += '2';
        }
    } return result;
}
// map을 써야한다는 것 까지는 떠올렸지만, 어떻게 응용해야할 지 몰라서 if문으로 해결했던 문제.
// 메소드도 언젠가는 쓸 날이 오겠지,,,,,,,,,,?
// 객체와 map 메소드를 이용한 간단한 풀이
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
