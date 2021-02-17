import React from 'react';
import '../bootstrap.css';
import './UpdateList.css';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function UpdateList(props) {

    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = (e) => {
      setOpen(true);
      props.getList(e,props.elementId);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (

        <React.Fragment>
    
            <button type="button" className="btn btn-outline-info" onClick={handleClickOpen}>Editar</button>
    
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                <DialogTitle id="form-dialog-title">Editar reserva</DialogTitle>

                <DialogContent>

                    <DialogContentText>

                        Para editar a reserva, preencha os campos com as informações que serão atualizadas.
                    
                    </DialogContentText>

                    <div className="container">

                        <div className="row justify-content-center mb-5">

                            <div className="col-sm-12 col-md-12 col-lg-12">

                                <form>

                                    <div className="form-row">

                                        <div className="form-group col-sm-4">

                                        <label htmlFor="inputNome">Situação</label>

                                        <select id="imputSituacao" className="form-control" name="situacao"
                                            value={props.singledata.situacao} onChange={props.handleChange}>
                                                <option defaultValue>Aberto</option>
                                                <option>Fechado</option>
                                                <option>Cancelado</option>
                                        </select>

                                        </div>

                                    </div>

                                    <div className="form-row">

                                        <div className="form-group col-sm-6">

                                            <label htmlFor="inputNome">Nome <span className="required">*</span></label>

                                            <input type="text" className="form-control" id="inputNome" placeholder="Nome" 
                                            name="nome" value={props.singledata.nome} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                            <span className="formField_error">{props.errors.nome}</span>

                                        </div>

                                        <div className="form-group col-sm-6">

                                            <label htmlFor="inputSobrenome">Sobrenome</label>

                                            <input type="text" className="form-control" id="inputSobrenome" placeholder="Sobrenome" 
                                            name="sobrenome" value={props.singledata.sobrenome} onChange={props.handleChange}/>
                                            
                                        </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-12">

                                    <label htmlFor="inputEmail">E-mail <span className="required">*</span></label>

                                    <input type="text" className="form-control" id="inputEmail" placeholder="ex: meuemail@exemplo.com.br" 
                                    name="email" value={props.singledata.email} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                    <span className="formField_error">{props.errors.email}</span>

                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-6">

                                        <label htmlFor="inputQuarto">Tipo do Quarto <span className="required">*</span></label>

                                        <select id="imputQuarto" className="form-control" name="quarto"
                                        value={props.singledata.quarto} onChange={props.handleChange}>
                                            <option defaultValue>Escolha o tipo do quarto</option>
                                            <option>Tipo padrão (1 a 2 pessoas)</option>
                                            <option>Tipo 1 (1 pessoa)</option>
                                            <option>Tipo 2 (Suite Luxo)</option>
                                            <option>Tipo 3 (Super Luxo)</option>
                                        </select>

                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-6">

                                        <label htmlFor="inputValor">Qtd de pessoas <span className="required">*</span></label>

                                        <input type="number" className="form-control" id="inputPessoas" placeholder={0} 
                                        step={1} min={0} max={100} name="numPessoas" value={props.singledata.numPessoas} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                        <span className="formField_error">{props.errors.numPessoas}</span>


                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-5">

                                        <label htmlFor="inputDate">Data e hora da chegada <span className="required">*</span></label>

                                    </div>

                                    <div className="form-group col-sm-4">

                                        <input type="date" className="form-control" id="dataChegada" 
                                        name="dataChegada" value={props.singledata.dataChegada} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                        <span className="formField_error">{props.errors.dataChegada}</span>


                                    </div>

                                    <div className="form-group col-sm-3">

                                        <input type="time" className="form-control" id="horaChegada" 
                                        name="horaChegada" value={props.singledata.horaChegada} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                        <span className="formField_error">{props.errors.horaChegada}</span>

                                                                                                    
                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-5">

                                        <label htmlFor="inputDate">Data e hora da partida <span className="required">*</span></label>

                                    </div>

                                    <div className="form-group col-sm-4">

                                        <input type="date" className="form-control" id="dataPartida" 
                                        name="dataPartida" value={props.singledata.dataPartida} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                        <span className="formField_error">{props.errors.dataPartida}</span>
                                    
                                    </div>

                                    <div className="form-group col-sm-3">

                                        <input type="time" className="form-control" id="horaPartida" 
                                        name="horaPartida" value={props.singledata.horaPartida} onChange={props.handleChange} onBlur={props.handleBlur}/>
                                        <span className="formField_error">{props.errors.horaPartida}</span>

                                                                                                    
                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-6">

                                    <label className="form-check-label">Translado grátis? <span className="required">*</span></label>

                                    <div className="form-check">

                                        <input className="form-check-input" type="radio" name="translado" value="sim" onChange={props.handleChange} checked={props.singledata.translado==="sim"}/>Sim, me busque no aeroporto
                                        
                                    </div>

                                    <div className="form-check">
                                    
                                        <input className="form-check-input" type="radio" name="translado" value="não" onChange={props.handleChange} checked={props.singledata.translado==="não"}/>Não, eu encontro meu caminho
                                        
                                    </div>

                                    </div>

                                    </div>

                                    <div className="form-row">

                                    <div className="form-group col-sm-6">

                                        <label htmlFor="inputVoo">Código do seu vôo</label>

                                        <input type="text" className="form-control" id="inputVoo" name="codVoo" value={props.singledata.codVoo} onChange={props.handleChange}/>

                                    </div>

                                    </div>

                                    <div className="form-row">

                                        <div className="form-group col-sm-12">

                                        <label htmlFor="inputTexto">Requisitos especiais</label>

                                        <textarea className="form-control" name="reqEsp" placeholder="Digite aqui..." rows="6" cols="55" maxLength="1200" value={props.singledata.reqEsp} onChange={props.handleChange}/>

                                        </div>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </DialogContent>

                <DialogActions>

                    <button type="button" className="btn btn-outline-info" onClick={(event)=>props.updateList(event,props.elementId)}>Atualizar</button>
                    <button type="button" className="btn btn-outline-danger" onClick={handleClose}>Fechar</button>

                </DialogActions>

            </Dialog>

        </React.Fragment>

    )

}

export default UpdateList;