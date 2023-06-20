describe('Resulados para figuras com legendas: ', () => {
  const figures = document.getElementsByTagName('figure');

  it('Precisa conter duas figuras com legendas', () => {
    expect(figures).toBeDefined('Seu site nao possui figuras');
    if (figures) {
      const figuresCount = figures.length;
      expect(figuresCount).toEqual(2, 'Seu site nao possui duas figuras');
      if (figuresCount === 2) {
        const captions = [];
        captions.push(...figures[0].getElementsByTagName('figcaption'));
        captions.push(...figures[1].getElementsByTagName('figcaption'));
        const captionsCount = captions.length;
        const iFrames = [];
        iFrames.push(...figures[0].getElementsByTagName('iframe'));
        iFrames.push(...figures[1].getElementsByTagName('iframe'));
        const iFrameCount = iFrames.length;
        expect(captionsCount).toEqual(
          2,
          'Uma ou mais figuras nao possui legendas'
        );
        expect(iFrameCount).toEqual(
          2,
          'Uma ou mais figuras nao possui um elemento embutido'
        );
        if (captionsCount === 2) {
          for (let index = 0; index < captionsCount; index++) {
            const content = captions[index].textContent.trim();
            expect(content).not.toEqual(
              '',
              `A legenda da figura ${index + 1} nao pode ser vazia`
            );
          }
        }
        if (iFrameCount === 2) {
          const ytFrame = iFrames[0];
          const ytFrameWidth = ytFrame.getAttribute('width');
          const ytFrameHeight = ytFrame.getAttribute('height');
          const ytSrc = ytFrame.getAttribute('src').split('.');
          const isYTSrc = ytSrc.includes('youtube');

          expect(ytFrameWidth).toEqual(
            '640',
            'Seu video do YouTube nao esta com a largura correta'
          );
          expect(ytFrameHeight).toEqual(
            '360',
            'Seu video do YouTube nao esta com a altura correta'
          );
          expect(isYTSrc).toEqual(
            true,
            'Sua primeira figura nao contem um video do YouTube'
          );

          const spotifyFrame = iFrames[1];
          const spotifySrc = spotifyFrame.getAttribute('src').split('.');
          const isSpotifySrc = spotifySrc.includes('spotify');

          expect(isSpotifySrc).toEqual(
            true,
            'Sua segunda figura nao contem uma musica do Spotify'
          );
        }
      }
    }
  });
});
