import Image from "next/image"


export default function JobsPage() {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container flex justify-center items-center my-10 mx-auto px-4 py-8">
       <div className="my-6">
        <Image src='/coming-soon.png' width='400' height='300' alt="job_coming_soon" className="my-6" />
        <h1 className="font-bold text-[#044E83] text-center text-lg">Jobs/Internship Comming soon.</h1>
       </div>
      </div>
    </div>
  )
} 