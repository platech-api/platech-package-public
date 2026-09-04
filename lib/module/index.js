"use strict";

import { NativeModules, Platform } from 'react-native';
const nativeModule = NativeModules.PlatechTapToPay;
export async function openTapToPay(params) {
  if (!nativeModule) {
    throw new Error(`O módulo nativo PlatechTapToPay não está disponível em ${Platform.OS}. ` + 'Este pacote suporta somente Android e exige uma nova compilação nativa.');
  }
  await nativeModule.openTapToPay(params);
}
export const PlatechTapToPay = {
  openTapToPay
};
export default PlatechTapToPay;
//# sourceMappingURL=index.js.map