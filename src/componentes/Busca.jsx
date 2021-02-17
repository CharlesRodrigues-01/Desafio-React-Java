import React from 'react';
import '../bootstrap.css';
import Cadastro from './Cadastro';
import ListaCadastrados from './ListaCadastrados';

class Busca extends React.Component{

    //Construtor para declaração das variáveis
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            alldata: [],
            singledata: {
                nome: "",
                sobrenome: "",
                email: "",
                quarto: "",
                numPessoas: "",
                codVoo: "",
                dataChegada: "",
                dataPartida: "",
                horaChegada: "",
                horaPartida: "",
                translado: "",
                reqEsp:"",
                situacao:"Aberto"
            },
            errors: {
                nome: "",
                email: "",
                quarto: "",
                numPessoas: "",
                dataChegada: "",
                dataPartida: "",
                horaChegada: "",
                horaPartida: "",
                translado: ""
            }

        };

        this.getLists = this.getLists.bind(this);
        this.getList = this.getList.bind(this);
        this.createList = this.createList.bind(this);
        this.updateList = this.updateList.bind(this);
        this.deleteList = this.deleteList.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }

    //função para lidar com as mudanças de estado das variáveis
    handleChange(e) {
        let nome = this.state.singledata.nome;
        let sobrenome = this.state.singledata.sobrenome;
        let email = this.state.singledata.email;
        let quarto = this.state.singledata.quarto;
        let numPessoas = this.state.singledata.numPessoas;
        let codVoo = this.state.singledata.codVoo;
        let dataChegada = this.state.singledata.dataChegada;
        let dataPartida = this.state.singledata.dataPartida;
        let horaChegada = this.state.singledata.horaChegada;
        let horaPartida = this.state.singledata.horaPartida;
        let translado = this.state.singledata.translado;
        let reqEsp = this.state.singledata.reqEsp;
        let situacao = this.state.singledata.situacao;

        if (e.target.name === "nome") nome = e.target.value;
        else if(e.target.name === "sobrenome") sobrenome = e.target.value;
        else if (e.target.name === "email") email = e.target.value;
        else if (e.target.name === "quarto") quarto = e.target.value;
        else if (e.target.name === "numPessoas") numPessoas = e.target.value;
        else if (e.target.name === "codVoo") codVoo = e.target.value;
        else if (e.target.name === "dataChegada") dataChegada = e.target.value;
        else if (e.target.name === "dataPartida") dataPartida = e.target.value;
        else if (e.target.name === "horaChegada") horaChegada = e.target.value;
        else if (e.target.name === "horaPartida") horaPartida = e.target.value;
        else if (e.target.name === "translado") translado = e.target.value;
        else if (e.target.name === "situacao") situacao = e.target.value;
        else reqEsp = e.target.value;

        this.setState({
            singledata: {
                nome: nome,
                sobrenome: sobrenome,
                email: email,
                quarto: quarto,
                numPessoas: numPessoas,
                codVoo: codVoo,
                dataChegada: dataChegada,
                dataPartida: dataPartida,
                horaChegada: horaChegada,
                horaPartida: horaPartida,
                translado: translado,
                reqEsp: reqEsp,
                situacao: situacao
                
            }
        })
    }

  //função para validação de inputs vazios. Retorna mensagem de 'Campo obrigatório' após clicar fora do input
    handleBlur(e) {

        if(this.state.singledata.nome === '') {
        this.setState( {errors: {nome: 'Campo obrigatório!'}} )
        }

        else if(this.state.singledata.email === '') {
        this.setState( {errors: {email: 'Campo obrigatório!'}})
        }

        else if(this.state.singledata.numPessoas === '') {
            this.setState( {errors: {numPessoas: 'Número de pessoas não pode ser zero!'}})
        }

        else if(this.state.singledata.dataChegada === '') {
            this.setState( {errors: {dataChegada: 'Campo obrigatório!'}})
        }

        else if(this.state.singledata.horaChegada === '') {
            this.setState( {errors: {horaChegada: 'Campo obrigatório!'}})
        }

        else if(this.state.singledata.dataPartida === '') {
            this.setState( {errors: {dataPartida: 'Campo obrigatório!'}})
        }


        else if(this.state.singledata.horaPartida === '') {
            this.setState( {errors: {horaPartida: 'Campo obrigatório!'}})
        }

        else if(this.state.singledata.translado === '') {
            this.setState( {errors: {translado: 'Campo obrigatório!'}})
        }

        else {this.setState( {errors: {nome: '', 
        email: '',
        quarto: '',
        numPessoas: '',
        dataChegada: '',
        dataPartida: '',
        horaChegada: '',
        horaPartida: '',
        translado: ''

            }} )
        }
    }

    //função para validar o preenchimento dos dados
    handleValidation(e) {

        let now = new Date();
        let nowFormat = new Date(now.getFullYear() + "-" + (new Date(). getMonth() +1) + "-" +  new Date().getDate()).toDateString()
 
        if(this.state.singledata.nome === '') {
        alert('Por favor, preencha o campo nome!')
        }

        //se na variável e-mail não conter o '@', emite um alerta
        else if( (!this.state.singledata.email.includes( "@" ))
        || 
        (this.state.singledata.email === '') ) {
            alert('Por favor, digite um e-mail válido! \n \n' 
            + 'Exemplo: email@exemplo.com');
        }

        else if((this.state.singledata.quarto === '') || (this.state.singledata.quarto === 'Escolha um tipo de quarto')){
            alert('Por favor, escolha um tipo de quarto');
        } 

        else if((this.state.singledata.numPessoas === '') || (this.state.singledata.numPessoas < 1)) {
            alert('Quantidade de pessoas não pode ser zero!')
            }

        //condição para validação de datas de chegada (nunca maior ou igual à partida)
        else if(this.state.singledata.dataChegada >= this.state.singledata.dataPartida) 
            {
            alert('Data de chegada deve ser menor que a data da partida!');
        } 

        //condição para validação de permanencia mínima de 1 dia
        else if((this.state.singledata.dataPartida - this.state.singledata.dataChegada) < 1 ) 
        {
        alert('Permanencia mínima de 1 dia!');
        } 

        //condição para validação de data de chagada maior que data atual
        else if((new Date(this.state.singledata.dataChegada).toDateString()) < nowFormat) 
        {
        alert('Data de entrada não pode ser menor que a data atual!');
        } 
        
        else {
        return true;  
        }
    }

  //função para buscar a lista de reservas no back-end 
    getLists() {
        this.setState({ loading: true }, () => {fetch("https://desafio-java.herokuapp.com/reservas")
        .then(res => res.json())
        .then(result => this.setState({loading: false, alldata: result})
        )
        .catch(console.log);
        })
    }

    //função para cadastrar os dados no banco de dados
    createList() {
        if ( this.handleValidation() ) {
            fetch("https://desafio-java.herokuapp.com/reservas", {
            method: "POST", 
            headers: {
            "Content-Type": "application/json"
            }, 
            body: JSON.stringify(this.state.singledata)
        }).then( this.setState({
            singledata: {
            nome: "",
            sobrenome: "",
            email: "",
            quarto: "",
            numPessoas: "",
            codVoo: "",
            dataChegada: "",
            dataPartida: "",
            horaChegada: "",
            horaPartida: "",
            translado: "",
            reqEsp:"",
            situacao:"Aberto"
            }
            })
        );
        return alert('Reserva realizada com sucesso!');
        }
    }

    //função para buscar reserva com base no id fornecido pela requisição
    getList(e, id) {
        this.setState({
        singledata: {
            nome: "Carregando...",
            sobrenome: "Carregando...",
            email: "Carregando...",
            quarto: "Carregando...",
            numPessoas: "Carregando...",
            codVoo: "Carregando...",
            dataChegada: "Carregando...",
            dataPartida: "Carregando...",
            horaChegada: "Carregando...",
            horaPartida: "Carregando...",
            translado: "Carregando...",
            reqEsp: "Carregando...",
            situacao: "Carregando..."
        }
        }, () => {fetch("https://desafio-java.herokuapp.com/reservas/" + id)
    .then(res => res.json()).then(result => {
        this.setState({
        singledata: {
            nome: result.nome,
            sobrenome: result.sobrenome ? result.sobrenome : "",
            email: result.email ? result.email : "",
            quarto: result.quarto ? result.quarto : "",
            numPessoas: result.numPessoas ? result.numPessoas : "",
            codVoo: result.codVoo ? result.codVoo : "",
            dataChegada: result.dataChegada ? result.dataChegada : "",
            dataPartida: result.dataPartida ? result.dataPartida : "",
            horaChegada: result.horaChegada ? result.horaChegada : "",
            horaPartida: result.horaPartida ? result.horaPartida : "",
            translado: result.translado ? result.translado : "",
            reqEsp: result.reqEsp ? result.reqEsp : "",
            situacao: result.situacao ? result.situacao : ""
            }
        });
        });
        }
        )
    }

    //função para buscar reserva com base no nome fornecido pela requisição
   /* getNome(e, nome) {
        this.setState({
        singledata: {
            nome: "Carregando...",
            sobrenome: "Carregando...",
            email: "Carregando...",
            quarto: "Carregando...",
            numPessoas: "Carregando...",
            codVoo: "Carregando...",
            dataChegada: "Carregando...",
            dataPartida: "Carregando...",
            horaChegada: "Carregando...",
            horaPartida: "Carregando...",
            translado: "Carregando...",
            reqEsp: "Carregando...",
            situacao: "Carregando..."
        }
        }, () => {fetch("https://desafio-java.herokuapp.com/reservas/" + nome)
    .then(res => res.json()).then(result => {
        this.setState({
        singledata: {
            nome: result.nome,
            sobrenome: result.sobrenome ? result.sobrenome : "",
            email: result.email ? result.email : "",
            quarto: result.quarto ? result.quarto : "",
            numPessoas: result.numPessoas ? result.numPessoas : "",
            codVoo: result.codVoo ? result.codVoo : "",
            dataChegada: result.dataChegada ? result.dataChegada : "",
            dataPartida: result.dataPartida ? result.dataPartida : "",
            horaChegada: result.horaChegada ? result.horaChegada : "",
            horaPartida: result.horaPartida ? result.horaPartida : "",
            translado: result.translado ? result.translado : "",
            reqEsp: result.reqEsp ? result.reqEsp : "",
            situacao: result.situacao ? result.situacao : ""
            }
        });
        });
        }
        )
    }*/

    //função para atualizar o reserva com consulta através do id fornecido pela requisição
    updateList(e, id) {
        if ( this.handleValidation() ) {
            fetch("https://desafio-java.herokuapp.com/reservas/" + id, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json" },
            body: JSON.stringify(this.state.singledata)
            }).then(res => res.json())
            .then(result => {this.setState({
            singledata: {
                nome: "",
                sobrenome: "",
                email: "",
                quarto: "",
                numPessoas: "",
                codVoo: "",
                dataChegada: "",
                dataPartida: "",
                horaChegada: "",
                horaPartida: "",
                translado: "",
                reqEsp:"",
                situacao:""
                }
            });
        this.getLists();
        });
        return alert('Reserva atualizada com sucesso!')
        }
    }

     //função para deletar cadastro através de id 
    deleteList(e, id) {
        fetch("https://desafio-java.herokuapp.com/reservas/" + id, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(result => {
        this.setState({
        singledata: {
            nome: "",
            sobrenome: "",
            email: "",
            quarto: "",
            numPessoas: "",
            codVoo: "",
            dataChegada: "",
            dataPartida: "",
            horaChegada: "",
            horaPartida: "",
            translado: "",
            reqEsp:"",
            situacao:""
        }
        });
        this.getLists();
        });
    }

    render () {
    return (
        <>
            <div className="container">

                <div className="row justify-content-center mb-5 mt-5">
                
                    <div className="col-sm-12 col-md-10 col-lg-8">
                        
                        <form>
                        
                            <div className="form-row">
                            
                                <div className="form-group col-sm-7">
                                   
                                    <input type="text" className="form-control" id="inputBusca" placeholder="Digite um nome para buscar"
                                    name="nome" value={this.state.singledata.nome} onChange={this.handleChange} />
                                
                                </div>
                                
                                <div className="form-group col-sm-2">
                                    
                                    <button type="button" className="btn btn-warning btn-block" id="busca" onClick={this.getLists}>Buscar</button>
                                
                                </div>
                                
                                <div className="form-group col-sm-3">
                                
                                    <Cadastro
                                    singledata={this.state.singledata}
                                    alldata={this.state.alldata}
                                    createList={this.createList}
                                    errors={this.state.errors}
                                    handleChange={this.handleChange}
                                    handleBlur={this.handleBlur}/>
                                
                                </div>

                            </div>

                        </form>

                    </div>

                    <div className="col-sm-10 col-md-10 col-lg-8">

                        <ListaCadastrados
                            singledata={this.state.singledata}
                            alldata={this.state.alldata}
                            getList={this.getList}
                            getLists={this.getLists}
                            updateList={this.updateList}
                            deleteList={this.deleteList}
                            errors={this.state.errors}
                            handleChange={this.handleChange}
                            handleBlur={this.handleBlur}
                            />
                    </div>

                </div>

            </div>

        </>
    )
    }

};

export default Busca;