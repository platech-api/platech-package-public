# @platech/react-native-tap-to-pay-sandbox

Wrapper React Native Android mínimo para abrir o Platech TapToPay. O pacote npm
entrega JavaScript compilado e um loader Java; pagamento, PIX, NFC, Activities,
validações, autorização, credenciais e integração Zoop ficam compilados e
ofuscados no AAR Android.

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
    "@platech/react-native-tap-to-pay-sandbox": "git+https://github.com/platech-api/platech-package-public.git#react-native-sandbox-v1.0.2"
  }
}
```

```properties
# ~/.gradle/gradle.properties
platechMavenUser=USUARIO_GITHUB
platechMavenToken=PAT_COM_READ_PACKAGES
```

O wrapper baixa:

```text
site.platech:platech-taptopay-react-native-sandbox:1.0.2
https://maven.pkg.github.com/platech-api/platech-package-public
```

## Uso

```tsx
import {openTapToPay} from '@platech/react-native-tap-to-pay-sandbox';

await openTapToPay({
  token: tokenRecebidoEmRuntime,
  url: 'https://pagamentos.parceiro.com', // opcional
});
```

`token` é obrigatório. `url` é opcional; quando não informada, o AAR usa
`https://app.platech.site`. O aplicativo integrador cria seu próprio botão.
Seller, marketplace e credenciais Zoop vêm exclusivamente do backend.

O AAR obtém seller, marketplace e credenciais pelo endpoint autenticado. Esses
dados ficam apenas na memória nativa até a Activity fechar. A Promise resolve
sem valor nesse momento; falhas nativas mantêm códigos no campo `code`.

## Validação

```powershell
npm run typecheck
npm test
npm run build
npm pack --dry-run
```

O pacote npm distribuído contém somente o JavaScript compilado, as declarações
de tipos e `PlatechTapToPayPackage.java`. Fontes TypeScript, Kotlin, recursos
nativos e regras do pagamento não são incluídos.
