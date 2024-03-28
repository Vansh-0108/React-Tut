import React from "react";
import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input } from "../../components";
import AllBlogCardnews from "../../components/AllBlogCardnews";
import AllBlogCardnews1 from "../../components/AllBlogCardnews1";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function AllBlogPage() {
  return (
    <>
      <Helmet>
        <title>News Blog App</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex justify-center items-center w-full" />
        <div className="flex flex-row justify-center w-full mt-[50px] md:px-5 max-w-[1292px]">
          <div className="flex flex-col items-center justify-start w-full gap-[85px]">
            <Heading size="3xl" as="h1" className="w-[38%] tracking-[-0.50px] text-center">
              Read the latest news from around the world
            </Heading>
            <Input
              color="gray_50"
              size="md"
              name="bxfilter"
              placeholder="Filter"
              suffix={<Img src="images/img_bxfilter.svg" alt="bx:filter" />}
              className="w-[50%] sm:w-full gap-[11px] tracking-[-0.50px] font-semibold rounded-[15px]"
            />
            <div className="flex flex-row md:flex-col justify-start items-start w-full gap-6 md:gap-5">
              <div className="flex flex-col items-center justify-start w-[75%] md:w-full gap-[50px]">
                <div className="justify-center w-full gap-5 grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid">
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5"
                  />
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5"
                  />
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5"
                  />
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-center justify-start w-full pb-[23px] sm:pb-5"
                  />
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-start justify-start w-full pb-[23px] gap-4 sm:pb-5"
                  />
                  <AllBlogCardnews
                    unsplash376kn="images/img_unsplash_376kn_isple_246x418.png"
                    ukrainetwentyfo="Ukraine, 24 april 2022"
                    zelensky="Zelensky accuses Russia of worst crimes since WW2 "
                    description="The Ukrainian leader says Russia must face an international trial as he calls for the country to be thrown off the UN Security Council. Lorem ipsom dolor"
                    readMore="Read More"
                    className="flex flex-col items-center justify-start w-full pb-[23px] sm:pb-5"
                  />
                </div>
                <div className="flex flex-row justify-start items-center w-[25%] md:w-full pb-[3px] gap-2.5">
                  <Img src="images/img_arrow_left.svg" alt="arrowleft_one" className="h-[15px] w-[15px]" />
                  <div className="flex flex-row w-[53%] gap-2.5">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="blue_gray_900"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                      >
                        1
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="gray_100"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                      >
                        2
                      </Button>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[35px] w-[29%]">
                      <Button
                        color="gray_100"
                        size="md"
                        className="tracking-[-0.50px] font-semibold min-w-[35px] rounded-[5px] sm:min-w-full"
                      >
                        3
                      </Button>
                    </div>
                  </div>
                  <Button color="gray_100" size="lg" className="w-[35px] rounded-[5px]">
                    <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                  </Button>
                  <Img src="images/img_akar_icons_chevron_left.svg" alt="akaricons_one" className="h-[15px] w-[15px]" />
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[24%] md:w-full gap-5">
                <div className="flex flex-col items-start justify-start w-[82%] md:w-full gap-3">
                  <div className="flex flex-row justify-between w-full">
                    <Heading size="md" as="h2" className="!text-blue_gray-900 tracking-[-0.50px]">
                      New Released
                    </Heading>
                    <Heading size="md" as="h3" className="!text-black-900_90 tracking-[-0.50px] opacity-0.6">
                      Hot Topic
                    </Heading>
                    <Heading size="md" as="h4" className="!text-black-900_90 tracking-[-0.50px] opacity-0.6">
                      Popular
                    </Heading>
                  </div>
                  <Img src="images/img_background.svg" alt="image" className="h-px" />
                </div>
                <div className="flex flex-col w-full gap-[19px]">
                  <AllBlogCardnews1 className="flex flex-row justify-start w-full gap-2.5" />
                  <AllBlogCardnews1
                    image="images/img_unsplash_oj0zey2ltk4.png"
                    className="flex flex-row justify-start w-full gap-2.5"
                  />
                  <AllBlogCardnews1
                    image="images/img_unsplash_lndpi8yzi34.png"
                    className="flex flex-row justify-start w-full gap-2.5"
                  />
                  <AllBlogCardnews1
                    image="images/img_unsplash_jsubkjhgdmm.png"
                    className="flex flex-row justify-start w-full gap-2.5"
                  />
                  <AllBlogCardnews1
                    image="images/img_unsplash_tvllfygalea.png"
                    className="flex flex-row justify-start w-full gap-2.5"
                  />
                  <AllBlogCardnews1
                    image="images/img_unsplash_y5pg8zecxqi.png"
                    className="flex flex-row justify-start w-full gap-2.5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[120px]" />
      </div>
    </>
  );
}
