export interface Stock {
  date: Date,
  value: number
}

export const Stocks: Stock[] = [
  {date: new Date("2004-04-12"), value: 622.77},
  {date: new Date("2005-04-13"), value: 605.23},
  {date: new Date("2006-04-16"), value: 580.13},
  {date: new Date("2007-04-17"), value: 609.70},
  {date: new Date("2008-04-18"), value: 608.34},
  {date: new Date("2009-04-19"), value: 587.44},
  {date: new Date("2010-04-20"), value: 572.98},
  {date: new Date("2011-04-23"), value: 571.70},
  {date: new Date("2012-04-24"), value: 560.28},
  {date: new Date("2012-05-25"), value: 610.00},
  {date: new Date("2012-08-26"), value: 607.70},
  {date: new Date("2013-04-27"), value: 603.00},
  {date: new Date("2014-04-30"), value: 583.98},
  {date: new Date("2015-05-01"), value: 582.13},
];
