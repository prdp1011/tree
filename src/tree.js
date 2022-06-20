class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

const main = () => {
  const root = new Node(0);
  root.left = new Node(1);
  root.left.left = new Node(2);
  root.left.right = new Node(22);
  root.left.right.left = new Node(23);
  root.left.right.left.right = new Node(24);
  root.left.right.left.right.left = new Node(25);

  root.left.left.left = new Node(3);
  root.right = new Node(11);
  root.right.right = new Node(22);
  root.right.right.right = new Node(33);
  return root;
};
window.tree = main();
console.log(window.tree);
