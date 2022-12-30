import { GiAstronautHelmet } from 'react-icons/gi'

export const AuthNeed = () => {
  return (
    <div className='auth-need'>
        <GiAstronautHelmet fontSize={100} data-testid="svg"/>
        <h1 className='auth-need-text'>You need to Auth</h1>
    </div>
  )
}
