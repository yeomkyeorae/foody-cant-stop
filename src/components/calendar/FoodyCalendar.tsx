import React, { Dispatch, SetStateAction} from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import { Menu, Event } from 'interfaces';
import 'moment/locale/ko';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko');
const localizer = momentLocalizer(moment);

type Setter = React.Dispatch<React.SetStateAction<number>>;

const ExpandTargets = ['main', 'rice', 'soup', 'sidedish1', 'sidedish2', 'sidedish3', 'kimchi'] as const;
const dishToColor: { [index in typeof ExpandTargets[number] ]: string } = {
  main: '#c0392b',
  rice: '#bdc3c7',
  soup: '#2ecc71',
  sidedish1: '#f1c40f',
  sidedish2: '#9b59b6',
  sidedish3: '#3498db',
  kimchi: '#d35400'
}

export default function FoodyCalendar({ menus, currentDate, setCurrentYear, setCurrentMonth, setOpenModal }: { menus: Menu[], currentDate: string, setCurrentYear: Setter, setCurrentMonth: Setter, setOpenModal: Dispatch<SetStateAction<boolean>> }) {
  const expandMenus = (): Event[] => {
    let arr: Event[] = [];

    menus?.forEach(menu => {
      ExpandTargets.forEach(expandTarget => {
        const dish = menu[expandTarget as keyof Menu];

        if(dish !== null) {
          const title = (expandTarget === 'main' ? `${dish}(${menu.count})` : dish) as string;
  
          arr = arr.concat([{
            title,
            start: new Date(menu.date),
            end: new Date(menu.date),
            allDay: true,
            color: dishToColor[expandTarget]
          }]);
        }
      });
    });

    return arr;
  }

  const events: Event[] = expandMenus();

	return (
		<div style={{ height: '1000px' }}>
			<Calendar
        date={currentDate}
				localizer={localizer}
				step={60}
				views={['month']}
				defaultView={Views.MONTH}
				startAccessor="start"
				endAccessor="end"
				onSelectEvent={() => setOpenModal(true)}
        onNavigate={(newDate) => {
          setCurrentYear(newDate.getFullYear());
          setCurrentMonth(newDate.getMonth() + 1);
        }}
				events={events}
				eventPropGetter={(event) => {
					const newStyle = {
						color: 'white',
						backgroundColor: event.color,
					};

					return {
						style: newStyle,
					};
				}}
			/>
		</div>
	);
}
