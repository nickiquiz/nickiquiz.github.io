const Title = ({title, subtitle, banner}) => {
    return (
        <div>
            <h1>{title}</h1>
            <img src={banner} alt="yas" width="100%" height="auto" className= "banner"/>
            <p>{subtitle}</p>
        </div>
    )
}

export default Title