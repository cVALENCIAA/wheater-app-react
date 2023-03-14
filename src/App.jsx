import './App.css'

const cities = [
  {
    id: 1,
    tittle: 'london'
  },
  {
    id: 2,
    tittle: 'Sydney'
  },
  {
    id: 3,
    tittle: 'Tokyo'
  },
  {
    id: 4,
    tittle: 'Toronto'
  }
]

function App() {
  return (
    <main className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-700'>
      <div className='text-xl pb-2 text-center text-white'> Wheater App </div>
      <header className='font-medium flex item-center justify-around my-6'>
        {cities.map((cities) => (
          <p key={cities.id} className='text-white'>
            {cities.tittle}
          </p>
        ))}
      </header>
      <div className='flex flex-row justify-center my-6'>
        {/* div container search */}
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
          <input
            type='text'
            placeholder='Busca una ciudad..'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
          />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button className='text-xl text-white font-light'> ºC </button>
          <p className='text-xl text-white mx-1'>|</p>
          <button className='text-xl text-white font-light'>ºF</button>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-center my-6'>
          <p className='text-white text-xl font-extralight'>
            Tuesday, 31 May 2022 | Local time: 12: 46 PM
          </p>
        </div>
        <div className='flex items-center justify-center my-3'>
          <p className='text-white text-3xl font-medium'>Berlin, DE</p>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
          <p>Cloudy or whatever</p>
        </div>
        <div className='flex flex-row items-center justify-between text-white py-3'>
          <img
            src='http://openweathermap.org/img/wn/01d@2x.png'
            alt=''
            className='w-20'
          />
          <p className='text-5xl'>34º</p>
          <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
              Real fell:
              <span className='font-medium ml-1'>32º</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
              Humidity:
              <span className='font-medium ml-1'>65%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
              Wind:
              <span className='font-medium ml-1'>11km/h</span>
            </div>
          </div>
        </div>

        <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
          <p className='font-light'>
            Rise: <span className='font-medium ml-1'>06:45 PM</span>
          </p>
          <p className='font-light'>|</p>
          <p className='font-light'>
            Set: <span className='font-medium ml-1'>07:45 PM</span>
          </p>
          <p className='font-light'>|</p>
          <p className='font-light'>
            High: <span className='font-medium ml-1'>45g</span>
          </p>
          <p className='font-light'>|</p>
          <p className='font-light'>
            Low: <span className='font-medium ml-1'>40g</span>
          </p>
        </div>
      </div>
      {/* ----- */}
      <div>
        <div className='flex items-center justify-start mt-6'>
          <p className='text-white font-medium uppercase'>hourly forest</p>
        </div>
        <hr className='my-2' />
        <div className='flex flex-row items-center justify-between text-white'>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22g</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22g</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22g</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22g</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img
              src='http://openweathermap.org/img/wn/01d@2x.png'
              alt=''
              className='w-12 my-1'
            />
            <p className='font-medium'>22g</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
