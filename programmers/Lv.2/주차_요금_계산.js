function changeMin(time) {
  const [hour, min] = time.split(":").map(Number);

  return hour * 60 + min;
}

function solution(fees, records) {
  const result = [];
  const [default_time, default_fee, unit_time, unit_fee] = fees;
  const recordsMap = new Map();
  const resultMap = new Map();

  // 입-출차 이용 시간 계산
  for (const info of records) {
    const [time, carNum, parking] = info.split(" ");

    if (parking === "IN") {
      recordsMap.set(carNum, changeMin(time));
    } else if (parking === "OUT") {
      const diff_time = changeMin(time) - recordsMap.get(carNum);
      resultMap.set(carNum, (resultMap.get(carNum) || 0) + diff_time);
      recordsMap.delete(carNum);
    }
  }

  // 입차 후 출차를 하지 않은 차량의 이용 시간 계산
  recordsMap.forEach((value, key) => {
    const diff_time = changeMin("23:59") - value;

    resultMap.set(key, (resultMap.get(key) || 0) + diff_time);
  });

  // 위 계산된 시간에 대한 비용 계산
  resultMap.forEach((value, key) => {
    const fee =
      value <= default_time
        ? default_fee
        : default_fee +
          Math.ceil((value - default_time) / unit_time) * unit_fee;
    result.push([key, fee]);
  });

  return result.sort((a, b) => a[0] - b[0]).map((el) => el[1]);
}

// 정확성  테스트
// 테스트 1 〉	통과 (1.90ms, 43.6MB)
// 테스트 2 〉	통과 (0.17ms, 43.4MB)
// 테스트 3 〉	통과 (0.30ms, 43.3MB)
// 테스트 4 〉	통과 (2.45ms, 43.7MB)
// 테스트 5 〉	통과 (0.44ms, 43.5MB)
// 테스트 6 〉	통과 (1.07ms, 43.9MB)
// 테스트 7 〉	통과 (2.93ms, 45.2MB)
// 테스트 8 〉	통과 (3.78ms, 44.3MB)
// 테스트 9 〉	통과 (0.45ms, 43.6MB)
// 테스트 10 〉	통과 (1.75ms, 44.5MB)
// 테스트 11 〉	통과 (2.34ms, 44.7MB)
// 테스트 12 〉	통과 (2.18ms, 44.8MB)
// 테스트 13 〉	통과 (0.21ms, 43.6MB)
// 테스트 14 〉	통과 (0.20ms, 43.6MB)
// 테스트 15 〉	통과 (0.48ms, 43.7MB)
// 테스트 16 〉	통과 (0.18ms, 43.8MB)
// 채점 결과
// 정확성: 100.0
// 합계: 100.0 / 100.0
