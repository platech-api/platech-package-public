package site.platech.reactn.taptopay;

import com.facebook.react.ReactPackage;

/**
 * Loader mínimo usado pelo autolinking do React Native.
 *
 * Toda a bridge e a implementação Android permanecem no AAR Platech privado.
 */
public final class PlatechTapToPayPackage
    extends PlatechTapToPayNativePackage
    implements ReactPackage {}
