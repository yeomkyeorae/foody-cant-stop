interface FoodItem {
	key: number;
	name: string;
	date: string;
}

interface MenusJson {
  [year: string]: {
    [month: string]: Menu[]
  }
}

interface Menu {
  date: string;
  count: number;
  main: string;
  rice: string;
  soup: string;
  sidedish1: string;
  sidedish2: string;
  sidedish3: string;
  kimchi: string;
}

interface Event {
  title: string; 
  start: Date; 
  end: Date; 
  allDay: boolean;
  color: string;
}

export { FoodItem, MenusJson, Menu, Event };
