//should start using functions for components since its getting popular and its cleaner.

//PascalCasing
function Message(){
    //JSX: JavaScript XML
    const name = "";
    if(name)
        return <h1>Hello {name}! </h1>;
    return <h1>Hello World!</h1>

}

export default Message;