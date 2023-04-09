import { SimpleLayout } from '@/components/SimpleLayout'

import * as d3 from "d3";
import fetch from "isomorphic-unfetch";

export async function getServerSideProps() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-01-01&end=2023-03-01&index=USD&interval=monthly"
  );
  const { bpi } = await response.json();
  const btcPrice = Object.entries(bpi).map(([date, price]) => ({
    x: date,
    y: price,
  }));
  return { props: { btcPrice } };
}

const bitcoinregrets = ({ btcPrice }) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 60 };
  const width = 960 - margin.left - margin.right;
  const height = 500 - margin.top - margin.bottom;

  const parseDate = d3.timeFormat("%Y-%m-%d");

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
      <svg viewBox={`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <path d={line(btcPrice)} fill="none" stroke="orange" strokeWidth="2" />
          <g transform={`translate(0, ${height})`}>
            <g className="x-axis" ref={(node) => d3.select(node).call(d3.axisBottom(x).tickFormat(d3.timeFormat("%Y-%m")))} />
            <text
              x={width / 2}
              y={margin.bottom * 0.75 + height}
              textAnchor="middle"
              dominantBaseline="middle"
            >
              Date
            </text>
          </g>
          <g className="y-axis" ref={(node) => d3.select(node).call(d3.axisLeft(y))} />
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
          </text>
        </g>
      </svg>
    </div>
    </SimpleLayout>
  );
};

export default bitcoinregrets;
