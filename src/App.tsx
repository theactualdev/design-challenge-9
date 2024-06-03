import './App.css'
import rightImage from './assets/bg-1.svg'
import leftImage from './assets/bg-2.svg'
import rectangle from './assets/rectangle.svg'

function App() {
  let listArray = [
    {count: 5.8, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. '},
    {count: '99+', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. '},
    {count: '110k', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. '},
  ]
  return (
    <>
      <div className="wrapper flex flex-col md:h-[100vh]">
        <div className="hero-image">
          <img src={rightImage} alt="Right" className='absolute md:flex hidden -z-10 right-[7%] w-[30%] ' />
          <img src={leftImage} alt="Left" className='absolute -z-10 bottom-0 md:left-[7%]  ' />
        </div>
        <div className="content-wrapper w-full flex items-center justify-center mt-16">
          <div className="hero-content max-w-[756px] backdrop-blur-md md:backdrop-blur-0 ">
            <h1 className='text-[#363830] text-[88px] font-bold '>Interior Design</h1>
            <p className='text-[24px] mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.</p>
            <button className='py-6 px-12 bg-[#363830] rounded-[36px] text-white'>Explore</button>
          </div>
        </div>
      <div className="list-wrapper md:mt-0 mt-12 w-full flex md:justify-end md:relative md:right-[9%] -bottom-10">
        <div className="list flex md:flex-row flex-col md:space-x-20 max-w-[922px] backdrop-blur-md py-10 px-[88px] md:rounded-[144px]">
          {listArray.map((item, index) => (
            <div key={index} className='flex items-center justify-center'>
              <div className='mb-8 md:mb-0'>
                <h1 className='pb-4'>{item.count}</h1>
                <img src={rectangle} alt="" />
                <p className='pt-4'>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>  
      </div>    
    </>
  )
}

export default App
