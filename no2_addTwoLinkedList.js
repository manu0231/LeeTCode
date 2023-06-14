function ListNode(val) {
  this.val = val
  this.next = null
}

function addTwoNumbers(l1, l2) {
  let arr1 = linkedListToArray(l1)
  let arr2 = linkedListToArray(l2)

  arr1.reverse()
  arr2.reverse()

  let num1 = BigInt(arr1.join(''))
  let num2 = BigInt(arr2.join(''))

  let sum = num1 + num2

  return (result = Array.from(sum.toString()).reverse())
  return arrayToLinkedList(Array.from(sum.toString()).reverse())
}

function linkedListToArray(head) {
  let arr = []
  let currentNode = head

  while (currentNode !== null) {
    arr.push(currentNode.val)
    currentNode = currentNode.next
  }

  return arr
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

const l1 = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
]

const l2 = [5, 6, 4]

const list1 = arrayToLinkedList(l1)
const list2 = arrayToLinkedList(l2)

console.log(addTwoNumbers(list1, list2))
