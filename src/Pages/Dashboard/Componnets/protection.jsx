import '../Css/responsivefixes.css';
import '../Css/containers.css'
import '../Css/commands.css'
import '../Css/protection.css'

const Protection = () => {
    return ( 
        <div className="protection-container containers-03IM">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="container-title text-light text-start">Protection Manager</h3>
                <p className="container-title-descreption text-start">Manage protection limits, enable/disable</p>
              </div>
              <div className="col-lg-6">
                <button className="btn btn-primary float-end mt-2">Restore Default Settings</button>
              </div>
            </div>
            <div className="protection-section mt-3">
              <div className="row my-2">
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Bot Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Nuke Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Link Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Spam Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Badwords Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Max Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row my-2">
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-7">
                        <h5 className="text-start text-light protection-title mt-1">Fake Accounts Protection</h5>
                      </div>
                      <div className="col-sm-5">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 my-3">
                  <div className="custom-card p-4 rounded">
                    <div className="row">
                      <div className="col-sm-6">
                        <h5 className="text-start text-light protection-title mt-1">Administrator Protection</h5>
                      </div>
                      <div className="col-sm-6">
                        <label className="switch float-end">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                      <hr className="mt-1"></hr>
                      <span className="text-start text-light input-title0123 mt-1">Max</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Max"></input>
                      <span className="text-start text-light input-title0123 mt-1">Time</span>
                      <input type="text"  className="float-start w-100 main-input text-light mt-3" placeholder="Time"></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default Protection;