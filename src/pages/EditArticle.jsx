import CreateEditArticleForm from '../features/createEditArticle/CreateEditArticleForm';

function EditArticle({ articleData }) {
  return <CreateEditArticleForm articleToEdit={articleData} />;
}

export default EditArticle;
