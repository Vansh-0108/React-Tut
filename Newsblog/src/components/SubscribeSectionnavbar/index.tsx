import React from "react";
import { Text, Img, Heading } from "./..";

interface Props {
  className?: string;
  sport?: string;
  health?: string;
  political?: string;
  business?: string;
  finance?: string;
  life?: string;
  entertainment?: string;
  login?: string;
  register?: string;
}

export default function SubscribeSectionnavbar({
  sport = "Sport",
  health = "Health",
  political = "Political",
  business = "Business",
  finance = "Finance",
  life = "Life",
  entertainment = "Entertainment",
  login = "Login",
  register = "Register",
  ...props
}: Props) {
  return (
    <div {...props}>
      <header className="flex flex-col w-full">
        <Img src="images/img_background.svg" alt="background_one" className="h-[96px]" />
        <div className="flex flex-row justify-start w-full mx-auto md:px-5 max-w-[1289px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-row md:flex-col justify-between items-start w-[69%] md:w-full md:gap-10">
              <Img src="images/img_neuzy.svg" alt="neuzy_one" className="h-[33px]" />
              <div className="flex flex-row justify-center w-[69%] md:w-full mt-0.5 md:mt-0">
                <div className="flex flex-row sm:flex-col justify-start w-full gap-6 sm:gap-5">
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {sport}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {health}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {political}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {business}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {finance}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {life}
                  </Heading>
                  <Heading as="h6" className="!text-white-A700 tracking-[-0.50px]">
                    {entertainment}
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center w-[15%] md:w-full">
              <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
              <div className="h-[26px] w-px bg-white-A700" />
              <div className="flex flex-row justify-start gap-5">
                <Text size="md" as="p" className="tracking-[-0.50px]">
                  {login}
                </Text>
                <Text size="md" as="p" className="tracking-[-0.50px]">
                  {register}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
