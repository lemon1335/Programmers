function solution(n) {
       let x = Math.sqrt(n);
     return n === Math.ceil(x) * Math.floor(x) ? 1 : 2;
    }

/*처음에 제곱수 판별하는 식이라고 해서 나누는 수와 몫이 같으면 되는거 아닌가 하는 생각이 들었다. 
그런데 테스트 케이스를 통과하지 못했고, 아마 Math.ceil(x) * Math.floor(x) 이 부분에서 걸린 것 같다. 
구글링해도 이해가 되지 않는 부분이어서 gpt에 검색해보니
완전 제곱수를 판별하기 위해서 나온 부분인데, Math.ceil메소드의 경우 올려주고, Math.floor메소드의 경우 내려준다.
그런데 두 메소드의 곱이 Math.sqrt(n)와 같으면 1을 리턴하고, 아닌 경우 2를 리턴하는 삼항 연산자를 사용했다.*/
