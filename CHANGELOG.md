## 1.0.2

- Migra a coordenada Maven do AAR release de `site.platech` para `site.platech.sdk` (novo repositório central de distribuição).
- Atualiza o AAR release para `1.0.2`.

## 1.0.1

- Reduz o wrapper público à chamada `openTapToPay`.
- Move validações e interpretação do comprovante para o AAR nativo ofuscado.
- Remove o botão e o modelo de comprovante do pacote; a interface pertence ao
  aplicativo integrador.

## 1.0.0

- `openTapToPay` passa a retornar o comprovante aprovado como JSON.
- Adiciona o modelo `TapToPayReceipt`.
- Adiciona `onSuccess` e `onError` ao `TapToPayButton`.
- Padroniza cancelamentos como `FLOW_CANCELLED` e comprovantes inválidos como
  `INVALID_RECEIPT`.
