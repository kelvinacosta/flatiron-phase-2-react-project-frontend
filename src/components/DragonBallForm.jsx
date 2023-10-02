import React from "react";

const DragonBallForm = () => {
    return (
        <div className="containerForm">
        <form>
            <h2>Create a Dragon Ball Card</h2>
            <input type="text" name="name" placeholder="Enter Character Name..." className="inputText"/>
            <br />
            <textarea type="text" name="name" placeholder="Enter Character Description..." className="inputTextArea"/>
            <br />
            <input type="text" name="image" placeholder="Enter Character's Image URL..." className="inputText"/>
            <br />
            <input type="submit" name="submit" />
            

        </form>
        
        </div>
    )
}

export default DragonBallForm;