import { ReactNode, useState } from "react";
import "./ListGenerator.css";

interface Props {
  items: string[];
  addItem: (item: string) => void;
  removeItem: (item: string) => void;
}

function ListGenerator(props: Props): ReactNode {
  const { addItem } = props;
  const [item, setItem] = useState<string>("");

  return (
    <div className="list-generator">
      <h3 className="title">Bingo Elements List</h3>
      <form
        className="form"
        onSubmit={(e) => {
          if (item !== "") {
            addItem(item);
            setItem("");
          }
          e.preventDefault();
        }}
      >
        <label className="label">New Element: </label>
        <input
          className="input"
          type="text"
          value={item}
          placeholder="Item"
          onChange={(e) => setItem(e.target.value)}
        />
        <input className="btn" type="submit" value={"✓"} />
      </form>
    </div>
  );
}

export default ListGenerator;
