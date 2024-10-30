import './Header.scss'
import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative w-full h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="/images/legs.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10 flex flex-col gap-6 items-center justify-center h-full">
        <h1 className="text-white text-4xl sm:text-6xl font-bold p-4">
          Perfect weather for running
        </h1>
        <p className='text-white gap-6 text-2xl sm:text-4xl font-bold p-4'>Check the weather conditions for any location and run</p>
        {/* <input className="rounded-lg mt-20 p-4 text-3xl border-2 border-bright-pink" type="text" id="name" name="name" required  placeholder="Your location" /> */}
      </div>
    </header>
  );
}

