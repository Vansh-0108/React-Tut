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

export default function AllBlogCardnews({
  unsplash376kn,
  tagOne,
  ukrainetwentyfo,
  zelensky,
  description,
  readMore,
  ...props
}: Props) {
  return (
    <div {...props}>
      <div className="flex flex-col items-start justify-start w-full gap-4">
        <div className="flex flex-row justify-start w-full">
          <div className="h-[181px] w-full sm:w-full relative">
            {!!unsplash376kn ? (
              <Img
                src={unsplash376kn}
                alt="unsplash376kn"
                className="justify-center h-[181px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
            ) : null}
            <div className="flex flex-col items-start justify-center w-full h-full gap-[109px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
              {!!tagOne ? (
                <Input
                  shape="square"
                  name="tag_one"
                  placeholder="Entertaiment "
                  className="w-[36%] md:w-full md:h-auto mt-0.5 ml-[177px] md:ml-5 tracking-[-0.50px] font-bold"
                />
              ) : null}
              {!!ukrainetwentyfo ? (
                <Heading size="xs" as="h1" className="mb-1 !text-white-A700 tracking-[-0.50px]">
                  {ukrainetwentyfo}
                </Heading>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[13px]">
          {!!zelensky ? (
            <Heading size="md" as="h2" className="tracking-[-0.50px]">
              {zelensky}
            </Heading>
          ) : null}
          {!!description ? (
            <Text size="xs" as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5">
              {description}
            </Text>
          ) : null}
        </div>
        {!!readMore ? (
          <Button
            size="md"
            shape="round"
            rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
            className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[138px] sm:min-w-full"
          >
            {readMore}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
