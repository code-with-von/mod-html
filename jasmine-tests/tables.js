describe('Resultado para título: ', function () {
  var titulo = document.getElementsByTagName('h1')[0];
  it('Precisa conter título', function () {
    expect(titulo).toBeDefined('Seu site nao possui um titulo');
  });
  if (titulo) {
    it('Nao pode ser vazio', function () {
      var content = titulo.textContent.trim();
      expect(content).not.toEqual('', 'O titulo nao pode estar vazio');
    });

    it('Precisa estar centralizado', function () {
      var isCentered = titulo.getAttribute('align');
      expect(isCentered).toEqual('center', 'O titulo nao esta centralizado');
    });
  }
});

describe('Resultado para tabela: ', function () {
  var table = document.getElementsByTagName('table')[0];
  it('Precisa conter uma tabela', function () {
    expect(table).toBeDefined('Nao foi encontrada uma tabela criada');
  });
  if (table) {
    var isCentered = table.getAttribute('align');
    var hasBorder = table.getAttribute('border') > 0 ? true : false;
    var hasHeader = table.getElementsByTagName('thead')[0] ? true : false;
    var hasBody = table.getElementsByTagName('tbody')[0] ? true : false;
    var hasFooter = table.getElementsByTagName('tfoot')[0] ? true : false;
    it('Precisa estar centralizada', function () {
      expect(isCentered).toEqual('center', 'A tabela nao esta centralizada');
    });
    it('Precisa ser uma tabela completa', function () {
      expect(hasBorder).toEqual(true, 'Sua tabela nao possui borda');
      expect(hasHeader).toEqual(true, 'Sua tabela nao possui cabecalho');
      expect(hasBody).toEqual(true, 'Sua tabela nao possui corpo');
      expect(hasFooter).toEqual(true, 'Sua tabela nao possui rodape');
    });
  }
});

describe('Resultado para cabecalho: ', function () {
  var header = document.getElementsByTagName('thead')[0];
  if (header) {
    var linha = header.getElementsByTagName('tr')[0];
    it('Os titulos das colunas precisam estar em uma linha', function () {
      expect(linha).toBeDefined('Seu cabecalho nao possui uma linha');
    });
    if (linha) {
      var colunas = header.getElementsByTagName('th');
      var colCount = colunas.length;
      it('Precisa conter EXATAMENTE 3 colunas', function () {
        expect(colCount).toEqual(
          3,
          'Sua cabecalho nao possui exatamente 3 colunas'
        );
      });

      it('Precisa conter conteudo', function () {
        for (var i = 0; i < colCount; i++) {
          var content = colunas[i].textContent.trim();
          console.log(content);
          expect(content).not.toEqual(
            '',
            `A coluna ${i + 1} nao possui conteudo`
          );
        }
      });

      it('Precisa estar estruturada', function () {
        var colspan = colunas[2].getAttribute('colspan');
        expect(colspan).toEqual(
          '3',
          'A terceira coluna de seu cabecalho precisa de expandir por 3 colunas'
        );
      });
    }
  }
});

describe('Resultado para corpo: ', function () {
  var body = document.getElementsByTagName('tbody')[0];
  if (body) {
    var linhas = body.getElementsByTagName('tr');
    var lineCount = linhas.length;
    it('O corpo de sua tabela precisa conter EXATAMENTE 2 linhas', function () {
      expect(lineCount).toEqual(
        2,
        'Nao existem linhas no corpo de sua tabela ou ele possui mais que duas linhas'
      );
    });
    if (lineCount === 2) {
      var line1 = linhas[0];
      var l1Data = line1.getElementsByTagName('td');
      var line2 = linhas[1];
      var l2Data = line2.getElementsByTagName('td');

      it('Precisa conter EXATAMENTE 5 colunas', function () {
        expect(l1Data.length).toEqual(
          5,
          'O corpo de sua tabela nao possui 5 colunas'
        );
      });
      if (l1Data.length === 5) {
        it('Precisa estar estruturado', function () {
          for (var i = 0; i < l1Data.length; i++) {
            if (i !== 1) {
              var twoLineCheck = l1Data[i].getAttribute('rowspan');
              expect(twoLineCheck).toEqual(
                '2',
                `Uma ou mais celulas do corpo de tabela nao ocupam 2 linhas`
              );
            }
          }
        });
      }
      it('Precisa ter a quantidade correta de celulas na segunda linha', function () {
        expect(l2Data.length).toEqual(
          1,
          'Faltam campos na segunda linha ou esta possui mais campos que o necessario'
        );
      });
      it('Precisa possuir informacao em todas as celulas', function () {
        var cells = [...l1Data];
        cells.push(...l2Data);
        for (var i = 0; i < cells.length; i++) {
          var content = cells[i].textContent.trim();
          expect(content).not.toEqual(
            '',
            `A celula ${i + 1} do corpod de sua tabela nao possui informacao`
          );
        }
      });
    }
  }
});

describe('Resultado para rodape: ', function () {
  var footer = document.getElementsByTagName('tfoot')[0];
  if (footer) {
    var linha = footer.getElementsByTagName('tr')[0];
    it('Seu rodape precisa estar em uma linha', function () {
      expect(linha).toBeDefined('Seu rodape nao possui uma linha');
    });
    if (linha) {
      var colunas = linha.getElementsByTagName('td');
      var colCount = colunas.length;
      it('Precisa conter EXATAMENTE 1 coluna', function () {
        expect(colCount).toEqual(
          1,
          'Seu rodape nao possui dados ou possui mais dados que o necessario'
        );
      });

      it('Precisa conter conteudo', function () {
        var content = colunas[0].textContent.trim();
        expect(content).not.toEqual('', 'Seu rodape nao contem conteudo');
      });

      it('Precisa ocupar toda a tabela', function () {
        var colspan = colunas[0].getAttribute('colspan');
        expect(colspan).toEqual('5', 'Seu rodape nao ocupa toda a tabela');
      });
    }
  }
});
