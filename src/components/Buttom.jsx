import "./Buttom.css";
export const Buttom = () => {
  return (
    <>
      <div className="container">
        <div className="pane">
          <label className="label">
            <span>Yes</span>
            <input id="left" className="input" name="radio" type="radio" />
          </label>
          <label className="label">
            <span>No</span>
            <input
              id="middle"
              className="input"
              checked="checked"
              name="radio"
              type="radio"
            />
          </label>
          <label className="label">
            <span>Idk</span>
            <input id="right" className="input" name="radio" type="radio" />
          </label>
          <span className="selection"></span>
        </div>
      </div>
    </>
  );
};
