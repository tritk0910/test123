import Image from 'next/image';

export default function Page() {
  return (
    <section className="flex h-[976px] w-full flex-col items-center gap-6 bg-[#ffeee2] pt-[104px] md:pt-[100px]">
      <Image
        src={'/img/woman.png'}
        alt="woman"
        width={1000}
        height={1000}
        className="h-[317px] w-auto md:h-[556px]"
      />
      <h1 className="font-trajan-pro text-center text-2xl/9 font-semibold text-[#824435] md:text-5xl/[68px]">
        Mến chào quý khách, <br />
        Tôi là Ty Anh Nguyễn
      </h1>
    </section>
  );
}
