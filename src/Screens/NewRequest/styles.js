import { StyleSheet } from 'react-native';

import fontFamily from '../../Utils/fontFamilys';
import { fontscale, heightAdapter, widthAdapter } from '../../Utils/adapterUtil';

export default StyleSheet.create({
  title: {
    fontSize: fontscale(32),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
    marginLeft: '5%',
  },
  generateButtonContainer: {
    width: '100%',
    marginLeft: '5%',
    marginRight: '5%',
    paddingBottom: fontscale(20),
    justifyContent: 'space-around',
  },
  generateButton: {
    fontSize: fontscale(22),
  },
  adviceContainer: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  advice: {
    fontSize: fontscale(19),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'normal',
  },
  coloredText: {
    color: 'blue',
    fontSize: fontscale(19),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
  },
  template: {
    fontSize: fontscale(16),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'normal',
    color: 'rgb(117, 129, 155)',
  },
  qrAdvice: {
    fontSize: fontscale(17),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'normal',
  },
  alignCenterContainer: {
    alignItems: 'center',
  },
  qrCodeImage: {
    height: heightAdapter(400),
    width: widthAdapter(400),
  },
  errorText: {
    fontSize: fontscale(17),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'normal',
    color: 'red',
  },
  segmentContainer: {
    marginLeft: '5%',
    marginRight: '5%',
  },
  segmentStyle: {
    height: fontscale(30),
  },
  segmentFontStyle: {
    fontFamily: fontFamily.primaryFontFamily,
    color: 'blue',
  },
  radioContainer: {
    flexDirection: 'row',
    marginLeft: '3%',
    width: '90%',
  },
  radioTextContainer: {
    marginTop: heightAdapter(15),
    width: '90%',
  },
  radioSelected: {
    backgroundColor: 'blue',
  },
  radioNotSelected: {
    backgroundColor: 'lightgray',
  },
});
