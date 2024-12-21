import React, { useState } from "react";

export default function Collapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <img
      src="./Frame19.svg"
        className="ml-[45px] text-white px-4 py-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      
        
      />
      <div
        className={`transition-all duration-300 ${
          isOpen ? "max-h-120 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className='arrow_container'>
                  <div className='arrow'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text'>
                    <span className='sub_title'> Initial Screening: </span>We conduct
                    an initial screening of applicants based on their resumes to
                    ensure their skills, experience, and qualifications align with
                    our quality standards.
                  </p>
                </div>
                <div className='arrow_container'>
                  <div className='arrow'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text'>
                    <span className='sub_title'>Technical Assessment: </span>Talents
                    undergo a rigorous technical assessment to evaluate their
                    skills and expertise in key technologies. .
                  </p>
                </div>
                <div className='arrow_container'>
                  <div className='arrow'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text'>
                    <span className='sub_title'>Non-Technical Assessment: </span>We
                    assess talents for soft skills like communication,
                    problem-solving, and adaptability to ensure team fit. .
                  </p>
                </div>
                <div className='arrow_container'>
                  <div className='arrow'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text'>
                    <span className='sub_title'>Culture-fit Interview: </span>We
                    conduct a culture-fit interview to ensure the talents align
                    with your company’s values and work environment .
                  </p>
                </div>
      </div>
    </div>
  );
}