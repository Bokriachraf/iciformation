import React, {useEffect, useState} from 'react';

export class LoginFormC extends React.Component {
    state={
        email:'',
        password:''
    }
// initialisation : DidMount
// mise à jour    : DidUpdate                     
// Fin            : WillUnmount              
componentDidMount(){
    console.log('component Did Mount');
}
componentDidUpdate(prevProps, prevState){
    if(prevState.email !== this.state.email)
    console.log('class component email Did Update');
}
componentWillUnmount(){
    console.log('component Will Unmount');
}

    handleEmail=(e) => {
        this.setState({
            email:e.target.value
        })
    }
    handlePassword=(e) => {
        this.setState({
            password:e.target.value
        })
    }
    render(){
        return <div>
        <h2>Class exemple</h2>
<input value={this.state.email} onChange={this.handleEmail} placeholder='email'/>
<input value={this.state.password} onChange={this.handlePassword} placeholder='password'/>
            
        </div>
    }
}

export function LoginFormF(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    
    
    useEffect(()=>{
        console.log('function component did mount');
         return() => {
            console.log('function component Will Unmount');
         }
    },[])
    useEffect(()=>{
        if(email === '')
        return;
        console.log('function component email did update');
    },[email])

    function handleEmail(e){        
        setEmail(e.target.value);      
    }
    function handlePassword(e){        
        setPassword(e.target.value);      
    }
    return <div>
    <h2>Function exemple</h2>
    <input value={email} onChange={handleEmail} placeholder='email'/>
    <input value={password} onChange={handlePassword} placeholder='password'/>
    </div>
}