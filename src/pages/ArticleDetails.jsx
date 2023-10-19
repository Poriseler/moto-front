
import { useParams } from "react-router-dom"

import { useArticleDetails } from "../hooks/useArticleDetails"
import ArticleDetailsLayout from "../ui/ArticleDetailsLayout"

function ArticleDetails() {
    const {slug} = useParams()
    const {articleData, isLoading} = useArticleDetails(slug)
   
    // const article = 
    //     {
    //         'article-id':'1',
    //         'photo':'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg',
    //         'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    //         'main_text': 'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem             ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem             ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum',
    //         'tags': [
    //             {
    //                 'tag_name': 'Honda',
    //                 'tag_slug': 'honda'
    //             },
    //             {
    //                 'tag_name': 'Nowe samochody',
    //                 'tag_slug': 'nowe-samochody'
    //             },
    //             {
    //                 'tag_name': 'Honda',
    //                 'tag_slug': 'honda'
    //             },
    //             {
    //                 'tag_name': 'Nowe samochody',
    //                 'tag_slug': 'nowe-samochody'
    //             },
    //             {
    //                 'tag_name': 'Honda',
    //                 'tag_slug': 'honda'
    //             },
    //             {
    //                 'tag_name': 'Nowe samochody',
    //                 'tag_slug': 'nowe-samochody'
    //             },
    //         ]
    //     }
    
    // const relatedArticles = {
    //     'related_articles': [
    //         {
    //             'header': 'Nowe regulacje FIA',
    //             'slug': 'nowe-regulacje-fia'
    //         },
    //         {
    //             'header': 'Kolejne punkty dla Red Bulla',
    //             'slug': 'kolejne-punkty-dla-redbulla'
    //         },
    //         {
    //             'header': 'Lorem ipsum doloret at something costam',
    //             'slug': 'nowe-regulacje-fia'
    //         },
    //         {
    //             'header': 'Aston Martin debiutuje z nowym DB12 Volante',
    //             'slug': 'nowe-regulacje-fia'
    //         },
    //     ]
    // }
    

    return (<>
       {!isLoading && (<ArticleDetailsLayout articleData={articleData} />)}
    </>
      ) 
                   
}

export default ArticleDetails
