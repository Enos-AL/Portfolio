# Certificados — ED² Tecnologic

Pasta com as **imagens já tratadas** dos certificados/diplomas exibidos na
seção "Transparência e Credibilidade". Ao clicar no card, a imagem abre num
modal com a descrição ao lado.

## ⚠️ Antes de adicionar qualquer documento (obrigatório)

Tudo que estiver em `public/` fica **público** na internet (ex.:
`/certificates/curso.png` vira `https://ed2tecnologic.com.br/certificates/curso.png`).
Portanto, **trate a imagem antes de colocá-la aqui**. Oculte (cubra):

- ❌ **CPF** e **RG**
- ❌ **Data de nascimento**
- ❌ **Códigos de validação** / QR Code do diploma
- ❌ Assinatura manuscrita pessoal, endereço, telefone e dados pessoais desnecessários

Mantenha apenas o que é institucional: curso, instituição, carga horária,
data de conclusão e a identidade visual da instituição.

> As imagens atuais (`ads-unicesumar.png`, `pos-dev-web.png`,
> `pos-seguranca-redes.png`) **já foram redatadas**: CPF, RG, data de
> nascimento e código de validação foram cobertos.

## Como vincular um novo certificado

1. Salve a imagem tratada aqui, ex.: `public/certificates/novo-curso.png`
   (`.png`, `.jpg` ou `.webp`; proporção paisagem renderiza melhor no modal).

2. Abra `src/data/businessInfo.ts` e adicione um item no array `certificates`:

   ```ts
   {
     title: "Nome do certificado",
     institution: "Instituição",
     category: "Pós-graduação / Curso / Certificação",
     year: "2026",
     imageUrl: "/certificates/novo-curso.png", // caminho público da imagem tratada
     status: "Concluído",
     description: "Resumo. Cite aqui que dados foram ocultados por privacidade.",
   }
   ```

3. Comportamento automático:
   - **Com `imageUrl`** → card clicável que abre a imagem no modal ("Ver certificado").
   - **Sem `imageUrl`** → exibe "Documento disponível mediante solicitação".

> Regra geral: **não publicar documentos completos sem tratamento.** Só publique
> a versão com os dados sensíveis ocultados.
