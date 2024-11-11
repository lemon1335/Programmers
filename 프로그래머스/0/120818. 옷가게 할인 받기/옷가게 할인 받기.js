function solution(price) {
    if (price >= 500000) {
        return Math.floor(price * 0.8)
    } 
    else if (price >= 300000) {
        return Math.floor(price * 0.9)
    } 
    else if (price >= 100000) {
        return Math.floor(price * 0.95)
    } 
    else return price
}

// 조건문의 순서를 간과했던 문제였고, if문을 다시 생각하게 만든 문제였다.
// 조건의 범위가 좁은 순서에서 큰 순서로 적어야하는 것을 잊지말자! Math.floor도 상기했던 문제.
