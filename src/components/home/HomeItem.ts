import { SchoolType } from '../../types/SchoolType';
import { Button } from '../base-components/Button';

export function HomeItem(prop: SchoolType) {
  let line = `<div class="row">`;
  line += `<div class="col-12">`;

  line += `<p class="m-0 p-0 pt-1 fw-bold fs-6">${prop.name}</p>`;

  line += '</div>';
  line += '</div>';

  line += `<div class="row">`;
  line += `<div class="col-12">`;

  line += `<p class="m-0 p-0">${prop.address}</p>`;

  line += '</div>';
  line += '</div>';

  line += `<div class="row border-bottom border-2 mb-2 pb-2">`;
  line += `<div class="col-8">`;

  line += `<p class="m-0 p-0">${prop.neighborhood}</p>`;

  line += '</div>';

  line += `<div class="col-4 text-end">`;

  line += Button({
    id: `go-to-${prop.id}`,
    color: 'success',
    label: 'Ir Para',
    additionalClass: 'p-0 px-2 goToBtn',
  });

  line += '</div>';
  line += '</div>';

  return line;
}
