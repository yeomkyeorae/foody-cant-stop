import React from 'react';
import styled from 'styled-components';

const BoardDiv = styled.div`
	width: 40%;
	height: 300px;
	border: 2px solid gray;
`;

function Board({ children }: { children: any }) {
	return <BoardDiv>{children}</BoardDiv>;
}

export default Board;
