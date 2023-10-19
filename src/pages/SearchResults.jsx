import ArticleTile from "../ui/ArticleTile"

function SearchResults() {
        const articles = [
        {
            'article-id':'1',
            'photo':'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
        },
        {
            'article-id':'2',
            'photo':'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem  ipsumLorem ipsum'
        },
        {
            'article-id':'3',
            'photo':'https://image.cnbcfm.com/api/v1/image/107296478-1694015564259-Microlino.jpg?v=1694084005&w=1600&h=900',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLo ipsum'
        },
        {
            'article-id':'4',
            'photo':'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/jjslyagf8e3gcny2doyy',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsu'
        },
        {
            'article-id':'5',
            'photo':'https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1666008987698.jpg',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum'
        },
        {
            'article-id':'6',
            'photo':'https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem  ipsumLorem ipsum'
        },
        {
            'article-id':'7',
            'photo':'https://image.cnbcfm.com/api/v1/image/107296478-1694015564259-Microlino.jpg?v=1694084005&w=1600&h=900',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLo ipsum'
        },
        {
            'article-id':'8',
            'photo':'https://images.drive.com.au/driveau/image/upload/c_fill,f_auto,g_auto,h_1080,q_auto:eco,w_1920/v1/cms/uploads/jjslyagf8e3gcny2doyy',
            'header':'Lorem ipsum Lorem ipsumLorem ipsumLorem ipsu'
        }
    ]

    return (
        <div className="w-[95%] md:w-[60%] ">
            <div className="my-7 md:mx-10 text-xl md:text-3xl text-center">
                Wyniki wyszukiwania dla frazy: 
                <span className="block font-medium">XYZ</span>
            </div>
            {
                articles.map(article => <ArticleTile img={article.photo} header={article.header} key={article['article-id']} type='list'/>)
            }
        </div>
            
    )
}

export default SearchResults