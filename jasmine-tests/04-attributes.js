describe('Resultado para headings: ', () => {
  const h1 = document.getElementsByTagName('h1')[0];
  const h2 = document.getElementsByTagName('h2')[0];
  it('Precisa conter titulo e subtitulo', () => {
    expect(h1).toBeDefined('Seu site nao possui titulo');
    expect(h2).toBeDefined('Seu site nao possui subtitulo');
  });
  if (h1) {
    const align = h1.getAttribute('align');
    const content = h1.textContent.trim();
    it('O titulo precisa estar centralizado', () => {
      expect(align).toEqual('center', 'Seu titulo nao esta centralizado');
    });
    it('O titulo precisa de conteudo', () => {
      expect(content).not.toEqual('', 'Seu titulo nao pode estar vazio');
    });
  }
  if (h2) {
    const align = h2.getAttribute('align');
    const content = h2.textContent.trim();
    it('O subtitulo precisa estar alinhado para direita', () => {
      expect(align).toEqual('right', 'Seu titulo nao esta alinhado na direita');
    });
    it('O subtitulo precisa de conteudo', () => {
      expect(content).not.toEqual('', 'Seu subtitulo nao pode estar vazio');
    });
  }
});

describe('Resultado para paragraphs', () => {
  const paragraphs = document.getElementsByTagName('p');
  const pCount = paragraphs.length;
  const has2Paragraphs = pCount === 2;
  it('Precisa conter exatamente dois paragrafos', () => {
    expect(paragraphs).toBeDefined('Seu site nao contem paragrafos');
    expect(has2Paragraphs).toEqual(
      true,
      'Seu site precisa conter extamente 2 paragrafos'
    );
  });
  if (has2Paragraphs) {
    it('Precisa ter conteudo', () => {
      for (let index = 0; index < pCount; index++) {
        const content = paragraphs[index].textContent.trim();
        expect(content).not.toEqual(
          '',
          `O paragrafo ${index + 1} nao pode estar vazio`
        );
      }
    });
    it('O primeiro paragrafo precisa estar alinhado para esquerda', () => {
      const align = paragraphs[0].getAttribute('align');
      expect(align).toEqual(
        'left',
        'O primeiro paragrafo nao esta alinhado para esquerda'
      );
    });
    it('O segundo paragrafo precisa estar justificado', () => {
      const align = paragraphs[1].getAttribute('align');
      expect(align).toEqual(
        'justify',
        'O primeiro paragrafo nao esta justificado'
      );
    });
  }
});

describe('Resultados para lista ordenada', () => {
  const ol = document.getElementsByTagName('ol')[0];
  it('Precisa conter uma lista ordenada', () => {
    expect(ol).toBeDefined('Seu site nao contem uma lista ordenada');
  });
  if (ol) {
    const start = ol.getAttribute('start');
    const type = ol.getAttribute('type');
    const item = ol.children;
    const has1Item = item.length === 1;
    it('Precisa iniciar com a letra C', () => {
      expect(start).toEqual(
        '3',
        'Sua lista nao comeca a contagem a partir do terceiro item'
      );
      expect(type).toEqual(
        'A',
        'Sua lista nao esta usando letras como contador'
      );
    });
    if (has1Item) {
      it('Precisa ter conteudo', () => {
        const content = item[0].textContent.trim();
        expect(content).not.toEqual(
          '',
          'O item da sua lista nao pode estar vazio'
        );
      });
      it('Precisa mostrar popup de texto', () => {
        const popup = item[0].getAttribute('title');
        expect(popup).not.toEqual(
          null,
          'Seu item nao mostra um popup de texto'
        );
      });
    }
  }
});
