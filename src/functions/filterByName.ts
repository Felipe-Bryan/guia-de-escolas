import { schoolDB } from '../database/schoolDB';
import { removeInvalidChar } from '../utils/removeInvalidChar';

export function filterByName(name: string) {
  const toFind = removeInvalidChar(name.toLowerCase().trim());

  const result = schoolDB.filter((school) => {
    return removeInvalidChar(school.name).toLowerCase().includes(toFind);
  });

  return result;
}
