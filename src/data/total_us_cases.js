const cumulativeUSCases = [
  {
    date: '2020-01-22',
    day_count: '0',
    total_confirmed_cases: '1',
    total_deaths: '0',
  },
  {
    date: '2020-01-23',
    day_count: '1',
    total_confirmed_cases: '1',
    total_deaths: '0',
  },
  {
    date: '2020-01-24',
    day_count: '2',
    total_confirmed_cases: '2',
    total_deaths: '0',
  },
  {
    date: '2020-01-25',
    day_count: '3',
    total_confirmed_cases: '2',
    total_deaths: '0',
  },
  {
    date: '2020-01-26',
    day_count: '4',
    total_confirmed_cases: '5',
    total_deaths: '0',
  },
  {
    date: '2020-01-27',
    day_count: '5',
    total_confirmed_cases: '5',
    total_deaths: '0',
  },
  {
    date: '2020-01-28',
    day_count: '6',
    total_confirmed_cases: '5',
    total_deaths: '0',
  },
  {
    date: '2020-01-29',
    day_count: '7',
    total_confirmed_cases: '5',
    total_deaths: '0',
  },
  {
    date: '2020-01-30',
    day_count: '8',
    total_confirmed_cases: '5',
    total_deaths: '0',
  },
  {
    date: '2020-01-31',
    day_count: '9',
    total_confirmed_cases: '7',
    total_deaths: '0',
  },
  {
    date: '2020-02-01',
    day_count: '10',
    total_confirmed_cases: '8',
    total_deaths: '0',
  },
  {
    date: '2020-02-02',
    day_count: '11',
    total_confirmed_cases: '8',
    total_deaths: '0',
  },
  {
    date: '2020-02-03',
    day_count: '12',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-04',
    day_count: '13',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-05',
    day_count: '14',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-06',
    day_count: '15',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-07',
    day_count: '16',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-08',
    day_count: '17',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-09',
    day_count: '18',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-10',
    day_count: '19',
    total_confirmed_cases: '11',
    total_deaths: '0',
  },
  {
    date: '2020-02-11',
    day_count: '20',
    total_confirmed_cases: '12',
    total_deaths: '0',
  },
  {
    date: '2020-02-12',
    day_count: '21',
    total_confirmed_cases: '12',
    total_deaths: '0',
  },
  {
    date: '2020-02-13',
    day_count: '22',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-14',
    day_count: '23',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-15',
    day_count: '24',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-16',
    day_count: '25',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-17',
    day_count: '26',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-18',
    day_count: '27',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-19',
    day_count: '28',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-20',
    day_count: '29',
    total_confirmed_cases: '13',
    total_deaths: '0',
  },
  {
    date: '2020-02-21',
    day_count: '30',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-22',
    day_count: '31',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-23',
    day_count: '32',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-24',
    day_count: '33',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-25',
    day_count: '34',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-26',
    day_count: '35',
    total_confirmed_cases: '15',
    total_deaths: '0',
  },
  {
    date: '2020-02-27',
    day_count: '36',
    total_confirmed_cases: '16',
    total_deaths: '0',
  },
  {
    date: '2020-02-28',
    day_count: '37',
    total_confirmed_cases: '16',
    total_deaths: '0',
  },
  {
    date: '2020-02-29',
    day_count: '38',
    total_confirmed_cases: '24',
    total_deaths: '1',
  },
  {
    date: '2020-03-01',
    day_count: '39',
    total_confirmed_cases: '30',
    total_deaths: '1',
  },
  {
    date: '2020-03-02',
    day_count: '40',
    total_confirmed_cases: '53',
    total_deaths: '6',
  },
  {
    date: '2020-03-03',
    day_count: '41',
    total_confirmed_cases: '72',
    total_deaths: '7',
  },
  {
    date: '2020-03-04',
    day_count: '42',
    total_confirmed_cases: '103',
    total_deaths: '11',
  },
  {
    date: '2020-03-05',
    day_count: '43',
    total_confirmed_cases: '171',
    total_deaths: '12',
  },
  {
    date: '2020-03-06',
    day_count: '44',
    total_confirmed_cases: '223',
    total_deaths: '16',
  },
  {
    date: '2020-03-07',
    day_count: '45',
    total_confirmed_cases: '339',
    total_deaths: '19',
  },
  {
    date: '2020-03-08',
    day_count: '46',
    total_confirmed_cases: '456',
    total_deaths: '22',
  },
  {
    date: '2020-03-09',
    day_count: '47',
    total_confirmed_cases: '750',
    total_deaths: '28',
  },
  {
    date: '2020-03-10',
    day_count: '48',
    total_confirmed_cases: '1005',
    total_deaths: '31',
  },
  {
    date: '2020-03-11',
    day_count: '49',
    total_confirmed_cases: '1307',
    total_deaths: '38',
  },
  {
    date: '2020-03-12',
    day_count: '50',
    total_confirmed_cases: '1664',
    total_deaths: '41',
  },
  {
    date: '2020-03-13',
    day_count: '51',
    total_confirmed_cases: '2161',
    total_deaths: '63',
  },
  {
    date: '2020-03-14',
    day_count: '52',
    total_confirmed_cases: '2855',
    total_deaths: '68',
  },
  {
    date: '2020-03-15',
    day_count: '53',
    total_confirmed_cases: '3514',
    total_deaths: '97',
  },
  {
    date: '2020-03-16',
    day_count: '54',
    total_confirmed_cases: '4340',
    total_deaths: '106',
  },
  {
    date: '2020-03-17',
    day_count: '55',
    total_confirmed_cases: '6060',
    total_deaths: '116',
  },
  {
    date: '2020-03-18',
    day_count: '56',
    total_confirmed_cases: '8002',
    total_deaths: '144',
  },
  {
    date: '2020-03-19',
    day_count: '57',
    total_confirmed_cases: '13498',
    total_deaths: '199',
  },
  {
    date: '2020-03-20',
    day_count: '58',
    total_confirmed_cases: '17588',
    total_deaths: '241',
  },
  {
    date: '2020-03-21',
    day_count: '59',
    total_confirmed_cases: '25516',
    total_deaths: '332',
  },
  {
    date: '2020-03-22',
    day_count: '60',
    total_confirmed_cases: '32036',
    total_deaths: '373',
  },
  {
    date: '2020-03-23',
    day_count: '61',
    total_confirmed_cases: '42374',
    total_deaths: '521',
  },
  {
    date: '2020-03-24',
    day_count: '62',
    total_confirmed_cases: '53204',
    total_deaths: '711',
  },
];

export default cumulativeUSCases;
