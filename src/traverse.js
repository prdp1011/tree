// Traversal
// Inorder LNR
// Preorder NLR
// Postorder LRN
const inorder = (root) => {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log(root.data);
  inorder(root.right);
};
const preorder = (root) => {
  if (!root) {
    return;
  }
  console.log(root.data);
  preorder(root.left);
  preorder(root.right);
};
const postorder = (root) => {
  if (!root) {
    return;
  }
  preorder(root.left);
  preorder(root.right);
  console.log(root.data);
};

const heightOfTree = (root) => {
  if (!root) {
    return 0;
  }
  const left = heightOfTree(root.left);
  const right = heightOfTree(root.right);
  return Math.max(left, right) + 1;
};

const main = () => {
  console.log("inorder");
  inorder(window.tree);
  console.log("preorder");
  preorder(window.tree);
  console.log("postorder");
  postorder(window.tree);
  console.log("heightOfTree", heightOfTree(window.tree));
};
// main();
// console.log("heightOfTree", heightOfTree(window.tree));

const arr = new Array(10);
const treeView = (root, lvl = 0) => {
  if (!root) {
    lvl = 1;
    return;
  }
  lvl++;
  // if(root.data){
  arr[lvl] = root.data;
  // }
  treeView(root.left, lvl);
  treeView(root.right, lvl);
};
arr[0] = window.tree.data;
treeView(window.tree, 1);
console.log("view", arr);

//  Depth | height of tree
