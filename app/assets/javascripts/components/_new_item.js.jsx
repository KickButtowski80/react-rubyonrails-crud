const NewFruit = (props) => {
  let formFields = {}
 
  return(
    <form 
    onSubmit={ 
        (e) => {  
        
        props.handleFormSubmit(formFields.name.value, formFields.description.value);
        e.target.reset();
       
        }
     }>
     <div className="form-group">
         <input className="form-control" ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
         <br />
         <input className="form-control" ref={input => formFields.description = input} placeholder='Enter a description' />
         <br />
         <button className = 'btn btn-secondary'>Submit</button>
      </div>
    </form>
  )
}