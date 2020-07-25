import Link from "next/link";
import { useRouter } from "next/router";

export default function Layout({ className, children }) {
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
    <div id='hey-mom' className={className + " max-w-screen-sm px-4 py-8 mx-auto"}>
      {/* <header>{header}</header> */}
      <main>{children}</main>
    </div>
  );
}
