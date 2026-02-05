import Footer from '@/components/Footer'
import Navbar2 from '@/components/Navbar2'
import Topnav from '@/components/Topnav'
import React from 'react'
import demo from "@/public/images/demo2.png"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from 'next/image'
import ServicesContact from '@/components/ServicesContact'
import axios from "axios"
import { baseURL } from "@/API/baseURL"
import Navbar4 from '@/components/Narbar4'


type PageProps = {
   params: Promise<{ slug: string }>;
};

async function fetchSubservice(slug: string) {
    console.log("Slug received:", slug);
    try {
        const res = await axios.post(
            `${baseURL}/getbyslug`,
            { slug }
        );

        return res.data.json;
    } catch (error) {
        console.error("Error fetching subservice:", error);
        return null;
    }
}




export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const subServiceJson = await fetchSubservice(slug);
    if (!subServiceJson) {
        return <div className="p-10 text-red-600">Subservice not found.</div>;
    }

    return {
        title: `${subServiceJson.title}`,
        description: `${subServiceJson.des}`,
    };
}


export default async function Page({ params }: PageProps) {
    const { slug } = await params;
    const subServiceJson = await fetchSubservice(slug);
    if (!subServiceJson) {
        return <div className="p-10 text-red-600">Subservice not found.</div>;
    }

    return (
        <>
            <Topnav />
            <Navbar4 />

            {/* Hero Section  */}
            <section
                className="bg-cover bg-no-repeat h-[50vh]"
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${demo.src})` }}>
                <div className="container flex flex-col justify-center items-center h-full">
                    <p className='text-white heading font-bold text-center sm:text-start'>
                        {subServiceJson.title}
                    </p>
                </div>
            </section>
            <div className='flex flex-col '>

                {/* Section 2 */}
                <div className="container pad">
                    <div className="mb-[30px]">
                        <p className=' w-full lg:w-[65%] font-bold text-[30px] text-[#1F2937] heading  lg:leading-[40px]'>
                            {subServiceJson.section2.title}
                        </p>
                    </div>
                    <div className=' w-full lg:w-[65%] text-[#6f798b] para'>
                        <p >{subServiceJson.section2.des}</p>
                    </div>
                </div>

                {/* Section 3 */}
                <div className='container flex flex-col lg:flex-row pad '>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%] '>
                        <p className='font-bold  text-[#1F2937] heading'>
                            {subServiceJson.section3.title}
                        </p>
                        {subServiceJson.section3.data.map((item: any, index: number) => (
                            <div key={index} >
                                <h3 className="font-semibold subheading text-[#1F2937]">{item.title}</h3>
                                <div className="-mt-3">
                                    <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                                </div>
                                <p className="para text-[#6f798b]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className='w-full lg:w-[50%] lg:pl-[20px]'>
                        <Image src={`${baseURL}/images/subservices/${subServiceJson.section3.image}`} alt='img3' width={100} height={100} className='w-full mt-[30px] lg:mt-[0px]'   />
                    </div>
                </div>

                {/* Section 4  */}
                <div className="container pad">
                    <p className=' w-full lg:w-[65%] font-bold heading  lg:leading-[40px] text-[#1F2937]'>{subServiceJson.section4.title}</p>
                    <p className='w-full lg:w-[65%] para text-[#6f798b] mt-[20px]'>{subServiceJson.section4.des}</p>
                </div>

                {/* Section 5  */}
                <div className='bg-[#0D0B52] mar'>
                    <div className="container py-[50px] lg:py-[80px]">
                        <p className='font-bold heading  lg:leading-[40px] text-white w-full lg:w-[70%] mx-auto lg:mx-[0]'>{subServiceJson.section5.title}</p>
                        <div className='flex flex-col lg:flex-row gap-x-[80px] items-center lg:items-start gap-y-[30px] lg:gap-y-0 mt-[40px]'>
                            {
                                subServiceJson.section5.steps.map((item: any, index: number) => (
                                    <div key={index} className={`grow w-[90%] lg:w-1/4  xl:px-[20px] steps`} style={{ marginTop: item.margin }}>
                                        <p className='font-semibold text-[50px] lg:text-[75px] text-white'>{item.step}</p>
                                        <p className='text-white font-semibold subheading'>{item.title}</p>
                                        <p className='para text-[white] mt-[10px]'>{item.description}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* Section6  */}
                <div className='container flex flex-col lg:flex-row pad'>
                    <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                        <p className='font-bold  text-[#1F2937] heading  lg:leading-[40px]  '>{subServiceJson.section6.title}</p>
                        <div>
                            <p className="para text-[#6f798b]">{subServiceJson.section6.des}
                            </p>
                            <p className="para text-[#6f798b] mt-[15px]">{subServiceJson.section6.des2}
                            </p>
                        </div>

                    </div>
                    <div className='w-full lg:w-[50%] lg:pl-[40px] '>
                        <Image src={`${baseURL}/images/subservices/${subServiceJson.section6.image}`} alt='img5' width={100} height={100}   className='w-full mt-[30px] lg:mt-[0px]' />
                    </div>
                </div>

                {/* Section 7  */}
                <div className="container border-l-[6px] border-blue-700 pl-[10px] mar ">
                    <p className='w-full lg:w-[65%] font-extrabold text-[22px] md:text-[26px]   text-[#1F2937] '>{`"${subServiceJson.section7.quote}"`} </p>
                    <p className='para text-[#6f798b] mt-[10px]'>{subServiceJson.section7.author} </p>
                </div>

                {/* Section8  */}
                <div className='bg-[#0D0B52]  text-white mar py-[50px] lg:py-[100px]'>
                    <div className='container flex flex-col lg:flex-row  '>
                        <div className='flex flex-col gap-[30px] w-full lg:w-[50%]'>
                            <p className='font-bold heading text-white lg:leading-[40px]'>{subServiceJson.section8.title}</p>
                            {subServiceJson.section8.data.map((item: any, index: number) => (
                                <div key={index} >
                                    <h3 className="font-semibold subheading text-white">{item.title}</h3>
                                    <div className="-mt-3">
                                        <div className="w-10 border-b-4 border-blue-500 inline-block"></div>
                                    </div>
                                    <p className="para text-white">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className='w-full lg:w-[50%]  lg:pl-[40px] '>
                            <Image src={`${baseURL}/images/subservices/${subServiceJson.section8.image}`} width={100} height={100}   alt='img6' className='w-full mt-[30px] lg:mt-[0px]' />
                        </div>
                    </div>
                </div>

                {/* Section9  */}
                <div className='container pad'>
                    <p className='font-bold heading text-[#1F2937] lg:leading-[40px] text-center'>{subServiceJson.section9.title}</p>
                    <p className="para text-[#6f798b] mt-[10px] text-center">{subServiceJson.section9.para}</p>
                    <div className="flex gap-[10px] mt-[20px] justify-center flex-wrap w-[90%] lg:w-[80%] mx-auto">
                        {subServiceJson.section9.industries.map((ind: any, index: number) => (
                            <p key={index} className='bg-[#384BFF] px-[15px] py-[7px] text-white rounded-[4px] font-[600] text-center para '>{ind}</p>
                        ))}
                    </div>
                </div>

                {/* Faq  */}
                <div className="container pad">
                    <p className='font-bold heading  lg:leading-[40px] mb-[20px] text-[#1F2937]'>
                        {subServiceJson.faq.title}
                    </p>
                    <Accordion type="single" collapsible>
                        {subServiceJson.faq.faqs.map((faq: any, index: number) => (
                            <AccordionItem value={faq.item} key={index} className='border mb-[10px] px-[10px] rounded-[5px]'>
                                <AccordionTrigger className='text-[#1F2937] hover:no-underline para'>{faq.ques}</AccordionTrigger>
                                <AccordionContent className='para'>
                                    {faq.ans}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>

                <div className="container bg-[#2B4EFF]  mar">
                    <ServicesContact title={subServiceJson.contact.title} subTitle={subServiceJson.contact.subTitle} />
                </div>
            </div>
            <Footer />
        </>
    )
}


export async function generateStaticParams() {
  try {
    const res = await fetch(`${baseURL}/getslug`);
    const data: string[] = await res.json();

    // ✅ Log slugs during build to verify
    console.log("Building slug:", data);

    // ✅ Return correct structure and trim spaces
    return data.map((slug:string) => ({
      slug: slug.trim(),
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
