import { useEffect, useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { SimpleLayout } from '@/components/SimpleLayout'
// import MonthSelector from '@/components/MonthSelector';
// import YearSelector from '@/components/YearSelector';

import styles from '@/pages/demos/regret.module.css'

import * as d3 from "d3";
import fetch from "isomorphic-unfetch";

export async function getServerSideProps() {
  const today = Date.now(); //unix time stamp of now
  
  /* Jan 1, 2013: 1357027200
    Jan 1, 2022: 1641024000
  */
  
  console.log('time: ', today)
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1641024000&to=${today}`);
  const { prices } = await response.json();

  const btcPrice = Object.entries(prices).map(([,[date, price]]) => { 
    return ({
      x: date,
      y: price,
    })});
  return { props: { btcPrice } };
}

const getUnixTime = (month,year) => {
  let x = new Date(`${year}-${month}-01`).valueOf()
  return x;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const bitcoinregrets = ({ btcPrice }) => {
  const [usd, setUsd] = useState()
  const [historicPrice, setHistoricPrice] = useState()
  const [currentBtcPrice, setCurrentBtcPrice] = useState()
  const [btcAmt, setBtcAmt] = useState()

  /* set up years and months */
  const [month, setMonth] = useState()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const [year, setYear] = useState()
  const years = [2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023];

  useEffect(() => {
    async function fetchData(month) {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/history?date=01-${month}-${year}&localization=false`)
      // console.log('historical price: ', response.json())
      const prices = await response.json()

      const currentPrice = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
      const current = await currentPrice.json()
      setCurrentBtcPrice(current.bitcoin.usd)

      let historicPrice = prices.market_data.current_price.usd;
      console.log('usd:', historicPrice, 'amt of btc could\'ve purchased: ', usd / historicPrice)
      setHistoricPrice(historicPrice)
      setBtcAmt( usd / historicPrice )
    }

    if (usd && month && year) {
      console.log('all three conditions met')

      let monthStr = String(months.indexOf(month) + 1)
      if (monthStr.length === 1) {
        monthStr = "0" + monthStr
      }
      fetchData(monthStr)
    }
  }, [month, year])

  const handleInputAmt = (event) => {
    event.preventDefault()
    console.log('event:', event.target.value)
    setUsd(event.target.value)
  }

  const handleSelectMonth = (month) => (event) => {
    // console.log('select:', event, event.target, event.target.value, month)
    // event.preventDefault()
    setMonth(month)
  }

  const handleSelectYear = (year) => (event) => {
    // console.log('select:', event, event.target, event.target.value, year)
    // event.preventDefault()
    setYear(year)
  }

  const margin = { top: 20, right: 20, bottom: 30, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  // const parseDate = d3.timeFormat("%Y-%m-%d");

  const x = d3
    .scaleTime()
    .domain(d3.extent(btcPrice, (d) => Date.parse(new Date(d.x))))
    .range([0, width]);
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(btcPrice, (d) => d.y)])
    .range([height, 0]);


  const line = d3
    .line()
    .x((d) => { 
      // console.log('d.x:', d.x, Date.parse(new Date(d.x)), x(Date.parse(new Date(d.x)))) 
      return x(Date.parse((new Date(d.x))))
    })
    .y((d) => y(d.y))
    .curve(d3.curveCatmullRom.alpha(0.5));

  return (
    <SimpleLayout
      title="Bitcoin Regrets"
      intro="What if you bought bitcoin earlier?"
    >
    <div id="hey" className="w-full bg-white dark:text-zinc-400 dark:bg-zinc-900 dark:ring-zinc-300/20">
      {/* { console.log('btcPrice:', btcPrice, 'line(btcPrice): ', line(btcPrice))} */}
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-6xl">I wish I bought $<input onChange={handleInputAmt} className="w-1/6 bg-black dark:bg-white text-zinc-100 dark:text-zinc-900"></input></h2>
      <h3 className="mt-4 dark:text-zinc-100 sm:text-5xl">worth of bitcoin in {' '}
      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-black dark:bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
         { month ?? (<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>)}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            { months.map(month => (
              <Menu.Item key={month}>
              {({ active }) => (
                <div
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-3xl'
                  )}
                  onClick={handleSelectMonth(month)}
                >
                  {month}
                </div>
              )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu> of {/* h3 text */}
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-40 justify-center gap-x-1.5 bg-black dark:bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm hover:bg-gray-50">
        { year ?? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> }
        {/* {year} */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-42 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            { years.map(year => (
              <Menu.Item key={year} >
              {({ active }) => (
                <div
                  onClick={handleSelectYear(year)}
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-3xl'
                  )}
                >
                  {year}
                </div>
              )}
            </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </h3>
      { btcAmt ? 
      (
      <div style={{ 'position': 'relative' }}>
        <div className={styles.regretrospective + ' font-bold bg-black dark:bg-white text-zinc-100 dark:text-zinc-900 sm:text-6xl'}>
          <h3>You would have</h3> 
          <h3>{btcAmt.toFixed(2)} btc</h3>
          <h3>worth ${btcAmt.toFixed(2) * currentBtcPrice} today</h3>
        </div>
      </div>
      ) : (<></>)}
      <svg viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <path d={line(btcPrice)} fill="none" stroke="orange" strokeWidth="2" />
          {/* <text
            enableBackground={true}
            fill="#f4f4f5" //text-zinc-100
            className={styles.regret + ' text-2xl font-bold'}
            textAnchor='middle'
            x={width/2}
            y={height/2}
          >hello world</text> */}
          {/* <g transform={`translate(0, ${height})`}>
            <g className="x-axis" ref={(node) => d3.select(node).call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m")))} />
            <text
              x={width / 2}
              y={margin.bottom * 0.75 + height}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Date
            </text>
          </g> */}
          {/* <g className="y-axis" ref={(node) => d3.select(node).call(d3.axisLeft(y))} />
          <text
            //color='red' //'rgb(161,161,170);'
            fill='#a1a1aa'
            x={-height / 2}
            y={-0.85*margin.left}
            textAnchor="middle"
            transform={`rotate(-90)`}
            dominantBaseline="middle"
          >
            Price (USD)
          </text> */}
        </g>
      </svg>
    </div>
    </SimpleLayout>
  );
};

export default bitcoinregrets;
