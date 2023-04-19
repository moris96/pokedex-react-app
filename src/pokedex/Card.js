import styles from './Card.module.scss';

export default function Card({ pokemon, loading, infoPoke }){
    return(
        <>
        {
            loading ? <h1>Loading...</h1> : 
                pokemon.map((i) => {
                    return(
                        <>
                            <div className={styles.card} key={i.id} onClick={()=>infoPoke(i)}>
                                <h2>{i.id}</h2>
                                <img src="i.sprites.front_default" alt="" />
                                <h2>{i.name}</h2>
                            </div>
                        </>
                    )
                })
        }

        </>
    )
};