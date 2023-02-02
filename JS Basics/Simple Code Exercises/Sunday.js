function isFirstJanSunday(yearStart, yearEnd) {
    let sundays = []
    for (i = yearStart; i <= yearEnd; i++) {
      let date = new Date(i, 0, 1); // 0 = January, 1 = 1st day
      let day = date.getDay();
      if (day === 0) {
        sundays.push(i)
      }
    }
    return sundays
  }
  console.log(isFirstJanSunday(2022, 2222));