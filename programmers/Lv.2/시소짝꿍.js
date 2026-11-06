function solution(weights) {
  const map = new Map();

  for (const weight of weights) {
    map.set(weight, (map.get(weight) || 0) + 1);
  }

  let result = 0;

  // 1:1, 2:3, 2:4, 3:4 비율로 처리
  for (const [weight, count] of map) {
    // 몸무게가 같을 때 (1:1)
    result += (count * (count - 1)) / 2;

    // 몸무게가 다를 때 (2:3, 2:4, 3:4)
    const diffs = [(weight * 2) / 3, weight / 2, (weight * 3) / 4];

    for (const diff of diffs) {
      if (Number.isInteger(diff)) {
        result += count * (map.get(diff) || 0);
      }
    }
  }

  return result;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.10ms, 43.3MB)
// 테스트 2 〉	통과 (0.13ms, 43.3MB)
// 테스트 3 〉	통과 (0.11ms, 43.4MB)
// 테스트 4 〉	통과 (4.89ms, 45MB)
// 테스트 5 〉	통과 (3.98ms, 45.3MB)
// 테스트 6 〉	통과 (4.71ms, 45.9MB)
// 테스트 7 〉	통과 (27.94ms, 51.2MB)
// 테스트 8 〉	통과 (24.46ms, 50.7MB)
// 테스트 9 〉	통과 (4.25ms, 53.2MB)
// 테스트 10 〉	통과 (21.75ms, 52.7MB)
// 테스트 11 〉	통과 (21.69ms, 52.4MB)
// 테스트 12 〉	통과 (3.14ms, 53.1MB)
// 테스트 13 〉	통과 (3.55ms, 53.1MB)
// 테스트 14 〉	통과 (3.64ms, 52.7MB)
// 테스트 15 〉	통과 (2.94ms, 52.8MB)
// 테스트 16 〉	통과 (0.10ms, 43.5MB)
// 테스트 17 〉	통과 (0.11ms, 43.6MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
