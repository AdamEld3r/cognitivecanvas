const loaderBtn = document.getElementById('js-btn');
const loader = document.getElementById('js-loader');
const loaderCube = document.getElementById('js-loader-cube');
const loaderLine = document.getElementById('js-loader-line');
const sectionsNode = document.body.querySelectorAll('.section');
const sectionsLineNode = document.body.querySelectorAll('.section__line');
const titlesOverlayNode = document.body.querySelectorAll('.section__title-overlay');
const sectionsOverlayNodes = document.body.querySelectorAll('.section__overlay');
const sectionsLine = Array.prototype.slice.call(sectionsLineNode,0);
const titlesOverlay = Array.prototype.slice.call(titlesOverlayNode,0);
const sectionsOverlay = Array.prototype.slice.call(sectionsOverlayNodes,0);

loaderBtn.addEventListener('click', () => {
  animLoader();
  animSections();
});
Array.prototype.forEach.call(sectionsNode, function (section) {
  section.addEventListener('click', () => {
    animImages();
  })
});

function animLoader() {
  const tl = new TimelineMax();

  tl
    .to(loaderCube, 1.5, {ease: Power2.easeInOut, rotation: '+= 450', transformOrigin:"center center"})
    .to(loaderLine, 1.5, {ease: Power0.easeNone, height: 0}, 0)
    .to(loader, 1, {opacity: 0}, 1.4)
    .to(loader, 1, {zIndex: -1}, 3);
}
function animSections() {
  const tl = new TimelineMax();

  sectionsLine.forEach((line) => {
    const animTime = 0.1 * (Math.floor(Math.random() * (10 - 4) + 4));
    tl
      .to(line, animTime, {ease: Power1.easeIn, top: 0}, 1)
      .to(line, 1, {width: 0}, 3)
  });
  titlesOverlay.forEach((title) => {
    tl.to(title, 1, {ease: Power1.easeIn, left: '100%'}, 2)
  });
  sectionsOverlay.forEach((section) => {
    tl.to(section, 1, {ease: Power1.easeInOut, left: '100%'}, 2.5)
  });
}
function animImages() {
  const tl = new TimelineMax();

  Array.prototype.forEach.call(sectionsNode, function (section) {
    const sectionHeight = section.offsetHeight;
    const animDelay = ((Math.floor(Math.random() * (10 - 4) + 4)) * 0.1);

    tl
      .to(section, 1, {ease: Power2.easeInOut, top: `-=${sectionHeight}`}, animDelay)
      .to(section, 0.5, {opacity: 0}, (animDelay + 0.1));
  });

  setTimeout(() => {
    document.location.reload(true);
  }, 3000);

}
