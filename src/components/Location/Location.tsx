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
    <div className="w-full items-center min-h-screen">
      <h2 className="text-4xl text-bright-pink font-semibold mb-12">Sneak peak at best UK runnning locations</h2>
      <div className="md:grid grid-cols-3 grid-rows-3 gap-4">
        <div className="border-solid border-2 border-indigo-600 place-content-center items-center p-8">Grib Goch</div>
        <div className="col-span-2 row-span-2 border-solid border-2 border-indigo-600 p-8">
          Crib Goch is described as a knife-edged arête in the Snowdonia National Park in Gwynedd, Wales. The name means `red ridge` in the Welsh language. The highest point on the arête is 923 metres (3,028 ft) above sea level. All routes which tackle Crib Goch are considered mountaineering routes in winter or scrambles in summer.
        </div>
        <div className="row-span-3 row-start-2 border-solid border-2 border-indigo-600 relative">
          <div className="w-full h-full relative">
            <Image
              src="/images/crib-goch.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="row-span-2 col-start-2 row-start-3 border-solid border-2 border-indigo-600">Location: North Wales, Eryri National Park</div>
        <div className="row-span-2 col-start-3 row-start-3 border-solid border-2 border-indigo-600">Weather: rainy, foggy, ugly</div>
      </div>
    </div>
  )
}
