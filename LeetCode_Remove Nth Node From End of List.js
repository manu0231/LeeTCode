class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

function createLinkedListFromArray(arr) {
  if (arr.length === 0) {
    return null
  }

  let head = new Node(arr[0])
  let current = head

  for (let i = 1; i < arr.length; i++) {
    let newNode = new Node(arr[i])
    current.next = newNode
    current = newNode
  }

  return head
}

// Example usage:
const arr = [1, 2, 3, 4, 5]
const head = createLinkedListFromArray(arr)

// // Printing the linked list values
// let current = head
// while (current !== null) {
//   console.log(current.value)
//   current = current.next
// }

const removeNthFromEnd = (head, n) => {
  //create new node dummyHead and set its next value  as head
  let dummyHead = new Node(0)
  dummyHead.next = head

  //calculate size of give LinkedList (head)
  let size = 0
  let curr = head
  while (curr !== null) {
    size++
    curr = curr.next
  }

  //calculate position from which node has to remove
  let pos = size - n

  let prev = dummyHead

  while (pos > 0) {
    prev = prev.next
    pos--
  }
  //set prev node pointer to next pointer available
  prev.next = prev.next.next
  return dummyHead.next
}

console.log(removeNthFromEnd(head, 2))
