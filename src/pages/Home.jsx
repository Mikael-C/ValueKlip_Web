import React, {useState, useEffect} from 'react';
import './Home.css';
import { PagesLayout } from '../layout/PagesLayout';
import { Footer } from '../components/Footer/Footer';
import Loader from '../components/Loader';
import CollapsibleParagraph from '../components/Collapse';
import Collapsible from '../components/Collapseservices';
import CollapsibleWork from '../components/Collapsework';



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
           <h1>Design, build and launch your custom software product faster
           </h1>
       
                </div>
                <div className='learn'>
          <a
                href="#"
                target="_blank"
               
                className='learn_link'
                >Learn More </a>
                <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.500977 2.5C0.224834 2.5 0.000976562 2.72386 0.000976562 3C0.000976562 3.27614 0.224834 3.5 0.500977 3.5V2.5ZM6.83431 3C6.83431 4.47276 8.02822 5.66667 9.50098 5.66667C10.9737 5.66667 12.1676 4.47276 12.1676 3C12.1676 1.52724 10.9737 0.333333 9.50098 0.333333C8.02822 0.333333 6.83431 1.52724 6.83431 3ZM0.500977 3.5H9.50098V2.5H0.500977V3.5Z" fill="url(#paint0_linear_151_1421)"/>
  <defs>
  <linearGradient id="paint0_linear_151_1421" x1="0.500977" y1="3.5" x2="9.50098" y2="3.5" gradientUnits="userSpaceOnUse">
  <stop offset="1" stop-color="white"/>
  </linearGradient>
  </defs>
  </svg>
                
                </div>
          </div>
  
          <section className='second'>
          <div className='paq1'>
        
            <div className='div2'>
       
              <div className='sub_container '>
               
                <h1 className='title'>
                  Full-service Software <br />
                  Development
                </h1>
                <p className='desc_fourth'>
                  Transform your ideas into a market-ready product. Whether you
                  need a web, mobile, or enterprise application, we’ve got you
                  covered! Our expert engineering team will work closely with you
                  from planning to launch bringing your vision to
                </p>
                <div className='get-started'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>

                <div className='first-image5'>
                
                <img
                  src="/Group210.svg"
                  alt="Background"
                  className=" "
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
           <CollapsibleParagraph>
          
            </CollapsibleParagraph>
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
         <div className="">
            <div className=''>
  
  
  <div className=''>
  
  <h1 className='fourth_title1'>
  Why We Are The Best For You
             </h1>
  <p className='desc_fourth_section1'>
  We understand what it takes to build successful  products. One of our founders co-founded and  launched three (3) technology startups; a social  network app with 15,000+ users in 26 countries, a  bus-hailing app that completed 100,000+ trips and  generated over US$1.6 million in gross bookings  within 18 months, and an Agritech startup that  won a US$5,000 grant, while securing over  US$150,000 in investor funding across ventures.  With this proven track record, we bring firsthand  experience, deep expertise, and a results-driven
             </p>
           
             <div className='get-started-mobile1'>
                  <a href="#" target="_blank" className='get_link'>Get Started</a>
                </div>
                <div className=''>
  <img 
               src="/Group164.svg"
               alt="Background"
               className=""
               />
               
    
  
  
  </div>
             </div>
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
  Our engineering team uses proven technologies to  deliver reliable, scalable, and fast solutions that  address your unique business needs.
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
           
             <div className=''>
  <img 
               src="/Group51.svg"
               alt="Background"
               className=" ml-[190px] mb-[400px]  mr-[100px]"
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
         
         
         
         <div className="relative bg-black text-white h-[900px] font-raleway">
         <div className="div_seventh">
         <img 
               src="/group.svg"
               alt="Background"
               className="mr-30"
               />
            </div>
          
  
            </div>
        
      
        </main>
        
      </div>
    )}
  </PagesLayout>
    );
  };
  
