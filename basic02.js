/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

//--------------------------- 문제 ------------------------------------------------

/*
function solution(s) {
  var answer
  let ss = s.slice('')
  (Number(s) && s.length === 4 || s.length === 6) ? answer = true : answer = false
  if(s === '0000' || s === '000000') answer = true
  return answer;
}

console.log(solution(s))

e 표기법에 의한 true 를 제한하는 방법?

1. 배열의 길이가 4 또는 6 일 때,
2. 모든 요소를 순환해서 문자가 있을경우 false, 그 외에 true 

*/

//--------------------------- 해결방안 ------------------------------------------------

// function solution(s) {
//   let answer = false

//   if(s.length === 4 || s.length === 6){
//     for (let i = 0; i < s.length; i++) {
//       if(isNaN(Number(s[i]))){
//         answer = false
//         break;
//       } else {
//         answer = true
//       }
//     }
//   }
//   return answer;
// }

// console.log(solution(s))

let s = '12e4'

console.log(s.length === 4)
// 조건을 만족하면 true 아니면 false
/*
1. e를 포함하지 않으면 true 반환
2. 길이가 4 혹은 6 이면 true 반환
4. 숫자이면 true 반환
*/




//--------------------------- 우수정답확인 -----------------------------------

// 1.
// function alpha_string46(s){
//   var regex = /^\d{6}$|^\d{4}$/;
//   return regex.test(s);
// }

// 2.
// function solution(s) {
//   return !s.includes('e') && (s.length === 4 || s.length === 6) && !isNaN(Number(s));
// }


//--------------------------- 우수정답풀이 -----------------------------------

/*
1. 정규식을 사용하는 방법!
(정규표현식).test("문자열")
 "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환

2. 필요한 조건들만 나열하는 방법!!
 a. s에 'e' 문자열이 포함되어 있지 않은지 검사합니다. 포함되어 있으면 false를 반환합니다.
 b. s의 길이가 4 또는 6인지 검사합니다. 아니면 false를 반환합니다.
 c. s를 Number 함수로 변환한 결과가 숫자인지 검사합니다. 아니면 false를 반환합니다.
*/

//--------------------------- 코멘트 -----------------------------------

/*
문자열을 숫자인지 판별하는게 이렇게 까다로운줄 몰랐다. 자바스크립트의 특성을 다시 한번 상기시킬 수 있었던 문제!
- 0 = false 
- 지수형식("1e12") 같은 것도 생각하기

- NaN은 자기 자신과도 일치하지 않는 값으로, 비교 연산자(==, ===, <, >, <=, >=)를 사용하여 다른 값과 비교해도 항상 false를 반환

isNaN isNaN() 함수는 인수로 전달된 값이 NaN인지 여부를 판별해주는 함수
Number('asdf') -> NaN 을 반환할 경우 isNaN(Number('asdf")) -> true 반환

- includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별

- 메서드, 부등호로 불린값을 반환한다면 if 없이 값 반환 가능 
*/

