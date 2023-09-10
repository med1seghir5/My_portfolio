import{BiCodeAlt} from 'react-icons/bi';

export const Body = () => {
    return (
      <div className="container-fix" id="body">
        <div className="row">
          <div className="col-6 col-sm-12" id="Pict">
            <img
              src="https://scontent.fblj1-2.fna.fbcdn.net/v/t39.30808-6/335452509_1914338392263400_8065431717783719610_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=b_SHKw9N6awAX8dNVXq&_nc_ht=scontent.fblj1-2.fna&oh=00_AfDaZqDQ3izPoBSyMGRME25PBrA9_fEGxTWvlsGHTofa_g&oe=64F39DBD"
              className="rounded-circle"
              alt="Profile"
              id="Picture" 
            />
          </div>
          <div className="col-6 col-sm-12" >
          <div id="Bo">
            <h2 id="name">
              My name is Abdelmalek Mohamed seghir
            </h2>
            <h2 id="name1">I'm a Front end_Developer <br/> <BiCodeAlt id='code'/></h2>
          </div>
            <img
              src="https://i.pinimg.com/564x/d1/78/f7/d178f7db4a680bd284587ce2928976cb.jpg"
              alt="Description"
              id="Dis"
            />
            <div>
              <button
                className="btn fw-bold"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling01"
                aria-controls="offcanvasScrolling"
                id="titre"
              >
                Message me
              </button>
              <div
                className="offcanvas offcanvas-start"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling01"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="offcanvas-header" style={{ backgroundColor: "#dfe4ea" }}>
                  <h3 className="offcanvas-title" id="offcanvasScrollingLabel01" style={{ paddingLeft: "125px" }}>
                    Message me :
                  </h3>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body" style={{ backgroundColor: "#f1f2f6" }}>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                      <h4 style={{ paddingLeft: "100px", marginTop: "40px" }}>Write your message :</h4>
                      <h5 style={{ paddingLeft: "50px" }}>
                        Write your message in this box and I will
                        <h5 style={{ paddingLeft: "40px" }}>answer and contact you later.</h5>
                      </h5>
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      style={{ paddingBottom: "100px", marginTop: "20px" }}
                    ></textarea>
                    <button
                      className="btn fw-bold"
                      style={{ marginLeft: "265px", marginTop: "10px", paddingLeft: "10px", backgroundColor: "#dfe4ea", width: "90px" }}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };