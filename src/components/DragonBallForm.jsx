import React,{useState} from "react";

const DragonBallForm = ({addDragonCard}) => {
    
    const [formData, setForm] = useState({
        name:"",
        description:"",
        avatar:""

    })
    const handleChange = (e) => {
        setForm({
            ...formData,[e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Create a new form
        const newFormData = {

            name: formData.name,
            description: formData.description,
            avatar: formData.avatar
        }

        // console.log(newFormData)

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
        <div className="containerForm">
        <form onSubmit={handleSubmit}>
            <h2>Create a Dragon Ball Card</h2>
            <input type="text" 
            name="name" 
            placeholder="Enter Character Name..." 
            className="inputText"
            onChange={handleChange}
            value={formData.name}
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
            value={formData.avatar}
            />
            <br />
            <input type="submit" 
            name="submit" />
            

        </form>
        
        </div>
    )
}

export default DragonBallForm;