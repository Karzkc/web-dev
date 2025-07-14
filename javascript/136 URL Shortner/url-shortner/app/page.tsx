import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content flex flex-col items-center justify-start py-25 ">
        <div className="hero flex flex-col items-center justify-center gap-10 py-20 h-[400px] w-[600px] rounded-2xl bg-[#111317] shadow-[0_20px_60px_rgba(255,255,255,0.05)] transition-transform duration-300 hover:-translate-y-1">

          <div className="text text-3xl text-white text-center max-w-xl">
            Shorten Your Big Messy URLs for Free
          </div>

          <div>
            <Link href="/short-it">
              <button className="cursor-pointer py-2 px-6 bg-white text-black font-semibold rounded-md hover:bg-gray-300 transition ease-in-out duration-200">
                Try it Out →
              </button>
            </Link>
          </div>

        </div>

      </div>

    </>
  );
}
