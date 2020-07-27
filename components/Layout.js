import Link from "next/link";
import { useRouter } from "next/router";
import styled from 'styled-components';

function Layout({ className, children }) {
  const { pathname } = useRouter();
  const isRoot = pathname === "/";

  const header = isRoot ? (
    <h1 className="mb-8">
      <Link href="/">
        <a className="text-6xl font-black text-black no-underline">
          Jimmy Zhang
        </a>
      </Link>
    </h1>
  ) : (
      <h1 className="mb-2">
        <Link href="/">
          <a className="text-2xl font-black text-black no-underline">
            Jimmy Zhang
          </a>
        </Link>
      </h1>
    );

  return (
    <div className={className + " max-w-screen-sm px-4 py-8 mx-auto"}>
      {/* <header>{header}</header> */}
      <main>{children}</main> {/* style={{ position: 'fixed' }} */}
    </div>
  );
}

const LayoutTheme = styled(Layout)`
  background-color: ${ props => props.theme.backgroundColor};
  color: ${ props => props.theme.textColor};
  font-family: ${ props => props.theme.fonts[0]};
`;

export { Layout, LayoutTheme }