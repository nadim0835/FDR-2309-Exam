import Container from "./Container";
import Flex from "./Flex";
import { AiOutlineDownload } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import Image from "./Image";
import ManImg from "../assets/left.png";
import dev from "../assets/Developer.png";

const Banner = () => {
  return (
    <section className="  overflow-hidden  bg-[#FFF8F3]">
      <Image className={` absolute top-[38px] left-0`} src={dev} alt="" />
      <Container>
        <Flex className={` items-center pt-[47px]`}>
          <div>
            <h2 className=" font-OpenSans font-extrabold text-[45px] text-[#474747]">
              Hi, I am
            </h2>
            <h1 className=" mt-[5px] font-OpenSans font-bold text-[85px] text-[#181818]">
              Mary Hardy
            </h1>
            <p className=" mt-5 font-OpenSans font-normal text-[18px] text-[#757575] leading-[30px] w-[585px]">
              Shot what able cold new see hold.Friendly as an betrayed formerly
              he. Morning because as to society behaved moments.
            </p>
            <div className=" mt-[30px] flex items-center gap-[30px] cursor-pointer">
              <a className=" inline-block px-5 py-4 bg-[#FD6E0A] font-OpenSans font-bold text-white duration-300 text-[20px] rounded-[5px] hover:text-[#FD6E0A] hover:bg-transparent hover:border hover:border-[#FD6E0A]">
                <AiOutlineDownload className=" mr-[10px] inline-block" />
                Download CV
              </a>
              <a className=" inline-block px-5 py-4 bg-[#FD6E0A] font-OpenSans font-bold text-white duration-300 text-[20px] rounded-[5px] hover:text-[#FD6E0A] hover:bg-transparent hover:border hover:border-[#FD6E0A]">
                <IoCall className=" mr-[10px] inline-block" />
                Contact
              </a>
            </div>
          </div>
          <Image src={ManImg} />
        </Flex>
      </Container>
    </section>
  );
};

export default Banner;
