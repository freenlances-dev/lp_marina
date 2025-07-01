# Landing Page - Marina Adv

Este projeto é uma landing page desenvolvida para o escritório Marina Adv, com foco em apresentar os principais serviços jurídicos e casos de destaque do escritório.

## Tecnologias Utilizadas

- [Astro](https://astro.build/)
- [Swiper.js](https://swiperjs.com/) (carrossel de casos)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

## Funcionalidades

- Apresentação dos principais serviços jurídicos
- Carrossel de casos de destaque com paginação customizada
- Layout responsivo
- Ícones SVG customizados para cada área do direito

## Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/lp_marina_adv.git
   cd lp_marina_adv
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

4. Acesse em [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```
src/
  components/         # Componentes Astro e React
  data/               # Dados dos casos de destaque
  pages/              # Páginas principais do site
  public/             # Imagens e ícones públicos
```

## Personalização

- Para adicionar ou editar casos de destaque, edite o arquivo:  
  `src/data/featuredCases.json`
- Para alterar ícones, substitua os arquivos SVG em `public/icons/`.

## Licença

Este projeto é privado e de uso exclusivo do escritório Marina Adv.

---
