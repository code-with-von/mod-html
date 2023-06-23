describe('Resultados para headings: ', () => {
  const h1 = document.getElementsByTagName('h1')[0];
  const h2 = document.getElementsByTagName('h2')[0];
  const h3 = document.getElementsByTagName('h3')[0];
  const h4 = document.getElementsByTagName('h4')[0];
  const h5 = document.getElementsByTagName('h5')[0];
  const h6 = document.getElementsByTagName('h6')[0];
  it('Precisa conter todos os niveis de heading', () => {
    expect(h1).toBeDefined('Seu site nao contem um heading h1');
    expect(h2).toBeDefined('Seu site nao contem um heading h2');
    expect(h3).toBeDefined('Seu site nao contem um heading h3');
    expect(h4).toBeDefined('Seu site nao contem um heading h4');
    expect(h5).toBeDefined('Seu site nao contem um heading h5');
    expect(h6).toBeDefined('Seu site nao contem um heading h6');
  });
  if (h1) {
    const content = h1.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h1 nao pode estar vazio');
    });
  }
  if (h2) {
    const content = h2.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h2 nao pode estar vazio');
    });
  }
  if (h3) {
    const content = h3.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h3 nao pode estar vazio');
    });
  }
  if (h4) {
    const content = h4.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h4 nao pode estar vazio');
    });
  }
  if (h5) {
    const content = h5.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h5 nao pode estar vazio');
    });
  }
  if (h6) {
    const content = h6.textContent.trim();
    it('Precisa ter conteudo', () => {
      expect(content).not.toEqual('', 'O heading h6 nao pode estar vazio');
    });
  }
});
