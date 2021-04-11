import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Cards.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Picture1 from './Picture1.png';
import Picture2 from './Picture2.png';

class Cards extends Component {
  render() {
    return (
      <div class="whole-div">
        <div class="heading-anime">
          <h2>CARDS</h2>
        </div>
        <hr />
        <br />
        <div>
          <h3 class="head-heading">1.Web Development</h3>

          <p class="head-para">
            In our organization, Web Development is carried out by highly
            skilled professionals in PHP Development, ASP.NET, Mobile
            Application, E-Commerce Development, ReactJS, Angular, Python etc.,.
            With an experienced team of software experts and designers, we have
            undertaken programming and website services in both “business to
            business” and “business to customer” categories. Our team’s high-end
            knowledge and remarkable diligence in building authentic Web-based
            Application using React, Angular, PHP, Node Js, python and other
            development platforms has helped us achieve 100% success in our
            assigned projects. Our professionals make every possible effort to
            deliver the projects as demanded. We also have a strong hosting
            solution team who help the customers on hosting the websites and
            help on smooth production rollout.
          </p>
        </div>
        <br/>
        <div>
          <h3 class="heading-2">2.Web Development Process</h3>
          <p class="head-para-2">
            We follow agile methodology in project designing & implementing. Our
            focus is to deliver the project within the stipulated timeline with
            complete transparency. Our process is executed as per the below
            process flow.
          </p>
          <img src={Picture1} alt="Not Found" class="image"/>
        </div>
        <br />
        <br />
        <br />
        <hr />

        <div>
          <h3 class="Heading-3">How We Work !!!</h3>
          <img src={Picture2} alt="Not Found" class="image-2"/>
        </div>
        <br />

        <div class="container">
          <div class="row">
            <div class="col-sm-3 mb-4">
              <div class="card-1">
                <div
                  class="card border-info"
                  style={{ height: "245px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    01 REQUIREMENT ANALYSIS
                  </div>

                  <div class="card-body">
                    <p class="card-text">
                      Initially, our consultants will discuss the business
                      requirements and vision of the project. Based on it, we
                      will build a scope of work(SOW)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-sm-3 mb-4">
              <div class="card-2">
                <div
                  class="card border-info"
                  style={{ height: "245px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    02 PLANNING & WIRE-FRAMING
                  </div>
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
                <div
                  class="card border-info"
                  style={{ height: "245px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    03 UI DESIGN & PROTOTYPING
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      Based on the wireframe, the design phrase will be
                      initiated. Our experienced designers will create the Ul
                      design of the product or service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-4">
                <div
                  class="card border-info"
                  style={{ height: "245px", border: "2px solid " }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    04 CODING & DEVELOPMENT
                  </div>

                  <div class="card-body">
                    <p class="card-text">
                      Once the prototype is accepted by the client, our
                      developers will begin the coding and development of the
                      product.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-5">
                <div
                  class="card border-info"
                  style={{ height: "265px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    05 UNIT TESTING
                  </div>
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
                <div
                  class="card border-info"
                  style={{ height: "265px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    06 GUIDED ACCEPTANCE TESTING
                  </div>
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
                <div
                  class="card border-info"
                  style={{ height: "265px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    07 RELEASE & IMPLEMENTATION
                  </div>
                  <div class="card-body">
                    <p class="card-text">
                      After the successful testing and quality checking by our
                      QA team, we will release the product live. In addition,
                      the client will be informed and any bugs present will be
                      rectified on spot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-3 mb-4">
              <div class="card-8">
                <div
                  class="card border-info"
                  style={{ height: "265px", border: "2px solid" }}
                >
                  <div
                    class="card-header border-info"
                    style={{
                      border: "0.5px solid",
                      color: "white",
                      backgroundColor: "rgb(91, 192, 222)",
                    }}
                  >
                    08 TRAINING & SUPPORT
                  </div>

                  <div class="card-body">
                    <p class="card-text">
                      We will provide the required training to the client in
                      using the product and ensure that they are well-versed in
                      it. Furthermore, any kind of immediate support in the form
                      of upgrade will also be done by us.
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
