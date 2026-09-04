# Platech TapToPay Flutter Release

Wrapper Flutter Android mínimo para iniciar o Platech TapToPay. O código
público apenas encaminha `token` e, opcionalmente, `url`. Pagamento, PIX, NFC,
telas, validações, autorização, credenciais, integração Zoop e geração do
comprovante ficam compilados e ofuscados no AAR Android.

## Requisitos

- Flutter 3.22 ou superior;
- Android 9 (API 28) ou superior;
- aplicativo Android previamente autorizado para uso do TapToPay;
- uma conta GitHub e uma PAT com permissão `read:packages`.

## Instalação

Adicione o pacote pela tag Git:

```yaml
dependencies:
  platech_tap_to_pay_release:
    git:
      url: https://github.com/platech-api/platech-package-public.git
      ref: flutter-release-v1.0.1
```

Configure as credenciais de leitura em `~/.gradle/gradle.properties`:

```properties
platechMavenUser=SEU_USUARIO_GITHUB
platechMavenToken=SEU_TOKEN_COM_READ_PACKAGES
```

## Uso direto

```dart
import 'dart:convert';

final receiptJson = await PlatechTapToPay.openTapToPay(
  token: tokenRecebidoEmRuntime,
);
final receipt = jsonDecode(receiptJson) as Map<String, dynamic>;
```

Uma URL personalizada pode ser informada quando fornecida pela Platech:

```dart
final receiptJson = await PlatechTapToPay.openTapToPay(
  token: tokenRecebidoEmRuntime,
  url: urlFornecida,
);
```

`token` é obrigatório. `url` é opcional; quando não informada, o AAR usa a URL
padrão da Platech. O aplicativo integrador cria seu próprio botão e apresenta
mensagens e comprovantes com sua própria identidade visual.

## Comprovante

```json
{
  "transactionId": "transaction-id",
  "amountInCents": 1500,
  "paymentType": "CREDIT",
  "installments": 1,
  "brand": "VISA"
}
```

`transactionId` e `brand` podem ser `null`. `paymentType` será `CREDIT`,
`DEBIT` ou `PIX`; o valor é sempre informado em centavos.

## Tratamento de erros

Erros são entregues como `PlatformException`. Entre os códigos que o aplicativo
deve tratar estão:

- `INVALID_TOKEN`;
- `INVALID_URL`;
- `FLOW_CANCELLED`;
- `INVALID_RECEIPT`;
- `FLOW_IN_PROGRESS`;
- códigos específicos retornados durante o pagamento.

Não exiba nem registre o token em mensagens, analytics ou logs. Seller,
marketplace e credenciais Zoop nunca são informados pelo aplicativo parceiro.
