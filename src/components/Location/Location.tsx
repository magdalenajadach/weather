import Image from "next/image"

export default function Location() {

  return (
    <div className="md:flex w-full items-center justify-center min-h-screen sm:p-20">
      <h2 className="text-4xl text-bright-pink font-semibold flex w-full items-center justify-center sm:p-20">Sneak peak at the best UK runnning locations</h2>
      <div className="md:grid grid-cols-3 grid-rows-3 gap-4">
        <div className="bg-white rounded-lg text-3xl md:border-olivine place-content-center items-center p-4">Crib Goch</div>
        <div className="bg-white rounded-lg col-span-2 row-span-2 md:border-olivine p-4">
          Crib Goch is described as a knife-edged arête in the Eryri National Park in Gwynedd, Wales. The name means `red ridge` in the Welsh language. The highest point on the arête is 923 metres (3,028 ft) above sea level. All routes which tackle Crib Goch are considered mountaineering routes in winter or scrambles in summer.
        </div>
        <div className="bg-white row-span-3 row-start-2 rounded-lg md:border-olivine relative">
          <div className="w-full h-full relative">
            <Image
              src="/images/crib-goch.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg row-span-2 col-start-2 row-start-3 md:border-olivine place-content-center items-center p-4"><span className="font-semibold">Location:</span> North Wales, Eryri National Park</div>
        <div className="bg-white rounded-lg row-span-2 col-start-3 row-start-3 md:border-olivine place-content-center items-center p-4"><span className="font-semibold">Weather:</span> rainy, foggy, ugly</div>
      </div>
    </div>
  )
}
