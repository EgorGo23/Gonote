/**
 * ### Метод достает из pathname значения, переданного фильтра
 *
 * @param {string} pathname - строка с фильтрами
 * @param {string} filterName - искомый фильтр
 * @returns {Array<string>} Массив значений, соответсвующих переданному фильтру
 */
export const getFilterItemsFromPathname = (
  pathname: string, filterName: string,
): string[] => {
  if (typeof pathname === 'string' && typeof filterName === 'string') {
    const regexp = new RegExp(`[/&]${filterName}=([^&]*)`);

    const res = pathname.match(regexp);

    return res ? res[1].split('+') : [];
  }

  return [];
};
