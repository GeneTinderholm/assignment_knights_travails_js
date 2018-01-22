# assignment_knights_travails_js

Do not go gentle into that good knight.

Jeffrey Dederick

Gene Tinderholm

1). The data structure used is a stack.

2). The data structure used is a queue.

3). The stack/DFS.

4). A breadth-first-search.

5). A graph is any data set where objects/nodes are linked together. And a tree is has a root and all subsequent objects/node are children of the root/and each other.

1). Compare root/current element to value searched for
if not equal, call self on first child.
if not equal and has no children, move up one level and check for unchecked children.

2). Compare root/current element to value searched for.
if not equal, push all children into search queue.
Call self on each child in the order they were pushed.

3). In an adjacency List,
for each index of the adjacency array, iterate through the list, testing each node value against the value searched for.
If not found, move to the next index in the array and repeat.

4). In an adjacency List,
for each index of the adjacency array, test each value at the first index of each linked list, if no matching value is found, repeat testing over each value in the next index of each linked list, until a match is found.

Warmup 2:
The board will be an array of arrays, with a length of 8 on both the inner and outer arrays.
Each index will have an initial value of 1.
Each index will have the value changed to 0 once used.
When there are no legal moves remaining, if movecount !== 63, move up a level and try a new course until a successful movecount of 63 has been reached.

Moves:

* up 2 and left 1 (outer index -2, inner index -1)
* up 2 and right 1 (outer index -2, inner index +1)
* down 2 and left 1 (outer index +2, inner index -1)
* down 2 and right 1 (outer index +2, inner index +1)
* left 2 and up 1 (inner index -2, outer index -1)
* left 2 and down 1 (inner index -2, outer index +1)
* right 2 and up 1 (inner index +2, outer index -1)
* right 2 and down 1 (inner index +2, outer index +1)
