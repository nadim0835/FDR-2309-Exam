import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Navber = () => {
  return (
    <nav className="bg-[#FFF8F3]">
      <Container>
        <Flex className={`justify-between items-center  pt-[50px]`}>
          <Image src={`Img/Mary.png`} />
          <div className=" flex gap-[51px] items-center">
            <h1 className=" font-OpenSans font-normal text-[20px] text-[#474747]">Portfolio</h1>
            <h1  className=" font-OpenSans font-normal text-[20px] text-[#474747]">Blog</h1>
            <button className=" px-9 py-[18px] bg-[#FD6E0A] rounded-[5px] font-OpenSans  font-bold text-[20px] text-white duration-300 hover:text-[#FD6E0A] hover:bg-transparent hover:border hover:border-[#FD6E0A] ">Hire Me</button>
          </div>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navber;
