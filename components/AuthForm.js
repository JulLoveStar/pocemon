export const AuthForm = ({
    email,
    setEmail,
    password,
    setPassword,
    signInWithEmail,
    signUpWithEmail,
    t
}) => {
  return (
    <form>
        <div className="auth-inputs">
            <label className="auth-input" data-testid="emailLabel">
                E-mail:
                <input 
                data-testid="emailInput"
                type="email" 
                placeholder={t.email}
                required 
                className='input-text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="auth-input" data-testid="passwordLabel">
                Password:
                <input 
                data-testid="passwordInput"
                type="password" 
                placeholder={t.password} 
                className='input-text'
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </label>
        </div>
        <div className='buttons'>
            <button 
            className='btn' 
            
            onClick={signInWithEmail}
            >
              {t.login}
            </button>
            <button 
            className='btn' 
            onClick={signUpWithEmail}
            >
              {t.signUp}
            </button>
      </div>
      </form>
  )
}
