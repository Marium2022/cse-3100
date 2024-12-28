const ContactUs = () => {
    return (
      <section className="contact-us text-center mt-4">
        <h2>Contact Us</h2>
        <form className="mt-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" name="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" name="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea id="message" name="message" className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </section>
    );
  };
  
  export default ContactUs;
  