import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <main
      className={` min-h-screen grid items-center content-start items-stretch gap-y-10 p-24 ${inter.className}`}
    >
      <h1 className="text-3xl uppercase">Markdown Converter</h1>g
      <form onSubmit={handleSubmit} className="grid justify-self-center gap-y-3 px-6 max-w-xl w-full">
        <label className="grid gap-y-2 w-full">
          <span>Insert Markdown</span>
          <textarea className="h-36 bg-gray-700 text-white p-4" name="markdown"/>
        </label>
        <button className="justify-self-end py-3 px-4 border-gray-800 border-4 rounded-md hover:bg-gray-800 hover:border-gray-600 transition-colors">Convert</button>
      </form>
    </main>
  );
}
