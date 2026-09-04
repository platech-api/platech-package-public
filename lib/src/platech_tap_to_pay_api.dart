import 'package:flutter/services.dart';

abstract final class PlatechTapToPay {
  static const MethodChannel _channel = MethodChannel('site.platech/taptopay');

  static Future<String> openTapToPay({
    required String token,
    String? url,
  }) async {
    final receiptJson = await _channel.invokeMethod<String>(
      'openTapToPay',
      <String, Object?>{
        'token': token,
        if (url != null) 'url': url,
      },
    );
    if (receiptJson == null) {
      throw PlatformException(
        code: 'INVALID_RECEIPT',
        message: 'O TapToPay não retornou um comprovante válido.',
      );
    }
    return receiptJson;
  }
}
