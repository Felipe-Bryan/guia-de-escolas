import { HomeItem } from '../components/home/HomeItem';
import { SchoolType } from '../types/SchoolType';
import { setGoToBtns } from './setGoToBtns';

export function renderItems(schools: SchoolType[]) {
  const spot = document.getElementById('school-list')!;

  spot.innerHTML = '';

  schools.forEach((school) => {
    spot.innerHTML += HomeItem(school);
  });

  setGoToBtns();
}
