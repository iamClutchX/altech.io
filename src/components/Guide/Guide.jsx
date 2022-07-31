import React from "react";
import "./guide.css";
const Guide = () => {
  return (
    <div className="container contact_color">
      <form className="was-validated">
        <div className="mb-3 pb-1">
          <div className="form-outline">
            <textarea
              className="form-control is-valid"
              id="validationTextarea"
              placeholder="Required example textarea"
              required
            ></textarea>
            <label for="validationTextarea" className="form-label">
              Textarea
            </label>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
        </div>
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="validationFormCheck1"
            required
          />
          <label className="form-check-label" for="validationFormCheck1">
            Check this checkbox
          </label>
          <div className="invalid-feedback">Example invalid feedback text</div>
        </div>
        <div className="form-check">
          <input
            type="radio"
            className="form-check-input"
            id="validationFormCheck2"
            name="radio-stacked"
            required
          />
          <label className="form-check-label" for="validationFormCheck2">
            Toggle this radio
          </label>
        </div>
        <div className="form-check mb-3">
          <input
            type="radio"
            className="form-check-input"
            id="validationFormCheck3"
            name="radio-stacked"
            required
          />
          <label className="form-check-label" for="validationFormCheck3">
            Or toggle this other radio
          </label>
          <div className="invalid-feedback">
            More example invalid feedback text
          </div>
        </div>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            aria-label="file example"
            required
          />
          <div className="invalid-feedback">
            Example invalid form file feedback
          </div>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit" disabled>
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Guide;
