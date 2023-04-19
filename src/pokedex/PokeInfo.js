import styles from './PokeInfo.module.scss';

export default function PokeInfo({ data }){
    return(
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className={styles.abilities}>
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className={styles.group}>
                                        <h2>Ability: {poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>

                    {/* <h2>Types:</h2> */}
                    <div className={styles.types}>
                        {/* <h2>Types:</h2> */}
                        {
                            data.types.map(poke=>{
                                return(
                                    <>
                                        <h2>Type: {poke.type.name}</h2>
                                    </>
                                )
                            })
                        }
                    </div>
                    
                    <h1>Stats: </h1>
                    <div className={styles.basestat}>
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}: {poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
            )
        }

        </>
    )
};