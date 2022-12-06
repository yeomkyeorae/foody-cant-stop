import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Modal = styled.div`
	position: fixed;
	z-index: 990;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
`;

const Overlay = styled.div`
	position: absolute;
	z-index: 995;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.85);
`;

const ModalContent = styled.div`
	position: absolute;
	z-index: 999;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-height: 90%;
	overflow: auto;
	background: #fff;
	box-sizing: border-box;
	padding: 20px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
	border-radius: 4px;
	width: 520px;
`;

const CloseBtn = styled.button`
	position: absolute;
	right: 10px;
	top: 10px;
	font-size: 18px;
	cursor: pointer;
	opacity: 0.5;
	background: none;
	border: none;
	transition: opacity 0.2s ease;
`;

interface Props {
	setOpenEnroll: Dispatch<SetStateAction<boolean>>;
}

function EnrollModal({ setOpenEnroll }: Props) {
	return (
		<Modal>
			<Overlay />
			<ModalContent>
				<CloseBtn title="close" onClick={() => setOpenEnroll(false)}>
					<FontAwesomeIcon icon={faTimes} />
				</CloseBtn>
				It is modal
			</ModalContent>
		</Modal>
	);
}

export default EnrollModal;
