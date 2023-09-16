import { useState } from 'react'
import './style.css'
function Form(){
    
    let [cep,setCEP] = useState()
    let[rua,setRua] = useState()
    async function exibir(){        

        let validacao = /^[0-9]{8}$/

        if(!validacao.test(cep)){
            throw "CEP Inválido"
        }
        //alert(cep)
        let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

        let data = await resposta.json()
        setRua(data.logradouro)
        
    }
    return(
        <>
            <p className="titulo">Endereço de entrega</p>
            <div className="container">
                <form className="formulario">
                    
                    <label>CEP</label>
                    <input 
                        type="number"
                        maxLength={8}
                        minLength={8}
                        placeholder="Ex: 61000000"
                        id="cep"
                        name="cep"
                        onChange={(e)=> setCEP(e.target.value)}
                    />
                    <label>Rua</label>
                    <input 
                        type="text"
                        id="rua"
                        name="rua"
                        onChange={(e)=> setRua(e.target.value)}
                     />
                    <label>Número</label>
                    <input 
                    type="text"
                    id="numero"
                    name="numero"
                    />
                    <label>Endereço</label>
                    <input 
                    type="text"
                    id="numero"
                    name="numero"
                    />
                    <label>Bairro</label>
                    <input 
                        type="text"
                        id="numero"
                        name="numero"
                     />
                      <label>Número</label>
                    <input 
                        type="text"
                        id="numero"
                        name="numero"
                     />
                    <button onClick={exibir}>Enviar</button>
                </form>
              
            </div>
        </>

    );
}
export default Form;