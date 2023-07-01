describe('Resultados para titulo: ', () => {
  const titulo = document.getElementsByTagName('h1')[0];
  it('Precisa conter um titulo', () => {
    expect(titulo).toBeDefined('Seu site nao possui titulo');
  });
  if (titulo) {
    it('Precisa ter conteudo centralizado', () => {
      const content = titulo.textContent.trim();
      const align = titulo.getAttribute('align');
      expect(content).not.toEqual('', 'Seu titulo nao pode ser vazio');
      expect(align).toEqual('center', 'Seu titulo precisa estar centralizado');
    });
  }
});

describe('Resultados para imagens com descricao: ', () => {
  const images = document.getElementsByTagName('img');
  const imgCount = images.length;
  const descs = document.getElementsByTagName('p');
  const descCount = descs.length;
  const has3Images = imgCount === 3;
  const has3Descs = descCount === 3;
  it('Precisa conter exatemente 3 imagens com descricao', () => {
    expect(images).toBeDefined('Seu site nao contem imagens');
    expect(has3Images).toEqual(
      true,
      'Seu site nao contem exatamente 3 imagens'
    );
    expect(descs).toBeDefined('Seu site nao contem descricoes para imagens');
    expect(has3Descs).toEqual(
      true,
      'Seu site nao contem uma descricao para cada imagem'
    );
  });
  if (has3Images && has3Descs) {
    it('Precisa conter uma fonte e texto alternativo', () => {
      for (let index = 0; index < imgCount; index++) {
        const src = images[index].getAttribute('src');
        const alt = images[index].getAttribute('alt');
        expect(src).not.toEqual(
          '',
          `A imagem ${index + 1} nao possui uma fonte`
        );
        expect(alt).not.toEqual(
          '',
          `A imagem ${index + 1} nao possui uma texto alternativo`
        );
      }
    });
    it('Precisa haver descricao para cada imagem', () => {
      for (let index = 0; index < descCount; index++) {
        const content = descs[index].textContent.trim();
        expect(content).not.toEqual(
          '',
          `A descricao da imagem ${index + 1} nao pode ser vazia`
        );
      }
    });
    it('A primeira imagem precisa ser imagem quadrada', () => {
      const h = images[0].getAttribute('height');
      const w = images[0].getAttribute('width');
      const isSquare = w === h;
      expect(isSquare).toEqual(
        true,
        'A primeira imagem nao esta no formato quadrado'
      );
    });
    it('A segunda imagem precisa ser imagem retrato', () => {
      const h = images[1].getAttribute('height');
      const w = images[1].getAttribute('width');
      const isPortrait = w < h;
      expect(isPortrait).toEqual(
        true,
        'A segunda imagem nao esta no formato retrato'
      );
    });
    it('A terceira imagem precisa ser imagem paisagem', () => {
      const h = images[2].getAttribute('height');
      const w = images[2].getAttribute('width');
      const isLandscape = w > h;
      expect(isLandscape).toEqual(
        true,
        'A terceira imagem nao esta no formato paisagem'
      );
    });
  }
});
