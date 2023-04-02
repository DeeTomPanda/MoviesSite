import React from 'react'
import { useFormik } from 'formik'
import { 
	Input,
	Button,
	FormControl,
        FormLabel,
        FormErrorMessage,
        FormHelperText,
        useToast
} from '@chakra-ui/react'
const Form=({setIsOpen})=>{

	const toast=useToast()
	const formik=useFormik({
		initialValues:{
			Name:'',
			Age:'',
			date:'',
			Contact:'',
			No_Ticket:''},
		onSubmit:(val)=>{
			alert(JSON.stringify(val))
			toast({
				title:"Tickets Booked!",
				description:"Booking Successful",
				duration:3000})
			Object.keys(val).map(v=>localStorage.setItem(v,JSON.stringify(val[v])))
			setIsOpen(false)
		}
	})

	return(
		<form onSubmit={formik.handleSubmit}>
		   <FormControl isRequired>
		      <FormLabel htmlFor='Name'>Name</FormLabel>
		      <Input 
		       name='Name'
		       type='text'
		       onChange={formik.handleChange}
		       value={formik.values.Name}/>
		      <FormLabel  htmlFor='Age'>Age</FormLabel>
		      <Input 
		       name='Age'
		       type='number'
		       onChange={formik.handleChange}
		       value={formik.values.Age}/>
		      <FormLabel htmlFor='date'>Date</FormLabel>
		      <Input 
		       name='date'
		       type='date'
		       onChange={formik.handleChange}
		       value={formik.values.date}/>
		      <FormLabel htmlFor='Contact'>Contact</FormLabel>
		      <Input 
		       name='Contact'
		       type='number'
		       onChange={formik.handleChange}
		       value={formik.values.Contact}/>
		      <FormLabel htmlFor='No_Ticket'>No Tickets</FormLabel>
		      <Input 
		       name='No_Ticket'
		       type='number'
		       onChange={formik.handleChange}
		       value={formik.values["No_Ticket"]}/>
		       
		   </FormControl>		    
		   <Button mt='2vh' type='submit'>Book</Button>
		</form>)
}

export default Form
