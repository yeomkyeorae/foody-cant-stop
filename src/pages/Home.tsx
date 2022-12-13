import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EnrollModal from 'components/home/Enroll-modal';
import MenuContent from 'components/home/Menu-content';
import FoodItem from 'interfaces';

const Contents = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const InputContent = styled.div`
	display: flex;
	justify-content: content;
`;

function Home() {
	const [searchMenu, setSearchMenu] = useState<string>('');
	const [openEnroll, setOpenEnroll] = useState<boolean>(false);
	const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

	useEffect(() => {
		setFoodItems([
			{
				key: 1,
				name: '소불고기',
				date: '2022-10-22',
			},
			{
				key: 2,
				name: '소고기뭇국',
				date: '2022-10-23',
			},
			{
				key: 3,
				name: '소갈비찜',
				date: '2022-12-13',
			},
		]);
	}, []);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchMenu(value);
	};

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
	};

	const onDeleteHandler = (itemKey: number) => {
		setFoodItems(foodItems.filter((item) => item.key !== itemKey));
	};

	return (
		<Contents>
			<InputContent>
				<form onSubmit={submitHandler}>
					<input value={searchMenu} onChange={onChange} style={{ width: '300px' }} />
					<button type="submit">검색</button>
				</form>
				<button type="button" onClick={() => setOpenEnroll(true)}>
					메뉴 등록
				</button>
			</InputContent>
			<div>
				{foodItems.map((foodItem, index) => (
					<MenuContent key={`foodItem-${index + 1}`} foodItem={foodItem} onDeleteHandler={onDeleteHandler} />
				))}
			</div>
			{openEnroll && <EnrollModal setOpenEnroll={setOpenEnroll} />}
		</Contents>
	);
}

export default Home;
