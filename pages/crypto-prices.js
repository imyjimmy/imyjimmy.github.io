import ky from 'ky-universal';
import { LayoutTheme } from 'components/Layout';
import { Hero, BigTitle } from 'styles/Text';
import styled from 'styled-components';
import { useEffect } from 'react';

const LayoutThemeCrypto = styled(LayoutTheme)`
  // color: #000;
  margin: 0 10% 0;
`;

const CryptoPrices = ({ data }) => {

  useEffect(() => {
  }, [data])

  return (<LayoutThemeCrypto><Hero id='hey-ma'><BigTitle>Crypto</BigTitle></Hero></LayoutThemeCrypto>)
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await ky.get('https://api.nomics.com/v1/prices?key=f84cb3e9d2ae13cb4dc27d30a44ea066', { mode: 'cors' })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default CryptoPrices;