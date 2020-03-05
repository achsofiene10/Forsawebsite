import React from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';




export default class Signin extends React.Component{
  constructor(props){
    super(props);
    this.login=this.login.bind(this)

    this.state={email :'',
      password:'',
    };
    this.usernameChange=this.usernameChange.bind(this)
    this.passwordChange=this.passwordChange.bind(this)
    this.login=this.login.bind(this)
    this.Signup=this.Signup.bind(this)

    }
  componentDidMount(){
    this.props.history.push('/'); 
  }

  login(event){
    event.preventDefault();
    const remember=this.refs.remember.checked;
    console.log(remember)
    const obj = {
        email : this.state.email,
        password :this.state.password
  };
  console.log(obj);
  axios.post('http://localhost:3000/user/login', obj)
      .then(res => {console.log(res.data)
      if(res.status===200)
    {        
      this.props.history.push('/acceuil'); 
      if(remember){
      sessionStorage.setItem('token',res.data.token);}
      else {
        localStorage.setItem('token',res.data.token);
      }
      this.props.Login();
    }});
  
  }
  usernameChange(event){
    this.setState({email:event.target.value})
  }
  passwordChange(event){
    this.setState({password:event.target.value})
  }
  Signup(event){
    console.log(this.props)
    event.preventDefault();
    const fullname=this.refs.fullname.value;
    const password=this.refs.password.value;
    const password2=this.refs.password2.value;
    const country=this.refs.country.value;
    const email=this.refs.mail.value;
    const category=this.refs.category.value;
    const image="https://f0.pngfuel.com/png/312/283/man-face-clip-art-png-clip-art-thumbnail.png"
    if (!fullname || !country || !email || !password || !password2 ){
        alert("remplir tous les champs");
    }
    else if (password!==password2){
      alert("mot de passe doit etre identiques")
    }
    else {
      const obj={
        'image':image,
        'email':email,
        'country':country,
        'Category':category,
        'fullname':fullname,
        'password':password
      }
      console.log(obj)
      axios.post('http://localhost:3000/user/signup', obj)
      .then(res => {console.log(res.data,res.status)
      if (res.status===201){
        alert("User created");
        this.props.Login();
        this.props.history.push('/acceuil'); 
      }
      else{
        alert("Verifier vos données ")
      }
      }).catch(err=>console.log(err));
    }    
  }

    render(){
        return (
            <div>
       	 <div className="sign-in" >
		<div className="wrapper">
            <div className="sign-in-page">
          <div className="signin-popup">
            <div className="signin-pop">
              <div className="row">
                <div className="col-lg-6">
                  <div className="cmp-info">
                    <div className="cm-logo">
                      <img src="images/cm-logo.png" alt="" />
                      <p>Workwise,  is a global freelancing platform and social networking where businesses and independent professionals connect and collaborate remotely</p>
                    </div>{/*cm-logo end*/}	
                    <img src="images/cm-main-img.png" alt="" />			
                  </div>{/*cmp-info end*/}
                </div>
                <div className="col-lg-6">
                  <div className="login-sec">
                    <ul className="sign-control">
                      <li data-tab="tab-1" className="current" ><a href="#" >Sign in</a></li>				
                      <li data-tab="tab-2"><a href="#" >Sign up</a></li>				
                    </ul>			
                    <div className="sign_in_sec current" id="tab-1">
                      <h3>Sign in</h3>
                      <form>
                        <div className="row">
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="text" name="username" onChange={this.usernameChange} placeholder="Username" />
                              <i className="la la-user" />
                            </div>{/*sn-field end*/}
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="sn-field">
                              <input type="password" name="password" onChange={this.passwordChange} placeholder="Password" />
                              <i className="la la-lock" />
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <div className="checky-sec">
                              <div className="fgt-sec">
                                <input ref="remember" type="checkbox" name="cc" id="c1" />
                                <label htmlFor="c1">
                                  <span />
                                </label>
                                <small>Remember me</small>
                              </div>{/*fgt-sec end*/}
                            </div>
                          </div>
                          <div className="col-lg-12 no-pdd">
                            <button onClick={this.login} type="submit" value="submit">Sign in</button>
                          </div>
                        </div>
                      </form>
                      <div className="login-resources">
                        <h4>Login Via Facebook</h4>
                        <ul>
                          <li><Link to='#'  className="fb"><i className="fa fa-facebook" />Login Via Facebook</Link></li>
                        </ul>
                      </div>{/*login-resources end*/}
                    </div>{/*sign_in_sec end*/}
                    <div className="sign_in_sec" id="tab-2">
                      <div className="dff-tab current" id="tab-3">
                        <form >
                          <div className="row">
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="name" ref="fullname" placeholder="Full Name" />
                                <i className="la la-user" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="email" name="mail" ref="mail" placeholder="Email" />
                                <i className="la la-user" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="country" ref="country" placeholder="Country" />
                                <i className="la la-globe" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <select ref="category">
                                  <option>User</option>
                                  <option>Company</option>
                                </select>
                                <i className="la la-dropbox" />
                                <span><i className="fa fa-ellipsis-h" /></span>
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="password" ref="password" placeholder="Password" />
                                <i className="la la-lock" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="repeat-password" ref="password2" placeholder="Repeat Password" />
                                <i className="la la-lock" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="checky-sec st2">
                                <div className="fgt-sec">
                                  <input type="checkbox" name="cc" id="c2" />
                                  <label htmlFor="c2">
                                    <span />
                                  </label>
                                  <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                </div>{/*fgt-sec end*/}
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <Link to="/acceuil"><button onClick={this.Signup} value="submit">Get Started</button></Link>
                            </div>
                          </div>
                        </form>
                      </div>{/*dff-tab end*/}
                      <div className="dff-tab" id="tab-4">
                        <form>
                          <div className="row">
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="company-name" placeholder="Company Name" />
                                <i className="la la-building" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="text" name="country" placeholder="Country" />
                                <i className="la la-globe" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="password" placeholder="Password" />
                                <i className="la la-lock" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="sn-field">
                                <input type="password" name="repeat-password" placeholder="Repeat Password" />
                                <i className="la la-lock" />
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <div className="checky-sec st2">
                                <div className="fgt-sec">
                                  <input type="checkbox" name="cc" id="c3" />
                                  <label htmlFor="c3">
                                    <span />
                                  </label>
                                  <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                </div>{/*fgt-sec end*/}
                              </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                              <button type="submit" value="submit">Get Started</button>
                            </div>
                          </div>
                        </form>
                      </div>{/*dff-tab end*/}
                    </div>		
                  </div>{/*login-sec end*/}
                </div>
              </div>		
            </div>{/*signin-pop end*/}
          </div>{/*signin-popup end*/}
          <div className="footy-sec">
            <div className="container">
              <ul>
                <li><a  >Help Center</a></li>
                <li><a >About</a></li>
                <li><a  >Privacy Policy</a></li>
                <li><a  >Community Guidelines</a></li>
                <li><a  >Cookies Policy</a></li>
                <li><a  >Career</a></li>
                <li><a >Forum</a></li>
                <li><a  >Language</a></li>
                <li><a  >Copyright Policy</a></li>
              </ul>
              <p><img src="images/copy-icon.png" alt="" />Copyright 2019</p>
            </div>
          </div>{/*footy-sec end*/}
        </div>
        </div>
        </div>
        </div>
      
      
    
        )
    }
}