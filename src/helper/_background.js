export default function handleBackgroundChange(event, node, colors, frames) {
  event.preventDefault();

  const body = document.querySelector(node);
  const height = body.offsetHeight;
  // const colors = colorArray;
  let position = window.pageYOffset;
  let previousColor = [];
  let currentColor = [];
  let nextColor = [];
  let percentFromNextFrame = 0;
  // let frames = frameNumber;
  let newRgb = [];
  const scrollSectionHeight = Math.floor( height / frames );

  currentColor = body.style.backgroundColor;

  if (position > 0 && position < scrollSectionHeight) {

    previousColor = colors[0];
    nextColor = colors[1];

    percentFromNextFrame = (position / scrollSectionHeight);

    newRgb = [
      Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromNextFrame )),
      Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromNextFrame )),
      Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromNextFrame ))
    ];

    body.style.backgroundColor = 'rgb(' + newRgb.join(',') + ')';
  }

  if (position > (scrollSectionHeight * (frames - 2)) && position < (scrollSectionHeight * (frames - 1))) {

    previousColor = colors[1];
    nextColor = colors[2];

    percentFromNextFrame = (position - (scrollSectionHeight * (frames - 2))) / scrollSectionHeight;

    newRgb = [
      Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromNextFrame )),
      Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromNextFrame )),
      Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromNextFrame ))
    ];

    // console.log("newrgb", newRgb);

    body.style.backgroundColor = 'rgb(' + newRgb.join(',') + ')';
  }
}
