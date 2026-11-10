function solution(book_time) {
  const changeMin = book_time.map((reserve) =>
    reserve.map((time) => {
      const changeArr = time.split(":").map(Number);

      return changeArr[0] * 60 + changeArr[1];
    }),
  );

  const sortArr = changeMin.sort((a, b) => a[0] - b[0]);
  const result = [];

  result.push([sortArr[0][1]]);
  // [[1160]]
  for (let i = 1; i < sortArr.length; i++) {
    // 860
    const checkIn = sortArr[i][0];
    let isTrue = false;

    for (let j = 0; j < result.length; j++) {
      const len = result[j].length;

      if (checkIn >= result[j][len - 1] + 10) {
        result[j].push(sortArr[i][1]);
        isTrue = true;
        break;
      }
    }

    if (!isTrue) result.push([sortArr[i][1]]);
  }
  return result.length;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.16ms, 43.3MB)
// 테스트 2 〉	통과 (0.60ms, 43.7MB)
// 테스트 3 〉	통과 (18.34ms, 49.4MB)
// 테스트 4 〉	통과 (1.23ms, 49.3MB)
// 테스트 5 〉	통과 (0.12ms, 43.6MB)
// 테스트 6 〉	통과 (3.76ms, 44.1MB)
// 테스트 7 〉	통과 (13.68ms, 49.1MB)
// 테스트 8 〉	통과 (1.19ms, 43.5MB)
// 테스트 9 〉	통과 (0.69ms, 43.8MB)
// 테스트 10 〉	통과 (1.46ms, 49.3MB)
// 테스트 11 〉	통과 (1.96ms, 50MB)
// 테스트 12 〉	통과 (2.00ms, 49.4MB)
// 테스트 13 〉	통과 (0.55ms, 43.5MB)
// 테스트 14 〉	통과 (1.80ms, 49.7MB)
// 테스트 15 〉	통과 (1.88ms, 49.7MB)
// 테스트 16 〉	통과 (16.15ms, 49MB)
// 테스트 17 〉	통과 (1.98ms, 49.6MB)
// 테스트 18 〉	통과 (1.86ms, 49.5MB)
// 테스트 19 〉	통과 (2.31ms, 49.4MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
