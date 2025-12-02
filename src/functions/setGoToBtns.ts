import { schoolDB } from '../database/schoolDB';
import { openGPS } from './openGPS';

export function setGoToBtns() {
  const goToBtns = document.querySelectorAll('.goToBtn');

  goToBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.id.replace('go-to-', '');

      const school = schoolDB.find((school) => school.id === id)!;

      openGPS(school);
    });
  });
}
