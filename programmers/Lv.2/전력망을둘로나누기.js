function solution(n, wires) {
  const tree = Array.from({ length: n + 1 }, () => []);

  for (const [a, b] of wires) {
    tree[a].push(b);
    tree[b].push(a);
  }

  let result = Infinity;

  for (const [A, B] of wires) {
    const visited = Array(n + 1).fill(false);

    function dfs(node) {
      visited[node] = true;
      let count = 1;

      for (const el of tree[node]) {
        if ((node === A && el === B) || (node === B && el === A)) continue;

        if (!visited[el]) {
          count += dfs(el);
        }
      }
      return count;
    }
    const count = dfs(A);

    const diff = Math.abs(count - (n - count));
    result = Math.min(result, diff);
  }
  return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.30ms, 43.4MB)
// 테스트 2 〉	통과 (1.92ms, 44.3MB)
// 테스트 3 〉	통과 (4.01ms, 44.6MB)
// 테스트 4 〉	통과 (4.56ms, 44.5MB)
// 테스트 5 〉	통과 (4.42ms, 44.6MB)
// 테스트 6 〉	통과 (0.17ms, 43.3MB)
// 테스트 7 〉	통과 (0.16ms, 43.4MB)
// 테스트 8 〉	통과 (0.25ms, 43.7MB)
// 테스트 9 〉	통과 (0.24ms, 43.2MB)
// 테스트 10 〉	통과 (1.00ms, 44.3MB)
// 테스트 11 〉	통과 (1.00ms, 44.5MB)
// 테스트 12 〉	통과 (1.01ms, 44.6MB)
// 테스트 13 〉	통과 (1.29ms, 44.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
