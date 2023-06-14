import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko');
const localizer = momentLocalizer(moment);

export default function FoodyCalendar() {
	const events = [1, 2, 3].map((el, index) => ({
		id: index,
		title: 'test',
		allDay: true,
		start: new Date(),
		end: new Date(),
		el,
	}));

	return (
		<div style={{ height: '100vh' }}>
			<Calendar
				localizer={localizer}
				step={60}
				views={['month']}
				defaultView={Views.MONTH}
				startAccessor="start"
				endAccessor="end"
				onSelectEvent={() => {}}
				events={events}
				eventPropGetter={(event) => {
					const newStyle = {
						color: 'white',
						backgroundColor: 'gray',
					};
					if (event.el === 5) {
						newStyle.backgroundColor = 'gold';
					} else if (event.el >= 4) {
						newStyle.backgroundColor = '#8bc34a';
					} else if (event.el >= 3) {
						newStyle.backgroundColor = '#35baf6';
					} else if (event.el >= 2) {
						newStyle.backgroundColor = '#ed4b82';
					}
					return {
						style: newStyle,
					};
				}}
			/>
		</div>
	);
}
