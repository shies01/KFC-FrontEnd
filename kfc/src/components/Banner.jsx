import "./Banner.css"
function Banner (){
    return (
        <>
        <div id="banner-cnt">
            <div>
                <h3>
                LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN
                </h3>
            </div>
            <div>
                <button>Start Order</button>
            </div>
        </div>
        <div className="img-cnt">
            <img src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=649&fit=fill&fm=webp" alt="banner-img"  />
        </div>
        </>
    )
}
export default Banner