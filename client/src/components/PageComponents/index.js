import React from "react";

export function Input(props) {
  return (
    <div className="form-inline row text-left">
      <label className="col-4 col-form-label text-left">{props.label}</label>
      <input className="form-control col-7" {...props} />
    </div>
  );
}

export function InputReadOnly(props) {
  return (
    <div className="row">
      <label className="col-5 col-form-label">{props.label}</label>
      <input
        className="col-6 form-control-plaintext text-wrap"
        readOnly
        {...props}
        type="text"
      />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button
      {...props}
      style={{ float: "right", marginBottom: 10 }}
      className="btn btn-success"
    >
      {props.children}
    </button>
  );
}
