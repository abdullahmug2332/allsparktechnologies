import Image from 'next/image';

export default function CoreValuesSection() {
  return (
    <section className="w-full px-10 md:px-0 max-w-7xl mx-auto  py-10 md:py-16  lg:py-20">
      <div className="relative w-[95%] mx-auto h-auto">
        <Image
          src="/images/about/1.png"
          alt="Core Values Arcs"
          layout="responsive"
          width={1920}
          height={1080}
          unoptimized
        />
      </div>
    </section>
  );
}
