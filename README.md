# ED² Tecnologic - Portfólio Premium e Institucional

Este é o site institucional e portfólio tecnológico premium da **ED² Tecnologic**, desenvolvido para demonstrar excelência em desenvolvimento de software sob medida, automações inteligentes, sistemas para saúde pública, aplicativos desktop e soluções baseadas em Inteligência Artificial.

## 🛠️ Tecnologias Utilizadas
- **React (com TypeScript)** - Biblioteca declarativa para criação de interfaces reativas e modulares.
- **Tailwind CSS (v4)** - Framework de estilização de alta performance com temas customizados nativos.
- **Motion (Framer Motion)** - Biblioteca de animações fluidas para transições de tela, scroll reveal e hover dinâmicos.
- **Lucide React** - Ícones vetoriais modernos e minimalistas.

## 📁 Estrutura de Arquivos Importantes
- `/src/types.ts`: Contém todos os dados estruturados dos **12 sistemas**, **serviços institucionais** e **stacks de tecnologia**. É neste arquivo que você edita as descrições, tags de tecnologia e status dos produtos de forma limpa.
- `/src/App.tsx`: Layout principal do site, composto pela barra de navegação responsiva, seções integradas de rolagem (About, Services, Systems Grid, Tech Stack, Diferenciais, Contact e Footer) e os filtros do portfólio.
- `/src/components/`: Pasta contendo os componentes extraídos de acordo com as necessidades do projeto para manter a organização limpa e modular.
- `/src/index.css`: Definições da paleta de cores futurista (fundos `#02070D` e `#061426`, azul `#008CFF`, ciano `#00D9FF` e verde neon `#7CFF00`), animação de circuitos fluindo e estilização de efeitos glassmorphism.

---

## ⚙️ Como Customizar o Portfólio

### 1. Como Alterar Informações de Contato
Para alterar o número de WhatsApp ou o e-mail de atendimento da empresa, edite as constantes `phoneRaw` e `emailVal` no topo do arquivo `src/components/ContactSection.tsx`:
- **WhatsApp**: `(33) 99911-3419` (referenciado com link direto para `https://wa.me/5533999113419`)
- **E-mail**: `ciscopackettracent@gmail.com`

> **Formulário de contato:** ao enviar, o formulário **não simula** um envio falso. Ele monta uma
> mensagem real com nome, telefone, e-mail, assunto e mensagem e abre o WhatsApp
> (`https://wa.me/5533999113419?text=...`), garantindo que o usuário consiga falar com a equipe de fato.

### 2. Como Mudar as Imagens do Portfólio (Mock para Reais)
Para cada sistema no arquivo `/src/types.ts`, existem propriedades para as imagens de capa e de hover. No código, fornecemos **geradores dinâmicos de layout técnico com gradientes e gráficos de circuito neon interativos** como fallback de alto impacto visual. Caso queira substituir estes placeholders por imagens reais ou capturas de tela dos sistemas:
1. Salve as duas imagens na pasta `/public/projects/` (ex: `sisgreg-cover.png` e `sisgreg-hover.png`).
2. Adicione as propriedades `coverImage` e `hoverImage` ao respectivo objeto de projeto no arquivo `/src/types.ts`.
3. O componente de Card de Projetos irá carregar automaticamente os arquivos com efeito de zoom, overlay de zoom luminoso e transição suave no hover.

### 3. Como Adicionar Novos Sistemas
Basta abrir `/src/types.ts`, rolar para o array `projectsData`, copiar um dos objetos estruturados e preencher os novos campos. A interface é 100% autossuficiente e gerará a nova badge de status, ícone contextual, listagem de tecnologias e botões de detalhes automaticamente.

### 4. Como Customizar a Identidade Visual ou Gradientes
Com o Tailwind CSS v4 ativo em `/src/index.css`, você pode modificar as variáveis de cores do tema no bloco `@theme` ou manipular as cores adicionais diretamente em suas respectivas classes utilitárias no código JSX.

---

## ▶️ Como Rodar Localmente

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
npm run build    # gera a versão de produção na pasta dist/
npm run preview  # serve localmente o conteúdo já buildado de dist/
```

## 🚀 Deploy Gratuito no Netlify

O projeto já está pronto para deploy. O arquivo `netlify.toml` na raiz define:

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Redirect SPA:** todas as rotas caem em `/index.html` (status 200)

Basta conectar o repositório no Netlify (ou arrastar a pasta `dist/` gerada pelo build) e publicar.
Nenhuma variável de ambiente ou servidor backend é necessária — é um site estático.

---
ED² Tecnologic — Tecnologia que transforma. Soluções que conectam.
*Desenvolvido por Enos Alves Santos.*
