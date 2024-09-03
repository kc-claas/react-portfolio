import { useState } from "react"


function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [completion, setCompletion] = useState(true)

    function handleFormSubmit(event) {
        event.preventDefault()
        if (name === '' || email === '' || comment === '') {
            setCompletion(false)
            return
        }

        console.log({name: name, email: email, comment: comment})
        setName('')
        setEmail('')
        setComment('')
        setCompletion(true)
        return
    }

    function handleOnChange(event) {
        const { name, value} = event.target
            if (name === 'name') {return setName(value)}
            else if (name === 'email') {return setEmail(value)}
            else {return setComment(value)}
    }

    function handleFocusOut(event) {
        const {value} = event.target
            if (value === '') {setCompletion(false)}
            else {setCompletion(true)}
    }

    return (
        <form className='form col-4' onSubmit={handleFormSubmit}>
            <h2>Contact</h2>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                className="form-control"
                value={name} 
                name="name" 
                type="text" 
                placeholder="name"
                onChange={handleOnChange}
                onBlur={handleFocusOut}
                />   
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                className="form-control"
                value={email} 
                name="email" 
                type="email" 
                placeholder="email"
                onChange={handleOnChange}
                onBlur={handleFocusOut}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Comments</label>
                <textarea rows="3"
                className="form-control"
                value={comment} 
                name="comments" 
                placeholder="comments"
                onChange={handleOnChange}
                onBlur={handleFocusOut}
                />
            </div>
                <button className="btn" type="submit">Submit</button>                              
            {(completion === false) ? (<p className="form-completion form-text">Please fill out all fields</p>) : (<></>)
            }
        </form>
    )
}

export default Contact