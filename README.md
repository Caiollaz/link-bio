# codebycaio.com.br

Página de links do Caio Labella para a bio do LinkedIn e do Instagram: a empresa, os projetos e as redes num lugar só.

Site estático em [Astro](https://astro.build), publicado no GitHub Pages em [codebycaio.com.br](https://codebycaio.com.br).

## Rodar

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # gera dist/
npm run preview   # serve dist/
```

Requer Node 22.23.4 ou mais novo.

## Estrutura

```
src/
  data/perfil.ts            conteúdo da página: perfil, SEO, projetos e redes
  layouts/Layout.astro      html, head, tema salvo e fundo
  components/
    Seo.astro               title, description, canonical, Open Graph, Twitter e JSON-LD
    SpaceBackground.astro   fundo espacial (luzes, grade e estrelas)
    ProfileCard.astro       foto, nome, título, bio e redes
    ThemeToggle.astro       botão de tema claro e escuro
    SocialLinks.astro       botões das redes
    ProjectGrid.astro       seção de projetos
    ProjectCard.astro       cartão de um projeto
    SiteFooter.astro        rodapé e atalhos de teclado
    Icon.astro              ícones em SVG
  lib/
    links.ts                organiza a grade e formata domínios
    schema.ts               dados estruturados (schema.org)
  pages/
    index.astro             página principal
    404.astro               página de erro
    robots.txt.ts           robots.txt
    sitemap.xml.ts          sitemap.xml
    llms.txt.ts             resumo em texto para modelos de linguagem
    manifest.webmanifest.ts manifesto do site
  assets/                   foto e imagens dos projetos, otimizadas no build
public/                     favicon, imagem de compartilhamento e CNAME
```

## Editar o conteúdo

Tudo fica em `src/data/perfil.ts`. A página, o JSON-LD, o `llms.txt` e o sitemap leem dali.

Cada projeto tem:

| Campo | Para que serve |
|---|---|
| `nome`, `url` | nome e endereço do produto |
| `papel` | o que o Caio faz ali, ao lado do nome |
| `relacao` | `criador`, `socio` ou `colaborador`; vira `creator` ou `contributor` no JSON-LD |
| `descricao` | uma frase sobre o produto |
| `tipo` | tipo no schema.org (`Organization`, `SoftwareApplication`, `WebApplication`) |
| `icone`, `tela` | ícone e captura da landing page, importados de `src/assets/projetos` |
| `cor`, `tinta` | cor de fundo do cartão (a da marca) e cor do texto por cima |
| `destaque` | ocupa a largura toda |

A ordem dos cartões é a ordem da lista. Se sobrar um cartão sozinho na última linha, ele ocupa a largura toda.
Para adicionar o Instagram, inclua `{ nome: 'Instagram', url: 'https://instagram.com/usuario' }` em `redes`.

## SEO e GEO

- `title`, `description`, canonical, Open Graph e Twitter Card em todas as páginas; a 404 sai com `noindex`.
- JSON-LD com `ProfilePage`, `Person` (cargo, empresa, cidade, especialidades e `sameAs`) e `ItemList` dos projetos.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` e `llms.txt`, todos gerados a partir dos dados.
- Imagens convertidas para WebP com `srcset`; a foto carrega com prioridade e o resto sob demanda.
- CSS embutido no HTML e uma única fonte (JetBrains Mono).

## Imagem de compartilhamento

`public/og.png` é o card que aparece quando o link é colado no LinkedIn, WhatsApp ou X.
Depois de mudar o conteúdo, rode `npm run dev` e, em outro terminal, `npm run og`.
O script usa o Chrome instalado (troque o caminho com `CHROME=/caminho/do/chrome`).

## Publicação

Cada push na `main` roda `.github/workflows/deploy.yml`, que gera o site e publica no GitHub Pages.
O domínio está em `public/CNAME`.
