import React from 'react'

const Card_Carousel = ({imgs, usersImg, heading, price, description}) => {
  return (
    <div>
                    <div className="w-[330px] sm:w-[370px] hover:shadow-2xl shadow-xl sm:hover:mt-[-30px] transition-[1s] flex bg-white flex-col gap-[19px] rounded-md bg-white-A700 px-6 pb-[23px] pt-6 sm:p-5">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-6">
                    <img
                      src={imgs}
                      alt="featured image"
                      className="h-[208px] rounded-md object-cover"
                    />
                    <div className="flex items-center gap-[18px]">
                      <button
                        color="gray_400"
                        size="xs"
                        variant="outline"
                        shape="circle"
                        className="w-[32px] !rounded-[16px]"
                      >
                        <img src="images/img_user_2_1.svg" />
                      </button>
                      <p>5.8k</p>
                      <img
                        src="images/img_close.svg"
                        alt="close button"
                        className="h-[32px] w-[32px]"
                      />
                      <p>69k</p>
                      <img
                        src="images/img_close_gray_400.svg"
                        alt="close button gray"
                        className="h-[32px] w-[32px]"
                      />
                      <p>4.5</p>
                      <img
                        src={usersImg}
                        alt="profile circle image"
                        className="h-[32px] w-[32px] rounded-[50%]"
                      />
                    </div>
                  </div>
                  <div className="h-px bg-gray-200" />
                </div>
                <div className="flex flex-col gap-[17px]">
                  <div className="flex flex-wrap justify-between gap-5">
                    <h3 className="!text-blue_gray-900 font-[700] text-[23px]">
                     {heading}
                    </h3>
                    <h4 className="!text-blue-700 font-[700] text-[23px]">
                      {price}
                    </h4>
                  </div>
                  <p className="leading-[155%]">
                    {description}
                  </p>
                </div>
              </div>
    </div>
  )
}

export default Card_Carousel
