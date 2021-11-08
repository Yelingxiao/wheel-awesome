function hanoi(n, a, b, c, x) {
  if (n === 1) {
    console.log(a + '----->' + c, x)
  } else {
    hanoi(n-1, a, c, b, 1)
    console.log(a + '----->' + c, x)
    hanoi(n-1, b, a, c, 2)
  }
}

hanoi(3, 'a', 'b', 'c', 0)