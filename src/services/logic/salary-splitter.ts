/**
 * It adds comma to every three digits in the number, and adds a dot into the cent part
 * @param  {string} salary
 * @returns {string} splited string
 */
export const salarySplitter = (salary: number): string => salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
