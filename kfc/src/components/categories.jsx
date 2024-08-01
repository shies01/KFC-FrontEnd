import Cards from "./common/cards"
import "./categories.css"
function Categories(){
    return(<>
    <div className="categories">
        <h1>
            Browse Categories
            <span className="hr-cnt">
                <hr />
            </span>
        </h1>
    </div>
    <div className="card-cnt">
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT289.jpg?ver=49.77" title = "INTERNATIONAL BURGER FEST"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT287.jpg?ver=49.77" title = "MATCH DAY COMBOS"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT228.jpg?ver=49.77" title = "VALUE LUNCH SPECIALS"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=49.77" title = "BOX MEALS"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT99.jpg?ver=49.77" title = "BURGERS"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=49.77" title = "CHICKEN BUCKETS"/>
    <Cards image = "https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT213.jpg?ver=49.77" title = "RICE BOWLS"/>
    <Cards image = "https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg" title = "VIEW ALL MENU"/>
    </div>
     
    </>)
}
export default Categories