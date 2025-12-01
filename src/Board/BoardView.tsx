import { useState } from "react";
import { ListContainer } from "./ListContainer";

type Board = {
  id: string;
  title: string;
  listOrder: string[];
};

type List = {
  title: string;
  cards: string[]; // Lista e kartave
};

const initialBoard: Board = {
  id: "b1",
  title: "My Trello Board",
  listOrder: ["l1", "l2", "l3"],
};

const initialLists: Record<string, List> = {
  l1: { title: "To do", cards: [] },
  l2: { title: "In Progress", cards: [] },
  l3: { title: "Done", cards: [] },
};

export function BoardView() {
  const [board, setBoard] = useState(initialBoard);
  const [lists, setLists] = useState(initialLists);

  function handleRenameBoard(title: string) {
    setBoard((prev) => ({ ...prev, title }));
  }

  function handleAddList(title: string) {
    const id = crypto.randomUUID();
    setLists((prev) => ({
      ...prev,
      [id]: { title, cards: [] }, // Shto lista të re
    }));
    setBoard((prev) => ({
      ...prev,
      listOrder: [...prev.listOrder, id], // Shto ID e listës në renditje
    }));
  }

function handleAddCard(listId: string) {
  const cardTitle = prompt("Enter card title");
  if (cardTitle) {
    setLists((prev) => {
      const updatedLists = { ...prev };
      // Kontrollo nëse karta ekziston tashmë, dhe vetëm atëherë shto
      if (!updatedLists[listId].cards.includes(cardTitle)) {
        updatedLists[listId].cards.push(cardTitle); // Shto kartën në listë
      }
      return updatedLists;
    });
  }
}


  return (
    <div style={{ background: "#0369a1", minHeight: "100vh", color: "white" }}>
      <header style={{ padding: "1rem" }}>
        <input
          value={board.title}
          onChange={(e) => handleRenameBoard(e.target.value)}
          style={{
            background: "transparent",
            border: "none",
            borderBottom: "1px solid white",
            color: "white",
            fontSize: "1.2rem",
            outline: "none",
          }}
        />
      </header>

      <ListContainer
        listOrder={board.listOrder}
        lists={lists}
        onAddList={handleAddList}
        onAddCard={handleAddCard}  // Dërgo funksionin për shtimin e kartave
      />
    </div>
  );
}
