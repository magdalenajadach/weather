// import Image from "next/image" 

export default function Search() {
  return (
    <div className="md:flex flex-col w-full items-center justify-center min-h-screen sm:p-20">
      {/* <p>Welcome to the weather application. It is a tool designed to provide
        users with real-time and forecasted weather information for specific
        locations. It allows to conveniently check the weather conditions
        for any location they are interested in
      </p> */}

      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Choose your location</h3>
      <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="horizontal-list-radio-license" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Kinder Scout, Dark Peak of the Derbyshire, England </label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                <label htmlFor="horizontal-list-radio-id" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tryfan, Ogwen Valley, Eryri, Wales</label>
            </div>
        </li>
        <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center ps-3">
                <input id="horizontal-list-radio-military" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                <label htmlFor="horizontal-list-radio-military" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mam Tor, High Peak of Derbyshire, England</label>
            </div>
        </li>
      </ul>
      <div>
        <h2>Location: Kinder Scout</h2>
        <p>Weather: grim, wet, cold, nice</p>
      </div>
      {/* <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="col-span-2 row-span-2 bg-white rounded-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className="col-start-3 bg-white rounded-lg">Kinder Scout</div>
        <div className="col-start-1 row-start-3 bg-white rounded-lg">Location: FFFFFF</div>
        <div className="col-start-2 row-start-3 bg-white rounded-lg">Weather: dddddd</div>
        <div className="row-span-2 col-start-3 row-start-2 bg-white rounded-lg">
        <div className="w-full h-full relative rounded-lg md:border-olivine relative">
          <Image
            src="/images/crib-goch.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
          </div>
        </div>
      </div> */}
    </div>
  )
}
