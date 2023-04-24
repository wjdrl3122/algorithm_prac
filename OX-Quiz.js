/*
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
연산 기호와 숫자 사이는 항상 하나의 공백이 존재합니다. 단 음수를 표시하는 마이너스 기호와 숫자 사이에는 공백이 존재하지 않습니다.
1 ≤ quiz의 길이 ≤ 10
X, Y, Z는 각각 0부터 9까지 숫자로 이루어진 정수를 의미하며, 각 숫자의 맨 앞에 마이너스 기호가 하나 있을 수 있고 이는 음수를 의미합니다.
X, Y, Z는 0을 제외하고는 0으로 시작하지 않습니다.
-10,000 ≤ X, Y ≤ 10,000
-20,000 ≤ Z ≤ 20,000
[연산자]는 + 와 - 중 하나입니다.
*/

//--------------------------- 문제 ------------------------------------------------

/*
map 함수로 요소 형태 X [연산자] Y == Z 형태로 나열
if 문에 eval함수를 사용하여 boolean 을 반환한 값에 따라 O X 를 정답배열에 넣음

mdn 문서 경고: 주의: 문자열로부터 **eval()**을 실행하는 것은 엄청나게 위험합니다. **eval()**을 사용하면 해커가 위험한 코드를 사용할 수 있습니다. 아래에 eval을 절대 사용하지 말 것!을 확인하세요.

다른 대안
eval 을 사용하지 말고 split 함수 활용으로 대안 변경

1. quiz 요소를 파싱 후 변수에 담음
2. 연산한 값과 결과 값을 비교해 맞다면 배열에 O 요소를 넣고, 틀리다면 X 요소 넣기
*/

//--------------------------- 해결방안 ------------------------------------------------
  

let quiz = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]

function solution(quiz) {
  var answer = [];

  for (let i = 0; i < quiz.length; i++) {
    let quizParsing = quiz[i].split(" ");
    
    let x = Number(quizParsing[0])
    let Operator = quizParsing[1]
    let y = Number(quizParsing[2])
    let z = Number(quizParsing[4])
  
    let question
  
    if(Operator === "-"){
      question = x - y
    } else if (Operator === "+"){
      question = x + y
    }
  
    if(question === z){
      answer.push("O")
    } else {
      answer.push("X")
    }
  }

  return answer;
}


console.log(solution(quiz))

//--------------------------- 우수정답확인 -----------------------------------

function solution(quiz) {
    let answer = [];
    quiz.forEach((val) => {
        const [x, sign, y, , z] = val.split(" ");
        let sum = 0;
        if (sign === "+") {
            sum = Number(x) + Number(y);
        } else {
            sum = Number(x) - Number(y);
        }
        sum === Number(z) ? answer.push("O") : answer.push("X");
    });
    return answer;
}

//--------------------------- 우수정답풀이 -----------------------------------

/*
내가 했던 방식과 비슷하지만,
구조분해할당과 3항 연산자를 사용해 코드가 더욱 깔끔해진 코드이다.

배열을 변수에 담아야한다면 구조분해할당을 적극 활용하고,
조건이 하나인 if else 문은 3항연산자로 사용할지 고려도 해보자!
*/

//--------------------------- 코멘트 -----------------------------------

/*
커밋을 어떻게 남기지 라고 생각하는 도중 깃허브와 연동되는 백준 알고리즘 발견
1일 1커밋을 목표로 하는 나에게 적격인 기능이기에 나중에 확인하고 적용해볼 것

https://blog.neonkid.xyz/287
*/

