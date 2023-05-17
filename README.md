## Thanks to [Ask Clippy](https://github.com/askclippyai/widget/) widget. This is a fork of their widget.

# Um assistente de IA para os documentos da sua empresa

Este repositório contém a fonte para o pacote `Vogal`, que carrega o widget em sites de documentação suportados.

<!-- ## Veja uma demonstração

video-exemplo.mp4

> **Nota** Você pode ver ao vivo em [Vogal](https://usevogal.com).

## Quer em seus documentos?

Estamos atualmente em beta privado. Se sua empresa gostaria de adicionar Vogal à sua documentação, [preencha o formulário beta](https://include-official.site) e entraremos em contato em breve! -->

## Como funciona

Vogal é um widget que carrega em sites de documentação suportados. Ele permite que você faça perguntas sobre os documentos e obtenha respostas em tempo real.

## Como funciona o script (para desenvolvedores)

O script é um arquivo JavaScript que carrega o widget em sites de documentação suportados. Ele é escrito em TypeScript e usa o bundler [esbuild](https://esbuild.github.io/) para gerar a saída.

`"build"`: Este script é usado para construir o projeto. Ele primeiro executa o script `"clean"` para remover o diretório de compilação existente e, em seguida, executa todos os outros scripts de compilação em paralelo.

`"build:css"`: Este script é usado para construir o arquivo CSS usando Tailwind CSS. Ele pega o arquivo de entrada ./src/styles/styles.css, o processa e o envia para ./build/index.css com a minificação habilitada.

`"build:declarations"`: Este script é usado para gerar arquivos de declaração TypeScript. Em seguida, executa tsc-alias para gerar aliases para os arquivos de declaração.

`"build:esm"`: Este script é usado para construir o projeto no formato de módulo ECMAScript. Ele executa um script customizado (production.js) usando node e passa os sinalizadores --platform=browser e --format=esm para o bundler esbuild para gerar a saída.

`"build:iife"`: Este script é usado para construir o projeto no formato Imediatamente Invoked Function Expression (IIFE). Ele executa um script customizado (production.js) usando node e passa os sinalizadores --platform=browser e --format=iife para o esbuild bundler para gerar a saída.

`"clean"`: Este script é usado para remover o diretório de compilação existente. Ele usa o pacote `rimraf` para excluir o diretório.

`"dev"`: Este script é usado para iniciar o servidor de desenvolvimento. Ele primeiro executa o script "clean" para remover o diretório de construção existente e, em seguida, executa o script "dev:styles" em paralelo com todos os outros scripts de desenvolvimento.

`"dev:bundle"`: Este script é usado para agrupar o projeto para desenvolvimento. Ele executa um script personalizado (development.js) usando o Node para gerar a saída.

`"dev:styles"`: Este script é usado para construir o arquivo CSS para desenvolvimento. Ele pega o arquivo de entrada ./src/styles/styles.css, o processa e o envia para ./build/index.css.

`"dev:styles-watch"`: Este script é semelhante ao "dev:styles", mas executa o processo de compilação no modo de observação, para que quaisquer alterações no arquivo de entrada sejam detectadas automaticamente e o arquivo de saída seja atualizado.

`"format"`: Este script é usado para formatar o código usando o Prettier. Ele executa o Prettier com o sinalizador --write para formatar todos os arquivos do projeto.

`"format:check"`: Este script é usado para verificar a formatação do código usando o Prettier. Ele executa o Prettier com o sinalizador --check para verificar todos os arquivos no projeto e relatar quaisquer erros de formatação.

`"lint"`: Este script é usado para lint do código usando ESLint. Ele executa o ESLint com o sinalizador --ext para especificar as extensões de arquivo para lint e o diretório raiz do projeto (./).

`"lint:fix"`: Este script é semelhante ao "lint", mas também corrige quaisquer erros de linting que podem ser corrigidos automaticamente.

`"typecheck"`: Este script é usado para verificar os tipos de TypeScript no projeto. Ele executa o compilador TypeScript (tsc) com as opções padrão para verificar os tipos em todos os arquivos TypeScript no projeto.

`"prepublish"`: Este script é usado pelo NPM ao publicar o pacote. Ele executa o script "build" para construir o projeto antes de publicar.
