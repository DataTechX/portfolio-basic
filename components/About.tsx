import { AiFillGithub, AiFillYoutube, AiFillFacebook, AiTwotonePhone, AiTwotoneStar } from 'react-icons/ai'
import { GoLocation, } from 'react-icons/go'
import { useTheme } from 'next-themes';
import Image from 'next/image';

const About = () => {
    const { theme, setTheme } = useTheme();


    const changeTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };



    return (
        <>
            <Image src="https://cdn.discordapp.com/attachments/987779580418998333/996063116695720056/icon-anime-7.jpg"
                alt="profile"
                className="mx-auto border rounded-full"
                width="256px"
                height="256px"
                layout="intrinsic"
                quality="100" />
            {/* ชื่อ */}
            <h1 className='my-4 font-mono text-3xl font-bold tracking-wider'>
                <span className='text-purple-400 '>JKTheRipperTh</span>
            </h1>
            {/* คำอธิบาย */}
            <p className="px-2 py-1 my-3 font-mono bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">Software Engineer And Mechanic Engineer</p>

            {/* โซเซ๊ยลต่างๆ */}
            <div className='flex justify-around w-9/12 mx-auto my-5 text-cyan-500 md:w-full'>
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
            <div className='py-4 my-5 font-mono bg-gray-300 text-2sm dark:bg-dark-200 dark:bg-black-200 ' style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
                <div className='flex items-center justify-center'>
                    <GoLocation className='w-5 h-5 mr-2' /> <span>BangKok, Undefined</span>
                </div>
                <div className='flex items-center justify-center'>
                    <AiTwotonePhone className='w-5 h-5 mr-2' /><span>099 xxx xxxx</span>
                </div>
                <div className='flex items-center justify-center'>
                    <AiTwotoneStar className='w-5 h-5 mr-2' /><span>ไม่มีอะไรแล้วค้าบ😪</span>
                </div>
            </div>


            {/* ปุ่มเปลี่ยนสี */}

            <button onClick={changeTheme} className="w-48 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-blue-700 to-purple-600 focus:outline-none hover:scale-110">เปลี่ยนสี</button>

            <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-dark-200">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="http://schoollifebot.xyz/" className="hover:underline">JKTheRipperTH</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">เกี่ยวกับ</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">นโยบายความเป็นส่วนตัว</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">ใบอนุญาต</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">ติดต่อ</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default About