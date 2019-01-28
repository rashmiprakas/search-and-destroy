'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  const currentHead = this.head;
  let currentTail = this.tail;

  if (currentHead === currentTail) return false;

  const previousNodes = [];

  while (currentTail !== currentTail.previous.head) {
    previousNodes.push(currentTail.previous);
    currentTail = previous.tail
  }
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop