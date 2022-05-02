class Scheduler {
  constructor(num = 2) {
    this.num = num
    this.task = []
  }
  add(promiseCreator) {
    this.task.push(promiseCreator)
    if (this.task.length <= this.num) {
      this.run(promiseCreator)
    }
  }
  run(promiseCreator) {
    promiseCreator().then(() => {
      if (this.task.length > this.num) {
        this.run(this.task[this.num])
        this.task.shift()
      }
    })
  }
}

const timeout = (time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

const scheduler = new Scheduler()

const addTask = (time, order) => {
  scheduler.add(() => timeout(time).then(() => console.log(order)))
}

addTask(1000, 1)
addTask(500, 2)
addTask(300, 3)
addTask(400, 4)
addTask(100, 5)
addTask(1000, 6)
