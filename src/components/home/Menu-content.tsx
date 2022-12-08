import React from 'react';
import styled from 'styled-components';
import FoodItem from 'interfaces';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Content = styled.div`
	width: 300px;
	height: 80px;
	border: 1px #cccccc solid;
	border-radius: 30px;
	margin: 5px 0px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CloseBtn = styled.button`
	/* position: absolute; */
	right: 10px;
	top: 10px;
	font-size: 18px;
	cursor: pointer;
	opacity: 0.5;
	background: none;
	border: none;
	transition: opacity 0.2s ease;
`;

function MenuContent({ foodItem }: { foodItem: FoodItem }) {
	return (
		<Content>
			<div>
				<span>{foodItem.name}</span>
				<CloseBtn title="close">
					<FontAwesomeIcon icon={faTrash} />
				</CloseBtn>
			</div>
			<span>{foodItem.date}</span>
		</Content>
	);
}

export default MenuContent;
