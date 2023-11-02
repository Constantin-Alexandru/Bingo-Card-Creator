import { ReactNode } from "react";
import "./ListItem.css";

interface Props {
  index: number;
  text: string;
  removeItem: (item: string) => void;
}

function ListItem(props: Props): ReactNode {
  const { index, text, removeItem } = props;

  return (
    <div className={"list-item"}>
      <span className={"list-item-index"}>{index}. </span>
      <span className={"list-item-content"}>{text}</span>
      <button className={"btn"} onClick={() => removeItem(text)}>
        ❌
      </button>
    </div>
  );
}

export default ListItem;
