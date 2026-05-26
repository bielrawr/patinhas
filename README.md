# Patinhas

**Patinhas** é um MVP front-end para uma plataforma de adoção, doação e voluntariado voltada a animais resgatados. O projeto simula uma experiência completa de conexão entre pessoas interessadas em ajudar e pets que precisam de um novo lar.

## Problema

Campanhas de resgate animal costumam ficar espalhadas em redes sociais, com informações incompletas, pouca transparência e caminhos de ação pouco claros. Isso dificulta a adoção, reduz a confiança em doações e limita o cadastro de voluntários.

## Solução

O MVP centraliza a jornada em uma landing page visual, responsiva e pet friendly. A pessoa visitante consegue conhecer os animais, acessar detalhes do perfil, demonstrar interesse na adoção, fazer uma doação simulada via PIX e se cadastrar como voluntária.

## Funcionalidades

- Home com hero visual, chamada emocional e botões de ação.
- Cards de animais com fotos vindas de `assets/img`.
- Modal de perfil completo do pet com história de resgate, idade, porte, localização, situação atual e necessidades.
- Formulário de interesse em adoção aberto pelo botão "Tenho interesse" e também pelo botão "Quero adotar".
- Modal de doação com chave PIX fictícia, informações de transparência e mensagem de agradecimento.
- Formulário de voluntariado com área de interesse, disponibilidade e dados de contato.
- Cards da seção "Como ajudar" clicáveis por inteiro.
- Cursor personalizado em formato de patinha.
- Layout responsivo para desktop e mobile.

## Stack

- HTML5 semântico
- CSS3
- JavaScript puro para manipulação de DOM
- Assets locais em `assets/img`
- Estrutura estática, sem back-end, banco de dados, login ou pagamento real

## Estrutura

```text
assets/img/      imagens dos pets e da hero
css/style.css    estilos da interface
html/index.html  página principal
js/script.js     interações, modais e formulários simulados
```

## Como Visualizar

Por usar caminhos absolutos como `/css/style.css` e `/js/script.js`, abra o projeto a partir de um servidor estático na raiz do repositório. Exemplos:

- VS Code Live Server apontando para a pasta do projeto
- Vercel ou outro host estático
- Qualquer servidor local que sirva a raiz do projeto

Depois, acesse:

```text
/html/index.html
```

## Observação

Todas as ações são simulações de MVP. Os formulários não enviam dados reais e o PIX exibido é fictício.
