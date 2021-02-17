import React from 'react';
import '../bootstrap.css';
import DeleteList from './DeleteList';
import UpdateList from './UpdateList';

function ListaCadastrados(props) {

    let rows = [];

    props.alldata.forEach(element => {
        rows.push(
          
            <tr key={element.id}>
                <td scope="row">{element.id}</td>
                <td>{element.nome} {element.sobrenome}</td>
                <td>{element.dataChegada}</td>
                <td>{element.dataPartida}</td>
                <td>{element.situacao}</td>
                <td>
                <UpdateList 
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    updateList={props.updateList}
                    handleChange={props.handleChange}
                    errors={props.errors} 
                    handleBlur={props.handleBlur}/>                    
                </td>

                <td>
                <DeleteList 
                    elementId={element.id}
                    singledata={props.singledata}
                    getList={props.getList}
                    deleteList={props.deleteList} />
                    
                </td>
            </tr>

        )
    })

    return(
    
        <>

            <div className="container">

                <div className="row justify-content-center mb-5 mt-5">
            
                    <label htmlFor="inputTabela"><h4>Tabela de cadastrados</h4></label>
                
                        <table className="table table-hover" >
                        
                            <thead className="table-primary">

                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nome da reserva</th>
                                    <th scope="col">Data Entrada</th>
                                    <th scope="col">Data Saída</th>
                                    <th scope="col">Situação</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>
                                </tr>

                            </thead>

                            <tbody>                    
                                {rows}
                            </tbody>
                        
                        </table>

                </div>
                    
            </div> 

        </>
    
    )
};

export default ListaCadastrados;