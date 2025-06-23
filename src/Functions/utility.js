
export function generateCombinations(N, K) 
{
  const lines = [];

  for (let row = 0; row < N; row++) {
    for (let col = 0; col <= N - K; col++) {
      const line = [];
      for (let i = 0; i < K; i++) {
        line.push(row * N + col + i);
      }
      lines.push(line);
    }
  }

  for (let col = 0; col < N; col++) {
    for (let row = 0; row <= N - K; row++) {
      const line = [];
      for (let i = 0; i < K; i++) {
        line.push((row + i) * N + col);
      }
      lines.push(line);
    }
  }

  for (let row = 0; row <= N - K; row++) {
    for (let col = 0; col <= N - K; col++) {
      const line = [];
      for (let i = 0; i < K; i++) {
        line.push((row + i) * N + (col + i));
      }
      lines.push(line);
    }
  }

  for (let row = 0; row <= N - K; row++) {
    for (let col = K - 1; col < N; col++) {
      const line = [];
      for (let i = 0; i < K; i++) {
        line.push((row + i) * N + (col - i));
      }
      lines.push(line);
    }
  }

  return lines;
}

