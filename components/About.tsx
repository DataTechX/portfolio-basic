import { AiFillGithub, AiFillYoutube, AiFillFacebook, AiTwotonePhone, AiTwotoneStar, } from 'react-icons/ai'
import { useTheme } from 'next-themes';
import Image from 'next/image';


const About = () => {
    const { theme, setTheme } = useTheme();

    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <>
            {/* รูป */}
            <Image src="https://cdn.discordapp.com/attachments/987779580418998333/996063116695720056/icon-anime-7.jpg"
                alt="profile"
                className="mx-auto rounded-full"
                width="150px"
                height="150px"
                layout="intrinsic"
                quality="100"
            />
            {/* ชื่อ */}
            <h1 className='font-mono text-2sm font-bold tracking-wider '>
                <span className='rounded-full py-1 px-2 bg-gray-200 dark:bg-dark-200'>เจเค</span>
                <span className='rounded-full py-1 px-2 bg-gray-200 dark:bg-dark-200'>JKTHERIPPER</span>
            </h1>

            {/* คำอธิบาย */}
            <p className="px-2 py-1 my-3 font-mono bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-200">Software Engineer And Mechanic Engineer</p>


            {/* โซเซ๊ยลต่างๆ */}
            <div className='flex justify-around w-5 mx-auto my-5 text-purple-600 md:w-full'>
                <a href="https://github.com/JKTheRipperTH">
                    <AiFillGithub className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://www.youtube.com/channel/UCIl6hBApM-AM-ah4x57Wyow">
                    <AiFillYoutube className='w-8 h-8 cursor-pointer' />
                </a>
                <a href="https://www.facebook.com/SchoolLife1822-112225484713956">
                    <AiFillFacebook className='w-8 h-8 cursor-pointer' />{" "}
                </a>
            </div>

            {/* ที่อยู่ */}

            <div className=' h-32 bg-gray-200 dark:bg-dark-200 dark:bg-black-200' style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <p className="text-dark mb-1 dark:text-white bg-gray-500">Contact</p>
                <a className=" bg-blue-800 text-white  px-2 mx-[2px] rounded text-center items-center justify-center"
                    href="https://discord.com/users/827530462675075102">A&apos;Masuki#7824</a>
                {/* <p className="text-dark font-semibold mb-1 dark:text-white">Contact &amp; Developer</p> */}
                {/* <div className="flex"> */}

                <div className="py-4 font-mono sm:p-6 sm:text-base">
                    <p className="text-dark  mb-1 dark:text-white">Languages Progrmming</p>
                    <a className=" bg-green-700 text-white px-2 mx-[2px] rounded text-center items-center justify-center">C#</a>
                    <a className=" bg-yellow-500 text-white px-2 mx-[2px] rounded text-center items-center justify-center">JAVASCRIPT</a>
                    <a className=" bg-blue-700 text-white px-2 mx-[2px] rounded text-center items-center justify-center">TYPESCRIPT</a>
                <p className="text-dark font-semibold mb-1 dark:text-white">Contact &amp; Developer</p>
                <a className=" bg-blue-500 text-white font-semibold px-2 mx-[2px] rounded text-center items-center justify-center"
                    href="https://discord.com/users/827530462675075102">Ay&apos;Kakima#7824</a>
                {/* <p className="text-dark font-semibold mb-1 dark:text-white">Contact &amp; Developer</p> */}
                {/* <div className="flex"> */}

                <div className="py-4 my-5 font-mono sm:p-6 sm:text-base">
                    <p className="text-dark font-semibold mb-1 dark:text-white">write code sometime</p>
                </div>
            </div>
            {/* </div> */}

            {/* <div className='py-4 my-5 font-mono bg-gray-300 text-2sm dark:bg-dark-200 dark:bg-black-200 ' style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className='flex items-center justify-center'>
                    <GoLocation className='w-5 h-5 mr-2' /> <span>BangKok, Undefined</span>
                </div>
                <div className='flex items-center justify-center'>
                    <AiTwotonePhone className='w-5 h-5 mr-2' /><span>099 xxx xxxx</span>
                </div>
                <div className='flex items-center justify-center'>
                    <AiTwotoneStar className='w-5 h-5 mr-2' /><span>Developer Schoollife DMC VZ</span>
                </div>
            </div> */}


            {/* ปุ่มเปลี่ยนสี */}

            {/* <button onClick={changeTheme} className="w-48 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-700 to-purple-600 focus:outline-none hover:scale-110">เปลี่ยนสี</button> */}

            <footer>
                <p className="flex justify-around my-5 text-sky-500 mb-1 text-left font-mono text-sm">LYNN &amp; DMC TEAM</p>
                <p className="text-sky-500 mb-1 text-left font-mono text-sm">LYNN &amp; DMC TEAM</p>
            </footer>
        </>
    )
}

export default About;
