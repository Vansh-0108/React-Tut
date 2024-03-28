import React from "react";
import { Helmet } from "react-helmet";
import { Button, Text, Heading, Img, Input, Slider, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function HomepagePage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
  const [sliderState1, setSliderState1] = React.useState(0);
  const sliderRef1 = React.useRef<AliceCarousel>(null);
  const [sliderState2, setSliderState2] = React.useState(0);
  const sliderRef2 = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>News Blog App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex flex-col w-full">
          <Img src="images/img_background.svg" alt="background_one" className="h-[96px]" />
          <div className="flex flex-row justify-start w-full mx-auto md:px-5 max-w-[1289px]">
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
                  <a href="#">
                    <Text size="md" as="p" className="tracking-[-0.50px]">
                      Login
                    </Text>
                  </a>
                  <a href="#">
                    <Text size="md" as="p" className="tracking-[-0.50px]">
                      Register
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full mt-[50px] gap-[120px]">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] md:px-5 max-w-[1292px]">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[49px]">
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] md:gap-5">
                  <Img
                    src="images/img_rectangle_5.png"
                    alt="image"
                    className="w-[46%] md:w-full md:h-[255px] mb-px object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[51%] md:w-full gap-[43px]">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row justify-start items-start w-[16%] md:w-full gap-2.5">
                        <div className="h-[15px] w-[15px] mt-px bg-blue_gray-900 rounded-[7px]" />
                        <Text size="3xl" as="p" className="!text-blue_gray-900 tracking-[-0.50px]">
                          Hot Topic
                        </Text>
                      </div>
                      <Heading size="3xl" as="h1" className="mt-5 tracking-[-0.50px] !font-bold">
                        Miami Dolphins won the match and officially qualified for the final
                      </Heading>
                      <div className="flex flex-row justify-start mt-10">
                        <Heading as="h2" className="tracking-[-0.50px]">
                          New York, 22 Agust 2022{" "}
                        </Heading>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-[13px]">
                      <a href="#">
                        <Text size="md" as="p" className="!text-blue_gray-900 tracking-[-0.50px]">
                          Read More
                        </Text>
                      </a>
                      <Img src="images/img_arrow_1.svg" alt="arrowone_one" className="h-px" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
                  <div className="flex flex-row md:flex-col w-[66%] md:w-full gap-[55px]">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[47%] md:w-full gap-2.5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479.png"
                        alt="image"
                        className="w-[84px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[77%] sm:w-full gap-[26px]">
                        <Heading as="h3" className="tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="h4" className="mb-px tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[47%] md:w-full gap-2.5 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_84x84.png"
                        alt="image"
                        className="w-[84px] md:h-auto object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[77%] sm:w-full gap-[26px]">
                        <Heading as="h5" className="tracking-[-0.50px] !font-bold">
                          john kennedy won 3rd oscar trophy at los angles
                        </Heading>
                        <div className="flex flex-row justify-start w-[80%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-1">
                            <Heading size="s" as="h6" className="mt-px tracking-[-0.50px]">
                              Los Angles, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                              - 22 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/img_rectangle_1479_1.png"
                    alt="image_one"
                    className="w-[84px] md:h-auto ml-[55px] md:ml-5 object-cover"
                  />
                  <div className="flex flex-col items-start justify-start w-[24%] md:w-full ml-2.5 gap-[26px] md:ml-0">
                    <Heading as="h6" className="tracking-[-0.50px] !font-bold">
                      Miami Dolphins won the match and officially qualified for the final
                    </Heading>
                    <div className="flex flex-row justify-start w-[77%] md:w-full">
                      <div className="flex flex-row justify-start w-full gap-1">
                        <Heading size="s" as="p" className="mt-px tracking-[-0.50px]">
                          New York, 22 Agust 2022{" "}
                        </Heading>
                        <Text as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5">
                          - 10 minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full gap-[50px]">
              <div className="flex flex-row sm:flex-col justify-between items-center w-full sm:gap-10">
                <Heading size="3xl" as="h1" className="mb-px tracking-[-0.50px]">
                  Latest Release
                </Heading>
                <Button
                  color="blue_gray_900"
                  shape="round"
                  className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
                >
                  View All
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-start w-full gap-[50px] md:gap-5">
                <div className="flex flex-col items-start justify-start w-[43%] md:w-full gap-[25px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[270px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_10mwi2uawfg.png"
                        alt="unsplash_one"
                        className="justify-center h-[270px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[190px] left-0 bottom-0 right-0 top-0 p-[13px] m-auto bg-gradient absolute">
                        <Button
                          color="deep_orange_A400"
                          size="sm"
                          shape="square"
                          className="mt-2.5 ml-[424px] md:ml-5 tracking-[0.12px] font-bold min-w-[88px] sm:min-w-full"
                        >
                          Hot Topic
                        </Button>
                        <Text size="md" as="p" className="ml-[9px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start gap-[15px]">
                    <Heading size="2xl" as="h4" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text size="md" as="p" className="!text-black-900_87 tracking-[-0.50px] opacity-0.5 leading-[35px]">
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    size="4xl"
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[177px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col w-[54%] md:w-full gap-[50px]">
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[22px] md:gap-5">
                    <Img
                      src="images/img_unsplash_j5keq1jlqzk.png"
                      alt="image"
                      className="w-[44%] md:w-full md:h-[229px] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[54%] md:w-full gap-5">
                      <div className="flex flex-col items-start justify-start w-full gap-3">
                        <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                          New York, 19 april 2022
                        </Text>
                        <div className="flex flex-col items-center justify-start gap-2.5">
                          <Heading size="xl" as="h5" className="tracking-[-0.50px] !font-poppins">
                            Jhon Lorni has won 1st place in international match
                          </Heading>
                          <Text
                            as="p"
                            className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                          >
                            this is his first victory in the international olympics, so his name is quite explosive on
                            the international scene
                          </Text>
                        </div>
                      </div>
                      <Button
                        shape="round"
                        rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                        className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[22px] md:gap-5">
                    <Img
                      src="images/img_unsplash_l_2p8fapoa8.png"
                      alt="unsplashl_one"
                      className="w-[44%] md:w-full md:h-[229px] object-cover"
                    />
                    <div className="flex flex-col items-start justify-start w-[54%] md:w-full gap-5">
                      <div className="flex flex-col items-start justify-start w-full gap-3">
                        <Text size="md" as="p" className="!text-black-900 tracking-[-0.50px]">
                          Amsterdam, 23 april 2022
                        </Text>
                        <div className="flex flex-col items-center justify-start gap-2.5">
                          <Heading size="xl" as="h5" className="tracking-[-0.50px] !font-poppins">
                            The extinction of the Arabian turtle made the government...
                          </Heading>
                          <Text
                            as="p"
                            className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                          >
                            The jalabiya turtle is a very unique species because it is thought to have existed from
                            ancient times, but has begun to become..
                          </Text>
                        </div>
                      </div>
                      <Button
                        shape="round"
                        rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                        className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-center justify-start w-full gap-[50px]">
                <Heading size="3xl" as="h2" className="w-[39%] tracking-[-0.50px] text-center">
                  The Audience&#39;s choice of the Best Films
                </Heading>
                <div className="flex flex-row justify-center w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-row justify-center w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[700px] w-full relative">
                          <Img
                            src="images/img_rectangle_11.png"
                            alt="image_two"
                            className="justify-center h-[700px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-row justify-between items-center w-full h-full left-0 bottom-0 right-0 top-0 p-[75px] m-auto md:p-5 bg-gradient3 absolute">
                            <div className="h-[60px] w-[60px] my-[245px] relative">
                              <Img
                                src="images/img_bi_arrow_up.svg"
                                alt="biarrowup_one"
                                className="justify-center h-[27px] w-[27px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="justify-center h-[60px] w-[60px] left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border-2 border-solid absolute rounded-[50%]" />
                            </div>
                            <div className="flex flex-col items-center justify-start h-[60px] w-[60px]">
                              <Button
                                color="white_A700"
                                size="7xl"
                                shape="circle"
                                className="w-[60px] border-white-A700 border-2 border-solid"
                              >
                                <Img src="images/img_bi_arrow_up_deep_orange_a400.svg" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 4 } }}
                      renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState2}
                      onSlideChanged={(e: EventObject) => {
                        setSliderState2(e?.item);
                      }}
                      ref={sliderRef2}
                      className="w-full mt-[-197px] md:px-5 max-w-[1292px]"
                      items={[...Array(12)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-col items-center justify-start pb-[22px] gap-[21px] mx-2.5 sm:pb-5 bg-white-A700 rounded-[10px]">
                            <Img
                              src="images/img_rectangle_17.png"
                              alt="image"
                              className="w-[308px] md:w-full md:h-[307px] object-cover rounded-[10px]"
                            />
                            <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-[11px]">
                              <Heading as="h3" className="tracking-[-0.50px] text-center">
                                Captain Marvel
                              </Heading>
                              <Text size="md" as="p" className="!text-black-900_7f tracking-[-0.50px]">
                                Genres : Action Adventure Sci-Fi
                              </Text>
                              <RatingBar
                                value={4}
                                isEditable={true}
                                color="#d1d4d8"
                                activeColor="#ffe174"
                                size={20}
                                className="flex justify-between"
                              />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
                <Button
                  color="blue_gray_900"
                  shape="round"
                  className="sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px] sm:min-w-full"
                >
                  View All
                </Button>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mt-[120px]">
              <div className="flex flex-row justify-center w-full p-12 md:p-5 bg-black-900">
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[50px] mx-[25px] md:gap-5 sm:mx-5 max-w-[1291px]">
                  <div className="h-[600px] w-[62%] md:w-full relative">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 2 } }}
                      renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState1}
                      onSlideChanged={(e: EventObject) => {
                        setSliderState1(e?.item);
                      }}
                      ref={sliderRef1}
                      className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      items={[...Array(6)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <Img
                            src="images/img_unsplash_nygy58eb9aw.png"
                            alt="unsplash_one"
                            className="md:h-auto mx-auto object-cover"
                          />
                        </React.Fragment>
                      ))}
                    />
                  </div>
                  <div className="flex flex-col w-[35%] md:w-full gap-[43px]">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_84x121.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_2.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_3.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_4.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col justify-start items-center w-full gap-6 sm:gap-5">
                      <Img
                        src="images/img_rectangle_1479_5.png"
                        alt="image"
                        className="w-[28%] md:h-auto sm:w-full object-cover"
                      />
                      <div className="flex flex-col items-start justify-start w-[68%] sm:w-full gap-[26px]">
                        <Heading as="h6" className="!text-white-A700 tracking-[-0.50px] !font-bold">
                          How to maximize investment with mutual funds
                        </Heading>
                        <div className="flex flex-row justify-start w-[78%] md:w-full">
                          <div className="flex flex-row justify-start w-full gap-[7px]">
                            <Heading size="s" as="p" className="mb-px !text-white-A700 tracking-[-0.50px]">
                              Indonesia, 22 Agust 2022{" "}
                            </Heading>
                            <Text as="p" className="!text-white-A700_87 tracking-[-0.50px] opacity-0.5">
                              - 15 minutes ago
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full mt-[120px]">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[500px] w-full relative">
                  <Img
                    src="images/img_rectangle_19.png"
                    alt="image_three"
                    className="justify-center h-[500px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="justify-center h-[500px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <Slider
                      autoPlay
                      autoPlayInterval={2000}
                      responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 1 } }}
                      renderDotsItem={(props: DotsItem) => {
                        return props?.isActive ? (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white-A700" />
                        ) : (
                          <div className="h-[15px] w-[15px] mr-2.5 bg-white_A700_4f" />
                        );
                      }}
                      activeIndex={sliderState}
                      onSlideChanged={(e: EventObject) => {
                        setSliderState(e?.item);
                      }}
                      ref={sliderRef}
                      className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                      items={[...Array(3)].map(() => (
                        <React.Fragment key={Math.random()}>
                          <div className="flex flex-row md:flex-col justify-between items-center p-16 mx-auto md:gap-10 md:p-5 bg-gradient2">
                            <div className="flex flex-col items-start justify-start w-[49%] md:w-full mt-[127px] ml-[11px] md:ml-0 md:mt-0">
                              <div className="flex flex-row justify-start items-center w-[14%] md:w-full gap-2.5">
                                <div className="h-[15px] w-[15px] bg-deep_orange-A400 rounded-[7px]" />
                                <Text size="md" as="p" className="tracking-[-0.50px]">
                                  Life Topic
                                </Text>
                              </div>
                              <Heading size="4xl" as="h1" className="mt-[7px] !text-white-A700 tracking-[-0.50px]">
                                St Pete&#39;s most beautiful beach in Florida
                              </Heading>
                              <Button
                                color="white_A700"
                                size="4xl"
                                variant="outline"
                                shape="round"
                                className="mt-[57px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[160px] sm:min-w-full"
                              >
                                Read More
                              </Button>
                            </div>
                            <div className="h-[60px] w-[60px] mr-3.5 relative">
                              <Img
                                src="images/img_bi_arrow_up.svg"
                                alt="biarrowup_one"
                                className="justify-center h-[27px] w-[27px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                              />
                              <div className="justify-center h-[60px] w-[60px] left-0 bottom-0 right-0 top-0 m-auto border-white-A700 border-2 border-solid absolute rounded-[50%]" />
                            </div>
                          </div>
                        </React.Fragment>
                      ))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[119px] gap-[49px] md:px-5 max-w-[1294px]">
              <div className="flex flex-col items-center justify-start w-full gap-7">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="3xl" as="h1" className="mb-0.5 tracking-[-0.50px]">
                    Entertaiment{" "}
                  </Heading>
                  <Button
                    color="blue_gray_900"
                    shape="round"
                    className="mt-[5px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
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
                        src="images/img_unsplash_376kn_isple.png"
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
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[246px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_flrm0z3meoa.png"
                        alt="unsplash_one"
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
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[246px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_ef7hn40wbaq.png"
                        alt="unsplash_one"
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
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[152px] gap-[49px] md:px-5 max-w-[1295px]">
              <div className="flex flex-col items-center justify-start w-full gap-7">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="3xl" as="h1" className="mb-0.5 tracking-[-0.50px]">
                    Political{" "}
                  </Heading>
                  <Button
                    color="blue_gray_900"
                    shape="round"
                    className="mt-[5px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
                  >
                    View All
                  </Button>
                </div>
                <div className="h-px w-full bg-black-900_7f" />
              </div>
              <div className="flex flex-row md:flex-col w-full gap-[19px]">
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_gr0wnd7pbjk.png"
                        alt="image"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="red_900"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[301px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
                        >
                          Political
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_mwuod2cm8g4.png"
                        alt="unsplash_one"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="red_900"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[301px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
                        >
                          Political
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_stou35wzmso.png"
                        alt="unsplash_one"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="red_900"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[301px] md:ml-5 tracking-[0.12px] font-bold min-w-[78px] sm:min-w-full"
                        >
                          Political
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[156px] gap-[49px] md:px-5 max-w-[1294px]">
              <div className="flex flex-col items-center justify-start w-full gap-[26px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="3xl" as="h1" className="tracking-[-0.50px]">
                    Sport{" "}
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
                        src="images/img_unsplash_9hi8ujmsdza.png"
                        alt="image"
                        className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                        <Button
                          color="green_700"
                          size="sm"
                          shape="square"
                          className="mt-1.5 ml-[312px] md:ml-5 tracking-[0.12px] font-bold min-w-[64px] sm:min-w-full"
                        >
                          Sport
                        </Button>
                        <Text as="p" className="tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[246px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_pf6e3o0gl4m.png"
                        alt="unsplash_one"
                        className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                        <Button
                          color="green_700"
                          size="sm"
                          shape="square"
                          className="mt-1.5 ml-[312px] md:ml-5 tracking-[0.12px] font-bold min-w-[64px] sm:min-w-full"
                        >
                          Sport
                        </Button>
                        <Text as="p" className="tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-[21px]">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[246px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_wuehagqo5he.png"
                        alt="unsplash_one"
                        className="justify-center h-[246px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[163px] left-0 bottom-0 right-0 top-0 p-[17px] m-auto bg-gradient absolute">
                        <Button
                          color="green_700"
                          size="sm"
                          shape="square"
                          className="mt-1.5 ml-[312px] md:ml-5 tracking-[0.12px] font-bold min-w-[64px] sm:min-w-full"
                        >
                          Sport
                        </Button>
                        <Text as="p" className="tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="ml-[11px] gap-[5px] md:ml-0 sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full mt-[153px] gap-[49px] md:px-5 max-w-[1295px]">
              <div className="flex flex-col items-center justify-start w-full gap-7">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading size="3xl" as="h1" className="mb-px tracking-[-0.50px]">
                    Health{" "}
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
              <div className="flex flex-row md:flex-col w-full gap-[19px]">
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_usfie5yc7py.png"
                        alt="image"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="purple_500"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[309px] md:ml-5 tracking-[0.12px] font-bold min-w-[70px] sm:min-w-full"
                        >
                          Health
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_kcrfw_hje8y.png"
                        alt="unsplashkcrfw"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="purple_500"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[309px] md:ml-5 tracking-[0.12px] font-bold min-w-[70px] sm:min-w-full"
                        >
                          Health
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[33%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_zuj2m7qxda0.png"
                        alt="unsplash_one"
                        className="justify-center h-[247px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                      />
                      <div className="flex flex-col items-start justify-center w-full h-full gap-[168px] left-0 bottom-0 right-0 top-0 p-3.5 m-auto bg-gradient absolute">
                        <Button
                          color="purple_500"
                          size="sm"
                          shape="square"
                          className="mt-[9px] ml-[309px] md:ml-5 tracking-[0.12px] font-bold min-w-[70px] sm:min-w-full"
                        >
                          Health
                        </Button>
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full mt-[152px] gap-[49px] md:px-5 max-w-[1292px]">
              <div className="flex flex-col items-center justify-start w-full gap-7">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="3xl" as="h1" className="mb-0.5 tracking-[-0.50px]">
                    Finance{" "}
                  </Heading>
                  <Button
                    color="blue_gray_900"
                    shape="round"
                    className="mt-[5px] sm:px-5 tracking-[-0.50px] font-semibold min-w-[122px]"
                  >
                    View All
                  </Button>
                </div>
                <div className="h-px w-full bg-black-900_7f" />
              </div>
              <div className="flex flex-row md:flex-col w-[67%] gap-[19px]">
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_irrbsnd5euc.png"
                        alt="image"
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
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
                <div className="flex flex-col items-start justify-start w-[49%] md:w-full gap-5">
                  <div className="flex flex-row justify-start w-full">
                    <div className="h-[247px] w-full sm:w-full relative">
                      <Img
                        src="images/img_unsplash_it6aov1scw0.png"
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
                        <Text as="p" className="ml-[3px] md:ml-0 tracking-[-0.50px]">
                          Ukraine, 24 april 2022
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Heading as="h6" className="tracking-[-0.50px]">
                      Zelensky accuses Russia of worst crimes since WW2{" "}
                    </Heading>
                    <Text
                      as="p"
                      className="!text-black-900_87 tracking-[-0.50px] !font-poppins opacity-0.5 leading-[25px]"
                    >
                      The Ukrainian leader says Russia must face an international trial as he calls for the country to
                      be thrown off the UN Security Council.
                    </Text>
                  </div>
                  <Button
                    shape="round"
                    rightIcon={<Img src="images/img_akariconsarrowupright.svg" alt="akar-icons:arrow-up-right" />}
                    className="gap-[5px] sm:px-5 tracking-[-0.50px] min-w-[153px] sm:min-w-full"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-[153px] gap-[30px] p-[37px] md:px-5 sm:p-5 bg-gray-900 max-w-[1290px] rounded-[20px]">
              <div className="flex flex-col items-center justify-start w-[54%] md:w-full gap-[37px]">
                <Heading size="4xl" as="h1" className="!text-white-A700 tracking-[-0.50px] text-center">
                  Get the Latest Notifications and Info from Us
                </Heading>
                <Text size="xl" as="p" className="!text-white-A700_b2 tracking-[-0.50px] text-center">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled.
                </Text>
              </div>
              <Button
                color="white_A700"
                size="5xl"
                className="mb-[5px] sm:px-5 text-blue_gray-900 tracking-[-0.50px] font-semibold border-blue_gray-900 border border-solid min-w-[196px] rounded-[26px] sm:min-w-full"
              >
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
    </>
  );
}
