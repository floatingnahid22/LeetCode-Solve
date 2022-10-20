/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if(head === null || head.next === null){
          return head;
      }
  let currentNode = head;

  while(currentNode !== null && currentNode.next !== null){
      if(currentNode.val === currentNode.next.val){
          currentNode.next = currentNode.next.next;
      }
      else{
          currentNode = currentNode.next;
      }
  }
  return head;
};