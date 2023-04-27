/*
점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

[[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

제한사항

dots의 길이 = 4
dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
0 ≤ x, y ≤ 100
서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.
*/

//--------------------------- 문제 ------------------------------------------------

/*
1. dots 의 4개의 요소의 기울기를 확인
기울기 공식 = y 증가량 / x 증가량

직선은 총 6개가 나온다.
6개의 기울기를 구한다.
6개의 숫자중 같은 숫자가 있다면 ? 1 : 0
2. 기울기가 같은 요소가 있다면 1을 반환 없다면 0 을 반환

function solution(dots) {

  const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots
  const slope1 = Math.abs( y2 - y1 ) / Math.abs( x2 - x1 )  
  const slope2 = Math.abs( y3 - y1 ) / Math.abs( x3 - x1 )  
  const slope3 = Math.abs( y4 - y1 ) / Math.abs( x4 - x1 )  
  const slope4 = Math.abs( y3 - y2 ) / Math.abs( x3 - x2 )  
  const slope5 = Math.abs( y4 - y2 ) / Math.abs( x4 - x2 )  
  const slope6 = Math.abs( y4 - y3 ) / Math.abs( x4 - x3 )  

  const slope = [slope1, slope2, slope3, slope4, slope5, slope6]
  const set = new Set(slope)

  let answer = slope.length !== set.size ? 1 : 0

  return answer;
}

무식하게 푼 결과, 만약 배열이 길어져 결과값이 많아졌을때를 고려하지 않은 코딩
나중에 리펙토링 하려했지만 테스트 12번 부터 실패

힌트 - 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우
즉, 6개의 경우의 수가 아닌 2선분을 그었을 때인 3개의 경우의 수만 도출해내야 함.

3개의 기울기 값을 구한다.

3번의 비교 연산을 해 1 or 0 을 반환한다.

*/

//--------------------------- 해결방안 ------------------------------------------------
let dots = [[3, 5], [4, 1], [2, 4], [5, 10]]

// function solution(dots) {

//   var answer = 0;

//   const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots

//   const slope1 = Math.abs( y2 - y1 ) / Math.abs( x2 - x1 )  
//   const slope6 = Math.abs( y4 - y3 ) / Math.abs( x4 - x3 )

//   const slope2 = Math.abs( y3 - y1 ) / Math.abs( x3 - x1 )  
//   const slope5 = Math.abs( y4 - y2 ) / Math.abs( x4 - x2 )

//   const slope3 = Math.abs( y4 - y1 ) / Math.abs( x4 - x1 )  
//   const slope4 = Math.abs( y3 - y2 ) / Math.abs( x3 - x2 )  

//   answer = slope2 === slope5 ? 1 : 0  
//   answer = slope3 === slope4 ? 1 : 0  
//   answer = slope1 === slope6 ? 1 : 0  

//   return answer;
// }

// console.log(solution(dots))
//--------------------------- 우수정답확인 -----------------------------------

// function solution(dots) {
//     if (calculateSlope(dots[0], dots[1]) === calculateSlope(dots[2], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[2]) === calculateSlope(dots[1], dots[3]))
//         return 1;
//     if (calculateSlope(dots[0], dots[3]) === calculateSlope(dots[1], dots[2]))
//         return 1;
//     return 0;
// }

// function calculateSlope(arr1, arr2) {
//     return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
// }

//--------------------------- 우수정답풀이 -----------------------------------

/*
함수를 이용해 수식을 미리 정해놓음. 
solution 안에선 함수를 실행시키고 인자로 배열의 위치 값을 보내 계산(함수에 미리 요소 좌표를 입력해 중복을 줄임)
*/

//--------------------------- 우수정답확인 -----------------------------------
function solution(dots) {
  const leans = []

  for(let i = 0; i < dots.length; i++) {
      const dotA = dots[i];
      for(let j = i + 1; j < dots.length; j++) {
          const dotB = dots[j]
          const lean = (dotB[1] - dotA[1])  / (dotB[0] - dotA[0])
          
          if(leans.includes(lean)) return 1
          else leans.push(lean)
      }
  }

  return 0;
}

solution(dots)
//--------------------------- 우수정답풀이 -----------------------------------
/*
2023년 2월 14일 테스트 케이스가 수정되기 전 정답풀이

1. 기울기를 달을 leans 선언 후 빈배열을 할당해준다.
2. 중첩 for 문으로 dots 배열을 모두 순회
3. 기울기를 lean 변수에 담는다.
4. 2번째 for 문에 includes 함수를 써 해당 기울기를 포함할 경우 return 반복문을 멈추고 1을 반환한다.
5. 1이 아니라면 빈배열에 기울기를 넣어준다.

이 알고리즘의 재밌는 부분 2가지
1. 중첩 for 문 조건으로 정확히 원하는 배열을 순회했다는 것
2. includes 와 push 로 중복값을 확인했다는것
includes 이후에  push 를 했다는것도 재밌는데
push 를 먼저하게 되면 항상 1을 반환되는 조건이 만들어지지만
push 를 includes 조건 뒤에 넣게 되면, 항상 첫번째 요소부터 순회로 비교하게 된다.
*/

//--------------------------- 코멘트 -----------------------------------

/*
테스트케이스가 수정됐는데 문제가 수정되지 않아서 힌트를 확인했던 문제였다.
풀기전 기울기를 확인해야했었는데 피타고라스 정리까지 파고들어서 괜한 시간을 낭비했다.
내가 필요한것만 일단 빠르게 알아내 문제를 해결 하고, 찾으면서 공부해야했었던 것들은 키워드만 정리했다가
나중에 시간날 때, 풀도록 하자.
*/

