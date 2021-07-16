import React from 'react';
import styled from 'styled-components'
import botao from "../components/botao.png"

const ListaContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction:column;
flex-grow:1;
height:95vh;
justify-content: flex-end;
width:50vw;
`

const InputNome = styled.input`
width:10vw;
`

const InputMensagem = styled.input`
width:72vh;
`

const Mensagem = styled.div`
display:flex;
padding:5px;
gap:5px;
background: lightgreen;
max-width: 100%;
border: 1px solid black;
border-radius: 10px;
`
const ImagemBotao = styled.img`
box-sizing: border-box;
width: 30px;
padding: 3px;
`

class EnviarMensagem extends React.Component {
    state = {
        valorInputNome: "",
        valorInputMensagem: "",
        mensagens: [],
    };

    apertarEnter = (event) => {
        if(event.key === "Enter") {
            this.adicionaMensagem()
        }
    } 


    onChangeInputNome = (event) => {
        this.setState({ valorInputNome: event.target.value });
    };

    onChangeInputMensagem = (event) => {
        this.setState({ valorInputMensagem: event.target.value });
    };

    adicionaMensagem = () => {
        const novaMensagem = {
            nome: this.state.valorInputNome,
            mensagem: this.state.valorInputMensagem,
        };

        const novaMensagens = [...this.state.mensagens, novaMensagem];

        this.setState({ mensagens: novaMensagens, valorInputMensagem:"" });
    }


    render() {

        const listaMensagens = this.state.mensagens.map((mensagem, index) => {
            return (
                <Mensagem key={index}>
                <p> <strong>
                    {mensagem.nome}: 
                    </strong></p>
                <p>{mensagem.mensagem}</p>
                </Mensagem>
            );
        });

        return (
            <div>
                <ListaContainer>{listaMensagens}</ListaContainer>
                <div>
                    <InputNome
                        value={this.state.valorInputNome}

                        onChange={this.onChangeInputNome}
                        placeholder={"Usuário"}
                    />
                    <InputMensagem
                       
                        value={this.state.valorInputMensagem}
                        
                        onChange={this.onChangeInputMensagem}
                        placeholder={"Mensagem"} onKeyDown={this.apertarEnter}
                    />
                    
                    <button onClick={this.adicionaMensagem}><ImagemBotao src={botao}/></button>
                </div>
                
            </div>
        );
    }
}


export default EnviarMensagem