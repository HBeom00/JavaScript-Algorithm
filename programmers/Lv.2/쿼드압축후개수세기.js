function solution(arr) {
  const result = [0, 0];

  const dfs = (x, y, size) => {
    const currentValue = arr[x][y];
    let isSame = true;

    for (let i = x; i < x + size; i++) {
      for (let j = y; j < y + size; j++) {
        if (arr[i][j] !== currentValue) {
          isSame = false;
          break;
        }
      }
      if (!isSame) break;
    }

    if (isSame) {
      result[currentValue]++;
      return;
    }

    const half = size / 2;

    dfs(x, y, half);
    dfs(x, y + half, half);
    dfs(x + half, y, half);
    dfs(x + half, y + half, half);
  };
  dfs(0, 0, arr.length);

  return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.24ms, 43.3MB)
// 테스트 2 〉	통과 (0.22ms, 43.5MB)
// 테스트 3 〉	통과 (0.16ms, 43.8MB)
// 테스트 4 〉	통과 (0.13ms, 43.5MB)
// 테스트 5 〉	통과 (4.89ms, 51.3MB)
// 테스트 6 〉	통과 (1.98ms, 51.5MB)
// 테스트 7 〉	통과 (5.70ms, 51.6MB)
// 테스트 8 〉	통과 (1.32ms, 51.6MB)
// 테스트 9 〉	통과 (2.12ms, 51.9MB)
// 테스트 10 〉	통과 (2.88ms, 87.1MB)
// 테스트 11 〉	통과 (0.14ms, 43.8MB)
// 테스트 12 〉	통과 (0.13ms, 44MB)
// 테스트 13 〉	통과 (2.18ms, 51.6MB)
// 테스트 14 〉	통과 (4.76ms, 87.6MB)
// 테스트 15 〉	통과 (5.97ms, 87MB)
// 테스트 16 〉	통과 (6.79ms, 51.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
