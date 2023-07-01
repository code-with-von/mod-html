describe('Resultados para paragraphs: ', () => {
  const paragraphs = document.getElementsByTagName('p');
  it('Precisa conter paragrafos', () => {
    expect(paragraphs).toBeDefined('Seu site nao contem paragrafos');
  });
  if (paragraphs) {
    const pCount = paragraphs.length;
    if (pCount < 4) {
      it('Precisa conter pelo menos 4 paragrafos', () => {
        expect(pCount).toEqual(
          4,
          'Seu site nao contem pelo menos 4 paragrafos'
        );
      });
    } else {
      it('Precisa ter conteudo em todos os paragrafos', () => {
        for (let index = 0; index < pCount; index++) {
          const content = paragraphs[index].textContent.trim();
          expect(content).not.toEqual(
            '',
            `O paragrafo ${index + 1} nao pode ser vazio`
          );
        }
      });
    }
  }
});
