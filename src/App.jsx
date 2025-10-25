import Contact from "./Components/NewComponents";
import img from '../src/assets/images/img1.jpg';
import image1 from './assets/images/mahim.jpg'
// import image2 from './assets/images/sabbir.jpg'
function Form(){
    return(
        <>
        <Contact
        img={image1}
        img1={img}
        name="adnan dev"
        proffesion_name="software engineer"
        text="Hi,this is adnan.I am software enginner.Highly exprience at telwind,react,nodejs,express js"
        />
        
        </>
    )
}
export default Form