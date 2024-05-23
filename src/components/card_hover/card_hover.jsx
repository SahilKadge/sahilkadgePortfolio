import { HoverEffect } from "../ui/card_hover_skills";
import './card_hover.css'
export function CardHoverEffectDemo() {
  const projects = [
    {
      title: "React",
      description:
        " Proficient in building dynamic and scalable web applications, creating reusable components, managing state and props efficiently, utilizing React Hooks, and integrating with external libraries and APIs effectively.",
      link: "https://stripe.com",
    },
    {
      title: "HTML/CSS",
      description:
        " Skilled in structuring web content with semantic HTML, styling layouts with CSS, implementing responsive design principles, and utilizing CSS preprocessors like Sass effectively.",
      link: "https://netflix.com",
    },
    {
      title: "JavaScript",
      description:
        ": Proficient in developing interactive web applications, manipulating the DOM, utilizing asynchronous programming with promises and callbacks, and implementing complex functionalities using modern ES6+ features.",
      link: "https://google.com",
    },
    {
      title: "Java",
      description:
        "Competent in writing Java applications, implementing algorithms, utilizing inheritance and polymorphism, handling exceptions, and working with external libraries effectively.",
      link: "https://meta.com",
    },
    {
      title: "Python",
      description:
        "Proficient in writing complex scripts, utilizing advanced data structures, debugging efficiently, and applying object-oriented programming principles effectively using python.",
      link: "https://amazon.com",
    },
    {
      title: "Tensorflow",
      description:
        "Capable of building and training neural networks, implementing advanced techniques, and troubleshooting model performance effectively using Tensorflow.",
      link: "https://microsoft.com",
    },
    {
      title: "OpenCV",
      description:
        " Competent in computer vision tasks such as image processing, object detection, feature extraction, and implementing machine learning algorithms for image classification and recognition using OpenCV's libraries and tools effectively.",
      link: "https://amazon.com",
    },
    {
      title: "Yolo",
      description:
        "Proficient in object detection using YOLO (You Only Look Once), implementing models, fine-tuning, and optimizing performance effectively.",
      link: "https://microsoft.com",
    },
  ];

  return (
    <div className="sm:pt-1rem">
    <h1 className=" mt-10 md:mt-0 text-2xl md:text-7xl text-center font-bold dark:text-white">
      MY SKILLS
    </h1>
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    </div>
  );
}
