import React from "react";
import "./Index1.css";
import "./nicepage.css";

import 'react-bootstrap'  
import { Card,Badge,Container,Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Index = () => {
  return ( 
  <div>

  <body data-home-page="Index.html" data-home-page-title="Index" class="u-body">
    <section class="u-clearfix u-grey-10 u-valign-middle u-section-1" id="sec-dedf">
      <div class="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
        <div class="u-layout" >
          <div class="u-layout-row" >
            <div class="u-align-left u-container-style u-layout-cell u-palette-1-base u-right-cell u-size-30 u-size-xs-60 u-layout-cell-1" src="">
              <div class="u-container-layout u-container-layout-1" src="">
                <div class="u-shape u-shape-svg u-text-grey-40 u-shape-1">
                  <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160"></svg>
                  <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-2d5e"><path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"></path></svg>
                </div>
                <blockquote class="u-text u-text-1">
                  <span style={{fontSize: '1.5rem'}}>
                    <span style={{fontWeight: '700'}}>
                       Try the latest&nbsp;AI&nbsp;features!
                  
                    </span>
                    <span style={{fontWeight: '700;'}}>New AI&nbsp;tools let you&nbsp;enhance everything you do&nbsp;with the latest OpenAI tools&nbsp;to solve problems, write solutions&nbsp;</span>
                  </span>
   
                </blockquote>
                <div class="u-shape u-shape-svg u-text-palette-1-base u-shape-2">
                  <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 100" ></svg>
                  <svg class="u-svg-content" viewBox="0 0 160 100" x="0px" y="0px" id="svg-7778"><path d="M133,27.2c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,22.4
	c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0
	l-3.8,4.8C146.9,20.6,142.3,20.6,133,27.2z M133,11c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0
	C19.2,4.5,13,4.5,3.8,11L0,6.2c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0
	c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8C146.9,4.4,142.3,4.4,133,11z M32.2,38.8c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0
	c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8c-9.3-6.6-13.9-6.6-23.3,0c-13.9,9.9-25.8,9.9-39.8,0
	c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,38.8C11.2,30.8,20.6,30.5,32.2,38.8z M133,76.2
	c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,71.4
	c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0
	l-3.8,4.8C146.9,69.6,142.3,69.6,133,76.2z M133,60c-13.9,9.9-25.8,9.9-39.8,0c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0
	c-9.2-6.5-15.4-6.5-24.6,0L0,55.2c11.2-8,20.6-8.3,32.2,0c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0c11.4,8.2,20.3,8.5,32.2,0
	c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8C146.9,53.4,142.3,53.4,133,60z M32.2,87.8c11,7.8,19,8.7,31.3,0c11.6-8.3,22.4-7.9,33.5,0
	c11.4,8.2,20.3,8.5,32.2,0c11.6-8.3,19.2-8.3,30.8,0l-3.8,4.8c-9.3-6.6-13.9-6.6-23.3,0c-13.9,9.9-25.8,9.9-39.8,0
	c-9.1-6.4-16.8-6.4-25.9,0c-13.8,9.8-25.1,9.8-38.9,0c-9.2-6.5-15.4-6.5-24.6,0L0,87.8C11.2,79.8,20.6,79.5,32.2,87.8z"></path></svg>
                </div>
              </div>
            </div>
            <div class="u-container-style u-layout-cell u-left-cell u-shape-rectangle u-size-30 u-size-xs-60 u-white u-layout-cell-2" src="">
              <div class="u-container-layout u-container-layout-2">
                <div class="u-palette-5-base u-preserve-proportions u-shape u-shape-circle u-shape-3"></div>
                <h1 class="u-align-center u-custom-font u-font-montserrat u-text u-text-palette-1-base u-text-2"> Ready to help you in your projects!
                </h1>
                <div class="u-shape u-shape-svg u-text-palette-5-light-1 u-shape-4">
                  <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160"></svg>
                  <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-a0bf" style={{enableBackground: '0 0 160 160'}}><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
                </div>
                <a href="https://nicepage.review" class="u-active-grey-90 u-border-none u-btn u-btn-round u-button-style u-hover-grey-90 u-palette-1-base u-radius-8 u-text-active-white u-text-body-alt-color u-text-hover-white u-btn-1"> Start Your Free Trial</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-white u-section-2" id="sec-93ad">
      <div class="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
        <div class="u-shape u-shape-svg u-text-palette-5-light-1 u-shape-1">
          <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160" ></svg>
          <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-be4d" style={{enableBackground: '0 0 160 160'}}><path d="M80,30c27.6,0,50,22.4,50,50s-22.4,50-50,50s-50-22.4-50-50S52.4,30,80,30 M80,0C35.8,0,0,35.8,0,80s35.8,80,80,80
	s80-35.8,80-80S124.2,0,80,0L80,0z"></path></svg>
        </div>
        <div class="u-shape u-shape-svg u-text-grey-40 u-shape-2">
          <svg class="u-svg-link" preserveAspectRatio="none" viewBox="0 0 160 160"></svg>
          <svg class="u-svg-content" viewBox="0 0 160 160" x="0px" y="0px" id="svg-a962"><path d="M114.3,152.3l38-38C144.4,130.9,130.9,144.4,114.3,152.3z M117.1,9.1l-108,108c0.8,1.6,1.7,3.2,2.7,4.8l110-110
	C120.3,10.9,118.7,10,117.1,9.1z M97.5,2L2,97.5c0.4,2,1,4,1.5,5.9l99.9-99.9C101.5,2.9,99.5,2.4,97.5,2z M80,160c2,0,4-0.1,5.9-0.2
	l73.9-73.9c0.1-2,0.2-3.9,0.2-5.9c0-0.6,0-1.2,0-1.9L78.1,160C78.8,160,79.4,160,80,160z M34.9,146.1c1.5,1,3,2,4.6,2.9L149,39.5
	c-0.9-1.6-1.9-3.1-2.9-4.6L34.9,146.1z M132.7,19.8L19.8,132.7c1.2,1.3,2.3,2.6,3.6,3.9L136.6,23.4C135.3,22.2,134,21,132.7,19.8z
	 M59.6,157.4l97.8-97.8c-0.5-1.9-1.1-3.8-1.7-5.7L53.9,155.6C55.8,156.3,57.7,156.9,59.6,157.4z M7.6,45.9L45.9,7.6
	C29.1,15.5,15.5,29.1,7.6,45.9z M80,0c-2.6,0-5.1,0.1-7.6,0.4l-72,72C0.1,74.9,0,77.4,0,80c0,0.1,0,0.2,0,0.2L80.2,0
	C80.2,0,80.1,0,80,0z"></path></svg>
        </div>
        <div class="u-expanded-width u-palette-1-base u-shape u-shape-rectangle u-shape-3"></div>
        <div class="u-align-left u-expanded-width-sm u-expanded-width-xs u-shading u-video u-video-contain u-video-1">
          <div class="embed-responsive embed-responsive-1">
            <iframe style={{position: 'absolute',top: '0',left: '0',width: '100%',height: '100%'}} class="embed-responsive-item" data-src="https://www.youtube.com/embed/L-hm3S1aSnI?playlist=L-hm3S1aSnI&amp;loop=1&amp;mute=0&amp;showinfo=0&amp;controls=0&amp;start=0" data-poster="https://pixabay.com/get/g8d3908748b57a10a96518f63977a0096c8ed9333425699b69969f8f825b69e79a131cc536b923c7d05d243ce33f241be58281905c1cd0b733da8e9ecc7a73353_1280.jpg" frameborder="0" allowfullscreen=""></iframe>
            <button class="u-video-poster u-video-poster-1" data-src="images/57a10a96518f63977a0096c8ed9333425699b69969f8f825b69e79a131cc536b923c7d05d243ce33f241be58281905c1cd0b733da8e9ecc7a73353_1280.jpg"></button>
          </div>
        </div>
        <h2 class="u-text u-text-1">See how it works</h2>
      </div>
    </section>
    <section class="u-align-center u-clearfix u-grey-5 u-section-3" id="sec-cbb2">
      <div class="u-clearfix u-sheet u-sheet-1">
        <h1 class="u-align-left u-text u-text-palette-1-base u-text-1"> Tools That Solve Your Problem</h1>
        <p class="u-align-left u-text u-text-2">With a lot of powerful features, we guarantee simplicity and clarity.</p>
        <img class="u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-image u-image-contain u-image-default u-image-1" src="images/hghh-min.png" alt="" data-image-width="845" data-image-height="856" />
        <div class="u-clearfix u-expanded-width-md u-expanded-width-sm u-expanded-width-xs u-gutter-18 u-layout-wrap u-layout-wrap-1">
          <div class="u-gutter-0 u-layout">
            <div class="u-layout-row">
              <div class="u-size-30">
                <div class="u-layout-col">
                  <div class="u-align-center u-container-style u-layout-cell u-radius-10 u-size-40 u-white u-layout-cell-1">
                    <div class="u-container-layout u-valign-top u-container-layout-1"><span class="u-icon u-icon-circle u-palette-1-light-3 u-spacing-18 u-icon-1"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512"></svg><svg class="u-svg-content" viewBox="0 0 512 512" x="0px" y="0px" id="svg-68b1" style={{enableBackground: '0 0 512 512'}}><g><g><path d="M400,188h-36.037v-82.23c0-58.322-48.449-105.77-108-105.77c-59.551,0-108,47.448-108,105.77V188H112    c-33.084,0-60,26.916-60,60v204c0,33.084,26.916,60,60,60h288c33.084,0,60-26.916,60-60V248C460,214.916,433.084,188,400,188z     M187.963,105.77c0-36.266,30.505-65.77,68-65.77s68,29.504,68,65.77V188h-136V105.77z M420,452c0,11.028-8.972,20-20,20H112    c-11.028,0-20-8.972-20-20V248c0-11.028,8.972-20,20-20h288c11.028,0,20,8.972,20,20V452z"></path>
</g>
</g><g><g><path d="M256,286c-20.435,0-37,16.565-37,37c0,13.048,6.76,24.51,16.963,31.098V398c0,11.045,8.954,20,20,20    c11.045,0,20-8.955,20-20v-43.855C286.207,347.565,293,336.08,293,323C293,302.565,276.435,286,256,286z"></path>
</g>
</g></svg></span>
                      <h3 class="u-text u-text-default u-text-palette-1-base u-text-3"> Interpret code</h3>
                      <h5 class="u-text u-text-4">Explains the code based on the language and syntax</h5>
                    </div>
                  </div>
                  <div class="u-align-center u-container-style u-layout-cell u-radius-10 u-size-20 u-white u-layout-cell-2">
                    <div class="u-container-layout u-container-layout-2"><span class="u-icon u-icon-circle u-palette-1-light-3 u-spacing-18 u-text-palette-1-base u-icon-2"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512"></svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-0413"><path d="m467 1h-422c-24.813 0-45 20.187-45 45v420c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-420c0-24.813-20.187-45-45-45zm-422 30h422c8.271 0 15 6.729 15 15v75h-452v-75c0-8.271 6.729-15 15-15zm422 450h-422c-8.271 0-15-6.729-15-15v-315h452v315c0 8.271-6.729 15-15 15z"></path><path d="m306.909 197.213c-7.614-3.263-16.433.264-19.696 7.878l-90 210c-3.264 7.614.264 16.433 7.878 19.696 7.617 3.264 16.434-.266 19.696-7.878l90-210c3.264-7.615-.264-16.433-7.878-19.696z"></path><path d="m177.713 246.629c-5.176-6.469-14.617-7.517-21.083-2.342l-75 60c-7.499 5.997-7.504 17.424 0 23.426l75 60c6.469 5.176 15.91 4.126 21.083-2.342 5.175-6.469 4.127-15.909-2.343-21.083l-60.358-48.288 60.358-48.287c6.47-5.175 7.518-14.614 2.343-21.084z"></path><path d="m430.37 304.287-75-60c-6.469-5.176-15.909-4.127-21.083 2.342-5.175 6.469-4.127 15.909 2.343 21.083l60.358 48.288-60.358 48.287c-6.47 5.175-7.518 14.614-2.343 21.083 5.182 6.476 14.623 7.512 21.083 2.342l75-60c7.499-5.997 7.504-17.423 0-23.425z"></path><circle cx="76" cy="76" r="15"></circle><circle cx="136" cy="76" r="15"></circle><circle cx="196" cy="76" r="15"></circle><path d="m346 91h90c8.284 0 15-6.716 15-15s-6.716-15-15-15h-90c-8.284 0-15 6.716-15 15s6.716 15 15 15z"></path></svg></span>
                      <h3 class="u-text u-text-palette-1-base u-text-5"> Code convertor</h3>
                      <h5 class="u-text u-text-6">Get your code Translated&nbsp;</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div class="u-size-30">
                <div class="u-layout-col">
                  <div class="u-align-center u-container-style u-layout-cell u-radius-10 u-size-20 u-white u-layout-cell-3">
                    <div class="u-container-layout u-valign-bottom u-container-layout-3"><span class="u-icon u-icon-circle u-palette-1-light-3 u-spacing-18 u-icon-3"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 512 512" ></svg><svg class="u-svg-content" viewBox="0 0 512 512" id="svg-e131"><path d="m492 472h-216v-36.914062c109.730469-9.914063 198-102.0625 198-217.085938 0-120.480469-97.5-218-218-218-120.480469 0-218 97.5-218 218 0 58.230469 22.675781 112.976562 63.851562 154.148438 36.421876 36.425781 83.46875 58.359374 134.148438 62.9375v36.914062h-216c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h472c11.046875 0 20-8.953125 20-20s-8.953125-20-20-20zm-59.128906-274h-77.261719c-1.832031-47.128906-10.902344-103.070312-32.40625-144.816406 59.027344 24.160156 102.289063 79.132812 109.667969 144.816406zm-77.261719 40h77.261719c-7.378906 65.683594-50.640625 120.65625-109.667969 144.816406 21.519531-41.777344 30.578125-97.742187 32.40625-144.816406zm-99.609375-198c38.996094 0 57.757812 114.359375 59.582031 158h-119.164062c2.320312-55.503906 23.808593-158 59.582031-158zm-176.871094 198h77.261719c1.832031 47.132812 10.902344 103.070312 32.40625 144.816406-59.027344-24.160156-102.289063-79.132812-109.667969-144.816406zm77.261719-40h-77.261719c7.378906-65.683594 50.640625-120.65625 109.667969-144.816406-21.523437 41.777344-30.578125 97.746094-32.40625 144.816406zm99.609375 198c-38.996094 0-57.757812-114.359375-59.582031-158h119.160156c-2.308594 55.320312-23.777344 158-59.578125 158zm0 0"></path></svg></span>
                      <h3 class="u-text u-text-default u-text-palette-1-base u-text-7"> Regex pattern</h3>
                      <h5 class="u-text u-text-default u-text-8">Get Your regex pattern generated</h5>
                    </div>
                  </div>
                  <div class="u-align-center u-container-style u-layout-cell u-radius-10 u-size-40 u-white u-layout-cell-4">
                    <div class="u-container-layout u-container-layout-4"><span class="u-icon u-icon-circle u-palette-1-light-3 u-spacing-18 u-text-palette-1-base u-icon-4"><svg class="u-svg-link" preserveAspectRatio="xMidYMin slice" viewBox="0 0 24 24" ></svg><svg class="u-svg-content" viewBox="0 0 24 24" id="svg-943c"><path d="m12 6c-1.228 0-12-.084-12-3s10.772-3 12-3 12 .084 12 3-10.772 3-12 3zm-10.412-3c.732.568 4.245 1.5 10.412 1.5s9.68-.932 10.412-1.5c-.732-.568-4.245-1.5-10.412-1.5s-9.68.932-10.412 1.5zm20.939.116h.01z"></path><path d="m12 12c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z"></path><path d="m12 18c-1.228 0-12-.084-12-3 0-.414.336-.75.75-.75.385 0 .702.29.745.664.462.553 4.012 1.586 10.505 1.586s10.043-1.033 10.505-1.586c.043-.374.36-.664.745-.664.414 0 .75.336.75.75 0 2.916-10.772 3-12 3zm10.5-3.001c0 .001 0 .001 0 0zm-21 0c0 .001 0 .001 0 0z"></path><path d="m12 24c-1.228 0-12-.084-12-3v-18c0-.414.336-.75.75-.75s.75.336.75.75v17.919c.481.556 4.03 1.581 10.5 1.581s10.019-1.025 10.5-1.581v-17.919c0-.414.336-.75.75-.75s.75.336.75.75v18c0 2.916-10.772 3-12 3z"></path><circle cx="5" cy="14" r="1"></circle><circle cx="5" cy="8" r="1"></circle><circle cx="5" cy="20" r="1"></circle></svg></span>
                      <h3 class="u-text u-text-palette-1-base u-text-9"> Fix and clean code</h3>
                      <h5 class="u-text u-text-10">Writte a better code which is clean and simple to use</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
  </div> );
}
 
export default Index;