import React, { useState, useRef } from "react"
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = () => { 
    const [formValues, setFormValues] = useState({
        name: '',
        priceUnitary: '',
        size: '',
        description: '',
    })

    const inputFileRef = useRef()

    const handleCHange = (event) => {
        const { name, value } = event.target
        console.log(name, value)

        setFormValues({ ...formValues, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
        console.log(inputFileRef.current.files)
    }
    return (
        <form onSubmit={handleSubmit}>
        <Field>
            <Label>Name</Label>
            <Control>
                <Input placeholder= "Text input" 
                name="name"
                value={formValues.name}
                onChange={handleCHange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Size</Label>
            <Control>
                <Input placeholder= "Text input" 
                name="size"
                type="number"
                value={formValues.size}
                onChange={handleCHange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Unitary price</Label>
            <Control>
                <Input placeholder= "Text input" 
                name="priceUnitary"
                type="number"
                value={formValues.priceUnitary}
                onChange={handleCHange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Description</Label>
            <Control>
                <Input placeholder= "Text input" 
                name="description"
                value={formValues.description}
                onChange={handleCHange}
                />
            </Control>
        </Field>
        <Field>
            <Label>Image</Label>
            <Control>
                <Input type= "file" ref={inputFileRef}/>
            </Control>
        </Field>
        <Button type="submit" color="primary">Save</Button>
      </form>
    )    
}

export default Form