# Contribuindo para o Design System

Para contribuir com resolução de bugs, melhorias e até construir novos componentes, é necessário seguir as diretrizes criadas pelo time do DS que estão logo abaixo.

🚀 Boa Sorte!

<hr>

- [Código de Conduta](#coc)
- [Dúvidas ou Problemas?](#question)
- [Regras do Projeto](#rules)
- [Diretrizes para mensagens de Commit](#commit)
- [Diretrizes para Merge Requests](#mr)

<hr>

## <a name="coc"> </a> Código de Conduta
No ambiente de construção do design system, como colaboradores do Grupo Mateus, estamos sujeitos as mesmas regras impostas pelo código comportamental da empresa.

Se qualquer colaborador por ventura vier a violar este código de conduta, os mantenedores do projeto irão acionar os responsáveis via coordenação da Pulse, para que as medidas cabíveis sejam tomadas.

<hr>

## <a name="question"> </a> Tem alguma dúvida ou problema?

Para problemas de questões gerais de suporte ou configuração do ambiente local é indicado que a solicitação de atendimento seja feita pelo jira, seguindo ... .

Para bugs ou melhorias será usado as Issues do GitLab, para assim ser possível emitir relatórios com métricas mais objetivas.

<hr>

## <a name="rules"> </a> Regras do Projeto
Para garantir a consistência no projeto, além de facilitar a construção de um produto comunitário, siga estas regras durante durante o tempo dedicado ao projeto:

* Todos os recursos ou correções de bugs **devem ser testados** por uma ou mais especificações (testes unitários).
* Todos Componente que for criado deverá possuir um arquivos para teste unitários e de integração (Opcional o uso de teste com **Snapshot**).
* Todas as especificações de componentes deverão ser documentadas no README localizado na pasta.
* Todos os componentes deverão possuir uma pasta ```usage```, contendo as formas de uso do componente.
* Seguimos o [Semantic Versioning 2.0.0][semver] para versionar o projeto.

<hr>

## <a name="commit"> </a> Diretrizes para mensagens de Commit

Temos regras muito precisas sobre como as mensagens de commit devem ser formatadas. Isso é importante para manter um histórico mais fácil de ser analisado. Além disso, as mensagens de commit são usadas para gerar o **CHANGELOG**.

### Commit
Seguindo o padrão [Conventional Commits][conventionalcommits], onde cada commit consiste em um **header**, um **body** e um **footer**.

O **header** tem um formato especial que inclui um **type**, um **scope** e uma **description**:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

O **header** é obrigatório, porém o **scope** é opcional.

Nenhuma linha do commit pode ter mais de 100 caracteres, isso é para que a mensagem seja mais fácil de ler no GitLab, bem como em várias ferramentas git.

O rodapé deve conter uma [referência de fechamento a um problema] (https://help.github.com/articles/closing-issues-via-commit-messages/) se houver.

Amostras: (ainda mais [amostras] (https://github.com/angular/angular/commits/master))

```
docs(changelog): changelog atualizador para v0.0.5
```

```
fix(storybook): JSX renderizando Web-components

O jsx-dom apresentou problemas ao ser inserido para renderizar WC.
Para o seu lugar foi utilizado o pacote @storybook/react.
```

### Reverter
Se o commit reverte um commit anterior, ele deve começar com `revert:`, seguido pelo cabeçalho do commit revertido. No corpo, ele deve dizer: `This reverts commit <hash> .`, onde o hash é o SHA do commit sendo revertido.

### Type
Deve ser um dos seguintes:

* **build**: Mudanças que afetam o sistema de build ou dependências externas (exemplos de escopos: gulp, broccoli, npm)
* **ci**: Alterações em nossos scripts e arquivos de configuração de CI
* **docs**: Alterações apenas na documentação
* **feat**: um novo recurso
* **fix**: uma correção de bug
* **perf**: uma alteração de código que melhora o desempenho
* **refatorar**: uma alteração de código que não corrige um bug nem adiciona um recurso
* **estilo**: alterações que não afetam o significado do código (espaço em branco, formatação, ponto e vírgula faltando, etc)
* **test**: adicionar testes ausentes ou corrigir testes existentes
* **chore**: atualização/criação de tarefas automatizadas ou melhoria da qualidade do projeto

### Scope
O escopo determina a área de atuação do commit, ou seja, onde o código alterado e/ou criado afetará o projeto.

A seguir a lista de escopos possíveis:

* **animations**
* **storybook**
* **comum**
* **compilador**
* **compilador-cli**
* **essencial**
* **plataforma**
* **melhoria**


### Description
A descrição é um resumo bastante sucinto da mudança:

* não coloque a primeira letra em maiúscula
* sem ponto final (.)

### Body
Assim como no ** sujeito **, use o imperativo, presente: "mudar" e não "mudar" nem "mudar".
O corpo deve incluir a motivação para a mudança e contrastar isso com o comportamento anterior.

### Footer
O rodapé deve conter informações sobre **Alterações significativas** e também é o lugar para referencia das issues que este commit **resolve**.

**Breaking Changes** deve começar com a palavra `BREAKING CHANGE:` com um espaço ou duas novas linhas. O resto da mensagem do commit vem logo após.

<hr>

## <a name="mr"> </a> Diretrizes para Merge Requests (MR)
Antes de enviar sua solicitação pull (PR), considere as seguintes diretrizes:

1. Pesquise na lista de Merge Requests do projeto por um MR aberto ou fechado que se relaciona com o seu envio. Você não quer fazer trabalho de preguiçoso. 😉

2. Faça o fork do repo design/design-system-web ou design/design-system-mobile.

3. Faça suas alterações em um novo branch git:

     ```shell
     git checkout -b my-fix-branch master
     ```

4. Crie seu patch, **incluindo casos de teste apropriados**.

5. Siga nossas [Regras do Projeto](#rules). Com bastante atenção ⚠️

6. Execute a suite de testes e garanta que todos os testes sejam executados e aprovados.

7. Commit suas alterações de acordo com as nossas [Diretrizes para mensagens de Commit](#commit). A aderência a essas convenções são necessárias porque CHANGELOG é gerado automaticamente a partir dos commits.

     ```shell
     git commit -a
     ```
    Nota: a opção de linha de comando opcional commit `-a` irá automaticamente" adicionar "e" rm "os arquivos editados.

8. Envie seu branch para o GitHub:

    ```shell
    git push origin my-fix-branch
    ```

9.  No GitLab abra um Merge Request para `nome_branch`. Em caso de sugerirmos mudanças, então:

  * Faça as atualizações necessárias.
  * Execute novamente as suítes de teste para garantir que os testes ainda estejam passando.


É isso! Obrigado pela sua contribuição! 👊


[semver]: https://semver.org/
[conventionalcommits]: https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/
