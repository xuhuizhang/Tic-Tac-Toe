import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [step, setStep] = useState("X");
	const [isClick, setClick] = useState(Array(9).fill(false));

	let title = `下一步由 ${step} 执棋`;

	const winnerWinner = () => {
		const winningCombinations = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (const winner of winningCombinations) {
			const [a, b, c] = winner;
			if (
				squares[a] !== null &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return squares[a];
			}
		}
		return false;
	};

	const win = winnerWinner();
	title = winnerWinner() ? `恭喜 ${win} 赢了！` : `下一步由 ${step} 执棋`;
	useEffect(() => {
		if (win) {
			console.log("winner");
			setClick(Array(9).fill(true));
		} else {
			console.log("下一步");
		}
	}, [step, win]);

	const handleClick = (squareIndex: number) => {
		if (!isClick[squareIndex] && !winnerWinner()) {
			const newStep = step === "X" ? "O" : "X";
			setStep(newStep);

			const newSquares = [...squares];
			newSquares[squareIndex] = step;
			setSquares(newSquares);

			const newClick = [...isClick];
			newClick[squareIndex] = true;
			setClick(newClick);
		}
	};

	return (
		<div className="game">
			<div className="game-board">
				<h2>{title}</h2>
			</div>
			<div className="board-row">
				<button
					className={isClick[0] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(0);
					}}>
					{squares[0]}
				</button>
				<button
					className={isClick[1] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(1);
					}}>
					{squares[1]}
				</button>
				<button
					className={isClick[2] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(2);
					}}>
					{squares[2]}
				</button>
			</div>
			<div className="board-row">
				<button
					className={isClick[3] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(3);
					}}>
					{squares[3]}
				</button>
				<button
					className={isClick[4] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(4);
					}}>
					{squares[4]}
				</button>
				<button
					className={isClick[5] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(5);
					}}>
					{squares[5]}
				</button>
			</div>
			<div className="board-row">
				<button
					className={isClick[6] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(6);
					}}>
					{squares[6]}
				</button>
				<button
					className={isClick[7] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(7);
					}}>
					{squares[7]}
				</button>
				<button
					className={isClick[8] ? "square-clicked" : "square"}
					onClick={() => {
						handleClick(8);
					}}>
					{squares[8]}
				</button>
			</div>
			<div className="game-info">
				<ol>
					<li>
						<button>跳到最开始位置</button>
					</li>
					<li>
						<button>跳到第1步</button>
					</li>
					<li>
						<button>跳到第2步</button>
					</li>
					<li>
						<button>跳到第3步</button>
					</li>
					<li>
						<button>跳到第4步</button>
					</li>
					<li>
						<button>跳到第5步</button>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default App;
