
function sortArrayByKey(arrayOfObjects, key, order) {
  if (arrayOfObjects?.length) {
    arrayOfObjects.sort((a, b) => {
      const valueA = order === "ASC" ? b[key] : a[key]; //a[key]
      const valueB = order === "ASC" ? a[key] : b[key];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return (Math.abs(valueB) - Math.abs(valueA)); // Default is Descending order
      } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return valueA.trim().localeCompare(valueB.trim());
      } else if (isDate(valueA) && isDate(valueB)) {
        return new Date(valueA) - new Date(valueB);
      } else {
        return 0;
      }
    });
  }
}

function isDate(dateString) {
  // Check if the input string matches the format 'YYYY-MM-DD'
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  return datePattern.test(dateString);
}

export { sortArrayByKey }


