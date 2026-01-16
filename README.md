# Projeto: Site de Documentação (Estático)

Descrição
-------

Este repositório contém um site estático para documentação e páginas de ajuda em HTML. Ele inclui páginas principais (como `index.html`, `ajuda.html`, `sobre.html`) e os recursos estáticos necessários em `assets/` (CSS, fontes, imagens e JavaScript).
- Um sistema simples e eficiente para voce ler e editar os seus arquivos .md e .yml, faça um teste e comprove a simplicidade e eficiencia do sistema.
 - <a href="https://github.com/saliba-siaucom/md_doc" target="_blank">https://github.com/saliba-siaucom/md_doc</a>
 - <a href="https://tools.sisapp.com.br/md_doc/sobre.html" target="_blank">Leitor Markdown</a>


Origem
------

O site foi criado para publicar documentação e materiais de apoio em formato HTML. Os arquivos HTML presentes sugerem que o conteúdo foi preparado para apresentação estática (possivelmente gerado a partir de Markdown ou criado manualmente). O design usa estilos de Markdown do GitHub (`github-markdown-*.css`) e scripts para interatividade.

Estrutura principal
------------------

- **`index.html`**: Página inicial do site.
- **`ajuda.html`**: Páginas de ajuda/documentação.
- **`sobre.html`**: Página "Sobre".
- **`assets/`**: Pasta com recursos estáticos.
  - `css/`: estilos (ex.: `github-markdown-light.css`, `style.css`).
  - `font/`, `image/`: fontes e imagens.
  - `js/`: scripts JavaScript (inclui versões antigas em `old/`).

Como visualizar o site
----------------------

Abra o arquivo `index.html` no seu navegador diretamente, ou rode um servidor HTTP local (recomendado) para testar recursos relativos a caminho. Exemplo rápido com Python (PowerShell):

```powershell
python -m http.server 8000
# Depois abra http://localhost:8000/ no navegador
```

Atualizações
-----------
- **Criado por:** tanabe / markdown-live-preview <a href="https://github.com/tanabe/markdown-live-preview" target="_blank">Github</a>
- **Data da criação:** Março de 2025
- **Atualizado por:** Marcelo Saliba
- **Data da atualização:** 16 de janeiro de 2026

Contribuir
---------

Edite os arquivos HTML/CSS/JS diretamente no repositório e teste localmente. Se preferir, envie instruções/alterações que eu posso aplicar.

Contato
-------

Para alterações adicionais ou dúvidas, informe o que quer ajustar — posso atualizar este README conforme solicitado.
