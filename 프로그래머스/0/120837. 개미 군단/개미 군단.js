function solution(hp) {
    let general = Math.floor(hp / 5);
    let solider = Math.floor((hp - 5 * general) / 3);
    let common = (hp - (5 * general) - (3 * solider));
    return general + solider + common;
}

// 순차적으로 나머지와 몫을 생각하면서 풀이해야 했던 문제
// 더 간단한 풀이
function solution(hp) {
    return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3;
}
