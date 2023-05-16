# Code-and-DEPLOY-a-CSS-Animated-Website-Learn-CSS-transform-animations-SVGs

https://www.youtube.com/watch?v=lOAk7-bPyMk


https://www.codersdxb.com/

Web Hosting 
https://www.hostinger.com.br/ 

https://bytes.dev/?r=ania

https://www.saaa.am

https://www.figma.com 

New Project 
codersdxb-website 

Images
codersdxb-transparent.png 

app.js
const body = document.querySelector(‘body’)
const sliderIput = document.querySelector(‘#slider-input’)
const allBoxes = document.querySelectAll(‘.box’)
const allPills = document.querySelectorAll(‘.pill’)
const allHiddenPills = document.querySelectorAll(‘.hidden-pill’)
const allArrows = document.querySelectorAll (‘.arrow’)
const expandPill = document.querySelector(‘.#expand’)
const xLetterPath = document.querySelector(‘#x-letter’)
const xletterSVG = document.querySelector(‘#x-letter-svg’)
const xBox = document.querySelector(‘.x-box’)
const reversePill = document.querySelector(‘#reverse’)
const boxContainer = document.querySelector(‘.box-container’)
const iconPath = document.querySelector(‘#icon’)
const hiddenBox = documento.querySelector(‘.hidden-box’)
cons textBox = document.querySelector(‘.hidden-box .text-box’)

let paletteIndex = 0
const xLetterIndex = 11
const socialFanIndex = 1
const rotateIconIndex =3

// Start State 
xLetterSVG.style.fill = colorPalettes[paletteIndex][xLetterIndex].fill

.allPillsforEach((pill, i) => 
       pill.style.backgroundColor = colorPallettes[paletteIndex][i].fill) 
allHiddenPills.forEach(hiddenPill => 
       hiddenPill.style.backgroundColor = colorPallettes[paletteIndex][socialFanIndex].fill)

const expand = () => {
       if (hiddenBox.clientwidth ==! 0 ) {
              textBox.classList.add(‘hidden’)
              setTimeout(() => hiddenBox.style.width = ‘0’, 200)
 )
                  } else {
              hiddenBox.style.width = ‘1700px’
              setTimeout(() => textBox.classList.remove(‘hidden’), 500)
       }
}

expandPill.addEventListener(‘click’, expand)

const reverse = () => {
       if(boxContainer.style.flexWrap === ‘wrap’) {
             boxContainer.style.flexWrap =‘wrap-reverse’
       } else {
            boxContainer.style.flexWrap = ‘wrap’  
       }
}

reversePill.addEventListener(‘click’, reverse)

const addTheme = (
       bodybackgroundColor, 
              strokeWidth, 
              svgFill, 
              opacity, 
              lineColor, 
              borderRadius,
              boxBackgroundColor,
              pillBackgroundColor
) => {
       body.style.backgroundColor = bodybackgroundColor
       xLetterPath.style.strokeWidth = strokeWidth
       xLetterPath.style.stroke = lineColor || colorPalettes[paletteIndex][xLetterIndex].altStroke
       xLetterSVG.style.fill = svgFill || colorPalettes[paletteIndex][xLetterIndex].fill
       xLetterSVG.style.opacity = opacity
       xBox.style.backgroundColor = boxbackgroundColor || colorPalettes[paletteIndex][xLetterIndex].fill
       iconPath.style.stroke = lineColor || colorPalettes[paletteIndex][rotateIconIndex].altStroke
       iconPath.style.strokeWidth = strokeWidth
       allBoxes.forEach((box, i) => 
              box.style.backgroundColor = boxBackgroundColor || colorPalettes[paletteIndex][i].fill
       )

       allPill.forEach((pill, i) => {
              pill.style.opacity = opacity
              pill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][i].fill
              pill.style.borderWidth = strokeWidth
              pill.style.borderColor = lineColor || colorPalettes[paletteIndex][i]altStroke
              pill.style.boderBlockStyle = ‘solid’
              pill.style.borderRadius = borderRadius
})

       allHiddenPills.forEach(hiddenPill => {
              hiddenPill.style.opacity = opacity
              hideenPill.style.borderWidth = strokeWidth
              hiddenPill.style.backgroundColor = pillBackgroundColor || colorPalettes[paletteIndex][socialFanIndex].fill
              hiddenPill.style.borderColor = lineColor || colorPalettes[paletteIndex][socialFanIndex].altStroke
              hiddenPill.style.borderRadius = borderRadius                      
})

all.Arrow.forEach(arrow => {
              arrow.style.bordeBlockStyle = ‘solid’
              arrow.style.borderColor = lineColor
              arrow.style.borderWidth = ‘0 ’ + strokeWidth + ‘ ‘+ strokeWidth + ‘ 0‘              
              arrow.style.opacity = opacity
})

}

const moveSlider = () => {
       const sliderInput = document.querySelector(‘#slider-input’)
       const sliderValue = sliderInput.value

       if (sliderValue == 0) {
              // bodybackgroundColor, strokeWidth, svgFill, opacity, lineColor, borderRadius boxBackgroundColor, pillBackgroundColor
                addTheme(‘white’, ‘12px’, null, 1, ‘rgb(38, 38, 38’, ‘100px’, ‘white’, null)
       } 
       if (sliderValue > 1 && sliderValue <=3) {
                addTheme(‘white’, ‘2px’, ‘white’, 0.5, null, ‘75px’, null, ‘white’)
       } 
       if (sliderValue >= 4 && sliderValue <=6) {
                addTheme(‘white’, ‘1px’, ‘white’, 0.5, null, ‘90px’, null, ‘white’)
       } 
       if (sliderValue >=7 && sliderValue < 9) {
                addTheme(‘white’, ‘2px’, ‘white’, 0.5, ‘rgb(38, 38, 38’, ‘50px’, null, ‘white’)
       }
      if (sliderValue == 10) {
               addTheme(‘rgb(38, 38, 38’, ‘12px’, ‘white’, 1, ‘black’, 0, ‘transparent’, ‘white’)
      }
      console.log(sliderValue)
}
sliderInput.EventListener(‘input’, moveSlider)

const changePalette = () => {
       x.LetterPath.classList.add(‘pulse’)
       if (paletteIndex >= 2) {
              paletteIndez = 0
       } else {
              paletteIndex++
       }
       moveSlider()
       setTimeout (() => xLetterPath.classList.remove(‘pulse’), 500)
}

xBox.addEventListener(‘click’, changePalette)



colors.js 
const colorPaletes = [
       [
              {
                     altStroke: ‘#1a2f38’,
                     fill: #’264653’
              },
              {
                     altStroke: ‘#1b4d4c’,
                     fill: #’287271’
              },
              {
                     altStroke: ‘#1b6265d’,
                     fill: #’2a9d8f’
              },
              {
                     altStroke: ‘#6b8a60’,
                     fill: #’8ab17d’
              },
              {
                     altStroke: ‘#898a54’,
                     fill: #’babb74’
              },
              {
                     altStroke: ‘#ba9d56’,
                     fill: #’e9c46a’
              },
              {
                     altStroke: ‘#c2804c’,
                     fill: #’f4a261’
              },
             {
                     altStroke: ‘#b5573f’,
                     fill: #’e76f51’
              },
              {
                     altStroke: ‘#9e789e’,
                     fill: #’ba8fba’
              },
              {
                     altStroke: ‘#42466e’,
                     fill: ‘#595f94’
              },
              {
                     altStroke: ‘#661c0a’,
                     fill: ’f3a8be’
              },
              {
                     altStroke: ‘#912b11’,
                     fill: ‘#b43718’
              },
       ],
       [ 
              {
                     altStroke: ‘2A415B’,
                     fill: ‘#355070’
              },
              {
                     altStroke: ‘3A3D53’,
                     fill: ‘#515575
              },
       ]


index.html
<!DOCTYPE html>
<html lang=”en”>
<head>
       <meta charset=”UTF-8”>
       <title>CoderDXB</title>
       <link rel=”stylesheet” href=”styles.css”/>
</head>
<body>

<div class=”hidden-box”>
       <div class=”text-box hidden”>
             <h2>Want to see how this site was made?</h2>
             <p>Follow along with this tutorial from Ania Kubow.</p>
             <p>
                   Ania is a Software Developer raised in the UAE. 
                   She frequently puts out tutorials on her <a href=”https://youtube.com/@AniaKubow”>Youtube channel</a>
            </p>
            <Iframe src=”https://www.youtube.com/embed/RtVXXO4cRd8?controls=0”></iframe>
            <p>Click <a href=”https://youtube.com/@AniaKubow/”>here</a> to view more</p>
       </div>
</div>

<div class=”box-container”>

       <div class=”smal-box” box id=”expand”>
              <div class=”pill”>
                     <div class=”arrow left-expand-arrow”></div>
              </div>
       </div>

       <div class=”long-box box social-fan”>
             <div class=”pill”></div>
             <div class=”hidden-pill social instagram hidden”>
                    <a href=”https://instagram.com/aniakubow/”>ISTAGRAM</a>
             </div>
             <div class=”hidden-pill social email hidden”>
                    <a href=”mailto:ania@codewithania.com”>EMAIL</a>
             </div>
             <div class=”hidden-pill social coding-tips hidden”>
                                <a href=”https://bytes.dev/?r=ania”>CODING TIPS</a>
                         </div>
      </div>

      <div class=”long-box box”>
             <div class=”pill”>
<! - -                    <svg class=”rotating-icon” xmlns=”https://”>
                                  <path id=”icon”d=”M7 57C7 …”></path>
                            </svg>- ->
             </div>
      </div>
 
                  <div class=”small-box box” id=”reverse>
                         <div class=”pill”>
                                <! - - <svg class=”rotating-icon” xmlns=”https://”>
                                  <path d=”M7 57C7 …”></path>
                     </svg>- ->
                         </div>
                  </div>

                  <div class=”small-box box”>
                         <div class=”pill”></div>
                  </div>
 
      <div class=”long-box box”>
             <div class=”pill>
                    <a href=”https://www.saaa.am”>INSPIRED BY SAAA.AM</a>
             </div>
      </div>


                  <div class=”small-box box stretchable”>
                         <div class=”pill”>
                                <a class=”hidden” href=”https://www.codewithania.com”>NEWSLETTER</a>
                        </div>
                  </div>

                  <div class=”small-box box stretchable”>
                         <div class=”pill”>
                                <p class=”hidden”>:)</p>
                        </div>
                  </div>

       <div class=”large-box box” id=”takeover”>
              <div class=”pill”>
                     <div class=”logo-container”>
                            <img src=”images/codersdxb-transparent.png” alt=”CodersDXB Logo ”/>
                            <div class=”arrow-container”>
                                   <div class=”arrow right-expand-arrow”></div>
                            </div>
                     </div>

                     <div class=”text-box hidden”>
                           <h1>CoderDSXB</h1> 
                           <p>
                                    We are an inclusive community supporting
                                    all things tech and innovation in the UAE.                     
                           </p>
                           <p>
                                    Our mission is to update you on events going on,
                                    cool venues to work from remotely as well as the          
                                    latest news on technology and innovation.
                           </p>
                           <p>
                                    Make sure to <a aref=”https://www.codewithania.com”>sign up 
                                                to our newsletter</a> to stay updated.
                           </p>
                     </div>   
               </div>
       </div>

       <div class=”x-box”>
             <p>CLICK</p>
< ! - -            <svg id=”x-letter-svg” xmlns =”https://”>
                           <path id=”x-letter” d=”M41.9661 88 …”></path>
                    </svg>- - >
        </div>

       <div class=”large-box box” id=”squish>
              <div class=”pill”>
                     <div class=”text-box hidden”>
                            <p>
                                     Have a cool Dubai tech event you want us to promote ? 
                                     Contact us <a  
                                     href=”mailto:ania@codewithania.com”>here<a/>.</p>
                     </div>
              </div>/
       </div>

       <div class=”slider-container box”>
              <div class=”pill”>
                     <div class=”input-container”>
                           <input id=”slider-input” type=”range” min=”0” max=”10” value=”0” step=”1”/>
                     </div>
              </div>
       </div>
            </div>

            <script src=”colors.js”></script>
<script src=”app.js”></script>
<body>
</html>

localhost:...





styles.css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*  {
       transition: all 0.5s ease-in-out;
       font-family: “Poppins”, sans-serif;
       color: rgb(38, 38, 38);
       font-weight: 200;
       font-size: 25px; 
}

body {
       padding:0;
       margin: 0;
       display: flex;
}

a {
       text-decoration: none;
}

.hidden {
       display: none;
}

.box-container {
       display: flex;
       flex-wrap: wrap;
       height: 100vh;
       align-items: stretch;
}

.box {
       padding: 10px;
}

small-box {
       min-height: 150px;
       min-width: 250;
       flex-grow: 1;
}

.long-box {
       min-height: 150px;
       min-width: 500;
       flex-grow: 4;
}

.large-box {
       min-height: 500px;
       min-width: 410;
       flex-grow: 2;
}

.large-box#squish {
       min-width: 150px !important;
}

.pill {
       height: 100%;
       width: 100%;
       border: solid 12px rgb(38, 38, 38);
       box-sizing: border-box;
       border-radius: 100px;
       display: flex; 
       justify-content: center;
       align-items: center;
}

.slider-container {
       position: relative;
       min-height: 500px;
       width: 150px;
}

.input-container {
       position: absolute;
       bottom: 50px;
       left: 102px;
       transform: rotate(-90deg);
       transform-origin: bottom left;
       z-index: 2;
}

.slider-container input[type=”range”]  {
       -webkit-appearance: none;
      width: 420px;
      height: 20px;
      background-color: rgba(18, 9, 9, 0.6);
      border-radius: 5px;
}

.slider-container input[type=”range”]::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 100px;
        width: 100px;
        border-radius: 50%;
        background-color: rgb(255, 255, 255);
        border: rgb(38,38,38) solid 14px;
        cursor: grab;
        z-index: 3;
}

.x-box {
       position: relative;
       min-height: 500%;
       min-width: 410%;
       flex-grow: 1;
       display: flex;
       justify-content: center;
       align-items: center;
       cursor: pointer;
}

.x-box svg {
       transform: (scale 0.95);
}

.x-box p {
       position: absolute;
       top: 40%;
       z-index: 10;
       display: none;
}

.x-box:hover p {
       display: block;
}

.rotating-icon {
       animation-rotate 10s infinite;
}

@keyframes rotate {
       0% {
              transform: rotate(0deg); 
       }
       100% {
              transform: rotate(360deg);
       }
}

.arrow {
       border: solid rgb(38, 38, 38);
       border-width: 0 12px 12px 0;
       padding: 12px;
}

.left-expand-arrow {
       margin-right: 60px;
       animation: bounceLeft 3s infinite;
}

@keyframes bounceLeft {
       0%
       20%
       50%
       80%
       100% {
               transform: translateX(0), rotate(135deg);
        }

        40% {
               transform: translateX(-30px), rotate(135deg);

        }

        60% {
            transform: translateX(-15), rotate(135deg);

        }
}

.right-expand-arrow {
       animation: bounceRight 3s infinite;
}


@keyframes bounceRight {
       0%
       20%
       50%
       80%
       100% {
               transform: translateX(0), rotate(-45deg);
        }

        40% {
               transform: translateX(30px), rotate(-45deg);

        }

        60% {
            transform: translateX(15), rotate(-45deg);

        }
}

.logo-container {
       display:flex;
       align-items: center;
       max-width: 250px;
}

.logo-container img {
       width: 100%;
}

.hidden-pill {
       height: 100%;
       width: 100%;
       border: solid 12px rgb(38, 38, 38);
       box-sizing: border-box;
       border-radius: 100px;
       text-align: center;
}

.hidden-pill a {
       margin: 0 150px 0 0;
}

.social-fan {
       position: relative;
}

.social-fan .social {
       position: absolut;
       top: 0;
       right: 0;
       transform-origin: top right;
       z-index: 10;
}

.social-fan:hover .instagram {
        display: block;
        animation: fanInstagram 1s easy-in-out;
        animation-fill-mode: forwards;
}

@keyframes fanInstagram {
       0% {
             transform: rotate(0deg);
             right:0;
             top: 0;
       }
       100% {
             transform: rotate(-20deg);
             right 40px;
             top: -12px;    
       }
}


.social-fan:hover .email {
        display: block;
        animation: fanEmail 1s easy-in-out;
        animation-fill-mode: forwards;
}

@keyframes fanEmail {
       0% {
             transform: rotate(0deg);
             right:0;
             top: 0;
       }
       100% {
             transform: rotate(-40deg);
             right 100px;
             top: -16px;    
       }
}

.social-fan:hover .coding-tips {
        display: block;
        animation: fanCoding-Tips 1s easy-in-out;
        animation-fill-mode: forwards;
}

@keyframes fanCodingTips {
       0% {
             transform: rotate(0deg);
             right:0;
             top: 0;
       }
       100% {
             transform: rotate(-60deg);
             right 130px;
             top: -20px;    
       }
}

.stretchable:hover {
       flex-grow: 5 !important;
}

#takeover:hover ~ #squish {
       min-width: 0;
}

#takeover:hover .arrow-container {
       display: none;
}

.large-box:hover {
      flex-grow: 10 !important;
}

.large-box:hover .text-box {
       display: block;
}

.large-box .text-box {
      max-width: 300px;
}

.large-box .text-box p {
      font-size: 18px;
}

.large-box .text-box a {
      font-size: 18px;
      color: rgb(196, 104, 0)
}

.small-box.stretchable:hover .hidden {
      display: block;
}

.hidden-box {
      height: auto;
      width: 0;
      background-color: rgb(222, 222, 222);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
}

.hidden-box .text-box {
       margin: 30px;
}

.hidden-box ~ .box-container {
       overflow: hidden;
}

.pulse {
       transform-origin: center;
       animation: pulse 0.5s easy-in-out;
       animation-fill-mode: forwards;
}

@keyframes pulse {
       0% {
              transform: scale(1); 
       }
       50% {
               transform: scale(0.95);
       }
       100% {
               transform: scale(1);
       }
}

.hidden-box a,
.hidden-box p {
       font-size: 18px;
}

.hidden-box a {
       color: #b12626;
}

iframe {
       width: 100%;
       min-height: 300px;
}


https://fonts.google.com/specimen/Poppins?query=Poppins

https://hostinger.com 



