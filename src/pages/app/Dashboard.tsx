import type { JSX } from "react";
import { BoardView } from "../../Board/BoardView";


export default function Dashboard(): JSX.Element {
   return (
    <div>
      <BoardView />
    </div>
  );
}