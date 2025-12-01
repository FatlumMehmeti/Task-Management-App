import { AddListButton } from "./AddListButton";

export function ListContainer({
  listOrder,
  lists,
  onAddList,
  onAddCard,
}: {
  listOrder: string[];
  lists: Record<string, { title: string; cards: string[] }>;
  onAddList: (title: string) => void;
  onAddCard: (listId: string) => void; // Funksioni për shtimin e kartave
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        overflowX: "auto",
        padding: "1rem",
      }}
    >
      {listOrder.map((id) => (
        <div
          key={id}
          style={{
            width: "15rem",
            background: "rgba(0,0,0,0.6)",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem" }}>{lists[id].title}</h3>
          {/* Shfaq kartat */}
          <ul>
            {lists[id].cards.map((card, index) => (
              <li key={index}>{card}</li>
            ))}
          </ul>
          <button
            onClick={() => onAddCard(id)}  // Kallëzo `onAddCard` kur klikohet
            style={{ fontSize: "0.8rem", color: "#ccc" }}
          >
            + Add a card
          </button>
        </div>
      ))}
      <div style={{ width: "15rem" }}>
        <AddListButton onCreate={onAddList} />
      </div>
    </div>
  );
}
