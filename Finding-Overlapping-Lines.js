/*
선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.


제한사항
lines의 길이 = 3
lines의 원소의 길이 = 2
모든 선분은 길이가 1 이상입니다.
lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
-100 ≤ a < b ≤ 100
*/

//--------------------------- 문제 ------------------------------------------------

/*
1. start 부터 end 까지 숫자를 나열한 배열 3개 생성
2. 겹치는 선분인지 판별하는 분기문
 - 0번째 요소의 end 가 1번째 요소의 start 보다 +1 클 때,
 - 0번째 요소의 end 가 2번째 요소의 start 보다 +1 클 때,
 - 1번째 요소의 end 가 2번째 요소의 start 보다 +1 클 때,

해당 해결방안은 중복되는 중첩된 선분을 구별하지 못한다.

[[0, 5], [3, 9], [1, 10]]

1. 선분 숫자 나열
[0,5] -> [0,1,2,3,4,5]
[3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9,10]

let arr = [0,5]

function makeNumberList(arr){
  let array = []
  for (let i = arr[0]; i < arr[1] + 1; i++) {
    array.push(i)
  }
  return array
}

console.log(makeNumberList(arr))

2. 중복 숫자만 배열 리턴
0번째 요소, 1번째 요소
[0,1,2,3,4,5]
[3,4,5,6,7,8,9]
return [3,4,5]

let arr1 = [0,1,2,3,4,5]
let arr2 = [3,4,5,6,7,8,9]

console.log(arr1.concat(arr2).filter((e, i, a) => a.indexOf(e) !== i) )

0번째 요소, 2번째 요소
[0,1,2,3,4,5]
[1,2,3,4,5,6,7,8,9,10]
return [1,2,3,4,5]

1번째 요소, 2번째 요소
[3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9,10]
return [3,4,5,6,7,8,9]

**
2-1 중복되는 선분이 떨어져 있을 경우 문제 발생


**

3. 3개 배열 중복 없이 합치기
[1,2,3,4,5,6,7,8,9]

let arr1 = [0,1,2,3,4,5]
let arr2 = [3,4,5,6,7,8,9]

console.log(arr1.concat(arr2).filter((e, i, a) => a.indexOf(e) === i) )

해당 배열 length - 1 = answer 반환

필요한 기술.
start 와 end 주어졌을 때 map으로 나열한 숫자 배열 반환
두 배열 겹치는 숫자만 리턴하기
세 배열 중복없이 합치기
*/

//--------------------------- 해결방안 ------------------------------------------------
// const lines = 	[[0, 5],[0, 1], [2, 4]]

// function solution(lines) {
//   var answer = 0;

//   let linesArr1 = makeNumberList(lines[0])
//   let linesArr2 = makeNumberList(lines[1])
//   let linesArr3 = makeNumberList(lines[2])
  
//   console.log(linesArr1 , "linesArr")
//   console.log(linesArr2)
//   console.log(linesArr3)

//   let makeRepeatArr1 = makeRepeatArr(linesArr1, linesArr2)
//   let makeRepeatArr2 = makeRepeatArr(linesArr1, linesArr3)
//   let makeRepeatArr3 = makeRepeatArr(linesArr2, linesArr3)

//   console.log(makeRepeatArr1 , "makeRepeatArr1")
//   console.log(makeRepeatArr2)
//   console.log(makeRepeatArr3)




//   let makeDuplicationArr1 = makeDuplicationRemoveNumber(makeRepeatArr1, makeRepeatArr2)
//   let makeDuplicationArr = makeDuplicationRemoveNumber(makeDuplicationArr1, makeRepeatArr3)
  
//   console.log(makeDuplicationArr1 , "makeDuplicationArr1")
//   console.log(makeDuplicationArr)

//   answer = makeDuplicationArr.length - 1 

//   if(answer < 0){
//     answer = 0
//   }
  
//   return answer
// }

// function makeNumberList(arr){
//   let array = []
//   for (let i = arr[0]; i < arr[1] + 1; i++) {
//     array.push(i)
//   }
//   return array
// }

// function makeRepeatArr(arr1, arr2){
//   let arr = arr1.concat(arr2).filter((e, i, a) => a.indexOf(e) !== i)
//   if(arr.length > 1){
//     return arr
//   } else {
//     return []
//   }
// }

// function makeDuplicationRemoveNumber(arr1, arr2){
//   return arr1.concat(arr2).filter((e, i, a) => a.indexOf(e) === i)
// }

// console.log(solution(lines))

//--------------------------- 우수정답확인 -----------------------------------
const lines = 	[[0, 5],[0, 1], [2, 4]]
function solution(lines) {
  let line = new Array(200).fill(0);

  lines.forEach(([a, b]) => {
      for(; a < b; a++) line[a+100]++;
  });

  
  return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
}
console.log(solution(lines))
//--------------------------- 우수정답풀이 -----------------------------------

/*
1. let line = new Array(200).fill(0);
- 새로운 배열을 만들고 0으로 가득 채운다.

2. lines.forEach(([a, b]) => {
    for(; a < b; a++) line[a+100]++;
});
- 요소를 꺼내 a 에서 b 까지 반복한 수를 line 요소에 +1 씩 올린다.
a+100 한 이유는 새로만든 배열이 0~ 200 이기 때문

3. return line.reduce((a, c) =>  c > 1 ? a + 1 : a, 0)
- 누산기로 1이상인 요소를 더해준다.
*/

//--------------------------- 코멘트 -----------------------------------

/*
똥꼬 쇼 실패

새로운 배열을 어떻게 만들어서 활용하는지 궁금해서 다시 찾아왔지만, 그래도 함수를 만들어 시도를 했던건 좋았던거 같다.

새로운 배열을 만드는 방법 잊지말고,
forEach 사용방법

for 문 심화

reduce 누산기 활용하기 다시한번 상기 시키자!

forEach - 요소 각각을 실행
for 문과 차이점
1. for문은 동기, forEach문은 비동기
2. for문보다 수행속도가 빠르다.
3. 반복문 내에 배열이나 리스트 값을 변경하거나 추가할 수 없다.
4. 순서대로 가져오기때문에 역순으로 가져오는 것이 불가능한다.

let lines = [[0, 5],[0, 1], [2, 4]]
let answer = 0
lines.forEach(([a, b]) => {
  for(; a < b; a++) answer++
})

console.log(answer)

forEach 의 반환값은 undefined 이지만, callback 으로 처리할 수 있는 방법이 있다.

for of 배열 간단 순회
for in 객체 간단 순회
*/

