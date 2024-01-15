

const Writer = () => {
    return (
        <div>
              <p className=' w-32 lg:w-2/12 mx-auto my-4 l lg:my-6 text-sm lg:text-2xl bg-[#AD6A34] text-white text-center rounded-tr-xl shadow-lg'> Masterpices Writers</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
                <section className="rounded-lg flex bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/g4GjrQ5/shawk.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Shakespeare</p>
                </section>
                <section className=" rounded-lg flex  bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/7gMc8NS/conan.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Arthur Canon Doyle</p>
                </section>
                <section className=" rounded-lg flex  bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/bHfKk3J/michel.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Michel Madhusudhan Datt</p>
                </section>
                <section className=" rounded-lg flex  bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/v3Sm9sX/kazi.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Kazi Nazrul Islam</p>
                </section>
                <section className=" rounded-lg flex  bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/DRqSKM1/tagore.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Rabidranath Tagore</p>
                </section>
                <section className=" rounded-lg flex  bg-amber-600 py-1 gap-3">
                    <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src="https://i.ibb.co/Vmq7GDF/jibon.jpg" alt="image" />
                    <p className="text-gray-800 lg:mt-5 text-xs lg:text-xl mt-4 ">Jibonanodo Das</p>
                </section>
               <p className="text-xs lg:text-2xl text-gray-800 text-center"> Coming soon..........</p>
            </div>
        
            
        </div>
    );
};

export default Writer;