function Footer(){
    return(
        <>
        <div className="footer" style={{display:"flex" , width:"100%", justifyContent:"space-evenly", backgroundColor:" rgb(32, 31, 31)", padding:"20px"}}>
            <div><img src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg" alt="" /></div>
            
            <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"10px", color:"white"}}>
                <div>KFC India</div>
                <div>Legal</div>
                <div>KFC FOOD</div>
                <div>support</div>
                <div>About KFC</div>
                <div>Terms and Conditions</div>
                <div>Get help</div>
                <div>KFC Care</div>
                <div>Priacy Policy</div>
                <div>Order Lookup</div>
                <div>Contact Us</div>
                <div>Careers</div>
                <div>Disclaimer</div>
                <div>Gift Card</div>
                <div>KFC Feedback</div>
                <div>Our Golden Past</div>
                <div>Caution Notice</div>
                <div>Nutrition & Allergen</div>
                <div>Privacy Policy</div>
                </div>
          <div><a href="" style={{color:"white"}}>Find a KFC</a></div>
          <div>
            <img src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg" alt="" />
            <img src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg" alt="" />
          </div>
        </div>
        </>
    )
}
export default Footer;