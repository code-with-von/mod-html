describe('Resultado para titulo: ', () => {
  const titulo = document.getElementsByTagName('h1')[0];
  it('Precisa conter um titulo', () => {
    expect(titulo).toBeDefined('Seu site nao possui um titulo');
  });
  if (titulo) {
    it('Precisa ter conteudo e estar centralizado', () => {
      const content = titulo.textContent.trim();
      const align = titulo.getAttribute('align');
      expect(content).not.toEqual('', 'Seu titulo nao pode ser vazio');
      expect(align).toEqual('center', 'Seu titulo precisa estar centralizado');
    });
  }
});

describe('Resultados para tabela: ', () => {
  const table = document.getElementsByTagName('table')[0];
  it('Precisa conter uma tabela', () => {
    expect(table).toBeDefined('Seu site nao possui uma tabela');
  });
  if (table) {
    const tBorder = table.getAttribute('border') > 0;
    const isCentered = table.getAttribute('align');
    const tHead = table.getElementsByTagName('thead')[0];
    const tBody = table.getElementsByTagName('tbody')[0];
    const tFoot = table.getElementsByTagName('tFoot')[0];
    it('A tabela precisa estar centralizada ter campos separados por bordas', () => {
      expect(tBorder).toEqual(
        true,
        'O campos de sua tabela nao estao separados por bordas'
      );
      expect(isCentered).toEqual('center', 'Sua tabela nao esta centralizada');
    });

    it('A tabela precisa conter uma linha de cabecalho com titulos', () => {
      expect(tHead).toBeDefined('Sua tabela nao contem cabecalho');
      if (tHead) {
        const tHeadRows = tHead.getElementsByTagName('tr');
        const tHeadRowsCount = tHeadRows.length;
        expect(tHeadRowsCount).toEqual(
          1,
          'O cabecalho de sua tabela precisa estar contido em uma linha'
        );
        if (tHeadRowsCount === 1) {
          const tHeadCols = tHead.getElementsByTagName('th');
          const tHeadColsCount = tHeadCols.length;
          expect(tHeadColsCount).toEqual(
            3,
            'O cabecalho de sua tabela precisa conter apenas 3 colunas'
          );
          if (tHeadColsCount === 3) {
            const colspan = tHeadCols[2].getAttribute('colspan');
            expect(colspan).toEqual(
              '3',
              'A ultima coluna do cabecalho precisa mesclar 3 colunas'
            );
            for (let index = 0; index < tHeadColsCount; index++) {
              const content = tHeadCols[index].textContent.trim();
              expect(content).not.toEqual(
                '',
                `A coluna ${index + 1} de seu rodape nao possui titulo`
              );
            }
          }
        }
      }
    });

    it('A tabela precisa conter duas linhas com 6 celulas de dados', () => {
      expect(tBody).toBeDefined('Sua tabela nao contem cabecalho');
      if (tBody) {
        const tBodyRows = tBody.getElementsByTagName('tr');
        const tBodyRowsCount = tBodyRows.length;
        expect(tBodyRowsCount).toEqual(
          2,
          'O corpo de sua tabela precisa conter duas linhas'
        );
        if (tBodyRowsCount === 2) {
          const tBodyCols = tBodyRows[0].getElementsByTagName('td');
          const tBodyColsCount = tBodyCols.length;
          const tBodyCells = [];
          tBodyCells.push(...tBodyRows[0].getElementsByTagName('td'));
          tBodyCells.push(...tBodyRows[1].getElementsByTagName('td'));
          const tBodyCellsCount = tBodyCells.length;
          expect(tBodyColsCount).toEqual(
            5,
            'O corpo de sua tabela precisa conter apenas 5 colunas'
          );
          expect(tBodyCellsCount).toEqual(
            6,
            'Sua tabela nao possui EXATAMENTE 6 celulas com dados'
          );
          if (tBodyCellsCount === 6) {
            for (let index = 0; index < tBodyCellsCount; index++) {
              const cell = tBodyCells[index];
              const content = cell.textContent.trim();
              expect(content).not.toEqual(
                '',
                `A celula ${index + 1} do corpo da tabela nao possiu conteudo`
              );
              if (index !== 1 && index !== 5) {
                const rowspan = cell.getAttribute('rowspan');
                expect(rowspan).toEqual(
                  '2',
                  `A celula ${
                    index + 1
                  } do corpo da tabela nao esta formatada corretamente`
                );
              }
            }
          }
        }
      }
    });

    it('A tabela precisa conter uma linha de rodape que ocupe toda a linha da tabela', () => {
      expect(tFoot).toBeDefined('Sua tabela nao contem rodape');
      if (tFoot) {
        const tFootRows = tFoot.getElementsByTagName('tr');
        const tFootRowsCount = tFootRows.length;
        expect(tFootRowsCount).toEqual(
          1,
          'O rodape de sua tabela precisa estar contido em uma linha'
        );
        if (tFootRowsCount === 1) {
          const tFootCols = tFoot.getElementsByTagName('td');
          const tFootColsCount = tFootCols.length;
          expect(tFootColsCount).toEqual(
            1,
            'O rodape de sua tabela precisa conter apenas 1 coluna'
          );
          if (tFootColsCount === 1) {
            const colspan = tFootCols[0].getAttribute('colspan');
            const content = tFootCols[0].textContent.trim();
            expect(colspan).toEqual(
              '5',
              'O rodape de sua tabela nao esta ocupando toda a linha da tabela'
            );
            expect(content).not.toEqual(
              '',
              'O rodape de sua tabela nao possui conteudo'
            );
          }
        }
      }
    });
  }
});
