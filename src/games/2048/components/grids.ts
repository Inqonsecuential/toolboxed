const makeGrid = (size: number): number[][] => {
  const grid: number[][] = new Array(size);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(size).fill(0);
  }
  return generateNewTitle(grid);
};

const transpose = (grid: number[][]): number[][] =>
  grid[0].map((_, i) => grid.map((r) => r[i]));

const rotateCW = (grid: number[][]): number[][] =>
  transpose(grid).map((r) => r.reverse());

const rotateCCW = (grid: number[][]): number[][] => transpose(grid).reverse();

const mergeRow = (row: number[]): number[] => {
  const originalLength = row.length;
  row = row.filter((v) => v !== 0);
  let i = 0;
  while (i < row.length) {
    if (row[i] === row[i + 1]) {
      row[i] *= 2;
      row.splice(i + 1, 1);
    }
    i += 1;
  }
  return row.concat(new Array(originalLength - row.length).fill(0));
};

const pushLeft = (grid: number[][]): number[][] =>
  deepCopy(grid).map((row) => mergeRow(row));

const pushRight = (grid: number[][]): number[][] =>
  deepCopy(grid).map((row) => mergeRow(row.reverse()).reverse());

const pushUp = (grid: number[][]): number[][] =>
  rotateCW(pushLeft(rotateCCW(grid)));

const pushDown = (grid: number[][]): number[][] =>
  rotateCCW(pushLeft(rotateCW(grid)));

const generateNewTitle = (grid: number[][]): number[][] => {
  const randInt = (max: number) => Math.floor(Math.random() * max);
  let x = 0;
  let y = 0;
  do {
    x = randInt(grid.length);
    y = randInt(grid[0].length);
  } while (grid[x][y] !== 0);
  grid[x][y] = 2;
  return grid;
};

const deepCopy = (grid: number[][]): number[][] =>
  grid.map((row) => row.map((v) => v));

const isGridsEqual = (g1: number[][], g2: number[][]): boolean =>
  JSON.stringify(g1) === JSON.stringify(g2);

const moveTitles = (
  grid: number[][],
  moveFunc: (grid: number[][]) => number[][],
): number[][] => {
  const bk = moveFunc(deepCopy(grid));
  return isGridsEqual(grid, bk) ? grid : generateNewTitle(bk);
};

const isWon = (grid: number[][]): boolean =>
  grid.some((row) => row.some((val) => val >= 2048));

const isGameOver = (grid: number[][]): boolean =>
  isGridsEqual(grid, moveTitles(deepCopy(grid), pushLeft)) &&
  isGridsEqual(grid, moveTitles(deepCopy(grid), pushRight)) &&
  isGridsEqual(grid, moveTitles(deepCopy(grid), pushUp)) &&
  isGridsEqual(grid, moveTitles(deepCopy(grid), pushDown));

const isFull = (grid: number[][]): boolean =>
  grid.every((r) => r.every((v) => v !== 0));

export {
  makeGrid,
  moveTitles,
  pushLeft,
  pushRight,
  pushUp,
  pushDown,
  isFull,
  isWon,
  isGameOver,
  isGridsEqual,
  generateNewTitle,
};
