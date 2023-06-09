/*
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

strings는 길이 1 이상, 50이하인 배열입니다.
strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
모든 strings의 원소의 길이는 n보다 큽니다.
인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.
*/

//--------------------------- 문제 ------------------------------------------------

/*
배열안에 문자도 대괄호를 활용해 특정 문자열을 조회할 수 있다.

* sort() 메서드 최대한 활용하기.
- sort() 메서드는 value 기준 과 name 기준으로 정렬이 가능하다.
해당 알고리즘에선 name 기준으로 정렬할 예정



*/

//--------------------------- 해결방안 ------------------------------------------------
//sort 메서드 이해도가 떨어져 답지로 해결
//--------------------------- 우수정답확인 -----------------------------------
// function solution(strings, n) {
//   strings.sort((a, b) => {
//           if(a[n] < b[n]) {return -1}
//           else if(a[n] > b[n]) {return 1}
//           else if(a < b) {return -1} 
//           else if(a > b) {return 1}
//           return 0
//       })
//   return strings;
// }



//--------------------------- 우수정답풀이 -----------------------------------

/*
sort 안에 compareFunction 함수의 인자는 2개를 받는다.
인접한 a, b 를 비교해 벨류를 반환.
먼저 []를 활용해 인접한 2 문자를 비교 a < b

let strings = ['a','c','d','f','z','e',]

console.log(strings.sort((a, b) => {
  if(a > b) return 1
  if(a < b) return -1
}))

해당 간단한 sort 정렬로 리턴값(1 , -1)에 따라 정렬 하는 방식을 이해
*/

//--------------------------- 우수정답확인 -----------------------------------
function solution(strings, n) {
  return strings.sort((a, b) => {
      const chr1 = a.charAt(n);
      const chr2 = b.charAt(n);

      if (chr1 == chr2) {
          return (a > b) - (a < b);
      } else {
          return (chr1 > chr2) - (chr1 < chr2);
      }
  })
}


//--------------------------- 우수정답풀이 -----------------------------------

/*
해당함수의 궁금한 점
(a > b) - (a < b) 이것은 무엇일까?

이것은 true - false = 1 이라는 것을 이용해 만든 값

sort함수 안에 들어가는 compareFunction은 함수에게 배열의 2개의 요소를 받는다. 
이 2개를 반복해서 보낸뒤 compatreFuntion이 반환하는 값을 기준으로 정렬합니다. 
반환값 > 0 이면 a가 b보다 앞에 있는다. 
반환값 = 0 이면 a와 b의 순서를 바꾸지 않는다. 
반환값 < 0 이면 b가 a보다 앞으로 순서를 바꾼다.
자바스크립트에서 true=1, false=0 값이 나온다. 

해석 (a > b) - (a < b)  
a가 b보다 크면 b가 a보다 앞에 있어야한다 (리턴값 = 1) or b가 a보다 크면 a는 b보다 앞으로 와야한다(리턴값 = -1) 

*/

//--------------------------- 코멘트 -----------------------------------

/*
sort 에 대해 한걸음 다가간 느낌.
*/

