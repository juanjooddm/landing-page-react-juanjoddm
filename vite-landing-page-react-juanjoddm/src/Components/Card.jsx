function Card(props) {

    
    return (
        <div className=" col-xl-3 col-lg-3 col-md-3 col-xs-12">

            <div className="card b-1 ">
                <div className="img ratio ratio-1x1">

                <img className="ratio ratio-1x1" src={props.imageUrl} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">votar</a>
                </div>
            </div>
        </div>
    )
}

export default Card