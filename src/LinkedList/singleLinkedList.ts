/**
 * 单链表
 * 1. head 头指针
 * 2. 最后一个节点的next始终指向 null
 * 3. 始终只有第一个元素的引用，没有index，需要循环访问列表
 */
// import ListNodeItem from './node'
class ListNodeItem {
  value: number
  next: ListNodeItem | null
  constructor(value: number) {
    this.value = value // 节点的数据域
    this.next = null // 当一个 Node 实例被创建时，它的 next 指针总是 undefined, 因为我们知道它会是链表的最后一项（push）
  }
}
class SingleLinkedList {
  size: number
  head: ListNodeItem
  end: ListNodeItem
  currentNode: ListNodeItem | null
  constructor(value: number) {
    this.size = 0 // 单链表的长度
    this.head = new ListNodeItem(value) // 表头节点
    this.end = this.head
    this.currentNode = this.head
  }
  // 增加一个链表数据
  add(value: number): void {
    this.end.next = new ListNodeItem(value)
    this.end = this.end.next
  }
  // 查找
  find(value: number): ListNodeItem | null {
    while (this.currentNode?.value !== value && this.currentNode) {
      this.currentNode = this.currentNode.next
    }
    return this.currentNode
  }
  findPrevious(value: number): ListNodeItem | null {
    let prevNode: ListNodeItem | null = this.head
    while (prevNode?.next && prevNode?.next.value !== value) {
      prevNode = prevNode.next
    }
    return prevNode
  }
  // 删除
  remove(value: number): void {
    const currentNode = this.findPrevious(value)
    if (currentNode?.next) {
      currentNode.next = currentNode.next.next
    } else {
      this.end = currentNode
      currentNode.next = null
    }
  }
  // 插入
  insert(newItem: number, value: number): void {
    const currentNode = this.find(value)
    const newNode = new ListNodeItem(newItem)
    if (currentNode?.next) {
      newNode.next = currentNode.next
      currentNode.next = newNode
    } else {
      this.end = newNode
    }
  }
  // 链表打印
  print(): void {
    while (this.currentNode) {
      console.log(this.currentNode.value)
      this.currentNode = this.currentNode.next
    }
  }
  // 反转链表
  reverse(): ListNodeItem {
    let pre: ListNodeItem | null = null
    let next: ListNodeItem | null = null
    while (this.currentNode) {
      next = this.currentNode.next
      this.currentNode.next = pre
      pre = this.currentNode
      this.currentNode = next
    }
    return pre
  }
}
const list = new SingleLinkedList(0)
list.add(1)
list.add(2)
list.add(3)
console.log(list.reverse())
export default SingleLinkedList
