function getDateParts() {
  const date = new Date(); // Текущая дата
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()];
}

const [getDate, getMonth, getFullYear] = getDateParts();
console.log(`Сегодняшняя дата: ${getDate}.${getMonth}.${getFullYear}`);