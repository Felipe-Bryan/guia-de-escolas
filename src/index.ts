import { Root } from './components/base-components/Root';
import { Home } from './components/home/Home';
import { schoolDB } from './database/schoolDB';
import { filterByName } from './functions/filterByName';
import { renderItems } from './functions/renderItems';
import { setGoToBtns } from './functions/setGoToBtns';

Root.innerHTML = Home();

const searchIpt = <HTMLInputElement>document.getElementById('search')!;

searchIpt.addEventListener('keyup', () => {
  if (searchIpt.value.length > 0) {
    const result = filterByName(searchIpt.value);

    renderItems(result);
  } else {
    renderItems(schoolDB);
  }
});

setGoToBtns();
