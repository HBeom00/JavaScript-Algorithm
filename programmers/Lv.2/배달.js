function solution(N, road, K) {
  // 인접 행렬: graph[a][b] = a↔b 사이 최소 도로 시간
  const graph = Array.from({ length: N + 1 }, () =>
    new Array(N + 1).fill(Infinity),
  );
  for (const [a, b, c] of road) {
    if (c < graph[a][b]) {
      // 중복 도로는 최솟값만 저장
      graph[a][b] = c;
      graph[b][a] = c;
    }
  }

  const dist = new Array(N + 1).fill(Infinity);
  const visited = new Array(N + 1).fill(false);
  dist[1] = 0;

  for (let i = 0; i < N; i++) {
    // 미확정 마을 중 dist가 가장 작은 u 찾기
    let u = -1;
    for (let v = 1; v <= N; v++) {
      if (!visited[v] && (u === -1 || dist[v] < dist[u])) u = v;
    }
    visited[u] = true;

    // u를 거쳐 가는 경로로 이웃 갱신
    for (let v = 1; v <= N; v++) {
      if (dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v];
      }
    }
  }

  return dist.filter((d) => d <= K).length; // dist[0]은 Infinity라 자동 제외
}
