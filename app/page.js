import Image from "next/image";
import vector from '@/public/vector.jpg'
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-main ">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-4xl font-bold">
            The best and the fastest url shortner in the market!
          </p>
          <p className="text-xl">
            The most straight forward url shortener in the world with free QR code maker.
          </p>
          <div className='flex gap-4 items-center text-white'>
                  <Link href="/generate"><button className='bg-btnColor px-4 py-3 text-lg rounded-lg'>Try now</button></Link>
                  <Link href="/github"><button className='bg-btnColor px-4 py-3 text-lg rounded-lg'>GitHub</button></Link>
                </div>
        </div>
        <div className="flex justify-start relative">
          <Image src={vector} className="mix-blend-multiply" fill={true} alt='vector image'/>
        </div>
      </section>
    </main>
  );
}
