import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Offercards from './common/OfferCards';
import "./Offers.css"

function Offers(){
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <div className='parent-box'>
            <div style={{display:"flex", justifyContent:"space-between", width:"80%",margin:"auto",paddingTop:"80px"}}>
                <div>
                    <h1 style={{color:"white"}}>EXCLUSIVE OFFERS FOR YOU</h1>
                </div>
                <div>
                  <a href="" style={{color:"white"}}>{`view all deals --->`}</a> 
                </div>
            
                
            </div>
            <div style={{width:"80%", margin:"auto"}}>
                 <Carousel responsive={responsive}  >
    <div>
    <Offercards id={1} image={"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79"} title={"Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users."} discription={"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."}/>
    </div>
    <div>
    <Offercards id={1} image={"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79"} title={"Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users."} discription={"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."}/>
    </div>
    <div>
    <Offercards id={1} image={"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79"} title={"Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users."} discription={"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."}/>
    </div>
    <div>
    <Offercards id={1} image={"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79"} title={"Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users."} discription={"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."}/>
    </div>
    <div>
    <Offercards id={1} image={"https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/xl/CHKZINGER.jpg?ver=49.79"} title={"Free Chicken zinger on a cart value of 499 or above on first order. Only for registered users."} discription={"1 Pc free Chicken Zinger on a cart value of 499 or above on first order. Only for registered users."}/>
    </div>
  </Carousel>;
        </div>
        </div>

   
        
    )
}

 

  export default Offers