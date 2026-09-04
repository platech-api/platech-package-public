# @platech/react-native-tap-to-pay-release

Wrapper React Native Android mínimo para o Platech TapToPay release. O pacote
npm entrega JavaScript compilado e o loader Java exigido pelo autolinking.
Pagamento, PIX, NFC, Activities, validações, autorização, credenciais,
integração Zoop e geração do comprovante ficam compilados e ofuscados no AAR.

## Requisitos

- React Native 0.81 ou superior
- Android mínimo 28 e Java 17
- aparelho Android físico com NFC
- uma conta GitHub e uma PAT com permissão `read:packages`

Não há suporte para iOS, Expo Go ou web nesta versão.

## Instalação

```json
{
  "dependencies": {
    "@platech/react-native-tap-to-pay-release": "git+https://github.com/platech-api/platech-package-public.git#react-native-release-v1.0.1"
  }
}
```

Configure o acesso ao pacote Android fora do projeto:

```properties
# ~/.gradle/gradle.properties
platechMavenUser=USUARIO_GITHUB
platechMavenToken=PAT_COM_READ_PACKAGES
```

O wrapper resolve automaticamente:

```text
site.platech:platech-taptopay-react-native-release:1.0.1
https://maven.pkg.github.com/platech-api/platech-package-public
```

## Uso

```tsx
import {openTapToPay} from '@platech/react-native-tap-to-pay-release';

const receiptJson = await openTapToPay({
  token: tokenRecebidoEmRuntime,
  url: 'https://pagamentos.parceiro.com', // opcional
});
const receipt = JSON.parse(receiptJson);
```

`token` é obrigatório. `url` é opcional; quando não informada, o AAR usa
`https://app.platech.site`. O aplicativo integrador cria seu próprio botão. O
AAR envia o token apenas no header
`Authorization` para `GET /rest/taptopay/access/production`. Seller,
marketplace e credenciais Zoop vêm exclusivamente do backend e permanecem em
memória nativa até o fluxo encerrar.

Uma aprovação resolve a Promise com uma string JSON. Cancelamentos rejeitam
com o código `FLOW_CANCELLED`; falhas de pagamento e de acesso também rejeitam
a Promise e devem ser tratadas com `try/catch`.

```json
{
  "transactionId": "txn-123",
  "amountInCents": 1590,
  "paymentType": "CREDIT",
  "installments": 1,
  "brand": "VISA"
}
```

`transactionId` e `brand` podem ser `null`. `amountInCents` sempre usa centavos;
formatação monetária e aparência do comprovante pertencem ao aplicativo
consumidor. Este retorno é um resumo técnico da transação, não um documento
fiscal.

## Validação

```powershell
npm ci
npm run typecheck
npm test
npm run build
npm pack --dry-run
```

O pacote npm distribuído contém somente o JavaScript compilado, as declarações
de tipos e `PlatechTapToPayPackage.java`. Fontes TypeScript, Kotlin, recursos
nativos, credenciais e artefatos de outros ambientes não são incluídos.
