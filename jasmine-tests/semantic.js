describe('Resultados para header com navegacao: ', () => {
  const header = document.getElementsByTagName('header')[0];
  const nav = header.getElementsByTagName('nav')[0];
  it('Precisa conter um header com barra de navegacao', () => {
    expect(header).toBeDefined('Seu site nao possui cabecalho');
    if (header) {
      expect(nav).toBeDefined('Seu cabecalho nao possui uma barra de navegao');
    }
  });
  if (nav) {
    const navLinks = nav.getElementsByTagName('a');
    const navCount = navLinks.length;
    const has4Links = navCount === 4;
    it('O cabecalho precisa conter uma logo e 3 links de navacao', () => {
      expect(has4Links).toEqual(
        true,
        'Sua barra de navegacao nao possui uma logo e 3 links'
      );
    });

    if (has4Links) {
      it('Precisa conter uma logo', () => {
        const content = navLinks[0].textContent.trim();
        expect(content).not.toEqual('', 'A logo nao pode estar vazia');
      });
      it('Precisa conter 3 links', () => {
        for (let index = 1; index < navCount; index++) {
          const href = navLinks[index].getAttribute('href');
          const isLink = href !== ('' || null);
          const content = navLinks[index].textContent.trim();
          expect(isLink).toEqual(
            true,
            `O link ${index} de seu cabecalho nao esta definido corretamente`
          );
          expect(content).not.toEqual(
            '',
            `O link ${index} de seu cabecalho nao pode ser vazio`
          );
        }
      });
    }
  }
});

describe('Resultados para conteudo principal: ', () => {
  const main = document.getElementsByTagName('main')[0];
  const articles = main.getElementsByTagName('article');
  const articleCount = articles.length;
  const has2Articles = articleCount === 2;
  const sections = [];
  it('Precisa ter conteudo principal', () => {
    expect(main).toBeDefined('Seu site nao possui conteudo principal');
  });
  if (main) {
    it('Precisa conter 2 artigos', () => {
      expect(has2Articles).toEqual(true, 'Seu site nao possui dois artigos');
    });
  }
  if (has2Articles) {
    it('Os artigos precisam conter secoes', () => {
      for (let index = 0; index < articleCount; index++) {
        const articleSections = articles[index].getElementsByTagName('section');
        const hasSections = articleSections.length > 0;
        if (hasSections) {
          sections.push(...articleSections);
        }
        expect(hasSections).not.toEqual(
          false,
          `O artigo ${index + 1} nao esta organizado em secoes`
        );
      }
    });
  }
  it('Precisa ter conteudo', () => {
    for (let index = 0; index < sections.length; index++) {
      const content = sections[index].textContent.trim();
      expect(content).not.toEqual(
        '',
        `O artigo ${index + 1} de seu site nao possui conteudo`
      );
    }
  });
});

describe('Resultados para footer com navegacao: ', () => {
  const footer = document.getElementsByTagName('footer')[0];
  const nav = footer.getElementsByTagName('nav')[0];
  it('Precisa conter um footer com barra de navegacao', () => {
    expect(footer).toBeDefined('Seu site nao possui rodape');
    if (footer) {
      expect(nav).toBeDefined('Seu rodape nao possui uma barra de navegao');
    }
  });
  if (nav) {
    const navLinks = nav.getElementsByTagName('a');
    const navCount = navLinks.length;
    const hasLinks = navCount > 0;
    it('O rodape precisa conter links de navegacao', () => {
      expect(hasLinks).toEqual(
        true,
        'Seu rodape nao possui barras de navegacao'
      );
    });
    if (hasLinks) {
      it('Precisa ter conteudo', () => {
        for (let index = 0; index < navCount; index++) {
          const href = navLinks[index].getAttribute('href');
          const isLink = href !== ('' || null);
          const content = navLinks[index].textContent.trim();
          expect(isLink).toEqual(
            true,
            `O link ${index + 1} de seu rodape nao esta definido corretamente`
          );
          expect(content).not.toEqual(
            '',
            `O link ${index + 1} de seu rodape nao pode ser vazio`
          );
        }
      });
    }
  }
});
