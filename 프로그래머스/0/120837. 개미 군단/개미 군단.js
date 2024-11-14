function solution(hp) {
    let general = Math.floor(hp / 5);
    let solider = Math.floor((hp - 5 * general) / 3);
    let common = (hp - (5 * general) - (3 * solider));
    return general + solider + common;
}