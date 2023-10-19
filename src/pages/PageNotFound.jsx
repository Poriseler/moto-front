import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-300 to-blue-300">
            <h1 className="text-[5rem] md:text-[9rem] text-center leading-[0.97] text-slate-600">
                OOPS! <span className="block text-[1.3rem] md:text-[2rem]">Nie ma takiej strony.</span>
            </h1>
            <buton onClick={() => navigate('/')} className='bg-slate-600 mt-7 text-white  text-base md:text-lg py-3 px-5 rounded-full font-bold hover:bg-slate-800 transition-all duration-300'>Strona główna</buton>
        </div>
    )
}

export default PageNotFound
