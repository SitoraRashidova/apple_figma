import './App.scss'
import Header from "./components/header/Header"
import Product from './components/products/Product'
import Hero from './components/hero/Hero'

function App() {
  return (
    <div className='app'>
      <Header/>
      <Hero
        bg="gold"
        title={"iPhone 16 Pro"}
        cl="#fff"
        button1={"Learn more"}
        button2={"Buy"}
        url={"https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg"}
        desc={"Hello, Apple Intelligence."}   
        items={["Home", "about"]}   
      />
      <Hero
        bg="dodgerblue"
        title={"iPhone 16"}
        button1={"Learn more"}
        button2={"Buy"}
        cl="#fff"
        url={"https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg"}
        desc={"Hello, Apple Intelligence."}
        items={["Home", "about", "contact"]}
      />
      <Hero
        bg="dodgerblue"
        images={"	https://www.apple.com/v/ipad-air/x/images/overview/hero/hero_eyebrow_logo__ee6zpqgwfxm6_large.png"}
        button1={"Learn more"}
        button2={"Buy"}
        cl="#fff"
        url={"https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall.jpg"}
        desc={"Two sizes. Faster chip. Does it all."}
        items={["Home", "about", "contact"]}
      />
      <Hero
        bg="dodgerblue"
        title={"AirPods 4"}
        button1={"Learn more"}
        button2={"Buy"}
        cl="#fff"
        url={"https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"}
        desc={"Iconic. Now supersonic.Available with Active Noise Cancellation."}
      />
    </div>
  )
}

export default App