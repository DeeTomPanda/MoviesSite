import React from 'react'
import {
	Box,
	Text,
	Heading,
	Card, 
	CardHeader, 
	CardBody, 
	CardFooter,
	HStack,
	VStack,
	Stack,
	Image,
	Badge,
	Button,
	Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'
import Form from './Form'
import './../styles/App.scss'

const Details=()=>{

	const data=useLocation()
	const movieDetails=data.state
	const [isOpen,setIsOpen]=React.useState(false)


	return(
	        <Box className='container' bgGradient='linear(to-r, #fdc830, #f37335)'>
		<Box display='flex' m='0' flexDirection='column' h='100vh' w='100vw'>
		   <Heading ml='5vw' mt={['4vh','2vh']} size={['md','md','lg']}> DT Cinemas </Heading>
		   <Box display='flex'  w={'80vw'} margin='auto' bg='#fff'>
		      <Card h='inherit' w='inherit' >
		         <CardHeader>
			    <HStack w='inherit'  align='flex-start' spacing='2' justify='space-between'>
		               <Stack spacing={['2','5']}>
			          <Text fontSize={['xl','3xl']}>{movieDetails.show.name}</Text>
		                  <Stack direction={['column','row']}>
		                     {movieDetails.show.genres.map(v=><Badge size={['xs','lg']} fontSize={['xs','md']}>{v}</Badge>)}
		                  </Stack>
		               </Stack>
			       <Image h={['15vh','20vh']} objectFit='contain'  
		                src={movieDetails.show.image?movieDetails.show.image.medium:''}
		                fallbackSrc={'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/'+
                                              'no-image-available-icon-6.png'}/> 
		           </HStack>
		         </CardHeader>
		         <CardBody>
		            <Text fontSize={['sm','md']}>{movieDetails.show.summary.replace(/<[^>]*>/gi,'')}</Text>
		         </CardBody>
		         <CardFooter>
		            <HStack w='80vw' align='center' justify='space-between' >
		               <Text>{movieDetails.show.rating.average?`Rating:${movieDetails.show.rating.average}/10`:'Unrated'}</Text>
		               <Button onClick={()=>setIsOpen(true)} variant={['outline','ghost']} size={['sm','md']}>
		                  Book
		               </Button>
		            </HStack>
		         </CardFooter>
		      </Card>
		   </Box>
		  <Modal isCentered isOpen={isOpen} onClose={()=>setIsOpen(false)}>
		     <ModalOverlay/>
		     <ModalContent>
		        <ModalHeader>
		           <Text>Book Tickets</Text>
		           <Badge size='sm'>{movieDetails.show.name}</Badge>
		        </ModalHeader>
		        <ModalBody>
		           <Form setIsOpen={setIsOpen}/>
		        </ModalBody>
		    </ModalContent>
		</Modal>
	     </Box>
	     </Box>)
}

export default Details
