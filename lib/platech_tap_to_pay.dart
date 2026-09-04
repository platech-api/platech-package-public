library;

import 'package:flutter/services.dart';

abstract final class PlatechTapToPay {
  static const MethodChannel _channel = MethodChannel('site.platech/taptopay');

  static Future<void> openTapToPay({
    required String token,
    String? url,
  }) =>
      _channel.invokeMethod<void>('openTapToPay', <String, Object?>{
        'token': token,
        if (url != null) 'url': url,
      });
}
