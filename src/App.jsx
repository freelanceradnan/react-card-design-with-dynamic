import Card from './Components/NewComponents'
import img1 from './assets/images/img1.jpg'
import img from './assets/images/download.jpg'
function CardDesign(){
 return(
  <>
  <Card
  img={img}
  day="One"
  post="One"
  title_one="Read"
  title_two="Views"
  paragraph='This is my first card'
  title_three="Comments"
  paragraph_one="120"
  paragraph_two='420'
  paragraph_three='50'
  />

  <Card
  img={img1}
  day="Two"
  post="Two"
  title_one="Read"
  title_two="Views"
  paragraph='This is my secound card'
  title_three="Comments"
  paragraph_one="310"
  paragraph_two='910'
  paragraph_three='96'
  />
  </>
 )
}
export default CardDesign