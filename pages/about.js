import { CiLight } from 'react-icons/ci'
import useLocalStorage from 'use-local-storage'
import { userAccesToken } from '../utils/checkUserAcces'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { AuthNeed } from '../components/AuthNeed'


const About = ({data}) => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  //Acces Token check

  const [acces, setAcces] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const accesToken = userAccesToken()
    if(!accesToken) {
      router.push('/')
    }else {
      setAcces(true)
    }
  },[])

  return (
    <>
      { acces === true ? 
      <div className='pokemon-wrapper' data-theme={theme}>
            <div className='theme-switcher-about'>
                  <CiLight 
                  className='theme-btn' 
                  onClick={switchTheme}
                  style={{padding: '2rem'}}
                  />
          </div>
          {data.map((pokemon,index) => (
              <div key={pokemon.name} className='pokemon-card'>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`}/> 
                  <h3>{pokemon.name}</h3>
            </div>
          ))}
      </div>
        : <AuthNeed/>}
    </>

  )
}
export const getStaticProps = async () => {

    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=6");
    const pokemons = await res.json();
    const data = pokemons.results
  
    return {
      props: {
        data,
      },
    };
  };

export default About