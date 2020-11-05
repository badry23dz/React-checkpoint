import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      

      <div className="container"> 

        <div className="row">

          <div className="col-lg-3"></div>

            <div className="col-lg-6">
            <div id="ui">
              <h1>REGISTRATION FORM</h1>
                <form className="form-group">

                    <div className="row">
                        <div className="col-lg-6">
                            <label>First Name</label>
                            <input type="text" name="fname" className="form-control" placeholder="Enter your first name.."/>
                          </div>
                          

                          <div className="col-lg-6">
                            <label>Last Name</label>
                            <input type="text" name="lname" className="form-control" placeholder="Enter your last name.."/> 
                          </div>

                    </div>
                      <br/>

                    <label>E-mail</label>
                    <input type="email" name="email" className="form-control" placeholder="Enter your e-mail..."/>
                      <br/>
                      <div className="row">
                        <div className="col-lg-6">
                          
                            <label>Password:</label>
                            <input type="password" name="fname" className="form-control" placeholder="Enter New Password.."/>
                        </div>

                        <div class="col-lg-6">
                          
                            <label>Re-type Password:</label>
                            <input type="password" name="lname" className="form-control" placeholder="Re-type again.."/> 
                        </div>

                      </div>
                        <br/>

                    <select className="form-control">
                        <option>Choose Gender..</option>
                        <option>Male</option>
                        <option>Female</option>
                        
                    </select>
                    <br/>
                    <input type="submit" name="submit" value="submit" className="btn btn-primary btn-block btn-lg"/>
                </form>
                  </div>
                </div>

          <div className="col-lg-3"></div>
        </div>
      
      </div>
    </div>
  );
}

export default App;
