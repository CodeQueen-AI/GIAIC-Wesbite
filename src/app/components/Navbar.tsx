import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
    <div className="top-0 z-30 w-full bg-main backdrop-blur-3xl bg-[#044e83]" >
      <div className="m-auto flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl-w-[1300px]">
        <Link href="/">
          <Image src={'/logo.png'} width={90} height={113} className="mt-14 w-[70px sm:mt-20 sm-w-[80px] md:w-[90px]" alt={'logo'}/>
        </Link>
        {/* <h1 className="text_shadow hidden text-[10px] font-bold text-white lg:block xl-lg:text-xl xl:text-2xl">Tuition Free Education Program on Latest Technologies</h1> */}
        <h2 className='text-xl font-semibold text-[#B9D8F3]'>Tuition Free Education Program on Latest Technologies</h2>
        <div className="hidden items-center gap-5 text-[#FAF9F6] sm:flex lg:gap-10">
          <Link href={'/'}>
          <div>Home</div>
          </Link>
          <Link href={'/apply'}>
          <div>Apply</div>
          </Link>
          <Link href={'/jobs'}>
          <div>Jobs</div>
          </Link>
          <Link href={'/result'}>
          <div>Result</div>
          </Link>
          <Link href={'/courses'}>
          <div>Courses</div>
          </Link>
        </div>
      </div>
    <div className="relative z-0 w-full overflow-hidden bg-opacity-75 bg-[url('/bg"></div>
    </div>
  )
}