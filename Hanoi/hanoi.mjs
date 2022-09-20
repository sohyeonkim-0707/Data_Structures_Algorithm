function hanoi(count, from, to, temp) {
  hanoi(count - 1, from, temp, to);
}

hanoi(3, "A", "B", "C");
