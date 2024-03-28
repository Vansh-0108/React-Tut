import React from "react";
import { Button, Img, Text, Heading, Input } from "./..";

interface Props {
  className?: string;
  unsplash376kn?: string;
  tagOne?: string;
  ukrainetwentyfo?: string;
  zelensky?: string;
  description?: string;
  readMore?: string;
}

export default function SigleBlogCardnews({
  unsplash376kn = "images/img_unsplash_376kn_isple_246x418.png",
  tagOne,
  ukrainetwentyfo = "Ukraine, 24 april 2022",
  zelensky = "Zelensky accuses Russia of worst crimes since WW2 ",
  description = "The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council.",
  readMore = "Read More",
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-start justify-start w-full gap-[21px]">
          <div className="flex flex-col items-center justify-start w-full gap-[21px]">
            <div className="flex flex-row justify-center w-full">
              <div className="h-[246px] w-full sm:w-full relative">
                <Img
                  src={unsplash376kn}
                  alt="unsplash376kn"
                  className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                  {!!tagOne ? (
                    <Input
                      shape="square"
                      name="tag_one"
                      placeholder="Entertaiment "
                      className="w-[29%] md:h-auto sm:w-full mt-1.5 ml-[267px] md:ml-5 tracking-[0.12px] font-bold"
                    />
                  ) : null}
                  <Text as="p" className="tracking-[-0.50px]">
                    {ukrainetwentyfo}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <Heading as="h1" className="tracking-[-0.50px]">
                {zelensky}
              </Heading>
              <Text as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]">
                {description}
              </Text>
            </div>
          </div>
          <Button
            shape="round"
            rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
            className="ml-3 gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[151px] sm:min-w-full"
          >
            {readMore}
          </Button>
        </div>
      </div>
    </div>
  );
}
