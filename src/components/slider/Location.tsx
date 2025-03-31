import Asia from '@/assets/asia.jpeg'
import North from '@/assets/north.jpg'
import Euro from '@/assets/euro.jfif'
import East from '@/assets/east.jfif'
const Location = () => {
  return (
    <>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${North})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Centered Content */}
              <div className="relative z-10 text-white text-center">
                <h2 className="text-2xl font-bold">North America:</h2>
                <p className="text-base mt-2">USA & Canada – New York, Los Angeles, Toronto, Banffn</p>
              </div>
         </div>
        <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${Euro})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Centered Content */}
              <div className="relative z-10 text-white text-center">
                <h2 className="text-2xl font-bold">Europe:</h2>
                <p className="text-base mt-2">France, Italy, UK, Germany – Paris, London, Rome, Berlin</p>
              </div>
         </div>
        <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${East})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Centered Content */}
              <div className="relative z-10 text-white text-center">
                <h2 className="text-2xl font-bold">Middle East:</h2>
                <p className="text-base mt-2"> UAE, Qatar, Egypt – Dubai, Abu Dhabi, Petra</p>
              </div>
         </div>
        <div className="relative h-64 w-full overflow-hidden flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 hover:scale-110"
                style={{ backgroundImage: `url(${Asia})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              {/* Centered Content */}
              <div className="relative z-10 text-white text-center">
                <h2 className="text-2xl font-bold">Asia & Pacific:</h2>
                <p className="text-base mt-2"> Japan, Thailand, Maldives, Australia – Tokyo, Phuket, Sydney</p>
              </div>
         </div>
          </div>
    </>
  )
}

export default Location