export function getWeekDays() {
  const formater = new Intl.DateTimeFormat('pt-Br', { weekday: 'long' })

  return Array.from(Array(7).keys())
    .map((day) => formater.format(new Date(Date.UTC(2021, 5, day))))
    .map((weekDay) =>
      weekDay.substring(0, 1).toUpperCase().concat(weekDay.substring(1)),
    )
}
