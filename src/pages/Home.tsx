import React, { useEffect } from 'react';
// import EnrollModal from 'components/home/Enroll-modal';
// import MenuContent from 'components/home/Menu-content';
// import FoodItem from 'interfaces';
import FoodyCalendar from '@/components/calendar/FoodyCalendar';

// const InputContent = styled.div`
// 	display: flex;
// 	justify-content: content;
// `;

function Home() {
	// const [searchMenu, setSearchMenu] = useState<string>('');
	// const [openEnroll, setOpenEnroll] = useState<boolean>(false);
	// const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

	useEffect(() => {
		// setFoodItems([
		// 	{
		// 		key: 1,
		// 		name: '소불고기',
		// 		date: '2022-10-22',
		// 	},
		// 	{
		// 		key: 2,
		// 		name: '소고기뭇국',
		// 		date: '2022-10-23',
		// 	},
		// 	{
		// 		key: 3,
		// 		name: '소갈비찜',
		// 		date: '2022-12-13',
		// 	},
		// ]);
	}, []);

	// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	const { value } = e.target;
	// 	setSearchMenu(value);
	// };

	// const submitHandler = (e: React.SyntheticEvent) => {
	// 	e.preventDefault();

	// 	const regex = new RegExp(searchMenu);
	// 	setFoodItems(foodItems.filter((foodItem) => foodItem.name.search(regex) >= 0));

	// 	setSearchMenu('');
	// };

	// const onDeleteHandler = (itemKey: number) => {
	// 	setFoodItems(foodItems.filter((item) => item.key !== itemKey));
	// };

	return <FoodyCalendar />;
}

export default Home;
