function solution(diffs, times, limit) {
  function isPossible(level) {
    let totalTime = 0;

    for (let i = 0; i < diffs.length; i++) {
      const diff = diffs[i];
      const time_cur = times[i];

      if (level >= diff) {
        totalTime += time_cur;
      } else {
        totalTime += (time_cur + times[i - 1]) * (diff - level) + time_cur;
      }

      if (totalTime > limit) return false;
    }
    return true;
  }

  let left = 1;
  let right = 100000;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (isPossible(mid)) {
      right = mid;
    } else left = mid + 1;
  }

  return left;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.11ms, 43.6MB)
// 테스트 2 〉	통과 (0.10ms, 43.8MB)
// 테스트 3 〉	통과 (0.11ms, 43.6MB)
// 테스트 4 〉	통과 (0.11ms, 43.7MB)
// 테스트 5 〉	통과 (0.13ms, 43.7MB)
// 테스트 6 〉	통과 (0.12ms, 43.8MB)
// 테스트 7 〉	통과 (0.11ms, 43.6MB)
// 테스트 8 〉	통과 (0.54ms, 43.8MB)
// 테스트 9 〉	통과 (0.60ms, 48.7MB)
// 테스트 10 〉	통과 (0.48ms, 44MB)
// 테스트 11 〉	통과 (0.65ms, 48.7MB)
// 테스트 12 〉	통과 (0.63ms, 49MB)
// 테스트 13 〉	통과 (0.49ms, 43.9MB)
// 테스트 14 〉	통과 (11.20ms, 48.3MB)
// 테스트 15 〉	통과 (19.10ms, 62.2MB)
// 테스트 16 〉	통과 (29.63ms, 62MB)
// 테스트 17 〉	통과 (15.96ms, 62.1MB)
// 테스트 18 〉	통과 (20.13ms, 62.1MB)
// 테스트 19 〉	통과 (17.48ms, 61.9MB)
// 테스트 20 〉	통과 (4.12ms, 62.2MB)
// 테스트 21 〉	통과 (13.58ms, 62.1MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
