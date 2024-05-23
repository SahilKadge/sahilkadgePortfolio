import { TypewriterEffect } from "../ui/typewiter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "Sahil",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "and",
    },
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "Developer.",
      className: "text-blue-500 dark:text-blue-500",
      },
  ];
  const downloadPDF = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your PDF file
    const resumePath = '../../../public/sahil_kadge_resume_new.pdf';

    // Create an anchor element
    const link = document.createElement('a');

    // Set the href attribute to the path of the PDF file
    link.href = resumePath;

    // Set the download attribute to force download the file instead of navigating to it
    link.download = 'resume.pdf';

    // Append the anchor element to the body
    document.body.appendChild(link);

    // Programmatically click the anchor element to trigger the download
    link.click();

    // Remove the anchor element from the body
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col items-center justify-center h-[35rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base pb-2">
      The best software is the one that meets the needs of its users, not the one with the most features.
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-4">
        <a href="https://www.linkedin.com/in/sahil-kadge-7100332b8/">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Connect
          </button>
        </a>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm" onClick={downloadPDF}>
          Resume
        </button>
      </div>
    </div>
  );
}
