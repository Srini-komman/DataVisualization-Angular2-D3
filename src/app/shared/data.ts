export interface Stock {
  date: Date,
  value: number
}

export const Stocks: Stock[] = [
  {date: new Date("2016-01-02"), value: 1000},
  {date: new Date("2016-02-14"), value: 3500},
  {date: new Date("2016-03-15"), value: 2200},
  {date: new Date("2016-04-30"), value: 3600},
  {date: new Date("2016-05-31"), value: 2350},
  {date: new Date("2016-06-05"), value: 1200},
  {date: new Date("2016-07-13"), value: 4500},
  {date: new Date("2016-08-31"), value: 2200},
  {date: new Date("2016-09-30"), value: 5000},
  {date: new Date("2016-10-11"), value: 1400},
  {date: new Date("2016-11-20"), value: 4500},
  {date: new Date("2016-12-17"), value: 2700},
  {date: new Date("2017-01-31"), value: 3000}
];
