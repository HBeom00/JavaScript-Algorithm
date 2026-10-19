function solution(numbers) {
  return numbers.map((num) => {
    if (num % 2 === 0) return num + 1;

    const temp = ("0" + num.toString(2)).split("");
    const idx = temp.lastIndexOf("0");

    temp[idx] = 1;
    temp[idx + 1] = 0;

    return parseInt(temp.join(""), 2);
  });
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.41ms, 43.9MB)
// 테스트 2 〉	통과 (32.35ms, 61.7MB)
// 테스트 3 〉	통과 (0.13ms, 43.3MB)
// 테스트 4 〉	통과 (0.55ms, 43.9MB)
// 테스트 5 〉	통과 (0.50ms, 43.9MB)
// 테스트 6 〉	통과 (0.44ms, 44MB)
// 테스트 7 〉	통과 (97.67ms, 74.6MB)
// 테스트 8 〉	통과 (86.82ms, 71.8MB)
// 테스트 9 〉	통과 (85.10ms, 73MB)
// 테스트 10 〉	통과 (173.05ms, 75.1MB)
// 테스트 11 〉	통과 (147.00ms, 74.3MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
