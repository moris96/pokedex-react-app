import Card from './Card';
import PokeInfo from './PokeInfo';

import axios from 'axios';
import { useState, useEffect } from 'react';

import styles from './PokedexPage.module.scss';


export default function PokedexPage(){
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    // const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/?limit=20")
    const [next, setNext] = useState()
    const [prev, setPrev] = useState()
    const [pokeDex, setPokeDex] = useState()

    const pokeMon = async() => {
        setLoading(true)
        const res = await axios.get(url)
        setNext(res.data.next)
        setPrev(res.data.previous)
        getPokemon(res.data.results)
        setLoading(false)
    }

    const getPokemon = async(res) => {
        res.map(async(i) => {
            const result = await axios.get(i.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a,b) => a.id>b.id ? 1 : -1)
                return state 
            })
        })
    }

    useEffect(() => {
        pokeMon()
    }, [url])


    return(
        <>
            <h1 className={styles.dex}>Pokedex</h1>
            <div className={styles.container}>
                <div className={styles.leftcontent}>
                    <Card pokemon={pokeData} loading={loading} infoPoke={poke=>setPokeDex(poke)} />

                    <div className={styles.btngroup}>
                        { prev && <button onClick={()=>{
                            setPokeData([])
                            setUrl(prev)
                        }}>Previous</button> }

                    { next && <button onClick={()=>{
                        setPokeData([])
                        setUrl(next)
                    }}>Next</button> }
                    </div>
                </div>
                <div className={styles.rightcontent}>
                    <PokeInfo data={pokeDex} />
                </div>
            </div>
        </>
    );
};