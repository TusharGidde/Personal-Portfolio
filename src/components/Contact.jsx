import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { content } from "../Content";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { mailSend } from "../Services/sendMail";

const Contact = () => {
  const { Contact } = content;
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const [formData, setFormData] = useState({});

  // Sending Email
  const sendEmail = (data) => {
    console.log(data);
    mailSend(data.message,data.user_email);
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       // Clear all input field values
    //       reset();
    //       // Success toast message
    //       toast.success("Email sent Successfully");
    //     },
    //     (error) => {
    //       console.log(error.text);
    //       toast.error(error.text);
    //     }
    //   );
  };

  return (
    <section className="bg-dark_primary text-white p-3" id="contact">
      <Toaster />
      <div className="md:container px-5 py-14 mb-14">
        <h2 className="title !text-white text-lg" data-aos="fade-down">
          {Contact.title}
        </h2>
        <h4 className="subtitle" >
          {/* {Contact.subtitle} */}
          <p className="!text-white pt-7 text-xl sm:text-xl">Phone: +91 9518947453</p>
<p className="!text-white pt-7 text-xl sm:text-xl">Email: tushargidde007@gmail.com</p>


        </h4>
        <br />
        <div className="flex gap-10 md:flex-row flex-col">
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            data-aos="fade-up"
            className="flex-1 flex flex-col gap-5"
          >
            {/* Input Name as same as email js templates values */}
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              {...register("name")}
              className="border border-slate-600 p-3 rounded"
            />
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email Id"
              required
              {...register("user_email")}
              className="border border-slate-600 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              {...register("message")}
              className="border border-slate-600 p-3 rounded h-44"
              required
            ></textarea>
            <button
              type="submit"
              className="btn self-start bg-white text-dark_primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
