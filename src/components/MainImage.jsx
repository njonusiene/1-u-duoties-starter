const MainImage = ({women, title, alt}) => {

    return (
      <div className="image">
          <img src={women} alt={alt} />
          <p>{title}</p>
      </div>
    )
  }
  
  export default MainImage