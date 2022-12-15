import React, { Dispatch, SetStateAction, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';

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
	display: flex;
	justify-content: center;
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
	const [inputDate, setInputDate] = useState<string>('');
	const [inputMenu, setInputMenu] = useState<string>('');
	const [menuItems, setMenuItems] = useState<string[]>([]);

	const dateOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInputDate(value);
	};

	const menuOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setInputMenu(value);
	};

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (inputMenu !== '') {
			setMenuItems([...menuItems, inputMenu]);
			setInputMenu('');
		}
	};

	const deleteMenuItem = (index: number) => {
		setMenuItems(menuItems.filter((_, ix) => index !== ix));
	};

	return (
		<Modal>
			<Overlay />
			<ModalContent>
				<CloseBtn title="close" onClick={() => setOpenEnroll(false)}>
					<FontAwesomeIcon icon={faTimes} />
				</CloseBtn>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<div style={{ marginBottom: '10px' }}>
						<input type="date" value={inputDate} onChange={dateOnChange} />
					</div>
					<div>
						<form onSubmit={submitHandler}>
							<input value={inputMenu} onChange={menuOnChange} style={{ width: '200px' }} />
							<button type="submit">추가</button>
						</form>
					</div>
					{menuItems.length > 0 && (
						<ul style={{ padding: '0px' }}>
							{menuItems.map((menu, index) => (
								<li key={`menuItem-${index + 1}`}>
									{menu}
									<FontAwesomeIcon icon={faTrash} onClick={() => deleteMenuItem(index)} />
								</li>
							))}
						</ul>
					)}
					<button type="submit">등록</button>
				</div>
			</ModalContent>
		</Modal>
	);
}

export default EnrollModal;
