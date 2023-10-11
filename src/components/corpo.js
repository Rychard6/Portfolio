import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa6";

export default function Corpo() {
    const [text, helper] = useTypewriter({
        words: ['Developer web', 'Designer', 'UI Designer'],
        loop: Infinity
    });

    const { isType, isDelete, isDelay, isDone } = helper;

    return (
        <>
            <div className="text-center mt-32 md:mt-32">
                <h1 className={`text-4xl md:text-5xl font-bold ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>Rychard Ryan</h1>
                <span className={`text-2xl md:text-3xl mt-4 font-semibold ${isDone ? 'text-indigo-500' : 'text-indigo-500'}`}>{text}</span>
                <Cursor cursorColor='#7375F0' />
                <br />
                <p className={`mt-4 text-center md:text-left md:text-center ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>
                    Freelancer oferecendo serviços de programação e design de conteúdo. <br /> Junte-se a mim abaixo e vamos começar a trabalhar.
                </p>
                <div className='inline-flex justify-center md:justify-start pt-4'>
                    <a href="https://www.instagram.com/rychaardryaan" target="_blank" rel="noopener noreferrer" className={`text-3xl mr-5 ${isDone ? 'text-indigo-500' : 'dark:text-white'}`}>
                        <FaInstagram />
                    </a>
                    <a href="https://wa.me/5561982727934" target="_blank" rel="noopener noreferrer" className={`text-3xl mr-5 ${isDone ? 'text-indigo-500' : 'dark:text-white'}`}>
                        <FaWhatsapp />
                    </a>
                    <a href="https://www.linkedin.com/in/rychard-ryan-9130931a6" target="_blank" rel="noopener noreferrer" className={`text-3xl mr-5 ${isDone ? 'text-indigo-500' : 'dark:text-white'}`}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className='pt-12 flex justify-center'>
                <div className='w-52 h-52 md:w-96 md:h-96 rounded-full bg-red-600'>
                    <img
                        src="https://drive.google.com/uc?export=view&id=12HwzSVgMBLPaG8KXcHPVb77O9YK5JWzL"
                        className="w-auto h-auto rounded-full"
                        alt="Sua imagem"
                    />
                </div>
            </div>
            <br />
            <div className='pt-6 flex justify-center'>
                <h1 className={`text-3xl md:text-4xl font-semibold ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>Sobre mim</h1>
            </div>
            <div className='flex flex-col justify-center items-center md:flex-row md:items-start'>
                <div className='w-full md:w-2/4'>
                    <h1 className={`text-center md:text-left pt-6 font-serif ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>
                        Olá, sou um Desenvolvedor Front-end apaixonado pelo mundo da programação e pelo poder da criação de experiências interativas e envolventes na web. Com anos de experiência, adquiri habilidades sólidas em uma variedade de tecnologias e frameworks que impulsionam o desenvolvimento web moderno.
                    </h1>
                </div>
            </div>
            <div className='pt-10 flex justify-center'>
                <h1 className={`text-3xl md:text-4xl font-semibold ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>Habilidades</h1>
            </div>
            <div className='pt-8 flex w-full justify-center items-center'>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-20'>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>HTML5</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1ufrxOaqmwI0q4qsQ5RDT1sN_scTFO9n9" alt="Imagem 1" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>CSS3</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1PaqvQEC8zL9NybJh2DiYsGXGdGmHDK82" alt="Imagem 2" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>JavaScript</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1MMY_qxncsvoJ8XZeMB5eXijtJMTsEm97" alt="Imagem 3" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>React</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1owx20QJDvzjz4E7KqBjPt4tWdwZ8XZwB" alt="Imagem 4" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>Redux</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1glWF6BFFRrdffW5qrZaOCRaYoy6oyR6V" alt="Imagem 5" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>Tailwind CSS</h1>
                        <img src="https://drive.google.com/uc?export=view&id=10_F6p67yLxTvCxknAQuTKLlKz16MLsI7" alt="Imagem 6" className='w-16 h-16 mx-auto' />
                    </div>
                    <div className='w-full h-24 text-center bg-gray-800 rounded-tl-2xl'>
                        <h1 className='text-center font-semibold text-indigo-500'>TypeScript</h1>
                        <img src="https://drive.google.com/uc?export=view&id=1m8uxqlrXsTGe_bRQF8L2HBWWIWuvJ7Yd" alt="Imagem 7" className='w-16 h-16 mx-auto' />
                    </div>
                </div>
            </div>
            <div className='pt-10 flex justify-center'>
                <h1 className={`text-3xl md:text-4xl font-semibold ${isDone ? 'text-gray-700' : 'dark:text-gray-200'}`}>Projetos</h1>
            </div>
            <div className='pt-8 flex justify-center items-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className='w-52 h-52 md:w-60 md:h-60 pb-1/1 relative group overflow-hidden mx-6 my-4'>
                            <a href="https://drive.google.com/uc?export=view&id=1FHq6pNmuuCsnkjsbI4fZc7CMFT8m95Hg" target="_blank" rel="noopener noreferrer">
                                <img src="https://drive.google.com/uc?export=view&id=1FHq6pNmuuCsnkjsbI4fZc7CMFT8m95Hg" alt={`Projeto ${index + 1}`} className='absolute object-cover w-full h-full transition-transform transform scale-100 group-hover:scale-110 rounded-md' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
