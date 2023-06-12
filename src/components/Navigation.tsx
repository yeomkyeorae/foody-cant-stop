import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
	justify-content: center;
	margin-top: 50px;
	padding: 0;
	list-style: none;
`;

// const Li = styled.li`
// 	font-size: 1.5rem;
// 	padding: 10px;
// `;

function Navigation() {
	return (
		<nav>
			<Ul>
				{/* <Li>
					<Link to="/">홈</Link>
				</Li>
				<Li>
					<Link to="/dashboard">대시보드</Link>
				</Li>
				<Li>
					<Link to="/calendar">메뉴캘린더</Link>
				</Li> */}
			</Ul>
		</nav>
	);
}

export default Navigation;
