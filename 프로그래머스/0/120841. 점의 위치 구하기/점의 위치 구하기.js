function solution(dot) {
        if (dot[0] < 0 && dot[1] < 0) {
            return 3
        } else if (dot[0] > 0 && dot[1] > 0) {
            return 1
        } else if (dot[0] < 0 && dot[1] > 0) {
            return 2
        } else return 4
}

// 연산자를 활용한 풀이

// 삼항 연산자를 활용한 풀이인데, 가장 깔끔하지만 아직까지 한번에 이해하기 조금 어려워서 다른 풀이를 찾아보았다.
function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}

// 조금 더 이해하기 쉽고, 눈에 잘 들어오는 풀이
function solution(dot) {
    let n = dot[0] * dot[1];
    if (n > 0) return dot[0] < 0 ? 3 : 1
    else return dot[0] < 0 ? 2 : 4
}
