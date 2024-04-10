import { useForm } from "react-hook-form";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <label>Full Name</label>
      <input
        type="text"
        placeholder="Full Name"
        {...register("Full Name", {})}
      />
      <label>Email Address</label>
      <input
        type="email"
        placeholder="Email Address"
        {...register("Email Address", {})}
      />
      <label>Subject?</label>
      <input type="text" placeholder="Subject?" {...register("Subject?", {})} />
      <label>Message</label>
      <textarea {...register("message", {})} />

      <input type="submit" />
    </form>
  );
}
export default ContactForm;
