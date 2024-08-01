import "./offerCards.css"

function Offercards(props) {
    const { image, title, description, id } = props;
    return (
        <>
            <div key={id} className="offercardCnt">
                        <img src={image} alt={title} />
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <div className="bottom-cnt">
                            <a href="#" style={{color:"white"}}>View Details</a>
                            <button>Apply Offer</button>
                        </div>
                    </div>
        </>
    );
}

export default Offercards;
