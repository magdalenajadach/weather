// import { locations } from './../../app/config/locations.js'
import Image from "next/image"

export default function Location() {
  // const listItems = locations.map(location =>
  //   <li key={location.id}>
  //     <p>
  //       <b>{location.title}</b>
  //     </p>
  //   </li>
  // );
  // return <ul>{listItems}</ul>;
  return (
    <div>
      <h2 className="text-5xl text-bright-pink font-semibold">Sneak peak at best UK runnning locations</h2>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="border-solid border-2 border-indigo-600">Grib Goch</div>
        <div className="col-span-2 row-span-2 border-solid border-2 border-indigo-600">
          <Image
            src="/images/mud.jpg"
            alt="Background"
            width={200}
            height={200}
          />
        </div>
        <div className="row-span-3 row-start-2 border-solid border-2 border-indigo-600">I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice I am baby tilde green juice </div>
        <div className="row-span-2 col-start-2 row-start-3 border-solid border-2 border-indigo-600">I am baby tilde green juice </div>
        <div className="row-span-2 col-start-3 row-start-3 border-solid border-2 border-indigo-600">I am baby tilde green juice </div>
      </div>
    
    </div>
  )
}
