# Logrosoft Express

Atue como um Desenvolvedor Front-end Senior e Especialista em Landing Pages de Alta Conversão B2B (High-Ticket). 

Preciso que você construa o site "logrosoftexpresso.com.br". O foco desse site é receber tráfego frio do Google Ads de empresários e comerciantes que buscam comprar máquinas industriais de sorvete para aumentar o lucro de seus negócios.

O design deve ser extremamente corporativo, limpo, moderno e **100% responsivo (Mobile-First)**, pois a maioria do tráfego virá de celulares. Use uma paleta de cores de confiança (Azul corporativo escuro, branco, cinza claro e detalhes em verde ou laranja para os botões de ação - CTAs). NÃO crie designs saturados, amadores ou que pareçam gerados por IA. 

O site deve ser construído em formato Single Page Application (Landing Page longa) e deve conter as seguintes seções, na exata ordem:

1. HEADER E BARRA DE AVISO (Topo):
- Barra fininha no topo com os gatilhos: "Frete Grátis para todo o Brasil | Parcelamento em até 12x Sem Juros".
- Header limpo com a logo "Logrosoft" e um botão flutuante/persistente de WhatsApp ("Fale com um Consultor").

2. HERO SECTION (A Dobra Principal de Conversão):
- Título/Copy focado em transformação financeira (H1): "Conquiste sua liberdade financeira com a Logrosoft: Rendimentos de R$ 5.000 a R$ 30.000 mensais com o seu próprio negócio!"
- Subtítulo evidenciando a versatilidade (H2): "Uma única máquina. Quatro fontes de lucro: SORVETE - AÇAÍ - MILKSHAKE - FROZEN."
- Selo de Autoridade visível: "Produto Oficial com Certificação do Inmetro".
- Botão CTA Grande: "Quero Simular Meu Lucro" (ancora para a calculadora) ou "Falar com Consultor".

3. PROVA SOCIAL (Marcas que confiam):
- Um carrossel ou grade de logos em tons de cinza de marcas conhecidas para ancorar autoridade (ex: Kopenhagen, Giraffas, Starbucks, Cacau Show, Pão de Açúcar, Jah Açaí). Título da seção: "Empresas que confiam na tecnologia Logrosoft".

4. CALCULADORA DE ROI (A Ferramenta Interativa):
- Crie um componente funcional (UI interativa) de "Calculadora de Lucro". 
- Inputs para o usuário preencher: 
  a) Preço de venda da casquinha (ex: R$ 5,00)
  b) Custo de produção (ex: R$ 1,20 fixo no código, mas mostre ao usuário)
  c) Vendas estimadas por dia (Slider ou campo de número)
  d) Dias trabalhados no mês (Slider de 1 a 30).
- Output em tempo real (Resultado grande e em destaque): "Lucro Bruto Estimado Mensal: R$ X.XXX,XX". 
- Botão embaixo do resultado: "Quero esse lucro no meu negócio".

5. PRODUTOS E ESPECIFICAÇÕES (Foco Comercial e Técnico):
- Mostre os principais modelos de máquinas em formato de Cards (ex: LSD D300, LSD 510 Balcão, LSCF 8240).
- Cada card deve traduzir a parte técnica para linguagem comercial: em vez de apenas "40l/h", coloque "Produção: Até 400 casquinhas por hora".
- Mencione que as máquinas possuem isolamento térmico premium e refrigeração na cuba.
- Crie um box lateral ou seção abaixo falando sobre "Acessórios Essenciais", destacando itens como "Estabilizadores de Energia 5KVA" (para proteger o equipamento contra oscilações no Brasil) e batedores de Milkshake.

6. USE CASES / SEGMENTAÇÃO (Sanfona/Acordeão de FAQs):
- Crie uma seção: "Uma máquina, dezenas de oportunidades. Onde você vai instalar a sua?"
- Use um sistema de abas (Tabs) ou acordeões (Accordions) para mostrar como a máquina funciona para diferentes nichos:
  - Padarias (Foco em pouco espaço, usando modelos de balcão).
  - Postos de Gasolina (Foco em aguentar pico de atendimento).
  - Academias (Foco em sorvete de Whey Protein e Açaí, 2 sabores isolados).
  - Restaurantes (Foco em sobremesas elaboradas e zero desperdício noturno).

7. RODAPÉ B2B (Footer de Autoridade):
- Nome da Empresa Oficial (Logrosoft).
- CNPJ visível (placeholder).
- E-mail corporativo correto (comercial@logrosoftexpresso.com.br).
- Links para Termos de Uso e Política de Privacidade.

Requisitos Técnicos Adicionais para a IA:
- Use Tailwind CSS para a estilização.
- Use Lucide Icons para os ícones comerciais e de benefícios.
- Garanta que a Calculadora tenha o JavaScript/estado (React/useState) funcionando corretamente para atualizar os números em tempo real.
- Assegure-se de que o layout no mobile não esconda o botão de CTA e que os textos sejam legíveis (tamanho de fonte adequado).

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6ce07bb3-7c3d-4bba-8285-8e91110dcf72).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
