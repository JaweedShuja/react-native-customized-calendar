export default (month, year) => {
    const date = new Date(year, month - 1, 1);
    const numDays = new Date(year, month, 0).getDate();
    const firstDayOfWeek = date.getDay();
  
    // const dayNames = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    // const calendar = [dayNames];
    const calendar = [[]];
  
    let row = [];
    for (let i = 0; i < firstDayOfWeek; i++) {
      row.push(-1);
    }
  
    let day = 1;
    while (day <= numDays) {
      row.push(day);
      day++;
  
      if (row.length === 7) {
        calendar.push(row);
        row = [];
      }
    }
  
    if (row.length > 0) {
      while (row.length < 7) {
        row.push(-1);
      }
      calendar.push(row);
    }
  
    return calendar;
}