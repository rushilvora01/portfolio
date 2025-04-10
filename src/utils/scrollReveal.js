// Utility for scroll reveal animations
export const checkInView = (element, offset = 150) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  return (
    rect.top <= windowHeight - offset && 
    rect.bottom >= 0
  );
};

export const handleScrollReveal = () => {
  const elements = document.querySelectorAll('.reveal');
  
  elements.forEach(element => {
    if (checkInView(element)) {
      element.classList.add('active');
    }
  });
};

// Export a hook to use in components
export const initScrollReveal = () => {
  handleScrollReveal();
  window.addEventListener('scroll', handleScrollReveal);
  
  // Clean up the event listener
  return () => window.removeEventListener('scroll', handleScrollReveal);
}; 