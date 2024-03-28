import React from "react";
import { Button, Img, Text, Heading } from "./..";

interface Props {
  className?: string;
  finance?: string;
  ukrainetwentyfo?: string;
  zelensky?: string;
  description?: string;
  readMore?: string;
}

export default function SigleBlogCardnews1({
  finance = "Finance",
  ukrainetwentyfo = "Ukraine, 24 april 2022",
  zelensky = "Zelensky accuses Russia of worst crimes since WW2 ",
  description = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  readMore = "Read More",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-row justify-start w-full">
        <div className="h-[247px] w-full sm:w-full relative">
          <Img
            src="images/img_unsplash_flrm0z3meoa_247x418.png"
            alt="unsplash_one"
            className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
          />
          <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
            <Button
              color="orange_A700"
              size="sm"
              shape="square"
              className="mt-[9px] ml-[301px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
            >
              {finance}
            </Button>
            <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
              {ukrainetwentyfo}
            </Text>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start">
        <Heading as="h1" className="tracking-[-0.50px]">
          {zelensky}
        </Heading>
        <Text as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]">
          {description}
        </Text>
      </div>
      <Button
        shape="round"
        rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
        className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[151px]"
      >
        {readMore}
      </Button>
    </div>
  );
}
