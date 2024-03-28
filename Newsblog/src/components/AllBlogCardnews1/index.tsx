import React from "react";
import { Text, Heading, Img } from "./..";

interface Props {
  className?: string;
  image?: string;
  miamidolphins?: string;
  newyorktwentytw?: string;
  duration?: string;
}

export default function AllBlogCardnews1({
  image = "images/img_unsplash_g0gb14lmsjk.png",
  miamidolphins = "Miami Dolphins won the match and officially qualified for the final",
  newyorktwentytw = "New York,  22 Agust 2022 ",
  duration = "- 10 minutes ago",
  ...props
}: Props) {
  return (
    <div {...props}>
      <Img src={image} alt="image" className="w-[65px] md:h-auto object-cover" />
      <div className="flex flex-col items-center justify-start w-[76%] gap-3">
        <Heading size="md" as="h1" className="tracking-[-0.50px] !font-poppins !font-bold">
          {miamidolphins}
        </Heading>
        <div className="flex flex-row justify-start w-full">
          <Heading size="xs" as="h2" className="tracking-[-0.50px]">
            {newyorktwentytw}
          </Heading>
          <Text size="xs" as="p" className="ml-[5px] !text-black-900_87 tracking-[-0.50px] opacity-0.5">
            {duration}
          </Text>
        </div>
      </div>
    </div>
  );
}
