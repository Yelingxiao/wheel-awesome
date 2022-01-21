/**
 * 创建节点
 * 表示我们想要添加到链表中的项
 */
class ListNodeItem {
  value: number
  next: ListNodeItem | null
  constructor(value: number) {
    this.value = value // 节点的数据域
    this.next = null // 当一个 Node 实例被创建时，它的 next 指针总是 undefined, 因为我们知道它会是链表的最后一项（push）
  }
}
export default ListNodeItem
