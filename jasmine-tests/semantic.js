describe('Resultado para header: ', function () {
  var header = document.getElementsByTagName('header')[0];
  it('Precisa conter um header', function () {
    expect(header).toBeDefined('Seu site nao contem um cabecalho');
  });
  if (header) {
    var nav = header.getElementsByTagName('nav')[0];
    it('Precisa conter uma barra de links', function () {
      expect(nav).toBeDefined('Seu site nao possie uma barra de links');
    });
    if (nav) {
      var links = nav.getElementsByTagName('a');
      var linksCount = links.length;
      it('Precisa conter uma logo e 3 outros links', function () {
        expect(linksCount).toEqual(
          4,
          'Sua barra de links esta incompleta ou possui mais links que o necessario'
        );
      });
      if (linksCount == 4) {
        it('Links precisam de conteudo', function () {
          for (var i = 0; i < linksCount; i++) {
            var content = links[i].textContent.trim();
            expect(content).not.toEqual(
              '',
              `O ${
                i + 1
              }o. elemento da sua barra de navegacao nao possui conteudo`
            );
          }
        });
      }
    }
  }
});

describe('Resultado para main: ', function () {
  var main = document.getElementsByTagName('main')[0];
  it('Precisa ter conteudo principal', function () {
    expect(main).toBeDefined('Sua pagina nao possui conteudo principal');
  });
  if (main) {
    var article = main.getElementsByTagName('article');
    var articleCount = article.length > 0 ? true : false;
    it('Precia possuir um ou mais artigos', function () {
      expect(articleCount).toEqual(
        true,
        'Seu conteudo principal nao possui artigos'
      );
    });
    if (articleCount) {
      var section = [];
      for (var i = 0; i < article.length; i++) {
        var articleSession = article[i].getElementsByTagName('section');
        section.push(...articleSession);
      }
      if (section.length > 0) {
        it('Precisa ter conteudo', function () {
          for (var j = 0; j < section.length; j++) {
            var content = section[j].textContent.trim();
            expect(content).not.toEqual(
              '',
              'Uma ou mais secoes do seu site nao possui conteudo'
            );
          }
        });
      }
    }
  }
});

describe('Resultado para footer: ', function () {
  var footer = document.getElementsByTagName('footer')[0];
  it('Precisa conter um rodape', function () {
    expect(footer).toBeDefined();
  });
  if (footer) {
    var nav = footer.getElementsByTagName('nav')[0];
    it('Precisa ter uma barra de links para redes sociais', function () {
      expect(nav).toBeDefined(
        'Seu rodape nao possui os links para redes sociais'
      );
    });
    if (nav) {
      var socials = nav.getElementsByTagName('a');
      var checkSize = socials.length > 0 ? true : false;
      it('Precisa conter pelo menos um link para uma redes sociais', function () {
        expect(checkSize).toEqual(
          true,
          'Seu rodape nao possui links para redes sociais'
        );
      });
      if (checkSize) {
        it('Precisa ter conteudo', function () {
          for (var i = 0; i < socials.length; i++) {
            var content = socials[i].textContent.trim();
            expect(content).not.toEqual(
              '',
              `O ${i + 1}o. link para rede social nao possui conteúdo`
            );
          }
        });
      }
    }
  }
});
