let preguntas = [
  {
    pregunta: "Tipos de variables en ECMAScript v6",
    alternativas: ["let - const", "let - var", "const - var"],
    imagen: "img/img3.jpg",
    respuesta: 0
  },
  {
    pregunta: "Abreviado de ECMAScript v6",
    alternativas: ["ES6 - ES2015", "ES6", "ES2015"],
    imagen: "img/img1.png",
    respuesta: 0
  },
  {
    pregunta: "La fecha de la publicación ECMAScript v6",
    alternativas: ["Junio 2015", "Junio 2016", "Julio 2015"],
    imagen: "img/img2.png",
    respuesta: 0
  },
];
//propiedades son inmutabless
//estados son encapsulados al coponente que le corresponde 
class Quiz extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      respuestas=[],
      count: 0,
    };
  }

  Header() {// parte de header y la imagen que tiene que cambiar conjuntamentecon la pregunta
    return (
      <div className="header">
        <div className="col-md-12">
          <h1>QUIZ</h1>
        </div>
      </div>
    )
  }

  Siguiente = () => {//para que no redibuje todo, solo para lo que es diferente
    this.setState({
      count: this.state.count + 1

    })
  }

  CapturarRespuesta =(e)=>{
    respuestasCliqueadas=[],
    
    .currentTarget.concat([respuestasClikeadas])
    

  }

  render() {//se mostrara las preguntas con sus respuestas
    return (
      <div className="preguntas">
        {
          preguntas.map((preguntas, index) => {//preguntas--objeto del array---- INDEX posicion del array
            return (
              <div className="player">
                <div className="player-name " >

                <div key={index} > <img src={preguntas.imagen}/> </div>
                  <p key={index}> {preguntas.pregunta[index]} </p>

                  <div className="">
                    <button  key={index}> {preguntas.alternativas[0]} </button>
                    <button  key={index}> {preguntas.alternativas[1]} </button>
                    <button  key={index}> {preguntas.alternativas[2]} </button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }

  RSociales() {//se muestra los iconos de las redes sociales con awesome
    return (
      <center>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-social">
          <a href="#" className="iconoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="#" className="iconoYoutube" title="Youtube"><i className="fa fa-youtube "></i></a>
        </div>
      </center>
    )
  }
}

ReactDOM.render(<Quiz/>, document.getElementById('container'));
