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
           <p className=''> Some Iconic Books</p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-2 '>
            <img className='h-[180px]' src={img1} alt="" />
            <img className='h-[180px]' src={img2} alt="" />
            <img className='h-[180px]' src={img3} alt="" />
            <img className='h-[180px]' src={img4} alt="" />
            <img className='h-[180px]' src={img5} alt="" />
            <img className='h-[180px]' src={img6} alt="" />
            <img className='h-[180px]' src={img7} alt="" />
            <img className='h-[180px]' src={img8} alt="" />
         
            </div>  
        </div>
    );
};

export default Books;