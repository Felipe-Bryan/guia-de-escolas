import { schoolDB } from '../../database/schoolDB';
import { Input } from '../base-components/Input';
import { HomeItem } from './HomeItem';

export function Home() {
  let line = '<div class="container border-bottom border-2 pt-3 pb-2 sticky-top bg-white">';

  line += `<div class="row">`;
  line += `<div class="col-12 text-center">`;

  line += `<p class="m-0 p-0 display-6 mb-2">Lista de Escolas</p>`;

  line += '</div>';
  line += '</div>';

  line += `<div class="row">`;
  line += `<div class="col-12">`;

  line += Input({
    id: 'search',
    title: 'Buscar',
    placeholder: `Nome da Escola`,
    type: 'text',
  });

  line += '</div>';
  line += '</div>';
  line += '</div>';

  line += `<div class="container" id="school-list">`;

  schoolDB.forEach((school) => {
    line += HomeItem(school);
  });

  line += '</div>';

  return line;
}
