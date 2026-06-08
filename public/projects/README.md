# Imagens dos Sistemas — ED² Tecnologic

Coloque aqui as imagens reais (capturas de tela) dos sistemas do portfólio.

## Como funciona

Tudo que estiver dentro de `public/` é servido a partir da raiz do site.
Portanto, uma imagem salva como:

```
public/projects/sisgreg-cover.png
```

fica acessível no navegador (e no build do Netlify) pelo caminho:

```
/projects/sisgreg-cover.png
```

## Como vincular uma imagem a um sistema

1. Salve a imagem de capa e (opcionalmente) a imagem de hover nesta pasta. Ex.:
   - `public/projects/sisgreg-cover.png`
   - `public/projects/sisgreg-hover.png`

2. Abra `src/types.ts`, encontre o objeto do sistema dentro de `projectsData`
   e adicione os campos opcionais `coverImage` e `hoverImage`:

   ```ts
   {
     id: "ed2-sisgreg-tfd",
     name: "ED² Sisgreg TFD",
     // ...demais campos...
     coverImage: "/projects/sisgreg-cover.png",
     hoverImage: "/projects/sisgreg-hover.png",
   }
   ```

3. Pronto. O card do projeto passa a renderizar a imagem real com efeito de
   zoom no hover. Se houver `hoverImage`, ele faz uma transição suave para a
   segunda imagem ao passar o mouse.

## Recomendações

- **Proporção:** use imagens em torno de `16:10` (ex.: 1280×800) para
  preencher o card sem distorção.
- **Formato:** `.png` (telas/UI) ou `.jpg` / `.webp` (fotos) — o `.webp`
  costuma gerar arquivos menores.
- **Sem imagem?** Se um sistema não tiver `coverImage`, o card usa
  automaticamente o placeholder com gradiente futurista (fallback). Nada quebra.
