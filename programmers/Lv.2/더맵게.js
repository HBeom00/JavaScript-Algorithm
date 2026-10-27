class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(val) {
    this.heap.push(val);
    this._heapifyUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();
    return min;
  }

  peek() {
    return this.heap[0] ?? null;
  }

  _heapifyUp() {
    let idx = this.heap.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this.heap[parentIdx] <= this.heap[idx]) break;

      [this.heap[parentIdx], this.heap[idx]] = [
        this.heap[idx],
        this.heap[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  _heapifyDown() {
    let idx = 0;
    const length = this.heap.length;

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let smallest = idx;

      if (
        leftChildIdx < length &&
        this.heap[leftChildIdx] < this.heap[smallest]
      ) {
        smallest = leftChildIdx;
      }
      if (
        rightChildIdx < length &&
        this.heap[rightChildIdx] < this.heap[smallest]
      ) {
        smallest = rightChildIdx;
      }

      if (smallest === idx) break;

      [this.heap[idx], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[idx],
      ];
      idx = smallest;
    }
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();

  // 1. 모든 스코빌 지수를 힙에 삽입
  for (const s of scoville) {
    heap.push(s);
  }

  let count = 0;

  // 2. 가장 작은 값이 K 미만인 동안 반복
  while (heap.peek() < K) {
    // 더 이상 섞을 음식이 2개 이상 남아있지 않으면 K 이상을 만들 수 없음
    if (heap.size() < 2) {
      return -1;
    }

    const first = heap.pop();
    const second = heap.pop();

    const mixed = first + second * 2;
    heap.push(mixed);

    count++;
  }

  return count;
}

// 정확성  테스트
// 테스트 1 〉	통과 (0.23ms, 43.9MB)
// 테스트 2 〉	통과 (0.24ms, 44.3MB)
// 테스트 3 〉	통과 (0.23ms, 44MB)
// 테스트 4 〉	통과 (0.23ms, 44.1MB)
// 테스트 5 〉	통과 (0.17ms, 44.2MB)
// 테스트 6 〉	통과 (1.84ms, 45.5MB)
// 테스트 7 〉	통과 (1.66ms, 45.6MB)
// 테스트 8 〉	통과 (0.46ms, 44.3MB)
// 테스트 9 〉	통과 (0.46ms, 44.1MB)
// 테스트 10 〉	통과 (1.69ms, 45.3MB)
// 테스트 11 〉	통과 (1.16ms, 45.1MB)
// 테스트 12 〉	통과 (2.89ms, 46.2MB)
// 테스트 13 〉	통과 (1.69ms, 45.4MB)
// 테스트 14 〉	통과 (0.24ms, 44.5MB)
// 테스트 15 〉	통과 (2.60ms, 46MB)
// 테스트 16 〉	통과 (0.17ms, 44.1MB)
// 테스트 17 〉	통과 (0.17ms, 43.9MB)
// 테스트 18 〉	통과 (0.13ms, 43.9MB)
// 테스트 19 〉	통과 (0.19ms, 44MB)
// 테스트 20 〉	통과 (0.21ms, 44.3MB)
// 테스트 21 〉	통과 (0.17ms, 44MB)
// 테스트 22 〉	통과 (0.23ms, 44.1MB)
// 테스트 23 〉	통과 (0.19ms, 44.1MB)
// 테스트 24 〉	통과 (0.24ms, 44.1MB)
// 테스트 25 〉	통과 (0.24ms, 44.1MB)
// 테스트 26 〉	통과 (0.22ms, 44MB)
// 효율성  테스트
// 테스트 1 〉	통과 (103.89ms, 66.8MB)
// 테스트 2 〉	통과 (122.01ms, 78.8MB)
// 테스트 3 〉	통과 (390.35ms, 117MB)
// 테스트 4 〉	통과 (114.47ms, 62.9MB)
// 테스트 5 〉	통과 (417.83ms, 117MB)
// 채점 결과
// 정확성: 83.9
// 효율성: 16.1
// 합계: 100.0 / 100.0
