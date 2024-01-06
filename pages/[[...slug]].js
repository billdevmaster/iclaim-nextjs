/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import LinkPageButton from "@/components/buttons/LinkPageBtn"
import SubtractBG from "@/images/Subtract.png"
import Therapy1 from "@/images/therapy1.png"
import Therapy2 from "@/images/therapy2.png"
import Therapy3 from "@/images/therapy3.png"
import AboutUs from "@/images/about-us.png"
import IconCalc from "@/images/icon-calc.png"
import IconUser from "@/images/icon-user.png"
import IconDoc from "@/images/icon-doc.png"
import Dots from "@/images/dots.png"
import Blog1 from "@/images/blog1.png"
import Blog2 from "@/images/blog2.png"
import Blog3 from "@/images/blog3.png"
import TherapyImg1 from "@/images/therapy-1.png"
import TherapyImg2 from "@/images/therapy-2.png"
import TherapyImg3 from "@/images/therapy-3.png"
import HowItWorks from "@/images/how-it-works.png"
import SectionTitle from "@/components/SectionTitle"
import SectionBigTitle from "@/components/SectionBigTitle"
import FaqCollapse from "@/components/faqCollapse";
import BlogItem from "@/components/blogItem";
import CircleProgress from "@/components/circleProgress";
import HowItWorksItem from "@/components/howItWorksItem";
import TherapySlider from '@/components/therapySlider';

const therapys = [
  {
    image: TherapyImg1, title: "Depression Therapy", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium."
  },
  {
    image: TherapyImg2, title: "Couples Counseling", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium."
  },
  {
    image: TherapyImg3, title: "Obsessive-Compulsive Disorder (OCD)", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium."
  },
  {
    image: TherapyImg1, title: "Depression Therapy", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremqe laudantium."
  }
]

const Home = () => {
  const { t } = useTranslation()
  return (
    <>
      <section class="text-[24px]">
        <div class="bg-pink-semilight md:pb-[218px]">
          <div class="pt-[114px] px-4 mx-auto max-w-screen-xl text-center">
            <div class="flex justify-center gap-[80px] mb-[45px]">
              <span class="text-[24px] text-black-light">{t("anywhere")}</span>
              <span class="text-[24px] text-black-light">{t("anytime")}</span>
              <span class="text-[24px] text-black-light">{t("confidential")}</span>
            </div>

            <h1 class="mb-[50px] text-[80px] mx-auto text-white font-extrabold tracking-tight leading-none font-soleSerifHeadlineBold capitalize">
              {t("home_hero_text1")}<br/>{t("home_hero_text2")}
            </h1>
            
            <div class="mb-8 space-y-4 mb-[73px]">
              <div class="relative inline-flex justify-center items-center">
                <LinkPageButton text={t("booking_now")} href="#" /> 
                  <Image src={SubtractBG} alt="subtrack" class="absolute -right-[16px]" />
              </div>
            </div>

            <p class="font-soleSerifHeadlineBold md:text-[32px] text-semilight">{t("home_therapy_quest")}</p>
          </div>
        </div>
        <div class="hero-bottom-bg">
          <div class="mx-auto max-w-screen-xl text-center grid grid-cols-3 gap-[56px]">
            <div class="pt-[18px] text-center therapy-card bg-blue-400 md:w-[350px] mx-auto">
              <p class="text-gray-600 mb-[12px] text-[16px]">{t("therapy_for_me")}</p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">{t("individual")}</p>
              <a class="text-brown-dark inline-flex justify-center items-center">
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="#BC6B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <Image src={Therapy1} alt="therapy card" class="mx-auto" />
            </div>

            <div class="pt-[18px] text-center therapy-card bg-pink-400 md:w-[350px] mx-auto">
              <p class="text-gray-600 mb-[12px] text-[16px]">{t("therapy_for_us")}</p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">{t("couples")}</p> 
              <a class="text-brown-dark inline-flex justify-center items-center">
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="#BC6B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <Image src={Therapy2} alt="therapy card" class="mx-auto" />
            </div>

            <div class="pt-[18px] text-center therapy-card bg-yellow-400 md:w-[350px] mx-auto">
              <p class="text-gray-600 mb-[12px] text-[16px]">{t("for_my_child")}</p>
              <p class="font-soleSerifHeadlineBold text-[32px] text-black-light mb-[31px]">{t("teen")}</p>
              <a class="text-brown-dark inline-flex justify-center items-center">
                <span class="underline font-semibold">{t("get_started")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 3.75L13.75 10L7.5 16.25" stroke="#BC6B67" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
              <Image src={Therapy3} alt="therapy card" class="mx-auto" />
            </div>
          </div>
        </div>
      </section>
      
      <section class="about-us md:py-[100px] bg-blue-light">
        <div class="mx-auto max-w-screen-xl">
          <SectionTitle title={t("about_us")} />
          <div class="flex md:justify-between md:gap-[70px]">
            <div class="w-full">
              <p class="font-soleSerifHeadlineBold text-[40px] text-black-main md:mb-[60px] font-bold leading-none">{t("home_about_us_title")}</p>
              <p class="font-poppinsRegular text-[20px] text-brown-main">
              {t("home_about_us_1")} <br/><br/>

              {t("home_about_us_2")} <br/><br/>

              {t("home_about_us_3")}
              </p>
              <div class="md:my-[50px] flex">
                <div class="flex items-center text-brown-main text-[20px] font-bold mr-[30px]">
                  <span class="display rounded-full p-[10px] bg-blue-500 mr-2">
                    <Image src={IconDoc} alt="about us"/>
                  </span>
                  {t("licensed")}
                </div>
                <div class="flex items-center text-brown-main text-[20px] font-bold mr-[30px]">
                  <span class="display rounded-full p-[10px] bg-pink-500 mr-2">
                    <Image src={IconCalc} alt="about us"/>
                  </span>
                  {t("available")}
                </div>
                <div class="flex items-center text-brown-main text-[20px] font-bold mr-[30px]">
                  <span class="display rounded-full p-[10px] bg-yellow-500 mr-2">
                    <Image src={IconUser} alt="about us"/>
                  </span>
                  {t("personalized")}
                </div>
              </div>
              <LinkPageButton text="Get Matched to a Therapist" href="#" />
            </div>
            <div class="w-full relative">
              <Image src={Dots} alt="about" class="absolute top-0 left-0"/>
              <Image src={AboutUs} alt="about" class="relative z-10 w-full"/>
              <Image src={Dots} alt="about" class="absolute bottom-0 right-0"/>
            </div>
          </div>
        </div>
      </section>

      <section class="faq md:py-[90px] bg-pink-600">
        <div class="mx-auto max-w-screen-xl text-center">
          <SectionTitle title={t("what_our_services")} />
          <SectionBigTitle title={t("our_therapy")} />
          <div>
            <TherapySlider items={therapys} />
          </div>
          <LinkPageButton text={t("find_more")} href="#" />
        </div>
      </section>

      <section class="faq md:py-[90px] bg-white">
        <div class="mx-auto max-w-screen-xl text-center">
          <SectionTitle title={t("what_we_offer")} />
          <SectionBigTitle title={t("how_it_works")} />
          <div class="flex md:justify-between md:gap-[70px]">
            <div class="w-full">
              <Image src={HowItWorks} alt="how it works" />
            </div>
            <div class="w-full grid grid-cols-1 gap-y-[20px]">
              <HowItWorksItem number="1" title={t("home_guide_title_1")} detail={t("home_guide_detail_1")} />
              <HowItWorksItem number="2" title={t("home_guide_title_2")} detail={t("home_guide_detail_2")} />
              <HowItWorksItem number="3" title={t("home_guide_title_3")} detail={t("home_guide_detail_3")} />
              <HowItWorksItem number="4" title={t("home_guide_title_4")} detail={t("home_guide_detail_4")} />
            </div>
          </div>
        </div>
      </section>

      <section class="md:py-[90px] bg-blue-light">
        <div class="mx-auto max-w-screen-xl text-center">
          <div class="grid grid-cols-3">
            <CircleProgress percent="70" content={t("home_usage_percent1")} />
            <CircleProgress percent="80" content={t("home_usage_percent2")} />
            <CircleProgress percent="98" content={t("home_usage_percent3")} />
          </div>
        </div>
      </section>

      <section class="faq md:py-[90px] bg-white">
        <div class="mx-auto max-w-screen-xl text-center">
          <SectionTitle title={t("home_blog_title")} />
          <SectionBigTitle title={t("home_blog_big_title")} />
          <div class="grid grid-cols-3">
            <BlogItem image={Blog1} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e...." />
            <BlogItem image={Blog2} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e...." />
            <BlogItem image={Blog3} text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e...." />
          </div>
        </div>
      </section>

      <section class="faq md:py-[90px] bg-pink-600">
        <div class="mx-auto max-w-screen-xl text-center">
          <SectionTitle title={t("home_faq_title")} />
          <SectionBigTitle title={t("home_faq_big_title")} />
          <div class="gap-y-[24px] grid grid-cols-1">
            <FaqCollapse title={t("home_faq_item1_title")} content="test" />
            <FaqCollapse title={t("home_faq_item2_title")} content="test" />
            <FaqCollapse title={t("home_faq_item3_title")} content="test" />
            <FaqCollapse title={t("home_faq_item4_title")} content="test" />
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  };
}

export default Home
