const getDepTh = (root) => {
  let maxDep = 0
  function dfs(node, depth) {
    if (!node.children || !node.children.length) return
    depth++
    maxDep = depth > maxDep ? depth : maxDep
    for (const element of node.children) {
      dfs(element, depth)
    }
  }
  dfs(root, 0)
  return maxDep
}

const body = document.querySelector('body')
getDepTh(body)
