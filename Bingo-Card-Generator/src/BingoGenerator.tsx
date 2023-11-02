import { ReactNode, useState } from "react";
import { usePDF, Margin } from "react-to-pdf";

import "./BingoGenerator.css";

interface Props {
  items: string[];
}

function BingoGenerator(props: Props): ReactNode {
  const { items } = props;
  const [shuffledItems, setShuffeledItems] = useState<string[]>([]);
  const { toPDF, targetRef } = usePDF({
    filename: "card.pdf",
    page: { margin: Margin.MEDIUM },
  });

  return (
    <div className="bingo-generator">
      <div className="controls">
        <button
          className="btn"
          onClick={() => {
            setShuffeledItems(
              [...items].sort(() => (Math.random() > 0.5 ? 1 : -1))
            );
          }}
        >
          Generate card
        </button>
        <button className="btn" onClick={() => toPDF()}>
          Print Board
        </button>
      </div>
      <div className="bingo-card" ref={targetRef}>
        <h3 className="title">Bingo Card</h3>

        <div className="board">
          {Array(25)
            .fill("")
            .map((val, index) => {
              return (
                <div className="cell" key={index}>
                  {shuffledItems.length > index ? shuffledItems[index] : val}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default BingoGenerator;
