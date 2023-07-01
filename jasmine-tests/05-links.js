describe('Resultados para titulo: ', () => {
  const h1 = document.getElementsByTagName('h1')[0];
  it('Precisa conter um titulo centralizado', () => {
    expect(h1).toBeDefined('Seu site nao contem um titulo');
  });
  if (h1) {
    const align = h1.getAttribute('align');
    const content = h1.textContent.trim();
    it('Precisa de conteudo', () => {
      expect(content).not.toEqual('', 'Seu titulo nao pode estar vazio');
    });
    it('Precisa estar centralizado', () => {
      expect(align).toEqual('center', 'Seu titulo nao esta centralizado');
    });
  }
});

describe('Resultados para lista de links: ', () => {
  const ul = document.getElementsByTagName('ul')[0];
  it('Precisa conter uma lista com links de navegacao', () => {
    expect(ul).toBeDefined(
      'Seu site nao possui uma lista nao-ordenada para mostrar os links de navegacao'
    );
  });
  if (ul) {
    const li = ul.children;
    const liCount = li.length;
    const has2Items = liCount === 2;
    const noBullet = ul.getAttribute('type');
    it('Nao pode conter marcacoes', () => {
      expect(noBullet).toEqual(
        'none',
        'Sua lista ordenada nao pode conter marcacoes'
      );
    });
    it('Precisa conter exatamente 2 itens', () => {
      expect(has2Items).toEqual(true, 'Sua lista nao possui dois itens');
    });
    if (has2Items) {
      it('Precisa ter conteudo do tipo link', () => {
        for (let index = 0; index < liCount; index++) {
          const content = li[index].textContent.trim();
          const isLink = li[index].getElementsByTagName('a')[0];
          expect(content).not.toEqual(
            '',
            `O item ${index + 1} de sua lista nao pode estar vazio`
          );
          expect(isLink).toBeDefined(
            `O item ${
              index + 1
            } de sua lista nao representa um link de navegacao`
          );
        }
      });
    }
  }
});

describe('Resultados para alvos de links: ', () => {
  const l1 = document.getElementsByTagName('a')[0];
  const t1 = l1.getAttribute('target');
  const l2 = document.getElementsByTagName('a')[1];
  const t2 = l2.getAttribute('target');
  it('Abrir em nova janela', () => {
    expect(t1).toEqual(
      '_blank',
      'O primeiro link precisa abrir em uma nova pagina'
    );
  });
  it('Abrir na mesma janela', () => {
    expect(t2).toEqual('_self', 'O segundo link precisa abrir na mesma janela');
  });
});
