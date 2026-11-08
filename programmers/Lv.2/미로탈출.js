function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  let start, exit, lever;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") start = [i, j];
      else if (maps[i][j] === "E") exit = [i, j];
      else if (maps[i][j] === "L") lever = [i, j];
    }
  }

  function bfs(start, target) {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    const queue = [[start[0], start[1], 0]];
    let head = 0;

    visited[start[0]][start[1]] = true;

    while (head < queue.length) {
      const [x, y, distance] = queue[head++];

      if (target[0] === x && target[1] === y) return distance;

      for (let c = 0; c < 4; c++) {
        const cx = x + dx[c];
        const cy = y + dy[c];

        if (cx < 0 || cy < 0 || cx >= n || cy >= m) continue;
        if (maps[cx][cy] === "X" || visited[cx][cy]) continue;

        visited[cx][cy] = true;
        queue.push([cx, cy, distance + 1]);
      }
    }
    return -1;
  }

  const toLever = bfs(start, lever);
  if (toLever === -1) return -1;

  const toExit = bfs(lever, exit);
  if (toExit === -1) return -1;

  return toLever + toExit;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.22ms, 43.7MB)
// 테스트 2 〉	통과 (0.27ms, 43.9MB)
// 테스트 3 〉	통과 (0.35ms, 43.8MB)
// 테스트 4 〉	통과 (0.27ms, 43.6MB)
// 테스트 5 〉	통과 (0.30ms, 44.1MB)
// 테스트 6 〉	통과 (0.24ms, 43.4MB)
// 테스트 7 〉	통과 (0.98ms, 44.5MB)
// 테스트 8 〉	통과 (1.77ms, 45.4MB)
// 테스트 9 〉	통과 (0.22ms, 43.8MB)
// 테스트 10 〉	통과 (0.18ms, 43.7MB)
// 테스트 11 〉	통과 (0.54ms, 44.3MB)
// 테스트 12 〉	통과 (2.08ms, 45MB)
// 테스트 13 〉	통과 (3.72ms, 45.6MB)
// 테스트 14 〉	통과 (1.68ms, 51.5MB)
// 테스트 15 〉	통과 (0.45ms, 43.6MB)
// 테스트 16 〉	통과 (4.00ms, 52.9MB)
// 테스트 17 〉	통과 (5.53ms, 52.4MB)
// 테스트 18 〉	통과 (0.30ms, 44.1MB)
// 테스트 19 〉	통과 (0.34ms, 44MB)
// 테스트 20 〉	통과 (3.08ms, 53MB)
// 테스트 21 〉	통과 (1.14ms, 44.7MB)
// 테스트 22 〉	통과 (0.39ms, 43.9MB)
// 테스트 23 〉	통과 (0.25ms, 43.9MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
