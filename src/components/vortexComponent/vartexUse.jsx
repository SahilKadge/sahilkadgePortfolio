
import { Vortex } from "../ui/vortex";

export function VortexDemo() {
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
    <div className="w-auto mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-[3rem] md:text-6x1 font-bold text-center">
          Hi I am sahil
        </h2>
        <p className="text-white text-[1rem] md:text-2xl max-w-xl mt-0 text-center">
          and
        </p>
        <h2 className="text-white text-[2rem] md:text-2xl max-w-xl mt-0 text-center">
          I am a Developer.
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-10 text-center">
          The best software is the one that meets the needs of its users, not the one with the most features.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <a href="https://www.linkedin.com/in/sahil-kadge-7100332b8/">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                Connect
            </button>
          </a>
          <button className="px-4 py-2  text-white " onClick={downloadPDF} >My Resume</button>
        </div>
      </Vortex>
    </div>
  );
}
