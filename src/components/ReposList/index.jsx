import { useEffect, useState } from "react"

import styles from "./ReposList.module.css"

const ReposList = ({ nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);
    useEffect(() => {
        if (!nomeUsuario) {
            setEstaCarregando(false);
            return;
        }

        setEstaCarregando(true)
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res =>{
            if (!res.ok) {
                throw new Error('Falha ao tentar pegar o repositorio')
            }
            return res.json()
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson)
            }, 3000)
        })
        .catch(error => {
            setEstaCarregando(false);
            setErro(error.message);
        })
    }, [nomeUsuario])

    if (erro) {
        return <>Erro: {erro}</>
    }


    return (
        <div className="container">
            {estaCarregando ? (
                <h1>Carregando...</h1>
            ) : (
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.listItemName}>
                            <b>Nome: {name}</b> 
                        </div>
                        <div className={styles.listItemLanguage}>
                            <b>Linguagem: {language}</b> 
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                    </li>
                ))}
            </ul>
            )}
        </div>
    )
}

export default ReposList