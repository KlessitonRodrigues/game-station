import { keyframes } from 'styled-components';

const slideUp = keyframes`
    from {transform: translateY(6rem); opacity: 0} 
    to {opacity: 1}
`;

const slideUpLarge = keyframes`
    from {transform: translateY(18rem); opacity: 0} 
    to {opacity: 1}
`;

const fadeIn = keyframes`
   from {opacity: 0}
   to {opacity: 1}
`;

const spinning = keyframes`
   to {transform: rotateZ(360deg);}
`;

export const Keyframes = {
  slideUp,
  slideUpLarge,
  fadeIn,
  spinning,
};
