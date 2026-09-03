# platech-package-public

Repositório público da Platech para parceiros integradores terem acesso a SDKs,
plugins e outros produtos.

## Documentação

As instruções de instalação, versões disponíveis, ambientes, exemplos de uso e
requisitos de cada produto estão na
[documentação oficial da Platech](https://app.platech.site/documents/).

## Acesso aos pacotes

Alguns artefatos são distribuídos pelo GitHub Packages. Mesmo quando o pacote é
público, o GitHub exige autenticação para baixá-lo durante a compilação da
aplicação.

Para acessar esses pacotes, você precisa de:

- uma conta gratuita no GitHub;
- seu nome de usuário do GitHub;
- uma Personal Access Token (classic) com a permissão `read:packages`.


## Configurando as credenciais

Armazene as credenciais no arquivo global do Gradle, fora do projeto da sua
aplicação:

```properties
# macOS e Linux: ~/.gradle/gradle.properties
# Windows: %USERPROFILE%\.gradle\gradle.properties
platechMavenUser=SEU_USUARIO_GITHUB
platechMavenToken=SUA_PAT_CLASSIC
```

No macOS ou Linux, caso o diretório ainda não exista:

```bash
mkdir -p ~/.gradle
touch ~/.gradle/gradle.properties
chmod 600 ~/.gradle/gradle.properties
```

## Gerando uma GitHub PAT

1. Acesse as [configurações de tokens do GitHub](https://github.com/settings/tokens/new).
2. Em **Note**, informe um nome que identifique o uso, como `Platech Packages`.
3. Escolha uma data de expiração.
4. Em **Select scopes**, marque somente `read:packages`.
5. Clique em **Generate token**.
6. Copie a PAT apresentada e salve-a no arquivo global do Gradle.

Para baixar os pacotes públicos da Platech, não marque `repo`,
`write:packages` ou `delete:packages`.

## Cuidados com a PAT

- não coloque a PAT no código-fonte da aplicação;
- não salve a PAT em arquivos do projeto;
- não envie a PAT ao Git;
- não mostre a PAT em capturas de tela, logs ou mensagens;
- defina uma data de expiração adequada;
- revogue e gere outra PAT imediatamente se ela for exposta.

O GitHub pode revogar automaticamente tokens encontrados em repositórios
públicos.
