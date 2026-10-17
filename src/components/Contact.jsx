import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { content } from "../Content";
import toast, { Toaster } from "react-hot-toast";
import { mailSend } from "../Services/sendMail";

const Contact = () => {
  const { Contact } = content;
  const { register, handleSubmit, reset } = useForm();
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sending Email
  const sendEmail = async (data) => {
    setIsSubmitting(true);
    try {
      await mailSend(data.message, data.user_email);
      reset();
      toast.success("Message sent successfully.", {
        style: {
          background: '#18181b',
          color: '#e4e4e7',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      });
    } catch (error) {
      toast.error("Failed to send message.", {
        style: {
          background: '#18181b',
          color: '#ef4444',
          border: '1px solid rgba(255,255,255,0.1)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-surface border-t border-white/5">
      <Toaster position="bottom-right" />

      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {Contact.title}
          </h2>
          <p className="text-secondary text-lg">
            I am currently open to new opportunities. Reach out if you'd like to connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-6">
              {Contact.social_media.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group text-secondary hover:text-primary transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-white/5 flex items-center justify-center group-hover:border-white/10 transition-colors">
                    <item.icon className="text-xl" />
                  </div>
                  <span className="font-medium text-lg">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Name"
                  required
                  {...register("name")}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-primary placeholder:text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
                  placeholder="Email"
                  required
                  {...register("user_email")}
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-primary placeholder:text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Message"
                  required
                  {...register("message")}
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-white/10 rounded-xl text-primary placeholder:text-secondary/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full sm:w-auto self-start mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;