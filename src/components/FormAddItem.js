import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../store/actions"

const FormAddItem = () => {
    const dispatch=useDispatch();
    const [item , setItem ]=useState({
        id: "",
        name: "",
        slug:"",
        price: 0,
        description: "",
        image:""
    });

    const handleChange=event=>{
       
        setItem({...item , [event.target.name]:event.target.value})

    }

    const resetForme =()=>{
        setItem({
            name: "",
            price: 0,
            description: "",
            image:""

        });
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        dispatch(addItem(item));
        resetForme();

    }
    



    return(
        
        <Form onSubmit = {handleSubmit}>
            <Form.Group controlId="formBasicName">
                <Form.Label>Products Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Products Name" 
                name="name"
                value={item.name}
                onChange={(event)=>handleChange(event)} />
                
            </Form.Group>
        
            <Form.Group controlId="formBasicPrice">
                <Form.Label>Products Price</Form.Label>
                <Form.Control type="number" placeholder="Enter Products Price" 
                name="price"
                value={item.price}
                onChange={(event)=>handleChange(event)} />
            </Form.Group>

            <Form.Group controlId="formBasicDescription">
                <Form.Label>Products description</Form.Label>
                <Form.Control type="text" placeholder="Enter Products description" 
                name="description"
                value={item.description}
                onChange={(event)=>handleChange(event)}/>
            </Form.Group>

            <Form.Group controlId="formBasicImage">
                <Form.Label>Products image</Form.Label>
                <Form.Control type="link" placeholder="PasEnter Products image" 
                name="image"
                value={item.image}
                onChange={(event)=>handleChange(event)}/>
            </Form.Group>

            
            <Button variant="primary" type="submit">
             Submit
            </Button>
      </Form>
        








    );


};

export default FormAddItem;