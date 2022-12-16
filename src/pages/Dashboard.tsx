import React from 'react';
import Board from 'components/Dashboard/Board';
import styled from 'styled-components';

const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 70%;
	margin: auto;
`;

function Dashboard() {
	return (
		<Content>
			<Board>
				<h2>최근 한달 간 최다 이용 메뉴 구성</h2>
				<ul>
					<li>떡만두국</li>
					<li>감자고로케</li>
					<li>깻잎지</li>
					<li>백김치</li>
					<li>파래무침</li>
				</ul>
			</Board>
			<Board>
				<h2>최근 한달 간 최저 이용 메뉴 구성</h2>
				<ul>
					<li>잡곡밥</li>
					<li>오이냉국</li>
					<li>오이지</li>
					<li>오이김치</li>
					<li>해파리냉채</li>
				</ul>
			</Board>
			<Board>
				<h2>최근 한달 간 가장 많이 나온 메뉴 TOP3</h2>
				<ol>
					<li>카레라이스</li>
					<li>돈까스</li>
					<li>제육볶음</li>
				</ol>
			</Board>
			<Board>
				<h2>일주일 간 최저/최대 식수</h2>
				<span>최저 250명</span>
				<br />
				<span>최대 397명</span>
			</Board>
		</Content>
	);
}

export default Dashboard;
