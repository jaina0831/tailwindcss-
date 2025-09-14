import { motion } from "framer-motion";
import Scrolltrigger from "../components/Scrolltrigger"
import banners from "../json/banner.json"
function Moviepage() {
   const typingContainer = {
      hidden: { opacity: 0},
      show: { 
        opacity: 1,
        transition:{
          staggerChildren: 0.14,
        }}
    }
    const typingText = {
      hidden: { opacity: 0, y:"-20px"},
      show: { 
        opacity: 1, 
        y:"0",
        transition:{
          ease:'easeInOut',
        }
      }
    }

   return (
      <div>
         <Scrolltrigger banners={banners}/>

         <div style={{height:"1000px",backgroundColor:"yellow"}}>
            11
         </div>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"400px",backgroundColor:"red"}}> 
          <motion.h1 variants={typingContainer} initial="hidden" whileInView="show">
          {
            Array.from("New Products").map((word,i) => (
            <motion.span key={i} variants={typingText}>{word}</motion.span>
            ))
          }
        </motion.h1>

      </div>
         
      </div>
      
      
       
   );
}

export default Moviepage;