import React from "react";

export const Page404 = () => {
  return (
    <div>
      {/* Start mobile menu area */}

      <section className="ptb-120">
        <div className="container">
          <div className="not-found-inner">
            <div className="row align-items-center">
              <div className="col-md-5 mb-5">
                <img src="./images/404/404.png" alt="not found page" className="img-fluid" />
              </div>
              {/* End .col */}
              <div className="col-md-7">
                <div className="not-found-content">
                  <h1 className="title">
                    Opps...! <br />
                    Page not found
                  </h1>
                  <p>
                    You seem can’t to find the page <br /> you’re looking for.
                  </p>
                  <a href="index.html" className="btn btn-gradient">
                    <span>Back To Home</span>
                  </a>
                </div>
              </div>
              {/* End .col */}
            </div>
          </div>
          {/* End .not-found-inner */}
        </div>
      </section>
      {/* End Error page area */}
    </div>
  );
};

export default Page404;
