/* eslint-disable prettier/prettier */
class Global {
  static get getHeadData() {
    return {
      title: 'Guilherme | Engenheiro de Software',
      lang: 'pt-BR',
      description: 'Seja bem-vindo(a) ao meu site',
    };
  }

  static get getHeadDataEN() {
    return {
      title: 'Guilherme | Software Engineer',
      lang: 'en',
      description: 'Welcome to my website',
    };
  }

  static get getHeadDataES() {
    return {
      title: 'Guilherme | Ingeniero de Software',
      lang: 'es',
      description: 'Bienvenido a mi sitio web',
    };
  }
}

export default Global;
