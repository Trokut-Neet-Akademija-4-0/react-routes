import { useSearchParams, useParams, useLocation, Link } from 'react-router-dom';
import { useEffect } from 'react'

export const SinglePost = () => {

  /*
  * Why is my component rendering twice on useEffect with no arguments?
  * https://nnamdi.hashnode.dev/why-does-my-react-app-render-twice
  *
  */
  useEffect(() => {
    console.log("this shall render once on component mount event")
    return () => {
      console.log("this shall render right before component is unmounted")
    };
  }, []);
  const defaultTitle = "Dafault single post title"

  console.log("")
  console.log("")
  console.log("SinglePost starts here")
  console.log("title from props => ", defaultTitle);
  // console.log("article from props (Link) => ", article);
  const [searchParams] = useSearchParams();
  // [...searchParams].map(item =>{
  //   console.log("entry", item);
  // })
  const linkState = useLocation().state;
  const params = useParams();
  const hasSearchParams = searchParams && searchParams.size !== 0;
  console.log("searchParams", searchParams); // ▶ URLSearchParams {}
  console.log("linkState.article => ", linkState?.article); // ▶ URLSearchParams {}
  console.log("params", params); // ▶ URLSearchParams {}

  const articleTitle = linkState?.article ? linkState?.article?.title : defaultTitle;
  const articleContent = linkState?.article ? linkState?.article?.content : '';

  /**
   * How to use SearchParams and URL Params from react-router-dom?
   * https://ultimatecourses.com/blog/query-strings-search-params-react-router
   */

  return (
    <div className={'blog-post'}>
      <Link to={'/blog'}><button> ← Back to articles</button></Link>
      <h1>{articleTitle}</h1>
      {articleContent && <div>{articleContent}</div>}
      <hr style={{maxWidth: 300, marginLeft: 'auto', marginRight: 'auto'}}/>
      <div>Search params (UTM): <span style={{color: 'gold'}}>{hasSearchParams.toString()}</span>
          {hasSearchParams && [...searchParams].map((item,index) =>
            <h2 key={index}>{item[0]}: {item[1]}</h2>
          )}
        </div>
    </div>

  )
}
