function ListNode(val) {
  this.val = val
  this.next = null
}

function arrayToLinkedList(arr) {
  if (arr.length === 0) {
    return null
  }
  let head = new ListNode(arr[0])
  let currentNode = head
  for (let i = 1; i < arr.length; i++) {
    currentNode.next = new ListNode(arr[i])
    currentNode = currentNode.next
  }
  return head
}

function swapPairs(head) {
  if (!head || !head.next) {
    return head
  }

  const dummy = new ListNode(0)
  dummy.next = head
  let current = dummy

  while (current.next && current.next.next) {
    const firstNode = current.next
    const secondNode = current.next.next

    // Swapping pointers
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    current.next = secondNode

    current = current.next.next
  }

  return dummy.next
}

let head = arrayToLinkedList([2, 5, 3, 4, 6, 2, 2])
console.log(swapPairs(head))
