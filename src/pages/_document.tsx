import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html className="[--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem] js-focus-visible lg:mx-24">
      <Head >
         <meta name='revisit-after' content='1 days' />
        </Head>
      <body className="antialiased text-slate-400 bg-slate-900 bg-[url('/grid.svg')]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
