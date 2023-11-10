/* eslint-disable react/prop-types */
// import "./Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      // <div className="modal-background">
      //   <section className="modal-main">
      //     {props.children}
      //     <button className="close" type="button" onClick={props.onClose}>
      //       &#x2715;
      //     </button>
      //   </section>
      // </div>

      //bootstrap static
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel"></h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light btn-outline-dark"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Understood
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
