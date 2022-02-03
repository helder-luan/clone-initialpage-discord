// HCG = HexaColor Generator

export const HCG = (amount) => {
  const chars = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  const palette = [];
  
  for (let j = 0; j < amount; j++) {
    let colorHEX = "#";
    for (let i = 0; i < 6; i++) {
      const position = Math.floor(Math.random()*(15 - 0));
      colorHEX += chars[position]; 
    }
    palette.push(colorHEX);
  }

  return palette;
}