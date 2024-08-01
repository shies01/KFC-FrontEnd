import "./Cards.css"
function Cards(props){
    let {image,title} = props;
    return(<>
    <div className="card">
    <img src = {image} />
    <h4>{title}</h4>
    </div>
    
    </>)
}

export default Cards