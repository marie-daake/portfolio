import ContactForm from "./form";
import Socials from "./socials";
function Contact() {
  return (
    <>
      <div className="content">
        <h2>Contact Me</h2>
        <p>There are several ways to contact me. Here are the most popular:</p>
        <div className="contactTypes">
          <Socials />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
