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
