import React, { useState } from 'react';
import styled from 'styled-components';
import EnrollModal from 'components/enroll/Enroll-modal';

const Content = styled.div`
	display: flex;
	justify-content: center;
`;

function Home() {
	const [searchMenu, setSearchMenu] = useState<string>('');
	const [openEnroll, setOpenEnroll] = useState<boolean>(false);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchMenu(value);
	};

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<Content>
			<form onSubmit={submitHandler}>
				<input value={searchMenu} onChange={onChange} style={{ width: '300px' }} />
				<button type="submit">검색</button>
			</form>
			<button type="button" onClick={() => setOpenEnroll(true)}>
				메뉴 등록
			</button>
			{openEnroll && <EnrollModal setOpenEnroll={setOpenEnroll} />}
		</Content>
	);
}

export default Home;
