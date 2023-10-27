

function ArticleTile({img, header, type, slug}) {
    const styles = {
        'hero': 'mt-3 ',
        'main-new': ' w-[100%] md:max-w-[47%] mt-4' ,
        'list': 'flex flex-col md:flex-row items-center  mb-4 md:mb-8'
        
    }

    const stylesImg = {
        'hero': 'w-[100%]',
        'main-new': 'min-h-[15rem] md:h-[18rem] w-[100%] md:w-[100%] ',
        'list': 'w-[100%] md:w-[14rem] h-auto md:h-[9rem]'
    }
 
    const stylesText = {
        'hero': 'bg-white md:bg-slate-400 text-black md:text-white text-lg md:text-3xl opacity-75 px-[1rem] md:px-[3rem]',
        'list': 'w-[100%] md:w-[60%]'
    }


    return (
        <div className={`${styles[type]}`}>
                <a  href={`http:\\\\127.0.0.1:5173\\artykuly\\${slug}`}>
                    <img src={img}  className={`${stylesImg[type]} object-fill object-center`}/>
                </a>
                <h2 className={`${stylesText[type]} text-justify text-lg font-medium px-5 py-2 line leading-snug`}>
                    <a  href={`http:\\\\127.0.0.1:5173\\artykuly\\${slug}`}>
                        {header}
                    </a>
                </h2>
        </div>
    )
}

export default ArticleTile
