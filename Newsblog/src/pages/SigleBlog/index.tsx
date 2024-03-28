import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SigleBlogCardnews from "../../components/SigleBlogCardnews";
import SigleBlogCardnews1 from "../../components/SigleBlogCardnews1";

export default function SigleBlogPage() {
  return (
    <>
      <Helmet>
        <title>News Blog App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex justify-center items-center w-full" />
        <div className="flex flex-col items-center justify-start w-full mt-[52px]">
          <div className="flex flex-col items-center justify-start w-[45%] md:w-full">
            <div className="flex flex-row justify-start items-center w-[17%] md:w-full gap-2.5">
              <div className="h-[15px] w-[15px] bg-blue_gray-900 rounded-[7px]" />
              <Text size="3xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                Hot Topic
              </Text>
            </div>
            <Heading size="3xl" as="h1" className="mt-5 tracking-[-0.50px] text-center !font-bold">
              Miami Dolphins won the match and officially qualified for the final
            </Heading>
            <div className="flex flex-row justify-start w-[56%] md:w-full mt-10 gap-1">
              <Heading as="h2" className="mt-px tracking-[-0.50px]">
                New York, 22 Agust 2022{" "}
              </Heading>
              <Heading as="h3" className="flex !text-black-900_87 tracking-[-0.50px] opacity-0.5">
                <span className="text-black-900">- </span>
                <span className="text-black-900 font-normal">10 minutes ago</span>
              </Heading>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[47px]">
            <div className="flex flex-row justify-center w-full">
              <Img src="images/img_rectangle_5_497x1440.png" alt="image" className="w-full md:h-[497px] object-cover" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-[60%] md:w-full mt-[60px] gap-[51px]">
            <div className="flex flex-col items-center justify-start w-full gap-5">
              <div className="flex flex-col items-start justify-start w-full gap-6">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                  About Team
                </Heading>
                <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Text>
                <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                  Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                  including versions of Lorem Ipsum.
                </Text>
              </div>
              <Img
                src="images/img_unsplash_xhzbzv4naw.png"
                alt="unsplash_one"
                className="w-full md:h-auto sm:w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[22px]">
              <Heading size="3xl" as="h3" className="tracking-[-0.50px]">
                Officially Qualified for the Final
              </Heading>
              <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Text>
              <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </Text>
              <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et
                Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on
                the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, &quot;Lorem
                ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-5">
              <div className="flex flex-col items-center justify-start w-full">
                <Heading size="3xl" as="h4" className="tracking-[-0.50px]">
                  Typing skills and strategy are the keys to victory this time
                </Heading>
                <Text size="xl" as="p" className="mt-10 !text-black-900 tracking-[-0.50px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </Text>
                <Text size="xl" as="p" className="mt-5 !text-black-900 tracking-[-0.50px]">
                  Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                  classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                  consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                  This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line
                  of Lorem Ipsum, &quot;Lorem ipsum dolor sit amet..&quot;, comes from a line in section 1.10.32.
                </Text>
              </div>
              <Img
                src="images/img_unsplash_26mjgncm0wc.png"
                alt="unsplash_three"
                className="w-full md:h-auto sm:w-full object-cover"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[23px]">
              <Heading size="3xl" as="h5" className="tracking-[-0.50px]">
                Best regards from Miami Dolphins
              </Heading>
              <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book.
              </Text>
              <Text size="xl" as="p" className="!text-black-900 tracking-[-0.50px]">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </Text>
            </div>
            <div className="h-px w-full bg-black-900_4c" />
          </div>
          <div className="flex flex-col items-center justify-start w-[28%] md:w-full mt-[49px] gap-[50px]">
            <div className="flex flex-col items-center justify-start w-full gap-5">
              <div className="flex flex-row justify-start items-start w-[50%] md:w-full gap-2.5">
                <Img
                  src="images/img_unsplash_twuphbcq57w.png"
                  alt="unsplash_five"
                  className="h-[60px] w-[60px] md:h-auto rounded-[50%]"
                />
                <div className="flex flex-col items-start justify-start w-[64%] mt-0.5 gap-1.5">
                  <Heading size="2xl" as="h2" className="tracking-[-0.50px]">
                    Jhone RIck
                  </Heading>
                  <Text as="p" className="!text-black-900_7f tracking-[-0.50px]">
                    About Author
                  </Text>
                </div>
              </div>
              <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px] text-center leading-[35px]">
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[45%] md:w-full gap-6">
              <Heading as="h3" className="tracking-[-0.50px] text-center">
                Connect with Author
              </Heading>
              <div className="flex flex-row justify-between w-full md:px-5 max-w-[112px]">
                <Img src="images/img_frame_black_900.svg" alt="image_one" className="h-[24px] w-[24px]" />
                <Img src="images/img_frame_black_900_24x24.svg" alt="image_two" className="h-[24px] w-[24px]" />
                <Img src="images/img_frame_24x24.svg" alt="image_three" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[120px] gap-[49px] md:px-5 max-w-[1294px]">
            <div className="flex flex-col items-center justify-start w-full gap-7">
              <div className="flex flex-row justify-between items-center w-full">
                <Heading size="3xl" as="h2" className="mb-px tracking-[-0.50px]">
                  Related News
                </Heading>
                <Button
                  color="blue_gray_900"
                  shape="round"
                  className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
                >
                  View All
                </Button>
              </div>
              <div className="h-px w-full bg-black-900_7f" />
            </div>
            <div className="flex flex-row md:flex-col w-full gap-5">
              <SigleBlogCardnews className="flex flex-col items-start justify-start sm:w-full pb-[34px] gap-[21px] sm:pb-5" />
              <SigleBlogCardnews
                unsplash376kn="images/img_unsplash_ef7hn40wbaq_246x418.png"
                tagOne="Political"
                className="flex flex-col items-start justify-start sm:w-full pb-[34px] gap-[21px] sm:pb-5"
              />
              <SigleBlogCardnews1 className="flex flex-col items-start justify-start sm:w-full pb-[34px] gap-[21px] sm:pb-5" />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
    </>
  );
}
