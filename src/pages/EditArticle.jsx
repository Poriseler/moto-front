
import CreateEditArticleForm from "../ui/CreateEditArticleForm"

function EditArticle({articleData}) {

    return (
        <CreateEditArticleForm articleToEdit={articleData}/>
    )
}

export default EditArticle
