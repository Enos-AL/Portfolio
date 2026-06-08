# Certificados — ED² Tecnologic

Pasta para armazenar **certificados e diplomas já tratados** que serão exibidos
na seção "Transparência e Credibilidade" do site.

## ⚠️ Antes de adicionar qualquer documento (obrigatório)

Tudo que estiver em `public/` fica **público** na internet (ex.:
`/certificates/curso.pdf` vira `https://ed2tecnologic.com.br/certificates/curso.pdf`).
Portanto, **trate o documento antes de colocá-lo aqui**. Remova/oculte:

- ❌ CPF, RG e outros números de documento pessoal
- ❌ Assinatura manuscrita sensível
- ❌ QR Code / código de autenticação privado do diploma
- ❌ Endereço, telefone pessoal ou qualquer dado pessoal desnecessário
- ❌ Documento completo sem necessidade (prefira a versão/recorte institucional)

Mantenha apenas as informações públicas relevantes: nome do curso, instituição,
carga horária, data de conclusão e a logo/identidade da instituição.

## Como vincular um certificado ao site

1. Salve o arquivo tratado aqui, ex.: `public/certificates/seguranca-redes.pdf`.
2. Abra `src/data/businessInfo.ts` e adicione um item no array `certificates`:

   ```ts
   export const certificates: Certificate[] = [
     {
       title: "Segurança de Redes de Computadores",
       institution: "Faculdade Iguaçu",
       category: "Pós-graduação",
       year: "2025",
       fileUrl: "/certificates/seguranca-redes.pdf", // caminho público
       status: "Concluído",
     },
   ];
   ```

3. Comportamento automático na seção:
   - **Com `fileUrl`** preenchido → aparece o botão **"Ver certificado"** (abre em nova aba).
   - **Sem `fileUrl`** (vazio `""`) → aparece **"Documento disponível mediante solicitação."**
   - Array vazio → mostra o bloco "Em constante atualização".

> Regra geral: **não publicar documentos completos por padrão.** Só publique o
> que já estiver tratado e sem dados sensíveis.
