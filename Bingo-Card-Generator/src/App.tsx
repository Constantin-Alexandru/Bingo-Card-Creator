import { useState } from "react";
import "./App.css";
import ListGenerator from "./ListGenerator";
import ListItem from "./components/ListItem";
import BingoGenerator from "./BingoGenerator";

function App() {
  const [items, setItems] = useState<string[]>([]);

  const addItem = (item: string) => {
    setItems([...items, item]);
  };

  const removeItem = (item: string) => {
    setItems(
      items.filter((listItem) => {
        return listItem !== item;
      })
    );
  };

  return (
    <div className="app">
      <div className="top">
        <h1 className="title">Bingo Card Generator</h1>
        <h2 className="subtitle">by Alex Constantin</h2>
      </div>
      <div className="left">
        <ListGenerator
          items={items}
          addItem={addItem}
          removeItem={removeItem}
        />
        <div className="items-list">
          {items.map((item, index) => {
            return (
              <ListItem index={index + 1} text={item} removeItem={removeItem} />
            );
          })}
        </div>
      </div>
      <div className="right">
        <BingoGenerator items={items} />
      </div>
    </div>
  );
}

export default App;
