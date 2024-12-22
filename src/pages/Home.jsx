import React, {useState, useEffect} from 'react';
import './Home.css';
import { PagesLayout } from '../layout/PagesLayout';
import { Footer } from '../components/Footer/Footer';
import Loader from '../components/Loader';
import CollapsibleParagraph from '../components/Collapse';
import Collapsible from '../components/Collapseservices';
import CollapsibleWork from '../components/Collapsework';
import CollapsibleParagraph1 from '../components/Collapse1';



export const HomePage = () => {

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time (e.g., fetching data or waiting for assets to load)
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);
    return (
      
        <PagesLayout isNavbarDark={true}>
{loading ? (
        <Loader />
      ) : (
      <div>
        
   
        
        <main>
      
          <div className="paq">
            <div className='text_paq'>
            <h1 class="one">Design, build and launch</h1>
          <p class="two dim">
            your custom software
            product faster
          </p>

           <span class="four"
            >Transform your ideas into a market-ready product.</span>
       
                </div>
                <div className='learn'>
          <a
                href="#"
                target="_blank"
               
                className='learn_link'
                >Learn More
                
                 </a> <br />
                 <svg  className='icon' width="13" height="9" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.500977 2.5C0.224834 2.5 0.000976562 2.72386 0.000976562 3C0.000976562 3.27614 0.224834 3.5 0.500977 3.5V2.5ZM6.83431 3C6.83431 4.47276 8.02822 5.66667 9.50098 5.66667C10.9737 5.66667 12.1676 4.47276 12.1676 3C12.1676 1.52724 10.9737 0.333333 9.50098 0.333333C8.02822 0.333333 6.83431 1.52724 6.83431 3ZM0.500977 3.5H9.50098V2.5H0.500977V3.5Z" fill="url(#paint0_linear_151_1421)"/>
  <defs>
  <linearGradient id="paint0_linear_151_1421" x1="0.500977" y1="3.5" x2="9.50098" y2="3.5" gradientUnits="userSpaceOnUse">
  <stop offset="1" stop-color="white"/>
  </linearGradient>
  </defs>
  </svg>
                
                </div>
          </div>
<section className='header'>
          <div className="header">
            <div className='div_fourth'> 
            <h1 className='text_header'>Design, build and launch
          
            your custom software
            product faster
        
            </h1>
           <p className='header_text'>Transform your ideas into a market-ready product.</p>
       
                </div>
                <div className='learn'>
          <a
                href="#"
                target="_blank"
               
                className='learn_link'
                >Learn More
                
                 </a> <br />
                 <svg  className='icon1' width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.44195 0.62793C3.44195 0.390319 3.24933 0.197697 3.01172 0.197697C2.77411 0.197697 2.58149 0.390319 2.58149 0.62793L3.44195 0.62793ZM3.01172 6.07754C1.74446 6.07754 0.717145 7.10486 0.717145 8.37212C0.717145 9.63937 1.74446 10.6667 3.01172 10.6667C4.27898 10.6667 5.30629 9.63937 5.30629 8.37212C5.30629 7.10486 4.27898 6.07754 3.01172 6.07754ZM2.58149 0.62793L2.58149 8.37212L3.44195 8.37212L3.44195 0.62793L2.58149 0.62793Z" fill="url(#paint0_linear_755_4391)"/>
<defs>
<linearGradient id="paint0_linear_755_4391" x1="2.51172" y1="0.62793" x2="2.51172" y2="8.37212" gradientUnits="userSpaceOnUse">
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>

                
                </div>
          </div>
          </section>
  
          <section className='second'>
          <div className='paq1'>
        
            <div className='div2'>
       
              <div className='sub_container '>
               
                <h1 className='title'>
                  Full-service Software <br />
                  Development
                </h1>
                <p className='desc_fourth0'>
                  Transform your ideas into a market-ready product. Whether you
                  need a web, mobile, or enterprise application, we’ve got you
                  covered! Our expert engineering team will work closely with you
                  from planning to launch bringing your vision to
                </p>
                <div className='get-started0'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>

                <div className='first-image5'>
                
                <img
                  src="/Group210.svg"
                  alt="Background"
                  className=" w-[500px]"
                  />
                
                
              
            
                 
                  
                </div>
               <CollapsibleParagraph>
              
                </CollapsibleParagraph>
              </div>
              
              <br />
              <div className='first-image'>
                
                <img
                  src="/Group210.svg"
                  alt="Background"
                  className=" "
                  />
                
                
              
            
                 
                  
                </div>
              
            
             
              {/* <div className=" top-10 right-10 z-10 hidden md:block">
                <img
                src="/Maskgroup2.png"
                alt="Background"
                className=" ml-50 h-80 mt-10 z-50"
                />
                
               </div>
              <div className='op-10 right-10 z-10 hidden md:block mt-35'>
               <img
                src="/Maskgroup3.png"
                alt="Background"
                className="z-50 w-30 mr-55 mt- h-80"
                />
               </div> */}
          
            </div>
          </div>

         
  
          </section>
          <setion className='paq_mobile'>
          <div className=''>
        
        <div className='div2'>
   
          <div className='sub_container '>
           
            <h1 className='title_mobile'>
              Full-service Software <br />
              Development
            </h1>
            <p className='desc_fourth_mobile'>
              Transform your ideas into a market-ready product. Whether you
              need a web, mobile, or enterprise application, we’ve got you
              covered! Our expert engineering team will work closely with you
              from planning to launch bringing your vision to
            </p>
            <div className='get-started-mobile'>
              <a href="#" target="_blank" className='get_link'>Get Started</a>
            </div>

            <div className='first-image5'>
            
            <img
              src="/Group210.svg"
              alt="Background"
              className="w-[300px] ml-[50px] mb-[70px]"
              />
            
            
          
        
             
              
            </div>
            <h2 class="work_title5">How it works</h2>
            <div className='arrow_container'>
                  <div className='arrow1'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text1'>
                    <span className='sub_title'>Contact Us: </span>Get started by
                    filling out a brief form to connect with us and kick off your
                    software development project.
                  </p>
                </div>
                <div className='arrow_container'>
                  <div className='arrow1'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text1'>
                    <span className='sub_title'>Discovery Call and Need Identification: </span>
                    We will discuss your needs in detail to understand your goals
                    and ensure we are aligned on the project’s scope.
                  </p>
                </div>
                <div className='arrow_container'>
                  <div className='arrow1'>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z" fill="#707070"/>
  </svg>
  
                  </div>
                  <p className='context_text2'>
                    <span className='sub_title'>Discovery Call and Need Identification: </span>
                    We will discuss your needs in detail to understand your goals
                    and ensure we are aligned on the project’s scope.
                  </p>
                </div>
           <CollapsibleParagraph1>
          
            </CollapsibleParagraph1>
          </div>

          
          
          
            
          
          
        
         
          {/* <div className=" top-10 right-10 z-10 hidden md:block">
            <img
            src="/Maskgroup2.png"
            alt="Background"
            className=" ml-50 h-80 mt-10 z-50"
            />
            
           </div>
          <div className='op-10 right-10 z-10 hidden md:block mt-35'>
           <img
            src="/Maskgroup3.png"
            alt="Background"
            className="z-50 w-30 mr-55 mt- h-80"
            />
           </div> */}
      
        </div>
      </div>
</setion>

<section className='large_section'> 
          <div className="large">
            <div className='today_large'>
  <div className=''>
  <img 
               src="/Group211.svg"
               alt="Background"
               className="ml-[200px] mt-[85px]"
               />
               
    
  
  
  </div>
  
  <div className='top'>
  
  <h1 className='h1'>
  Why We Are The Best For You
             </h1>
  <p className='desc_h1'>
  We understand what it takes to build successful  products. One of our founders co-founded and  launched three (3) technology startups; a social  network app with 15,000+ users in 26 countries, a  bus-hailing app that completed 100,000+ trips and  generated over US$1.6 million in gross bookings  within 18 months, and an Agritech startup that  won a US$5,000 grant, while securing over  US$150,000 in investor funding across ventures.  With this proven track record, we bring firsthand  experience, deep expertise, and a results-driven
             </p>
           
             <div className='get-started2'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
             </div>
             </div>
  
  
  
         </div>
         </section>
         <section className='section_large_mobile'>
         <div className="div_fourth">
            
  
  

  <h1 className='fourth_title1'>
  Why We Are The Best For You
             </h1>
  <p className='desc_fourth_section1'>
  We understand what it takes to build successful  products. One of our founders co-founded and  launched three (3) technology startups; a social  network app with 15,000+ users in 26 countries, a  bus-hailing app that completed 100,000+ trips and  generated over US$1.6 million in gross bookings  within 18 months, and an Agritech startup that  won a US$5,000 grant, while securing over  US$150,000 in investor funding across ventures.  With this proven track record, we bring firsthand  experience, deep expertise, and a results-driven
             </p>
           
             <div className='get-started-mobile1'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
                <div className='flex items-center justify-center'>
  <img 
               src="/Group164.svg"
               alt="Background"
               className=""
               />
               
    
  
  
  </div>
             
             
  
  
  
         </div>
         </section>


         
     <section className='third_section'> 
          <div className="relative bg-white text-black h-[700px] font-raleway flex-start"> 
            <div className='div_fourth'>
            <div className='sub_container '>
                 <h1 className='title'>
                 Team-as-a-Service
                 </h1>
              <p className='desc_fourth'>
                 Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and more.
                  We help companies build and manage Africa-based remote teams
                  without the hassle of hiring, onboarding, or managing day-to-day
                  operations. We handle everything—from recruitment and
                  remuneration to performance management and even setting up
                  physical workspaces if needed.
              </p>
              <div className='get-started'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
                <CollapsibleWork></CollapsibleWork>
             
                <Collapsible>
                
                </Collapsible>
          
              </div>
              
              <div className='fourt_image'> 
              <img 
               src="/Group214.svg"
               alt="Background"
               className="w-[400px]"
               />
                
             
                </div>
            </div>
           
  
       </div>
       </section>
       <section className='fourth'>
       <div className="div_fourth_section"> 
            <div className='div_fourth'>
              <div>
                 <h1 className='fourth_title'>
                 Team-as-a-Service
                 </h1>
              <p className='desc_fourth_section'>
                 Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and more.
                  We help companies build and manage Africa-based remote teams
                  without the hassle of hiring, onboarding, or managing day-to-day
                  operations. We handle everything—from recruitment and
                  remuneration to performance management and even setting up
                  physical workspaces if needed.
              </p>
              <div className='get-started-mobile'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
                
              <img 
               src="/Group214.svg"
               alt="Background"
               className="w-[400px]"
               />
                
             
               
                <CollapsibleWork></CollapsibleWork>
                <Collapsible>
              
                </Collapsible>
              
              </div>
              
              
            </div>
           
  
       </div>
       </section>
       
       <div className="large">
            <div className='today_large'>
  <div className='i'>
  <img 
               src="/Group51.svg"
               alt="Background"
               className=""
               />
               
    
  
  
  </div>
  
  <div className='top'>
  
  <h1 className='h11'>
  We Solve Market Problems  with Innovative Technology
             </h1>
  <p className='desc_h11'>
  Our engineering team uses proven technologies to  deliver reliable, scalable, and fast solutions that  address your<br /> unique business needs.
             </p>
           
             
             </div>
             </div>
  
  
  
         </div>
        

         <div className="today_mobile">
            <div className='today'>
 
  
  <div className='top_mobile'>
  
  <h1 className='h1_mobile'>
  We Solve Market Problems  with Innovative Technology
             </h1>
  <p className='desc_mobile'>
  Our engineering team uses proven technologies to  deliver reliable, scalable, and fast solutions that  address your unique business needs.
             </p>

 
             </div>
           
             <div className='lex items-center justify-center'>
  <img 
               src="/Group51.svg"
               alt="Background"
               className=" ml-[150px] mb-[400px]  "
               />
               
    
  
  
  </div>
             
             </div>
  
  
  
         </div>
        
      <section className='six_th'>
         <div className="sixth"> 
          <div className='div_sixth'>
          <div>
                 <h1 className='title_sixth'>
                 Microservices
                 </h1>
              <p className='desc_sixth'>
                 Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and more.
                  We help companies build and manage Africa-based remote teams
                  without the hassle of hiring, onboarding, or managing day-to-day
                  operations. We handle everything—from recruitment and
                  remuneration to performance management and even setting up
                  physical workspaces if needed.
              </p>
              <div className='get-started1'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
              </div>
              <div className='sixth_image'>
              
               <img 
              src="/Group212.svg"
              alt="Background"
              className=" justify-center w-[600px]"
            
            />
              </div>
              {/* <div className= "flex justify-left mr-75 z-50 hidden md:block item-left">
             
             <img 
               src="/Maskgroup4.png"
               alt="Background"
               className=" z-50"
               />
                 </div>
                 <div className= "flex justify-left mr-75 z-50 hidden md:block item-left mt-20">
             
             <img 
               src="/Maskgroup5.png"
               alt="Background"
               className=" z-50"
               />
                 </div> */}


              


<div>

 
              
             
             
  
       
       
    
</div>
     
        
          </div>
         
          </div>
          </section>
          <section className='sixth_section'>
          <div className="sixth"> 
          <div className='div_sixth'>
          <div>
                 <h1 className='fourth_title'>
                 Microservices
                 </h1>
              <p className='desc_fourth_section'>
                 Get instant access to top-vetted tech talent with expertise in
                  Machine Learning, AI, Data, Blockchain, Cybersecurity, and more.
                  We help companies build and manage Africa-based remote teams
                  without the hassle of hiring, onboarding, or managing day-to-day
                  operations. We handle everything—from recruitment and
                  remuneration to performance management and even setting up
                  physical workspaces if needed.
              </p>
              <div className='get-started-mobile'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
              </div>
              <div className='sixth_image'>
              
               <img 
              src="/Group212.svg"
              alt="Background"
              className=" justify-center w-[600px]"
            
            />
              </div>
              {/* <div className= "flex justify-left mr-75 z-50 hidden md:block item-left">
             
             <img 
               src="/Maskgroup4.png"
               alt="Background"
               className=" z-50"
               />
                 </div>
                 <div className= "flex justify-left mr-75 z-50 hidden md:block item-left mt-20">
             
             <img 
               src="/Maskgroup5.png"
               alt="Background"
               className=" z-50"
               />
                 </div> */}


              


<div>

 
              
             
             
  
       
       
    
</div>
     
        
          </div>
         
          </div>
          </section>
         
         
         
         <div className="div_seventh">
         <div className="div_seventh">
         <img 
               src="/group.svg"
               alt="Background"
               className="mr-30"
               />
            </div>
          
  
            </div>
            <section className='seventh_mobile'>
            <div className="div_seventh_mobile">
            <h1 className='fourth_title2'>
            Micro-consulting
                 </h1>
              <p className='desc_fourth_section2'>
              Get quick, expert advice to drive your business  forward. We help you make informed decisions,  improve efficiency, and reduce risks. We provide  product development strategy, cloud infrastructure  consulting, performance optimization, security  compliance, risk assessments, API selection and  implementation advisory, and more.
              </p>
            
         <img 
               src="/Group169.svg"
               alt="Background"
               className="mr-30"
               />
                 <div className='get-started-mobile2'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
            </div>
            </section>
      
        </main>
        
      </div>
    )}
  </PagesLayout>
    );
  };
  
