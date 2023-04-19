# Pokedex React App!

## A web app showing the entire Pokedex across all 9 generations of Pokemon! 

--- 

## Getting Started: [click me]()

---

## Technologies Used: 
* React.js 
* HTML & JSX
* CSS 
* JavaScript
* Node.js 
* Google Fonts 

## NPM Packages Used: 
* Axios (for API fetching)
* SCSS (for cool React styling and not to use CSS lol)

---

## Project Screenshots: 
![poke](/public/1.png)
![poke](/public/2.png)

---

---

# Code Discussion: 

## Pokedex Page:

### The Pokedex Page is divided into 3 files: PokeDexPage (main viewfile), Card (to display the images also known as sprites), PokeInfo (to display the stats for the individual Pokemon when clicked)

## PokeDexPage: 
```JavaScript
export default function PokedexPage(){
    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
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
```
### As you can see useState and useEffect hooks are used. For the useState, I used Axios to make it easy to call the Poke API in order to fetch all the information for every Pokemon, which is a lot lol. Over 1,000 in fact. I then used the useEffect method to display the effect being shown which sorts the individual Pokemon called from the API when fetching it. 
---
## Card Page: 
```JavaScript
export default function Card({ pokemon, loading, infoPoke }){
    return(
        <>
        {
            loading ? <h1>Loading...</h1> : 
                pokemon.map((i) => {
                    return(
                        <>
                            <div className="card" key={i.id} onClick={()=>infoPoke(i)}>
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
```
### What this code does is display the images of each Pokemon when clicked, as well as display all the abilities and statistics. 
---
## PokeInfo Page: 
```JavaScript
export default function PokeInfo({ data }){
    return(
        <>
        {
            (!data) ? "" : (
                <>
                    <h1>{data.name}</h1>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                    <div className="abilities">
                        {
                            data.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            data.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
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
```
### What this bit of code does is call all the abilities and stats for each Pokemon called when fetching the API. Basically all the information inside of the API which is originally in JSON format parsed from the website. The Card page then displays the images and text, which is then showed in the main PokeDexPage. 

--- 

---

# Key Learnings / Takeaways / Challenges: 
* Learned how to make effective SPAs (single page applications)
* Learned how React makes everything easier in full-stack web development
* Improved front-end development skills including styling with CSS & SCSS (Sass)
* Styling and SCSS was the biggest challenge! 