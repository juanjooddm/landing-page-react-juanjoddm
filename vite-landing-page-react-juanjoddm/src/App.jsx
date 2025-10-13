import Card from "./Components/Card"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Jumbotron from "./Components/Jumbotron"
const App = () => {
const imageUrl1= "https://preview.redd.it/rank-from-the-best-to-worst-version-of-kd-v0-zz68r403lx5e1.jpg?width=640&crop=smart&auto=webp&s=5d9effdd529024a7dc8ce9f4a4980552f7e5f929"
const title1 =  "Kevin Durant (KD)"  
const text1 = "lorem20"
const imageUrl2= "https://i.pinimg.com/736x/58/2e/53/582e53a0ec4f9db5781eff02f573b077.jpg"
const title2= "Jason Tatum"
const text2= "Lorem20"
const imageUrl3= "https://dims.apnews.com/dims4/default/e8e6ef7/2147483647/strip/true/crop/2681x1787+0+0/resize/599x399!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F93%2F00%2F2ad95d16efadffc57067ab6f22c6%2F98b5338c397f4771b665d1d8544903b5"
const title3=" Stephen Curry"
const text3= " lorem20"
const imageUrl4= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Larry_Bird_layup.jpg/250px-Larry_Bird_layup.jpg"
const title4= "Larry bird"
const text4= "lorem20"

return (
        <div className="">

            <header className="header">
                <Navbar  />
            </header>
            <div className=" d-flex flex-column m-5 ">
                <div className="jumbo ">
                    <Jumbotron />
                </div>
                <div className="row cards d-flex flex-row g-5 ">
                    <Card  
                    imageUrl={imageUrl1}
                    title={title1}
                    text={text1}
                    />
                    <Card 
                    imageUrl={imageUrl2}
                    title={title2}
                    text={text2}
                    />
                    <Card
                    imageUrl={imageUrl3}
                    title={title3}
                    text={text3}
                    />

                    <Card 
                    imageUrl={imageUrl4}
                    title={title4}
                    text={text4}
                    />
                </div>
            </div>
            <footer className="footer">
                <Footer />
            </footer>
        </div>
    )
}

export default App