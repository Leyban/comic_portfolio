
  
const observeElement = (selector: string, threshold: number = 0) => {
  const observer = new IntersectionObserver(intersections => {
    intersections.forEach(({
      target,
      isIntersecting,
    }) => {
      target.classList.toggle('withinView', isIntersecting);
    });
  }, {
    threshold,
    root: null,
  });
  
  const target = document.querySelector(selector)
  if(!target) {return}
  observer.observe(target)
}

export default observeElement