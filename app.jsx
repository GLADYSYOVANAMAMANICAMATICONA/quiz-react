let preguntas = [
  {
    pregunta: "Tipos de variables en ECMAScript v6",
    alternativas: ["let - const", "let - var", "const - var"],
    imagen: "img/img3.jpg",
    bar: "img/bar.png",
  },
  {

    pregunta: "Abreviado de ECMAScript v6",
    alternativas: ["ES6 - ES2015", "ES6", "ES2015"],
    imagen: "img/img1.png",
    bar: "img/bar1.png",

  },
  {
    pregunta: "La fecha de la publicación ECMAScript v6",
    alternativas: ["Junio 2015", "Junio 2016", "Julio 2015"],
    imagen: "img/img2.png",
    bar: "img/bar2.png",
  },
  {
    pregunta: "Respuestas Correctas",
    alternativas: ["Tipos de variables en ECMAScript v6", "let - const","Abreviado de ECMAScript v6", "ES6 - ES2015","La fecha de la publicación ECMAScript v6", "Junio 2015"],
  },
];
//propiedades son inmutabless
//estados son encapsulados al coponente que le corresponde 
class Quiz extends React.Component {

  constructor(props) {
    super(props);//atributosss
    this.state = {
      arrayRespuestasCliqueadas: [],
      count: 0
    };
  }

  header() {// parte de header y la imagen que tiene que cambiar conjuntamentecon la pregunta
    return (
      <div className="header">
        <div className="col-md-12">
          <h1>QUIZ</h1>
        </div>
      </div>
    )
  }

  capturarRespuesta(e) {//captura con e.target.textContent y agrega en el array concat
    /*let item = {
      respuestaSeleccionada: e.target.textContent
    };
   */
    this.setState({
      //arrayRespuestasCliqueadas: this.state.arrayRespuestasCliqueadas.concat([item]), //se agrega en el array arrayRespuestasCliqueadas declado como global el item que es capturado 
      count: this.state.count + 1
    });
    console.log(this.state);
    console.log(item)
  }

  mostrarAlternativas(alternativas) {
    let alt = preguntas.alternativas
    return (Object.keys(alternativas).map((key, index) => {//preguntas--objeto del array---- INDEX posicion del array
      return (
        <div className="botones">
          <button className="btn btn-primary" key={index} onClick={(e) => this.capturarRespuesta()}>{preguntas[this.state.count].alternativas[index]}</button>
        </div>
      )
    })
    )
  }
  mostrarPregunta() {
    return (
      <div>
        <div>
          {preguntas[this.state.count].pregunta}
        </div>
        <div>
          {this.mostrarAlternativas(preguntas[this.state.count].alternativas)}
        </div>
      </div>
    )
  }

  render() {//se mostrara las preguntas con sus respuestas
    return (
      <div className="preguntas scoreboard ">
        <div>{this.header()}</div>
        <div>
          <img src={preguntas[this.state.count].bar} />
        </div>
        <div className="player" >
          <div className="player-name " >
            <div>
              <img src={preguntas[this.state.count].imagen} />
            </div>
            <div>
              <div>{this.mostrarPregunta()}</div>
              <div>{this.
                rSociales()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  rSociales() {//se muestra los iconos de las redes sociales con awesome
    return (
      <center>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
          <a href="#" className="iconoFacebook" title="Facebook"><i className="fa fa-facebook-square"></i></a>
          <a href="#" className="iconoYoutube" title="Youtube"><i className="fa fa-youtube-square "></i></a>
        </div>
      </center>
    )
  }
}

ReactDOM.render(<Quiz />, document.getElementById('container'));
