import './Header.scss'
// import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <h1>Hello World</h1>
      <div className='image-wrapper'>
        {/* <Image       
          src="/images/mud.jpg"
          alt="Muddy trainers"
          width={400}
          height={400}
        /> */}
      </div>
    </header>
  )
};
