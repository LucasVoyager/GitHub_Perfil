import { useEffect, useState } from "react"
//  Hooks essas funçoes use

const Formulario = () => {
    //  trabalhar com a imutabilidade por isso utlizar constante
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    //  mount
    //  update
    //  unmount
    
    useEffect(() => {
        console.log("Componente On")

        return () => {
            console.log("Componente finalizado")
        }
    }, []);

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome]);

    useEffect(() => {
        console.log('Materia a mudou para:' + materiaA)
    }, [materiaA, materiaB, materiaC]);
    
    const alteraNome = (evento) => {
        // setNome(evento.target.value)
        setNome((estadoAnterior) => {


            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>olá {nome}, você foi Aprovado</p>
            )
        } else {
            return (
                <p>olá {nome} você foi Reprovado Bro</p>
            )
        }
    }

    return (
        <form>
            <ul>{[1,2,3,4,5].map(item => (
                <li key={item}>{item}</li>
                ))}</ul>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota materia a" onChange={({target}) => setMateriaA(parseInt(target.value))}/>
            <input type="number" placeholder="Nota materia b" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota materia c" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario