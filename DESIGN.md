# Design

Página de links do Caio Labella. Quem chega vem da bio do LinkedIn ou do Instagram, quase sempre
no navegador do app, no celular, e fica poucos segundos.

## Estrutura

Linktree, não landing page: um cartão de perfil e uma grade de cartões de projeto.
No celular, uma coluna com o perfil em cima. A partir de 960 px, o perfil fica à esquerda (fixo ao rolar)
e os projetos à direita.

## Cor

Fundo espacial: quase preto com um toque de verde, duas luzes difusas (lima e verde-azulado),
uma grade fina que some nas bordas e estrelas de quatro pontas. Escuro é o padrão; o botão no canto
da foto troca para o tema claro e guarda a escolha.

Lima é o acento da página (estrelas, foco e o botão da 404). Cada cartão de projeto usa a cor da
própria marca, com o texto na cor de contraste da marca.

| Token | Escuro | Claro |
|---|---|---|
| `--page` | `#070806` | `#f2f5ea` |
| `--raised` | `#0e100c` | `#ffffff` |
| `--line` | `#1f2419` | `#dbe1cd` |
| `--text` | `#f1f3ea` | `#11140c` |
| `--text-2` | `#b7bdaa` | `#424a35` |
| `--accent` | `#c6f04a` | `#3f6b0a` |

## Tipografia

Uma fonte só, de código: JetBrains Mono variável, com itálico na 404. Texto corrido de 15 a 18 px,
nome dos projetos de 24 a 30 px. Tracking negativo leve, no máximo -0.04em.

## Forma

Raio de 6 px em tudo (cartões, foto, botões e ícones). Botões com 40 px de altura.

## Cartões

Ícone do produto, nome com o papel ao lado, uma frase, botão "Abrir" e a captura da landing page
do produto inclinada no canto de baixo. Cartões em destaque ocupam a largura toda.

## Regras

- Imagens reais: ícone do site do produto e captura da landing page, nunca a tela interna do app.
- Funciona sem JavaScript; o botão de tema e o atalho de teclado são extras.
- Sem faixa colorida na lateral, emoji, tudo centralizado, hero gigante ou gradiente de duas cores.
- Sem e-mail ou telefone na página.
