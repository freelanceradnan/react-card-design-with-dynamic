// Contact.jsx
const Contact = (obj) => {
  return (
    <>
      {/* update-form-design */}
      <div className="form-body">
        <div
          className="form-top-section"
          style={{
            backgroundImage: `url(${obj.img1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="form-bottom-section">
          <div className="form-name">{obj.name}</div>
          <div className="form-proffession">{obj.proffesion_name}</div>
          <div className="form-text">{obj.text}</div>

          <div className="form-button">
            <button className="button_first">Follow</button>
            <button className="button_secound">More Info</button>
          </div>
        </div>

        <div className="form-profile-img">
          <img src={obj.img} alt="profile" />
        </div>
      </div>
    </>
  );
};

export default Contact;
