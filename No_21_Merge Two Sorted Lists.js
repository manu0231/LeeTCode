function ListNode(val) {
  this.val = val
  this.next = null
}

function mergeTwoLists(l1, l2) {
  let arr1 = linkedListToArray(l1)
  let arr2 = linkedListToArray(l2)

  let result = [...arr1, ...arr2]
  result.sort(function (a, b) {
    return a - b
  })

  return arrayToLinkedList(result)
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

const l1 = [-10, -6, -6, -6, -3, 5]

const l2 = []

const list1 = arrayToLinkedList(l1)
const list2 = arrayToLinkedList(l2)

console.log(mergeTwoLists(list1, list2))
