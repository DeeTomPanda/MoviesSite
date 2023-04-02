import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { 
	Box,
	Flex,
	Center,
	Image,
	Heading,
	Text,
	Tooltip
} from '@chakra-ui/react'
import HorizontalScroll from 'react-horizontal-scrolling'
import { useNavigate } from 'react-router-dom'

function Home() {
  
const [movies,setMovies]=useState([])
const navigate=useNavigate()

useEffect(()=>{
	  axios.get("https://api.tvmaze.com/search/shows?q=all")
	  .then((res)=>{
		  setMovies(res.data)
	  	  },err=>console.log(err))
  	},[])

const goToDetails=(v)=>{
	navigate('/details',{state:v})
}

return (
    <Box w='100vw' h='100vh' display='flex' flexDirection='column' gap='5' 
     bgGradient='linear(to-r,#efefbb, #d4d3dd)'>
      <Heading ml='5vw' mt={['4vh','2vh']} size={['md','md','lg']}>DT Cinemas</Heading>
      <Text fontSize='xl' alignSelf='center' mt={['25%','5%']} mb='0%'>Shows Running Now</Text>
      <Box w='100vw' bg='transparent' h={['40vh','50vh']} margin='auto'>
	  {
	     movies.length!=0?( 
	       <HorizontalScroll>
	         {
		     movies.map((v,i)=>{
		        return(
				<Tooltip key={i} label={v.show.name}>
				   <Image key={i} m='2.5vh' h={['35vh','45vh']} w={['25vh']} objectFit='contain' 
				    alt="No image" onClick={()=>goToDetails(v)} 
				    src={v.show.image?v.show.image.medium:''}
				    fallbackSrc={'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/'+
					'no-image-available-icon-6.png'}/>
				</Tooltip>)
		      })
		 }
      </HorizontalScroll>):null}
    </Box>
  </Box>
  )
}

export default Home
