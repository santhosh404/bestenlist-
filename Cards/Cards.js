import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Cards.css";

class Cards extends Component {
  render() {
    return (
      <div>
        <div class="heading-anime">
        <h3>CARDS</h3>
        </div>
        <hr />
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-3 mb-4">
              <div class="card-1">
              <div class="card border-info" style={{ height: "245px",border: "2px solid"}}>
              <div class="card-header border-info" style={{border:"0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>01 REQUIREMENT ANALYSIS</div>

                <div class="card-body">
                  <p class="card-text">
                    Initially, our consultants will discuss the business
                    requirements and vision of the project. Based on it, we will
                    build a scope of work(SOW)
                  </p>
                </div>
              </div>
              </div>
            </div>

            <div class="col-sm-3 mb-4">
              <div class="card-2">
              <div class="card border-info" style={{border: "2px solid"}}>
                <div class="card-header border-info" style={{border: "0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>02 PLANNING & WIRE-FRAMING</div>
                <div class="card-body">
                  <p class="card-text">
                    After analysing the SOW document with the client, we
                    finalize all the requirements with a clear inference. Our
                    engineering team will plan and prepare
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-3">
              <div class="card border-info" style={{ height: "245px", border:"2px solid"}}>
                <div class="card-header border-info" style={{ border: "0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>03 UI DESIGN & PROTOTYPING</div>
                <div class="card-body">
                  <p class="card-text">
                    Based on the wireframe, the design phrase will be initiated.
                    Our experienced designers will create the Ul design of the
                    product or service.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-4">
              <div class="card border-info" style={{ height: "245px" , border:"2px solid "}}>
                <div class="card-header border-info" style={{border:"0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>04 CODING & DEVELOPMENT</div>

                <div class="card-body">
                  <p class="card-text">
                    Once the prototype is accepted by the client, our developers
                    will begin the coding and development of the product.
                  </p>
                </div>
                
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-5">
              <div class="card border-info" style={{ height: "255px", border: "2px solid"}}>
                <div class="card-header border-info" style={{ border:"1px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>05 UNIT TESTING</div>
                <div class="card-body">
                  <p class="card-text">
                    Each unit of the product will be tested to check the
                    functionality. If there are bugs, it will be rectified in
                    this stage.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-6">
              <div class="card border-info" style={{ height: "255px", border:"2px solid" }}>
                <div class="card-header border-info" style={{border:"0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>06 GUIDED ACCEPTANCE TESTING</div>
                <div class="card-body">
                  <p class="card-text">
                    After each unit of the product is tested, our QA team will
                    deploy the guided acceptance testing where the entire
                    product will be tested for checking the functionality
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-7">
              <div class="card border-info" style={{ height: "255px",border: "2px solid"}}>
                <div class="card-header border-info" style={{border: "0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>07 RELEASE & IMPLEMENTATION</div>
                <div class="card-body">
                  <p class="card-text">
                    After the successful testing and quality checking by our QA
                    team, we will release the product live. In addition, the
                    client will be informed and any bugs present will be
                    rectified on spot.
                  </p>
                </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-8">
              <div class="card border-info" style={{ height: "255px", border:"2px solid"}}>
                <div class="card-header border-info" style={{border:"0.5px solid", color:"white", backgroundColor:"rgb(91, 192, 222)"}}>08 TRAINING & SUPPORT</div>

                <div class="card-body">
                  <p class="card-text">
                    We will provide the required training to the client in using
                    the product and ensure that they are well-versed in it.
                    Furthermore, any kind of immediate support in the form of
                    upgrade will also be done by us.
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;

