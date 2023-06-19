describe('Resultado para formulario: ', function () {
  var form = document.getElementsByTagName('form')[0];
  it('Precisa conter fomulario', function () {
    expect(form).toBeDefined('Seu site nao possui um formulario');
  });
});

describe('Resultado para nome: ', function () {
  var label = document.getElementsByTagName('label')[0];
  var input = document.getElementsByTagName('input')[0];
  it('Precisa conter um campo para entrada do nome', function () {
    expect(label).toBeDefined('Seu formulario precisa de pelo menos um label');
    expect(input).toBeDefined('seu formulario precisa de pelo menos um input');
    if (label && input) {
      var labelHasFor = label.getAttribute('for') !== null;
      var inputHasName = input.getAttribute('name') !== null;
      expect(label.getAttribute('for')).toEqual(
        input.getAttribute('name'),
        'O seu formulario nao possui um campo para entrada de nome definido corretamente'
      );
    }
  });
});

describe('Resultado para email: ', function () {
  var label = document.getElementsByTagName('label')[1];
  var input = document.getElementsByTagName('input')[1];
  it('Precisa conter um campo para entrada do email', function () {
    expect(label).toBeDefined(
      'Seu formulario precisa de pelo menos dois labels'
    );
    expect(input).toBeDefined(
      'Seu formulario precisa de pelo menos dois input'
    );
    if (label && input) {
      var labelHasFor = label.getAttribute('for') !== null;
      var inputHasName = input.getAttribute('name') !== null;
      expect(input.getAttribute('type')).toEqual(
        'email',
        'O campo de entrada nao esta restrito a receber somente enderecos de email validos'
      );
      expect(input.getAttribute('required')).toEqual(
        'true',
        'O campo de email nao foi definido como requerido'
      );
      expect(label.getAttribute('for')).toEqual(
        input.getAttribute('name'),
        'O seu formulario nao possui um campo para entrada de email definido corretamente'
      );
    }
  });
});

describe('Resultado para mensagem: ', function () {
  var label = document.getElementsByTagName('label')[2];
  var input = document.getElementsByTagName('textarea')[0];
  it('Precisa conter um campo para entrada de mensagem', function () {
    expect(label).toBeDefined(
      'Seu formulario precisa de pelo menos tres labels'
    );
    expect(input).toBeDefined(
      'Seu formulario precisa de pelo menos um textarea'
    );
    if (label && input) {
      var labelHasFor = label.getAttribute('for') !== null;
      var inputHasName = input.getAttribute('name') !== null;
      expect(input.getAttribute('required')).toEqual(
        'true',
        'O campo de mensagem nao foi definido como requerido'
      );
      expect(label.getAttribute('for')).toEqual(
        input.getAttribute('name'),
        'O seu formulario nao possui um campo para entrada de mensagem definido corretamente'
      );
    }
  });
});

describe('Resultado para botoes: ', function () {
  var rButton = document.getElementsByTagName('input')[2];
  var sButton = document.getElementsByTagName('input')[3];

  it('Precisa conter dois botoes', function () {
    expect(rButton).toBeDefined(
      'Seu formulario nao possui um botao para limpar formulario'
    );
    expect(sButton).toBeDefined(
      'Seu formulario nao possui um botao para enviar formulario'
    );
  });
  if (rButton && sButton) {
    var rButtonType = rButton.getAttribute('type');
    var rButtonValue = rButton.getAttribute('value');
    var sButtonType = sButton.getAttribute('type');
    var sButtonValue = sButton.getAttribute('value');
    it('Precisa conter um botao para limpar formulario', function () {
      expect(rButtonType).toEqual(
        'reset',
        'O botao para limpar fomulario nao esta definido corretamente'
      );
      expect(rButtonValue).not.toEqual(
        '',
        'O botao limpar nao possui texto descritivo'
      );
    });
    it('Precisa conter um botao para enviar formulario', function () {
      var isSubmit = sButtonType === 'button' || sButtonType === 'submit';
      expect(isSubmit).toEqual(
        true,
        'O botao para enviar fomulario nao esta definido corretamente'
      );
      expect(sButtonValue).not.toEqual(
        '',
        'O botao enviar nao possui texto descritivo'
      );
    });
  }
});
