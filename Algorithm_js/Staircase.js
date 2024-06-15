function staircase(n) {
    var hash = "";
var space = " ";

  for (let i = 1; i <= n; i++) {
    hash += "#";
    console.log(space.repeat(n - i) + hash);
  }
}