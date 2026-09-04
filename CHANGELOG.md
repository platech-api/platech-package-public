## 1.0.3

- Migra a coordenada Maven do AAR sandbox de `site.platech` para `site.platech.sdk` (novo repositório central de distribuição).
- Atualiza o AAR sandbox para `1.0.3`.

## 1.0.2

- Publica o exemplo Sandbox sem incorporar uma API key Platech.
- Atualiza o AAR sandbox para `1.0.2`.

## 1.0.1

- Reduz o wrapper público à chamada `openTapToPay`.
- Mantém validações, configuração e fluxo de pagamento no AAR nativo ofuscado.
- Atualiza o AAR sandbox para `1.0.1`.

## 1.0.0

- Primeira versão homologável do wrapper Flutter sandbox Platech.
- Consome `site.platech:platech-taptopay-flutter-sandbox:1.0.0` do repositório
  central `platech-package-public`.

## 2.0.0-sandbox.1

- Simplifica a API pública para `token` e `url`.
- Remove seller, marketplace e credenciais Zoop do aplicativo parceiro.
- Atualiza o AAR privado para `2.0.0-sandbox.1`.
- Obtém a configuração Zoop do endpoint autenticado e a mantém somente em memória.

## 1.0.0-sandbox.4

- Exporta o AAR Platech para o classpath do registrador Android do Flutter.

## 1.0.0-sandbox.3

- Corrige a detecção do Android embedding V2 pelo registrador do Flutter.
- Mantém o AAR Platech em `1.0.0-sandbox.2`.

## 1.0.0-sandbox.2

- Padroniza a API pública e o MethodChannel com o argumento `token`.
- Atualiza o AAR Platech para `1.0.0-sandbox.2`.
- Resolve a dependência Zoop diretamente pelo Maven oficial usando o mesmo PAT.
- Mantém o token fora da URL, de persistência e de logs.

## 1.0.0-sandbox.1

- API única `PlatechTapToPay.openTapToPay`.
- Primeira prévia do controle de acesso antes do fluxo nativo.
- Suporte a seller, marketplace e URL whitelabel.
- Implementação Kotlin fornecida exclusivamente pelo AAR Maven.
- Loader Java mínimo incluído apenas para o registro automático do Flutter.
- SDK Zoop fixado em `taponphone-sandbox-debug:2.3.1`.
