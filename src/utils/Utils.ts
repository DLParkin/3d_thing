// Girl2 model position
export const adjustGirlForScreenSize = () => {
  let screenScale = [1.5, 1.5, 1.5];
  let screenPosition = [0, 2, -5];
  let rotation = [0.5, 0, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.0015, 0.0015, 0.0015];
  } else {
    screenScale = [0.002, 0.002, 0.002];
  }

  return [screenScale, screenPosition, rotation];
};

// Girl model position
// export const adjustGirlForScreenSize = () => {
//   let screenScale = [1.5, 1.5, 1.5];
//   let screenPosition = [0, 5, -10];
//   let rotation = [0.3, 9.5, 0];

//   if (window.innerWidth < 768) {
//     screenScale = [0.8, 0.8, 0.8];
//   } else {
//     screenScale = [1.5, 1.5, 1.5];
//   }

//   return [screenScale, screenPosition, rotation];
// };

export const adjustBlueButterlyForScreenSize = () => {
  let screenScale = [1.5, 1.5, 1.5];
  let screenPosition = [0, 5, -10];

  if (window.innerWidth < 768) {
    screenScale = [0.8, 0.8, 0.8];
    screenPosition = [0, 5, -10];
  } else {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, 5, -10];
  }

  return [screenScale, screenPosition];
};

export const adjustButterfliesForScreenSize = () => {
  let screenScale = [1.5, 1.5, 1.5];
  let screenPosition = [0, 5, -10];
  let rotation = [0.3, 9.5, 0];

  if (window.innerWidth < 768) {
    screenScale = [0.8, 0.8, 0.8];
  } else {
    screenScale = [0.05, 0.05, 0.05];
  }

  return [screenScale, screenPosition, rotation];
};
