import img1 from '../../../public/assets/image/history.jpg'
import img2 from '../../../public/assets/image/great.jpg'
import img3 from '../../../public/assets/image/hard.jpg'
import img4 from '../../../public/assets/image/ana.jpg'
import img5 from '../../../public/assets/image/tale.jpg'
import img6 from '../../../public/assets/image/night.jpg'
import img7 from '../../../public/assets/image/zero.jpg'
import img8 from '../../../public/assets/image/wings.jpg'

const Books = () => {
    return (
        <div>
           <p className=' w-32 lg:w-2/12 mx-auto my-4 lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg'> Some Iconic Books</p>
          <div className='grid grid-cols-3 lg:grid-cols-4 gap-2 lg:ml-20'>
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img1} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img2} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img3} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img4} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img5} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img6} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img7} alt="" />
            <img className='h-[100px] lg:h-[180px] shadow-2xl' src={img8} alt="" />
         
            </div>  
        </div>
    );
};

export default Books;