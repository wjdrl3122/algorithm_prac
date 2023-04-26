/*
지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

제한사항
board는 n * n 배열입니다.
1 ≤ n ≤ 100
지뢰는 1로 표시되어 있습니다.
board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.
*/

//--------------------------- 문제 ------------------------------------------------

/*
[
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 1, 0, 0]
[0, 0, 0, 0, 0]
]

(3,2) = 지뢰가 있는곳 = board[3][2]
(2,1),(2,2),(2,3)
(3,1),(3,2),(3,3)
(4,1),(4,2),(4,3)

1. 모든 배열안에 있는 모든 요소를 순회한다.
for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {  
    console.log(board[i][j])
  }
}

2. 요소가 1이 있다면 해당 요소의 인덱스를 반환한다.

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {  
    if(board[i][j] === 1){
      console.log(i,j)
    }
  }
}

3. 1을 x로 하고 요소 엑세스 식에 식을 넣어 주변 요소를 같이 엑세스 한다. 

let x
let y

board[x][y]

console.log(
board[x - 1][y - 1],
board[x - 1][y],
board[x - 1][y + 1],
board[x][y - 1],
board[x][y],
board[x][y + 1],
board[x + 1][y - 1],
board[x + 1][y],
board[x + 1][y + 1],
)

4. 음수값은 제외시킨다. 찾은 모든 요소를 1로 전환한다.

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {  
    if(board[i][j] === 1){
      board[i-1][j-1] = 1;
      board[i-1][j] = 1;
      board[i-1][j+1] = 1;

      board[i][j-1] = 1;
      board[i][j] = 1;
      board[i][j+1] = 1;
      
      board[i+1][j-1] = 1;
      board[i+1][j] = 1;
      board[i+1][j+1] = 1;
    }
  }
}

해당 알고리즘의 문제점 - JavaScript heap out of memory 에러 발생 

코드를 수정해야한다.

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {  
    if (board[i][j] === 1){
      if (i - 1 > 0){
        if (j > 0) board[i-1][j-1] = 1;
        board[i-1][j] = 1;
        if (j < board[i].length) board[i-1][j+1] = 1;
      }  
      if (j - 1 > 0) board[i][j-1] = 1;
      board[i][j] = 1;
      if (j < board[i].length) board[i][j+1] = 1;
      if (i + 1 < board.length){
        if (j > 0) board[i+1][j-1] = 1;
        board[i+1][j] = 1;
        if (j < board[i].length) board[i+1][j+1] = 1;
      }
    }
  }
}

해당 알고리즘의 문제점 - 위험지역 이후에 1로 변한 요소까지 위험지역으로 간주하게 됌. 로직 수정 필요

무한루프 도는 이유 발견
에러 발생 이유 : 2 번째 for 문이 돌 때 , j + 1 로 요소에 1을 할당 해 2번째 for 문과 if === 1 문이 서로 반복되어 실행해 무한루프를 돌게 됌.




수정 로직 과정
위험지역으로 판단된 인덱스 값을 따로 뺀 후 그 값을 기준으로만 변환 시도

5. 한번 더 순회하며 전환한 1을 뺀 나머지 0 갯수를 카운트한다.

*/


/*
//--------------------------- 해결방안 ------------------------------------------------
let board = [[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]

function solution(board) {

  let bomb = []
  let answer = 0

  // 1인 좌표값을 배열에 넣어준다.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {  
      if(board[i][j] === 1){
        bomb.push([i,j])
      }
    }
  }

  //받은 좌표의 주변 인덱스를 조회해 1을 할당해준다.
  for (let i = 0; i < bomb.length; i++) {
    let x = bomb[i][0]
    let y = bomb[i][1]

    //0 이라면 1 , 1 1이라면 아무일도 일어나지 않는다.
    // x 와 y 가 0 보다 작으면 안된다.
    // x 가 board.length 보다 크면 안된다.
    // y 가 board[x].length 보다 크면 안된다.
    if(x - 1 >= 0){
      if(board[x - 1][y - 1] === 0 && y - 1 >= 0 ) board[x - 1][y - 1] = 1
      if(board[x - 1][y] === 0 ) board[x - 1][y] = 1
      if(board[x - 1][y + 1] === 0 && y + 1 < board[x].length) board[x - 1][y + 1] = 1  
    }

    if(board[x][y - 1] === 0 && y - 1 >= 0  ) board[x][y - 1] = 1
    if(board[x][y + 1] === 0 && y + 1 < board[x].length ) board[x][y + 1] = 1

    if(x + 1 < board.length){  
      if(board[x + 1][y - 1] === 0 && y - 1 >= 0) board[x + 1][y - 1] = 1
      if(board[x + 1][y] === 0 ) board[x + 1][y] = 1
      if(board[x + 1][y + 1] === 0 && y + 1 < board[x].length) board[x + 1][y + 1] = 1
    }
  }

  //요소가 0인 갯수를 찾는다.
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {  
      if(board[i][j] === 0) answer++
    }
  }

  return answer;
}

console.log(solution(board))

// function solution(board) {
//   var answer = 0;
//   return answer;
// }

*/

//--------------------------- 우수정답확인 -----------------------------------

function solution(board) {
  var answer = 0;
  var answerArray = board.map(x=>board.map(y=>0));
  for(var y=0; y<board.length; y++) {
      for(var x=0; x<board.length; x++) {
          if(board[y][x]===1) {
              if(y-1 >= 0           && x-1 >= 0)           answerArray[y-1][x-1] = 1;                
              if(                      x-1 >= 0)           answerArray[y  ][x-1] = 1;
              if(y+1 < board.length && x-1 >= 0)           answerArray[y+1][x-1] = 1;

              if(y-1 >= 0           )                      answerArray[y-1][  x] = 1;
                                                           answerArray[y  ][  x] = 1;
              if(y+1 < board.length)                       answerArray[y+1][  x] = 1;

              if(y-1 >= 0           && x+1 < board.length) answerArray[y-1][x+1] = 1;
              if(                      x+1 < board.length) answerArray[y  ][x+1] = 1;
              if(y+1 < board.length && x+1 < board.length) answerArray[y+1][x+1] = 1;
          }
      }
  }
  answerArray.map(y=> {
      y.map(x=>{if(x===0) answer++})
  })
  return answer;
}

//--------------------------- 우수정답풀이 -----------------------------------

/*
새로운 배열을 만들어 할당을 해줌으로써 무한루프를 피했다. 메모리는 더 많이 차지하지만,
원본데이터를 보존할 수 있는 장점이 있다.

띄어쓰기를 적극 활용해 가독성을 높혔다.
*/

//--------------------------- 우수정답확인 -----------------------------------

function solution(board) {

  let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
  let safezone = 0;

  board.forEach((row, y, self) => row.forEach((it, x) => {
      if (it === 1) return false;
      return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
             ? false : safezone++;
  }));

  return safezone;
}

//--------------------------- 우수정답풀이 -----------------------------------

/*
새로운 메서드 some()

*/

//--------------------------- 코멘트 -----------------------------------

/*
수도코드 3번까지 진행도중
'JavaScript heap out of memory'라는 이 에러는 Heap 메모리가 부족해서 발생
중첩 반복문을 많이 돌렸나 해서 가비지컬렉터를 알아보게됐지만, 사실은 무한루프로 인한 힙메모리 부족 발생
이 기회로 가비지 컬렉터에 대해 제대로 알아 봐야겠다는 생각!

아직 여러 조건에 대한 알고리즘이 많이 약하다.
3일을 고민해서 풀었긴했지만, 시간이 너무 소비됌.
알고리즘 게을리 하지 말고, 계속해서 풀면서 공부할것!
*/

