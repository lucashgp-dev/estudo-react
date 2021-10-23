import { Dimensions,StatusBar } from 'react-native';


export const { width, height } = Dimensions.get('window');
export const { width: widthScreen, height: heightScreen } = Dimensions.get('screen');
export const SIZE = 64;
export const INCO_SIZE = SIZE * 0.6;
export const SPACING = 12;

const aux = width * 0.85;
const auxHeight = heightScreen > height ? height + (height * 0.01) : heightScreen;

export const sizeTheme = {
  CARD_WIDTH: aux,
  CARD_HEIGHT: auxHeight - (auxHeight * 0.09) - (SPACING * 10),
  RADIUS: 18,
  SPACING: SPACING,
  FULL_SIZE: aux + SPACING * 2,
  HEIGHT_BAR: StatusBar.currentHeight,
  
}