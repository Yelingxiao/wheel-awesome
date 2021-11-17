function bubbleSort(list) {
  for (let index = 0; index < list.length - 1; index++) {
    let flag = true
    for (let j = 0; j < list.length - 1; j++) {
      if (list[j] < list[j+1]) {
        let temp = list[j]
        list[j] = list[j+1]
        list[j+1] = temp
        flag = false
      }
    }
  }
  console.log(list)
  return list
}

const list = [3,2,4,1,5,9,7,6,8]
console.log(bubbleSort(list))