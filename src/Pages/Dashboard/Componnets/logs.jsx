import '../Css/responsivefixes.css';
import '../Css/containers.css'
import '../Css/inputs.css'
import '../Css/logs.css'
import Sidebar from './Sidebar';
import React, { useState } from 'react'
import Select, { components } from "react-select";
import ReactTooltip from 'react-tooltip';

const Logs = () => {


    const customStyles = {
        option: (provided, state) => ({
          ...provided,
          color: state.isSelected ? '#fff' : '#fff',
          backgroundColor: state.isSelected ? '#383941' : '#383941'
        })
        }
        

    const options = [
        { value: "Arabic", label: "العربية"},
        { value: "English", label: "English"},
        { value: "French", label: "Français"},
        { value: "Spanish", label: "Español"},
        { value: "Turkish", label: "Türkçe"}
      ];

    return ( 
        <div className="settings-container containers-03IM">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="container-title text-light text-start">Logs Manager</h3>
                <p className="container-title-descreption text-start">Watch your moderators/members moves by enableing the logs</p>
              </div>
              <div className="col-lg-6">
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Channel create</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select"  className="text-start text-light mt-4" options={options} styles={customStyles}/>
                  <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="text-light text-start mt-2">Message Deleted</h5>   
                      </div>
                      <div className="col-lg-4">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Message Edit</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Channel delete</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="text-light text-start mt-2">Role create</h5>   
                      </div>
                      <div className="col-lg-4">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Bot add</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Ban Add</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="text-light text-start mt-2">Kick</h5>   
                      </div>
                      <div className="col-lg-4">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Ban Remove</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-7">
                        <h5 className="text-light text-start mt-2">Leave</h5>   
                      </div>
                      <div className="col-lg-5">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
                <div className="custom-card prefix-card card-log mt-3 my-2  rounded">
                    <div className="row">
                      <div className="col-lg-8">
                        <h5 className="text-light text-start mt-2">Protection</h5>   
                      </div>
                      <div className="col-lg-4">
                        <label className="switch float-end mt-1">
                          <input type="checkbox" />
                          <span className="slider round"></span>
                       </label>
                      </div>
                    </div>
                    <Select classNamePrefix="react-select" className="text-start text-light mt-4" options={options} styles={customStyles}/>
                    <div className="mt-1 row">
                      <div className="col-lg-6">
                      </div>
                      <div className="col-lg-6">
                        <p className="tool-tip-tag"  data-html={true} data-tip="This ThisThisThisThisThisTh<br></br>isThisThisThisThisThisThisThisThisThisThisThislog show the channels that created"><ReactTooltip /> ?</p>
                      </div>
                   </div>
                </div> 
              </div>
              <div className="col-lg-4">
              </div>
            </div>
            <br></br><br></br><br></br>
        </div>
     );
}
 
export default Logs;