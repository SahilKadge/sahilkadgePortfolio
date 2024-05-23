import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../utils/cn";
import {IconBrandGithub} from "@tabler/icons-react";
import { BrandLinkedin } from 'tabler-icons-react';
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import './form.css'
export const SignupFormDemo = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send form data to email backend
    try {
      const response = await emailjs.sendForm(
        "My_portfolio",
        "template_portfolio",
        e.target,
        "Wv2FFPkZNtFu_AgeS"
      );

      console.log("Email sent successfully:", response);

      // Reset form fields after successful submission
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });

      // Display success message
      alert("Thank you. I will get back to you as soon as possible.");
    } catch (error) {
      console.error("Error sending email:", error);
      
      // Display error message
      alert("Ahh, something went wrong. Please try again.");
    }
  };

  return (
    <div className="form">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Write your message
      </h2>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstname"
              value={form.firstname}
              onChange={(e) => setForm({ ...form, firstname: e.target.value })}
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastname"
              value={form.lastname}
              onChange={(e) => setForm({ ...form, lastname: e.target.value })}
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainerText className="mb-4">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message here"
            rows={7}
          />
        </LabelInputContainerText>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send email &rarr;
          <BottomGradient />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        
      </form>
      <div className="flex flex-col space-y-4">
          <a href="https://github.com/SahilKadge">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type=""
          >
            <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              GitHub
            </span>
            <BottomGradient />
          </button>
          </a>
  
          <a href="https://www.linkedin.com/in/sahil-kadge-7100332b8/">
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            type=""
          >
            <BrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Linkedin
            </span>
            <BottomGradient />
          </button>
          </a>
        </div>
    </div>
  );
};

export const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

export const LabelInputContainer = ({
  children,
  className,
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export const LabelInputContainerText = ({
    children,
    className,
  }) => {
    return (
      <div className={cn("flex flex-col space-y-2 w-full", className)}>
        {children}
      </div>
    );
};
  
LabelInputContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
LabelInputContainerText.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
