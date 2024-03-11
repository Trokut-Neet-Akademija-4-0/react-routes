import { Link, Outlet, useParams, useSearchParams } from 'react-router-dom'
import { articleList } from './articlesList.jsx'

const titleStyling = {
  padding: "5px 10px",
  background: "#fff",
  color: 'black',
  textAlign: 'left',
  borderRadius: 8,
  display: 'flex',
  justifyContent: 'space-between'
}

function Blog () {
  /**
   * HOW TO USE SEARCH AND URL PARAMS with react-router-dom
   * https://ultimatecourses.com/blog/query-strings-search-params-react-router
   */
  const [searchParams] = useSearchParams();
  const params = useParams();
  const objectParams = Object.fromEntries([...searchParams]);
  console.log("UTM objectParams => ", objectParams)
  console.log("URL params => ", params);
  const showArticleList = params && Object.keys(params).length === 0;

  return (
    <div>
      <h5>Has params: <span style={{color: 'gold'}}>{(!showArticleList).toString()}</span></h5>
      <h3 style={{textTransform: 'uppercase'}}>This is a great Blog</h3>
      {showArticleList ? (
        <>
          <ul style={{margin: 10, padding:  0}}>
            {articleList.map((item, index) => {
              return (
                <div key={index}>
                  <Link to={`/blog/${item.id}/${item.utm || ''}`} state={{article: item}}>
                    <h2 style={titleStyling} key={index} >
                      <span>{item.title}</span>
                      <span>→</span>
                    </h2>
                  </Link>
                </div>
              )
            })
            }
          </ul>
        </>
      ):(
        <Outlet />
      )}
    </div>
  )
}

export { Blog };
