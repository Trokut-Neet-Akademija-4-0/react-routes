
function Page (props){
  return(
    <div>
      <h1>{props?.title || 'Default page title'}</h1>
    </div>
  )
}

export { Page }
