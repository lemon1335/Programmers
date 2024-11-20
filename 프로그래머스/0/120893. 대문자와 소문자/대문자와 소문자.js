function solution(my_string) {
    let answer = [];
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] === my_string[i].toUpperCase()) {
            answer.push(my_string[i].toLowerCase())
        } else {
            answer.push(my_string[i].toUpperCase())
        }
    } return answer.join('')
}

// toUpperCase(), toLowerCase() 메소드와 join() 메소드 활용
// join() 메소드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// if 문에서 탈출하고 싶다.......!

// split() 메소드와 map() 메소드, 삼항연산자를 활용한 풀이
function solution(my_string) {
    return my_string.split('').map(n => n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()).join('')
}
