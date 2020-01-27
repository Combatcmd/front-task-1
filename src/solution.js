const solution = function (graph, start, finish) {
  const ans = {};
  ans[start] = [start];
  ans[start].way = 0;
  while (true) {
    let parent = nearest = null, way = Infinity;
    for (let a in ans) {
      let _way = ans[a].way;
      let neighbours = graph[a];
      for (let n in neighbours) {
        if (ans[n]) continue;
        let shortestWay = neighbours[n] + _way;
        if (shortestWay < way) {
          parent = ans[a];
          nearest = n;
          way = shortestWay;
        }
      }
    }
    if (way === Infinity) {
      break;
    }
    ans[nearest] = parent.concat(nearest);
    ans[nearest].way = way;
  }
  let destination = ans[finish];
  return { path: destination, distance: destination.way }
}