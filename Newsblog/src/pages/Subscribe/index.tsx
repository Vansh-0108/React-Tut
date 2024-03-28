import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading, Input } from "../../components";
import Footer from "../../components/Footer";
import SubscribeSectionnavbar from "../../components/SubscribeSectionnavbar";

export default function SubscribePage() {
  return (
    <>
      <Helmet>
        <title>News Blog App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <SubscribeSectionnavbar className="flex flex-row justify-center w-full" />
        <div className="flex flex-col items-center justify-start w-full mt-[50px] gap-10 md:px-5 max-w-[944px]">
          <Heading size="3xl" as="h1" className="w-[75%] tracking-[-0.50px] text-center">
            Subscribe now for the latest and exclusive information alerts
          </Heading>
          <Text size="3xl" as="p" className="!text-black-900_7f tracking-[-0.50px] text-center leading-[35px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[50px] gap-[50px] md:px-5 max-w-[1140px]">
          <div className="flex flex-row justify-center w-[20%] md:w-full">
            <div className="flex flex-row justify-between items-center w-full pr-[39px] sm:pr-5 bg-white-A700 rounded-[22px]">
              <Button
                color="blue_gray_900"
                size="3xl"
                shape="round"
                className="sm:px-5 tracking-[0.83px] font-poppins min-w-[111px]"
              >
                MONTHLY
              </Button>
              <Button size="xs" shape="square" className="text-black-900 tracking-[0.83px] font-poppins min-w-[39px]">
                YEARLY
              </Button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full gap-[60px] md:gap-10">
            <div className="flex flex-col items-start justify-center w-[30%] md:w-full gap-[19px] p-[35px] my-[37px] md:mt-0 sm:p-5 border-blue_gray-900 border border-solid">
              <Text size="4xl" as="p" className="mt-1 ml-1 md:ml-0 !text-black-900 !font-poppins">
                Starter
              </Text>
              <div className="flex flex-row justify-start items-center ml-1 gap-[5px] md:ml-0">
                <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                  $20
                </Heading>
                <Text size="2xl" as="p" className="!text-black-900_87 !font-poppins opacity-0.5">
                  /month
                </Text>
              </div>
              <div className="h-px w-[97%] ml-1 md:ml-0 bg-gray-200" />
              <div className="flex flex-col items-start justify-start ml-1 gap-[17px] md:ml-0">
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Access All News
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Latest News Notification
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Send News Articles
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Latest Movie Recommendation
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Updated News
                </Text>
              </div>
              <Button
                color="blue_gray_900"
                size="5xl"
                variant="outline"
                shape="square"
                className="ml-1 md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[260px] sm:min-w-full"
              >
                Subscribe
              </Button>
            </div>
            <div className="flex flex-col items-center justify-start w-[30%] md:w-full gap-9 p-[35px] sm:p-5 border-blue_gray-900 border border-solid">
              <Text size="4xl" as="p" className="!text-black-900 !font-poppins">
                MOST POPULAR
              </Text>
              <div className="flex flex-col items-start justify-start w-[97%] md:w-full gap-[19px]">
                <Text size="4xl" as="p" className="!text-black-900 !font-poppins">
                  Pro
                </Text>
                <div className="flex flex-row justify-start items-center gap-2">
                  <Heading size="3xl" as="h3" className="tracking-[-0.50px]">
                    $100
                  </Heading>
                  <Text size="2xl" as="p" className="!text-black-900_87 !font-poppins opacity-0.5">
                    /month
                  </Text>
                </div>
                <div className="h-px w-full bg-gray-200" />
                <div className="flex flex-col items-start justify-start gap-[17px]">
                  <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                    Access All News
                  </Text>
                  <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                    Latest News Notification
                  </Text>
                  <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                    Send News Articles
                  </Text>
                  <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                    Latest Movie Recommendation
                  </Text>
                  <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                    Updated News
                  </Text>
                </div>
                <Button color="blue_gray_900" size="5xl" shape="square" className="w-full sm:px-5 tracking-[-0.50px]">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[30%] md:w-full gap-[19px] p-[35px] my-[37px] md:mt-0 sm:p-5 border-blue_gray-900 border border-solid">
              <Text size="4xl" as="p" className="mt-1.5 ml-1 md:ml-0 !text-black-900 !font-poppins">
                Enterprise
              </Text>
              <div className="flex flex-row justify-start items-center ml-1 gap-[3px] md:ml-0">
                <Heading size="3xl" as="h4" className="tracking-[-0.50px]">
                  $200
                </Heading>
                <Text size="2xl" as="p" className="!text-black-900_87 !font-poppins opacity-0.5">
                  /month
                </Text>
              </div>
              <div className="h-px w-[97%] ml-1 md:ml-0 bg-gray-200" />
              <div className="flex flex-col items-start justify-start ml-1 gap-[17px] md:ml-0">
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Access All News
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Latest News Notification
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Send News Articles
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Latest Movie Recommendation
                </Text>
                <Text size="lg" as="p" className="!text-black-900_a2 !font-poppins opacity-0.8">
                  Updated News
                </Text>
              </div>
              <Button
                color="blue_gray_900"
                size="5xl"
                variant="outline"
                shape="square"
                className="ml-1 md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[260px] sm:min-w-full"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full mt-[122px] gap-[49px] md:px-5 max-w-[1294px]">
          <div className="flex flex-col items-center justify-start w-full gap-[27px]">
            <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
              <Heading size="3xl" as="h2" className="tracking-[-0.50px]">
                Hot Topic News{" "}
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
            <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
              <div className="flex flex-row justify-start w-full">
                <div className="h-[246px] w-full sm:w-full relative">
                  <Img
                    src="images/img_unsplash_376kn_isple_246x418.png"
                    alt="image"
                    className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                    <Input
                      shape="square"
                      name="tag_one"
                      placeholder="Entertaiment "
                      className="w-[29%] sm:w-full mt-1.5 ml-[267px] md:ml-5 tracking-[0.12px] font-bold"
                    />
                    <Text as="p" className="tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Heading as="h2" className="tracking-[-0.50px]">
                  Zelensky accuses Russia of worst crimes since WW2{" "}
                </Heading>
                <Text as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
                </Text>
              </div>
              <Button
                shape="round"
                rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                className="ml-3 gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[151px] sm:min-w-full"
              >
                Read More
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
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
                      Finance
                    </Button>
                    <Text as="p" className="ml-0.5 md:ml-0 tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Heading as="h3" className="tracking-[-0.50px]">
                  Zelensky accuses Russia of worst crimes since WW2{" "}
                </Heading>
                <Text as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
                </Text>
              </div>
              <Button
                shape="round"
                rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[151px] sm:min-w-full"
              >
                Read More
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
              <div className="flex flex-row justify-start w-full">
                <div className="h-[246px] w-full sm:w-full relative">
                  <Img
                    src="images/img_unsplash_ef7hn40wbaq_246x418.png"
                    alt="unsplash_one"
                    className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                    <Button
                      color="red_900"
                      size="sm"
                      shape="square"
                      className="mt-1.5 ml-[298px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
                    >
                      Political
                    </Button>
                    <Text as="p" className="tracking-[-0.50px]">
                      Ukraine, 24 april 2022
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Heading as="h4" className="tracking-[-0.50px]">
                  Zelensky accuses Russia of worst crimes since WW2{" "}
                </Heading>
                <Text as="p" className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]">
                  The Ukrainian leader says Russia must face an international trial as he calls for the country to be
                  thrown off the UN Security Council.
                </Text>
              </div>
              <Button
                shape="round"
                rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[151px] sm:min-w-full"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[154px]" />
      </div>
    </>
  );
}
