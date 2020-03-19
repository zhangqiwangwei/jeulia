export function compile(nodes:any) {
    for (let i = 0; i < nodes.children.length; i++) {
        let node = nodes.children[i];
        if (node.children.length) {
            compile(node);
        }
        if (node) {

        }
    }

}