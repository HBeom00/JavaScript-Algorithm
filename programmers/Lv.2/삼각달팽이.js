function solution(n) {
  const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));

  const dx = [1, 0, -1];
  const dy = [0, 1, -1];

  let x = 0;
  let y = 0;
  let pointer = 0;

  for (let num = 1; num <= (n * (n + 1)) / 2; num++) {
    triangle[x][y] = num;

    const nx = x + dx[pointer];
    const ny = y + dy[pointer];

    if (
      nx < 0 ||
      ny < 0 ||
      nx >= n ||
      ny >= triangle[nx].length ||
      triangle[nx][ny] !== 0
    ) {
      pointer = (pointer + 1) % 3;
    }

    x += dx[pointer];
    y += dy[pointer];
  }
  return triangle.flat();
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 43.6MB)
// 테스트 2 〉	통과 (0.11ms, 43.5MB)
// 테스트 3 〉	통과 (0.11ms, 43.2MB)
// 테스트 4 〉	통과 (0.64ms, 44.4MB)
// 테스트 5 〉	통과 (0.66ms, 44.2MB)
// 테스트 6 〉	통과 (0.66ms, 44.5MB)
// 테스트 7 〉	통과 (44.90ms, 120MB)
// 테스트 8 〉	통과 (34.73ms, 119MB)
// 테스트 9 〉	통과 (54.55ms, 119MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
