# Platech TapToPay Flutter Sandbox

Wrapper Flutter Android mínimo para abrir o fluxo nativo Platech TapToPay. O
pacote público apenas encaminha `token` e, opcionalmente, `url`. Pagamento,
PIX, NFC, telas, validações, autorização, credenciais e integração Zoop ficam
compilados e ofuscados no AAR Android distribuído pelo Maven da Platech.

## Instalação

```yaml
dependencies:
  platech_tap_to_pay:
    git:
      url: https://github.com/platech-api/platech-package-public.git
      ref: flutter-sandbox-v1.0.2
```

Configure o Maven fora do projeto:

```properties
# ~/.gradle/gradle.properties
platechMavenUser=USUARIO_GITHUB
platechMavenToken=PAT_COM_READ_PACKAGES
```

## Uso

```dart
await PlatechTapToPay.openTapToPay(token: token);
```

Para um backend whitelabel:

```dart
await PlatechTapToPay.openTapToPay(
  token: token,
  url: 'https://pagamentos.parceiro.com',
);
```

`token` é obrigatório. `url` é opcional; quando não informada, o AAR usa
`https://app.platech.site`. O parceiro não informa seller, marketplace nem
credenciais Zoop.

O nativo obtém esses dados por `GET /rest/taptopay/access` após validar o token
no backend e os mantém somente em memória. A operação resolve quando a Activity
Android fecha.

Esta versão usa exclusivamente Zoop sandbox `2.3.1` e Android mínimo 28. Não há
suporte para iOS nesta etapa.

O AAR nativo ofuscado é distribuído pelo repositório central da Platech usando a
coordenada `site.platech:platech-taptopay-flutter-sandbox:1.0.2`.
