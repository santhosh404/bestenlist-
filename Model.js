import React, { Component } from "react";
import ReactDOM from "react-dom";
import ScriptTag from "react-script-tag";
import "./Model.css";
import { Button, Modal } from "react-bootstrap";

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
    return (
      <div>
        <Button
          onClick={() => {
            this.handleModal();
          }}
        >
        
          Open Button
        </Button>
        <Modal show={this.state.show}>
          <Modal.Header>
          
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
                <select
                  class="form-select"
                  aria-label="multiple select example"
                >
                  <option value="" hidden>
                    What are you looking for?
                  </option>
                  <option value="1">App development</option>
                  <option value="2">Web development</option>
                  <option value="3">Cyber Security</option>
                  <option value="4">Internet Of Things</option>
                </select>
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
        </Modal>
      </div>
    );
  }
}

export default Models;
