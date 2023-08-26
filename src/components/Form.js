import './style.css'
function Form(){
    return(
        <>
            <p className="titulo">Endereço de entrega</p>
            <div className="container">
                <form className="formulario">
                    <label>Rua</label>
                    <input 
                        type="text"
                        id="rua"
                        name="rua"
                     />
                    <label>CEP</label>
                    <input 
                        placeholder="Ex: 00000-000"
                        type="text"
                        id="cep"
                        name="cep"
                     />
                    <label>Número</label>
                    <input 
                        type="text"
                        id="numero"
                        name="numero"
                     />
                </form>
            </div>
        </>

    );
}
export default Form;