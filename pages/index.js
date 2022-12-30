import { FcGoogle } from 'react-icons/fc'
import { FiSettings } from 'react-icons/fi'
import { AuthError } from "../components/AuthError"
import { ru, en, sp } from '../translations'

import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import useLocalStorage from 'use-local-storage'
import { firebaseApp } from "../firebase/firebaseConfig"
import { useState } from "react"
import { useRouter } from "next/router"
import { Sidebar } from "../components/Sidebar"
import { AuthForm } from '../components/AuthForm'

export default function Home() {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ authError, setAuthError ] = useState(false)
  const [ active, setActive ] = useState(false)
  const router = useRouter()

     //Lang Switcher 
     const { locale } = router
   
     let t = locale 
      if(locale === 'ru') {
        t = ru
      }else if (locale === 'en') {
        t = en
      }else if (locale === 'sp') {
        t = sp
      }

     const languageToggleRu = () => {
       router.push('/', '/', {locale: 'ru'})
     }
     const languageToggleEn = () => {
      router.push('/', '/',  {locale: 'en'})
    }
    const languageToggleSp = () => {
      router.push('/', '/', {locale: 'sp'})
    }


  //Theme Switcher

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  //Auth
  const firebaseAuth = getAuth(firebaseApp)
  const providerGoogle = new GoogleAuthProvider()

  const signInGoogle = async() => {
    try {
      const response = await signInWithPopup(firebaseAuth, providerGoogle)
      router.push('/about')
    } catch (error) {
      alert(error.message)
    }
  }

  const signUpWithEmail = async() => {
    try {
      const response = await createUserWithEmailAndPassword(firebaseAuth, email, password )
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }
  const signInWithEmail = async(e) => {
    e.preventDefault();
    
    try {
      const { user } = await signInWithEmailAndPassword(firebaseAuth, email, password )
      const { refreshToken, providerData } = user
      
      localStorage.setItem("user", JSON.stringify(providerData))
      localStorage.setItem("accesToken", JSON.stringify(refreshToken))

      router.push('/about')
      setEmail('')
      setPassword('')
      setAuthError(false)
      
    } catch (error) {
      setEmail('')
      setPassword('')
      setAuthError(true)
    }
  }

  return (
    <div className='container' data-theme={theme}>
      <FiSettings className='settings-btn'  onClick={() => setActive(true)}/>
      <Sidebar 
      active={active} 
      setActive={setActive}
      switchTheme={switchTheme}
      languageToggleRu={languageToggleRu}
      languageToggleEn={languageToggleEn}
      languageToggleSp={languageToggleSp}
      theme={theme}
      />
    <div className='wrapper'>
      <h3 className='title'>{t.auth}</h3>
      {authError ? <AuthError t={t}/> : ''}
      <AuthForm 
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      signInWithEmail={signInWithEmail}
      signUpWithEmail={signUpWithEmail}
      t={t}
      />
      <div className="auth-buttons">
        <div className="google-wrapper">
            <FcGoogle/>
            <button 
            className='auth-btn'
            onClick={signInGoogle}
            >
              {t.google}</button>
        </div>
        </div>
    </div>
    </div>
  )
}
