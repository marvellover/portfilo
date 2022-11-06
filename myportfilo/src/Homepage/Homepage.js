import React from 'react'
import logo from '../Homepage/logo.png'
import '../Homepage/Homepage.css'
import myimg from '../Homepage/myimg.jpg'
import instaicon from '../Homepage/instaicon.png' 
import twitter from '../Homepage/twiteericon.png'
import github from '../Homepage/github.png'
import email from '../Homepage/email.png'
import phone from '../Homepage/phone.png'
import pj1 from '../Homepage/pj-1.png'
import gmail from '../Homepage/gmail.png'
import instlog from '../Homepage/instalogo.png'
import linkedin from '../Homepage/linkedin.png'
import twitter2 from '../Homepage/twitterlogo.png'

export default function Homepage() {
    let img1 ='https://image.shutterstock.com/image-photo/presentation-project-management-areas-knowledge-260nw-706715482.jpg'
    let img2 =''



    let navbar = document.getElementById('navbar')
    let menu = document.getElementById('menu')

    window.onscroll = function(){
        if(window.pageYOffset >= menu.offsetTop){
            navbar.classList.add('sticky')
        }
        else{
            navbar.classList.remove('sticky')
        }
    }

  return (
    <>
    <div className="home section">
        <nav id='navbar' className='navbar' >
            <img className='logo' src={logo}></img>
            <div id='menu' className='menu'>
                <ul>
                    <li><a href='#home'>HOME</a></li>
                    <li><a href='#About'>ABOUT</a></li>
                    <li><a href='#projects'>PROJECTS</a></li>
                    <li><a href='#contact'>CONTACT</a></li>
                </ul>
            </div>
        </nav>
        <div className='bodysection'>
        <div id='home' className='infopage'>
            <div className='info'>
            <div>
                <img className='img-2'src={myimg}></img>
            </div>
                <h3> I  AM</h3>
                <h1><b>SANNITH KUMAR</b></h1>
                <h3>FULL STACK WEBDEVEPLOR AND STUDENT OF MLRITM</h3>
                <div className='icon'>
                    <a href='https://www.instagram.com/sa_nnith_00/'><img className='insta' src={instaicon}></img></a>
                    <a href='https://twitter.com/sannithnalluri'><img className='twiteer' src={twitter}></img></a>
                    <a><img className='github' src={github}></img></a>
                </div>
            </div>
            <div className='img-1'>
                <img className='myimg' src={myimg}></img>
            </div>

        </div>
        <hr/>
        <div  id='About' className='Aboutskills'>
        <div   className='About'>
            <h3>ABOUT ME</h3>
            <p> My name is SANNITH KUMAR.I am a B.Tech Student in specilaztion in AI & ML  in Marri Laxman reddy institue of techonology and mangement
                Second year  with great interest  web development, software development, Artifical intellgence and machine learning data structures and algorithms....

            </p>
             </div>
        <div className='skills'>
            <h1>SKILLS</h1>
            <p><h3>Major skills : HTML CSS JAVASCRIPT</h3>
            <h3>Languages : C ,PYTHON ,JAVA </h3>
            <h3>FRAME WORK : REACTJS,EXPRESS,MONGOOSE</h3>
            <h3>DATABASE : MONGODB,MYSQL</h3>
            <h3>MINOR SKILLS: ML MODULES </h3>
            <h3>EXTRA SKILLS:MS OFFICE,EVENT MANAGEMNET,PRESESNTAION SKILLS</h3></p>

        </div>
             
          </div>
          <hr/>
        <div  id='projects'className='Projects'>
            <h1>PROJECTS</h1>
            <div className='project-col-1'>
            <div className='project-1'>
                <img  src={pj1} className='pj1-img'/>
                <span><p>
                    <h2>AI ARICLES NEW BLOG</h2>
                    <p>This website display the best refined ai artical pulblishe in recent time ..This is can upadate the data  from directed from data</p>
                    <h4>Tech used</h4>
                    The is My first website  which is design using the html css javascript.This major project was done using Reactjs framework for frontend development.
                    backend was design using Express and nodejs framework .The Database is used in noSQl Database that is Mongodb.Rest api is used to communicated between backend and  frontend 
                    this project was completed in a month of October-2022 and pre production work of website is on going
                </p></span>
            </div>
            {/* <div className='project-2'>
            <img  src={img1} className='pj1-img'/>
                <span>
                <p>
                    
                </p></span>
            </div> */}
            </div>
            {/* <div className='project-col-2'>
            <div className='project-1'>
            <img  src={img2} className='pj1-img'/>
                <span><p>Unless you have been living under a rock, you are bound to have heard either how AI will be the end of all humanity (Stephen Hawking, Steve Wozniak and Elon Musk), or the solution to its biggest challenges. After decades of hype, AI (artificial intelligence) has arrived.

We’ve been trying to learn from those who have used or explored AI across a range of policy issues that the UN works on – from cutting down costs and time in public services and providing humanitarian assistance based on real-time movement of people, to capturing consumption patterns at micro-levels.

Our explorations of AI are in line with UNDP’s new Strategic Plan, which emphasizes that innovation has a central role in fulfilling the organization’s mission and achieving the Sustainable Development Goals. By applying leading-edge thinking and advances such as AI, we can help countries make faster progress on the Goals.

So what do we talk about when we talk about AI? What applications of it have inspired us? And what do we mean by ‘responsible’ AI?  
                </p></span>
            </div>
            <div className='project-2'>
            <img  src={myimg} className='pj1-img'/>
                <span><p>Unless you have been living under a rock, you are bound to have heard either how AI will be the end of all humanity (Stephen Hawking, Steve Wozniak and Elon Musk), or the solution to its biggest challenges. After decades of hype, AI (artificial intelligence) has arrived.

We’ve been trying to learn from those who have used or explored AI across a range of policy issues that the UN works on – from cutting down costs and time in public services and providing humanitarian assistance based on real-time movement of people, to capturing consumption patterns at micro-levels.

Our explorations of AI are in line with UNDP’s new Strategic Plan, which emphasizes that innovation has a centrale role in fulfilling the organization’s mission and achieving the Sustainable Development Goals. By applying leading-edge thinking and advances such as AI, we can help countries make faster progress on the Goals.

So what do we talk about when we talk about AI? What applications of it have inspired us? And what do we mean by ‘responsible’ AI?  
                </p></span>
            </div>
            </div> */}
        </div>
            </div>
       

    </div>
    <footer>
     <div  id='contact' className='contactpage'>
        <h1>Contact Page</h1>
        <h3>Email::sannithnalluri@gmail.com</h3>
        <h3>Ph.no::9398112724</h3>
        <div className='footerlogos'>
            <a href='https://www.instagram.com/sa_nnith_00/'><img src={instlog}/></a>
            <a href='https://www.linkedin.com/in/sannith-kumar-aa25a0174/'><img src={linkedin}/></a>
            <a href='https://twitter.com/sannithnalluri'><img src={twitter2}/></a>
            <a href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrkVQGHgcMcLFksJPmhFVBfMsDNKphgTmjhzSgGhMrrPPFGTDNphdJVmkNLVNrXTvbBLKL'><img src={gmail}/></a>

        </div>
        <h3>@sannithnalluri.All copyright reserved 2022</h3>
        </div>
     </footer>
     </>

    
  )
}
