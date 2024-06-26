import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header {...props}>
      <div className="h-[96px] w-full relative">
        <Img
          src="images/img_background.svg"
          alt="background_one"
          className="justify-center h-[96px] left-0 bottom-0 right-0 top-0 m-auto absolute"
        />
        <div className="flex flex-row justify-center w-[90%] bottom-[30%] right-0 left-0 m-auto absolute">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-row md:flex-col justify-between items-start w-[69%] md:w-full md:gap-10">
              <Img src="images/img_neuzy.svg" alt="neuzy_one" className="h-[33px]" />
              <div className="flex flex-row justify-center w-[69%] md:w-full mt-0.5 md:mt-0">
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Sport
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Health
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Political
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Business
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Finance
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Life
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    Entertainment
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[15%] md:w-full">
              <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
              <div className="h-[26px] w-px bg-white-A700" />
              <div className="flex flex-row justify-start gap-5">
                <Text size="md" as="p" className="tracking-[-0.50px]">
                  Login
                </Text>
                <Text size="md" as="p" className="tracking-[-0.50px]">
                  Register
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
