// // main component integration
// import { ChessBoard } from './components/ChessBoard';
// import { useChessBoard } from './hooks/useChessBoard';
// import { useBoardInteraction } from './hooks/useBoardInteraction';
// import { useResponsiveBoxSize } from './hooks/useResponsiveBoxSize';
// import { ChessBoardProps } from '../constants/types';

// const GameBoard = (props: ChessBoardProps) => {
//     const chessBoard = useChessBoard(props);
//     const interactions = useBoardInteraction(props);
//     const boxSize = useResponsiveBoxSize();

//     return (
//         <ChessBoardUI
//             {...chessBoard}
//             {...interactions}
//             boxSize={boxSize}
//             board={props.board}
//         />
//     );
// };