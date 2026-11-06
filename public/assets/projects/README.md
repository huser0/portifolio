# Imagens dos projetos

Coloque seus prints (PNG, JPG, WebP) ou GIFs nesta pasta.
Em `components/Projects.tsx`, acrescente `media` ao projeto correspondente:

```tsx
media: {
  src: "/assets/projects/kafka-demo.gif",
  alt: "Demonstração da publicação e consumo de mensagens no Kafka Demo",
},
```

O campo é opcional: sem ele, o card mantém uma capa neutra.
As imagens são exibidas inteiras (sem cortes) em uma área 16:9.
Prefira prints de pelo menos 1280 pixels de largura e GIFs curtos e leves.
