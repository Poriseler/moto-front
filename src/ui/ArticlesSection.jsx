import { getArticlesByCategory } from "../services/apiArticles"
import ArticleTile from "./ArticleTile"
// import { useArticlesByCategory } from '../hooks/useArticlesByCategory'
import { useEffect, useState } from "react"
function ArticlesSection({type}) {
    // const articles = [
    //     {
    //         'id':'1',
    //         'thumbnail':'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg',
    //         'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
    //     },
    //     {
    //         'id':'2',
    //         'thumbnail':'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg',
    //         'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem  ipsumLorem ipsum'
    //     },
    //     {
    //         'id':'3',
    //         'thumbnail':'https://image.cnbcfm.com/api/v1/image/107296478-1694015564259-Microlino.jpg?v=1694084005&w=1600&h=900',
    //         'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLo ipsum'
    //     },
    //     {
    //         'id':'4',
    //         'thumbnail':'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/jjslyagf8e3gcny2doyy',
    //         'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsu'
    //     }
    // ]
    
    // const { getArticlesByCategory, data} = useArticlesByCategory()
    // getArticlesByCategory({type}, 4)
    // console.log(data)
    
    const [articles, setArticles] = useState([])
    useEffect(()=> {
        getArticlesByCategory(type,4).then(data=> setArticles(data))
    }, [type])
    // getArticlesByCategory(type, 4).then(data=>{ setArticles(data)})
    
    // if (!articles) return (<div>Spinner</div>)
    return (
        <div className="w-[100%] md:w-[60%]  px-5">
            
            <div className=" flex flex-row flex-wrap gap-4 justify-between ">
                {articles?.map((article)=> <ArticleTile img={article.thumbnail} header={article.header} key={`${type}-${article.id}`} type='main-new'/>)}
            </div>
        </div>
    )
}

export default ArticlesSection
