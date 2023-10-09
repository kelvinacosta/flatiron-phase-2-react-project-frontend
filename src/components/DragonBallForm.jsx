import React,{useState} from "react";

const DragonBallForm = ({addDragonCard}) => {
    
    //Creates a form and initialize in the form database
    const [formData, setForm] = useState({
        name:"",
        description:"",
        avatar:""

    })
    //Handle changes using onchange event 
    const handleChange = (e) => {
        setForm({
            ...formData,[e.target.name]:e.target.value
        })
    }
    //Handles Submit button with a Post Method to create a new character for the Cards
    const handleSubmit = (e) => {
        e.preventDefault();
        //Create a new form
        const newFormData = {

            name: formData.name,
            description: formData.description,
            avatar: formData.avatar
        }

        // console.log(newFormData)
        //Fething data using POST Method
        fetch("https://backend-phase-2-project-0zsy.onrender.com/characters",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormData)
        })
        .then(response => response.json())
        .then(data => {
            addDragonCard(data);
            //Reset form
            setForm({
                name:"",
                description:"",
                avatar:""
            })

            alert("Submitted")
        })
        .catch(err=> console.error("Error Posting Cards!",err))

    }
    
    return (
        

        <div className="form-container">
            
        <form onSubmit={handleSubmit}>
            
            <h2>Create a Dragon Ball Card</h2>
            <input type="text" 
            name="name" 
            placeholder="Enter Character Name..." 
            className="inputText"
            onChange={handleChange}
            value={formData.name} //uses controlled value
            />
            
            <br />
            <textarea 
            type="text" 
            name="description" 
            placeholder="Enter Character Description..." 
            className="inputTextArea"
            onChange={handleChange}
            value={formData.description}
            />
            
            <br />
            <input 
            type="text" 
            name="avatar" 
            placeholder="Enter Character's Image URL..." 
            className="inputText"
            onChange={handleChange}
            value={formData.avatar} //uses controlled value
            />
            <br />
            <input type="submit" 
            name="submit" 
            className="submitButon"
            />
            

        </form>
        
        
        </div>
    
    )
}

export default DragonBallForm;