describe('Resultados para listas: ', () => {
  const ul = document.getElementsByTagName('ul')[0];
  const ol = document.getElementsByTagName('ol')[0];
  it('Precisa conter uma lista ordenada e uma lista nao-ordenada', () => {
    expect(ul).toBeDefined('Seu site nao contem uma lista nao-ordenada');
    expect(ol).toBeDefined('Seu site nao contem uma lista ordenada');
  });
  if (ul) {
    const li = ul.children;
    const liCount = li.length;
    const has3Items = liCount >= 3;
    it('Precisa conter pelo menos 3 itens', () => {
      expect(has3Items).toEqual(
        true,
        'Sua lista nao-ordenada nao possui pelo menos 3 items'
      );
    });
    if (has3Items) {
      it('Precisa ter conteudo em todos os itens', () => {
        for (let index = 0; index < liCount; index++) {
          const content = li[index].textContent.trim();
          expect(content).not.toEqual(
            '',
            `O item ${index + 1} de sua lista nao pode ser vazio`
          );
        }
      });
    }
  }
  if (ol) {
    const li = ol.children;
    const liCount = li.length;
    const has3Items = liCount >= 3;
    it('Precisa conter pelo menos 3 itens', () => {
      expect(has3Items).toEqual(
        true,
        'Sua lista nao-ordenada nao possui pelo menos 3 items'
      );
    });
    if (has3Items) {
      it('Precisa ter conteudo em todos os itens', () => {
        for (let index = 0; index < liCount; index++) {
          const content = li[index].textContent.trim();
          expect(content).not.toEqual(
            '',
            `O item ${index + 1} de sua lista nao pode ser vazio`
          );
        }
      });
    }
  }
});
