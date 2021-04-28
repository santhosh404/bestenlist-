import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./indProduct.css";

class indProduct extends Component {
  render() {
    return (
      <div class="content">
        <div className="row">
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://freepngimg.com/thumb/gloves/55145-4-school-bag-free-transparent-image-hd-thumb.png" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://freepngimg.com/thumb/dress_shirt/7-2-dress-shirt-png-hd.png" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://lh3.googleusercontent.com/proxy/wLyA8t0GU9zthOejDuZ-py6gzD1Rlo__OLnPO2Z4gpuNVXDUFM1PJcSdu0udK94g9R4ZT1xj4WAIOe1LC45SUoJCNdjZSksLHXozQvS5xLaiONay3HsdQOGBEonvDbZNuQNZznKDv_mXiyQM3lI33fWmo7EGVOtXEg" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://purepng.com/public/uploads/large/purepng.com-nike-lazer-bagbagbackpacksnike-lazer-bagtourist-bags-1421526271674pxn0o.png" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://img.pngio.com/black-dress-shirt-png-image-png-image-dress-shirt-png-950_950.png" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
          <div className="text-center product-card col-lg-4 col-md-6 col-sm-12">
            <div class="card">
              <img src="https://lh3.googleusercontent.com/proxy/9iA0cwCciBWMJcCSwXvt-O9YTMRp0mPuMpmFdZEFEoz5-gHA8byrbOuccMJcRZi-8LTi-1ItIkVz9dZdKTf-7w69jAJhlmT9gfEBN0KdDLt8g76vtyA9YJpoMjSQCT298A" />
              <a href="#" style={{ color: "black" }}>
                <span>
                  <i class="fas fa-shopping-cart fa-2x"></i>
                </span>
              </a>
            </div>
            <div class="text">
              <h5>Bambi Print Bagpack</h5>
              <p>$150</p>
            </div>
          </div>
        </div>

        <div>
          <nav aria-label="Page navigation example" class="mypagenav">
            <ul class="pagination justify-content-center pagination-sm">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default indProduct;
