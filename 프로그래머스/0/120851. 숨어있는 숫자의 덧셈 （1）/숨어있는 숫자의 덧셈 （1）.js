function solution(my_string) {
 const num = my_string.split('');
 let total = 0;
    
    for (let i = 0; i < num.length; i++) {
        if (Number(num[i])) total += Number(num[i])
    } return total
}