import { Chess, Color, PieceSymbol, Square } from "chess.js";

// types.ts
export type ChessBoardProps = {
  gameId: string;
  started: boolean;
  myColor: Color;
  chess: Chess;
  setBoard: React.Dispatch<React.SetStateAction<BoardType>>;
  board: BoardType;
  socket: WebSocket;
};

export type BoardType = ({
  square: Square;
  type: PieceSymbol;
  color: Color;
} | null)[][];