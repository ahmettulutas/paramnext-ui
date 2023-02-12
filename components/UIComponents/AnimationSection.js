import { useRef } from "react";
import { useInView } from "framer-motion";
import PropTypes from "prop-types";
import { generateTransform } from "@/lib/helpers";
import { animations } from "@/lib/constants";


const AnimateSection = ({ children, delay, animationSlide, once = false, translate }) => {
  const ref = useRef(null),
    isInView = useInView(ref, { once }),
    animations = generateTransform(translate);
  return (
    <section ref={ref} className="animation-section"
      style={{
        transform: isInView ? "none" : `${animations[animationSlide]}`,
        opacity: isInView ? 1 : 0,
        transition: `all ${delay/1000}s cubic-bezier(.175,.885,.32,1.275)`
      }}>
      {children}
    </section>
  );
};
AnimateSection.propTypes = {
  delay: PropTypes.number.isRequired,
  animationSlide: PropTypes.oneOf(Object.keys(animations)),
  once: PropTypes.bool,
  translate: PropTypes.number
};
export default AnimateSection;