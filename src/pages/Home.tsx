import React, { useState, useEffect } from 'react';
import FoodyCalendar from '@/components/calendar/FoodyCalendar';
import menusJson from '../../public/menus.json';
import { MenusJson, Menu } from 'interfaces';
import MenuModal from '@/components/home/Modal';

function Home() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        if(currentMonth === 1) {
          setCurrentYear(currentYear - 1);
          setCurrentMonth(12);
        } else {
          setCurrentMonth(currentMonth - 1);
        }
      } else if (event.key === 'ArrowRight') {
        if(currentMonth === 12) {
          setCurrentYear(currentYear + 1);
          setCurrentMonth(1);
        } else {
          setCurrentMonth(currentMonth + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentYear, currentMonth]);

  const menuItems: MenusJson = menusJson;
  const currentItems = menuItems[currentYear];
  const filteredMenus: Menu[] = currentItems ? (currentItems[currentMonth] ?? []) : [];

  const currentDate = `${currentYear}-${currentMonth}`;

	return (
    <>
      <FoodyCalendar 
        menus={filteredMenus} 
        currentDate={currentDate} 
        setCurrentYear={setCurrentYear} 
        setCurrentMonth={setCurrentMonth} 
        setOpenModal={setOpenModal} 
      />
      {openModal && <MenuModal setOpenEnroll={setOpenModal} />}
    </>
  );
}

export default Home;
