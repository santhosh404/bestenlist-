import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScriptTag from "react-script-tag";
import { Button, Modal } from "react-bootstrap";
import "./Model.css";
import Lottie from "react-lottie";
import animationData from "../lotties/success.json";

class Models extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  handleModal() {
    this.setState({ show: !this.state.show });
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return (
      <div>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
          Open Button
        </Button>
        <Modal
          class="v-line"
          size="lg"
          show={this.state.show}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header
            style={{
              backgroundColor: "skyblue",
              color: "white",
            }}
          >
            <Modal.Title style={{ paddingLeft: "120px" }}>
              Fill your requirement. Our representative will assist you furthur.
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div class="form-group w-50">
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group w-50">
                <input
                  type="email"
                  class="form-control"
                  id="recipient-name"
                  placeholder="E-Mail"
                />
              </div>
              <div class="form-group w-50">
                <input
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  placeholder="Contact Number "
                />
              </div>
              <div>
                <label class="label">What are you looking for?</label>
                <span class="span-class">
                  <select class="form-select">
                    <option value="1">App development</option>
                    <option value="2" selected>
                      Web development
                    </option>
                    <option value="3">Cyber Security</option>
                    <option value="4">Internet Of Things</option>
                  </select>
                </span>
              </div>
            </form>
            <div class="lottie-anime">
            <Lottie options={defaultOptions} height={240} width={240} />
          </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </Modal.Footer>
        </Modal>

        {/* <Modal show={this.state.show}>
          <Modal.Header
              style={{
                paddingLeft: "70px",
                backgroundColor: "skyblue",
                color: "white",
              }}
          >
            Fill your requirement. Our Representative will assist you furthur.
          </Modal.Header>

          <Modal.Body>
            <form>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="recipient-name"
                  placeholder="E-Mail"
                />
              </div>
              <div class="form-group">
                <input
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  placeholder="Contact Number "
                />
              </div>
              <div>
                <label class="label">What are you looking for?</label>
                <span class="span-class">
                  <select class="form-select">
                    
                    <option value="1">App development</option>
                    <option value="2" selected>Web development</option>
                    <option value="3">Cyber Security</option>
                    <option value="4">Internet Of Things</option>
                  </select>
                </span>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => {
                this.handleModal();
              }}
            >
              Close
            </button>
            <button type="button" class="btn btn-primary">
              Submit
            </button>
          </Modal.Footer>
        </Modal> */}
      </div>
    );
  }
}

export default Models;
