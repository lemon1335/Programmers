function solution(s1, s2) {
    return s1.filter((e) => s2.includes(e)).length
}

/* filter메소드를 사용해서 푸는 문제. 분명 filter 메소드를 사용해 본 적 있는데, 접근을 어렵게 생각했다. 그래서 블로그를 찾아봤다.
같은 값이 있으면 그 개수를 리턴하는 문제였는데, 
같은 값인지 비교해야 하니 걸러서 새로운 배열로 반환하기 위해 filter 메소드를 사용했고, 
s1에 존재하는 값이 s2에도 포함되어 있는지 보기 위해 includes메소드를 사용했다. 
이후 같은 값의 개수를 return하기 위해 length 프로퍼티를 사용해 return한 문제. */
