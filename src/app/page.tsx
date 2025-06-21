import Image from 'next/image';

export default function Home() {
  return (
    <section className="relative min-h-[120dvh]">
      <div className="relative flex h-[598px] w-full items-center justify-center">
        <h1 className="font-trajan-pro text-background text-center text-2xl/9 md:text-5xl/[68px]">
          Amor Thảo Mộc <br />
          Nơi Lưu Giữ Bình Yên
        </h1>
        <div className="absolute inset-0 -z-10 bg-black">
          <Image
            src={'/img/bg.png'}
            alt="bg"
            fill
            className="object-cover object-center opacity-80 before:absolute before:size-full"
          />
        </div>
      </div>
    </section>
  );
}
