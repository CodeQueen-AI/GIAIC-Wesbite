import Image from "next/image";

const CourseData = [
    {
        title: "Programming Fundamentals",
        img: "/Course1.jpg"
    },
    {
        title: "Web2 Using NextJs",
        img: "/course2.jpg"
    },
    {
        title: "Earn as You Learn",
        img: "/course3.jpg"
    },
];

const newCourseData = [
    {
        title: "Artificial Intelligence",
        img: "/course4.jpg"
    },
    {
        title: "Web3 and Metaverse",
        img: "/course5.jpg"
    },
    {
        title: "Cloud-Native Computing",
        img: "/course6.jpg"
    },
    {
        title: "Ambient Computing and IoT",
        img: "/course7.jpg"
    },
    {
        title: "Genomics and Bioinformatics",
        img: "/course8.jpg"
    },
    {
        title: "Network Programmability",
        img: "/course9.jpg"
    },
];

const Courses = () => {
    return (
        <section className='mt-24 relative mb-20'>
            <div className='max-w-[90%] mx-auto'>
                <h2 className='text-[#044E83] text-4xl font-bold mb-10'>Core Courses Sequence</h2>
                <div className='flex justify-start gap-10 items-center mb-20 md:flex-row flex-wrap'>
                    {
                        CourseData.map((ele, id) => {
                            return (
                                <div key={id} className="md:w-[23%] w-full h-[342px] md:h-[250px] border rounded-lg shadow-2xl shadow-black transition-all duration-300 hover:scale-105">
                                    <Image src={ele.img} alt="img" width={350} height={190} className="rounded-t-lg md:w-[350px] md:h-[190px] w-full h-[272px]" />
                                    <h3 className="text-center mt-4 text-lg font-semibold text-gray-500">{ele.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
                <h2 className='text-[#044E83] text-4xl font-bold mb-10'>Advanced Courses</h2>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-10'> 
                    {
                        newCourseData.map((ele, id) => {
                            return (
                                <div key={id} className="w-full h-[342px] md:h-[250px] border rounded-lg shadow-2xl shadow-black transition-all duration-300 hover:scale-105">
                                    <Image src={ele.img} alt="img" width={320} height={200} className="rounded-t-lg w-full h-[200px]" />
                                    <h3 className="text-center mt-2 text-lg font-bold text-gray-500 max-w-[98%] mx-auto">{ele.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Courses;



