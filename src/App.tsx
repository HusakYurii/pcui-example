import { TreeView, TreeViewItem } from "@playcanvas/pcui/react";
import "@playcanvas/pcui/styles";
import "./App.css";

interface INode {
  name: string;
  nodes: INode[];
}

const tree: INode = {
  name: "Root Element",
  nodes: [
    {
      name: "1 Element",
      nodes: [
        {
          name: "2 Element",
          nodes: [],
        },
      ],
    },
    {
      name: "3 Element",
      nodes: [],
    },
  ],
};

function App() {
  const createTree = (node: INode) => {
    return (
      <TreeViewItem text={node.name}>{node.nodes.map(createTree)}</TreeViewItem>
    );
  };
  return (
    <>
      <TreeView>{createTree(tree)}</TreeView>
    </>
  );
}

export default App;
