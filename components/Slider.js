import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import style from '../styles/Slider.module.css';
import { useGetAllSlidersQuery, useDeleteSliderMutation } from '../features/apiSlice';


const Slider = () => {
  const { data: allProductsData, error, isError, isLoading } = useGetAllSlidersQuery();
  const [deleteSlider, response] = useDeleteSliderMutation();

  const products = allProductsData?.data;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return <div> <Slide>
    {
      products?.map(details => <div key={details._id} className={style.eachslideeffect}>
        <div style={{ 'backgroundImage': `url(${details.photourl})` }}>
          <div className="lg:w-1/2 mx-auto  bg-black bg-opacity-50 p-10">
            <h2 className='text-center font-bold text-4xl mx-auto'>{details.title}</h2>
            <p className='text-xl mt-5'>{details.description}</p>
            <button
              onClick={() => deleteSlider(details._id)}
              className="btn btn-outline btn-accent my-5"
            >
              Remove Slider
            </button>
          </div>
        </div>
      </div>)
    }
  </Slide>
  </div>;

  // const sliderDetails = [
  //   {
  //     id: 1,
  //     img: "https://www.bmsofttech.com/assets/images/main-slider-05.jpg",
  //     title: "Slider 1",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eius labore voluptatibus expedita, alias eum blanditiis distinctio perspiciatis omnis. Ad numquam praesentium, itaque sunt veritatis aperiam eius! Ullam, vero voluptatem."
  //   },
  //   {
  //     id: 2,
  //     img: "https://www.webkom.co/wp-content/uploads/2018/11/webkom-slider-430px-v4-1500x630.jpg",
  //     title: "Slider 2",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eius labore voluptatibus expedita, alias eum blanditiis distinctio perspiciatis omnis. Ad numquam praesentium, itaque sunt veritatis aperiam eius! Ullam, vero voluptatem."
  //   },
  //   {
  //     id: 3,
  //     img: "https://www.nelsotechnology.com/images/slider01.jpg",
  //     title: "Slider 3",
  //     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia eius labore voluptatibus expedita, alias eum blanditiis distinctio perspiciatis omnis. Ad numquam praesentium, itaque sunt veritatis aperiam eius! Ullam, vero voluptatem."
  //   },
  // ];
  // return (
  //   <div>
  //     <h1></h1>
  //     <Slide>
  //       {
  //         sliderDetails.map(details => <div key={details.id} className={style.eachslideeffect}>
  //           <div style={{ 'backgroundImage': `url(${details.img})` }}>
  //             <div className="lg:w-1/2 mx-auto  bg-black bg-opacity-50 p-10">
  //               <h2 className='text-center font-bold text-4xl mx-auto'>{details.title}</h2>
  //               <p className='text-xl mt-5'>{details.description}</p>
  //             </div>
  //           </div>
  //         </div>)
  //       }
  //     </Slide>
  //   </div>
  // );
};

export default Slider;