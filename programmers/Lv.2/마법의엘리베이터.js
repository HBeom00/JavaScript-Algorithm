function solution(storey) {
  let count = 0;

  while (storey > 0) {
    const rest = storey % 10;
    const nextRest = Math.floor(storey / 10) % 10;

    if (rest > 5 || (rest === 5 && nextRest >= 5)) {
      count += 10 - rest;
      storey = Math.floor(storey / 10) + 1;
    } else {
      count += rest;
      storey = Math.floor(storey / 10);
    }
  }
  return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.08ms, 43.8MB)
// 테스트 2 〉	통과 (0.07ms, 43.9MB)
// 테스트 3 〉	통과 (0.08ms, 43.7MB)
// 테스트 4 〉	통과 (0.09ms, 43.7MB)
// 테스트 5 〉	통과 (0.07ms, 43.9MB)
// 테스트 6 〉	통과 (0.08ms, 43.8MB)
// 테스트 7 〉	통과 (0.07ms, 43.8MB)
// 테스트 8 〉	통과 (0.09ms, 43.8MB)
// 테스트 9 〉	통과 (0.09ms, 43.9MB)
// 테스트 10 〉	통과 (0.09ms, 43.7MB)
// 테스트 11 〉	통과 (0.08ms, 43.8MB)
// 테스트 12 〉	통과 (0.12ms, 43.9MB)
// 테스트 13 〉	통과 (0.07ms, 43.9MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
