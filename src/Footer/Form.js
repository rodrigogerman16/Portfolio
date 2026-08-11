import React, { Fragment, useRef, useState } from "react";
import emailjs from "emailjs-com";

const inputClasses =
  "w-full rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-text-primary placeholder:text-text-tertiary outline-none transition-all duration-200 focus:border-brand-400/60 focus:ring-2 focus:ring-brand-500/25";

const Form = ({ isPageHeading = false }) => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendData = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_9nokhjf",
        "template_g1hml5e",
        e.target,
        "3JrmPJmxGZpTsDh1a"
      )
      .then(() => {
        setStatus("idle");
        formRef.current?.reset();
        alert("Your message has been sent.");
      })
      .catch(() => {
        setStatus("idle");
        alert(
          "Something went wrong sending your message. Please try again or email me directly."
        );
      });
  };

  const Heading = isPageHeading ? "h1" : "h2";

  return (
    <Fragment>
      <div
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
        id="footer"
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(59,130,246,0.10), transparent)",
          }}
        />
        <div className="relative z-10 w-full max-w-xl">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">
              Get In Touch
            </p>
            <Heading className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              ¡Let's work together!
            </Heading>
            <p className="mx-auto mt-3 max-w-md text-text-secondary">
              Have a project in mind or a role to fill? I'd love to hear about it.
            </p>
          </div>

          <form
            className="mt-10 rounded-2xl border border-border bg-ink-800/50 p-6 shadow-soft backdrop-blur-sm sm:p-8"
            ref={formRef}
            onSubmit={sendData}
          >
            <div className="flex flex-col gap-5">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className={inputClasses}
                  placeholder="Name"
                  name="from_name"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="sr-only">Phone</label>
                <input
                  type="tel"
                  id="contact-phone"
                  className={inputClasses}
                  placeholder="Phone"
                  name="from_phone"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className={inputClasses}
                  placeholder="Email"
                  name="from_email"
                  autoComplete="email"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">Message</label>
                <textarea
                  id="contact-message"
                  className={`${inputClasses} h-32 resize-none`}
                  placeholder="Message"
                  name="message"
                  required
                />
              </div>
              <input
                type="submit"
                className="cursor-pointer rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-200 ease-premium hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-glow active:scale-[0.98] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:active:scale-100"
                value={status === "sending" ? "Sending..." : "Send message"}
                disabled={status === "sending"}
              />
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
