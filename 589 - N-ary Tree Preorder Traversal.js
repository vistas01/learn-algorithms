/**
 * Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

 

 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = [];
    function travel(node){
        if(!node) return;
        res.push(node.val);
        node.children.forEach(child => {
            travel(child);
        });
    }
    travel(root);
    return res;
};

/* faster solution
var preorder = function(root) {
    `
    const res = []

    const traverse = (node) => {
        if (!node) return

        res.push(node.val)

        for (let i = 0; i < node.children.length; i++)
            traverse(node.children[i])

    }

    traverse(root)

    return res

};
*/