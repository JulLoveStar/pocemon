import { CiLight } from 'react-icons/ci'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

export const Sidebar = ({ 
    active, 
    setActive, 
    switchTheme, 
    theme, 
    languageToggleRu,
    languageToggleEn,
    languageToggleSp,
    t
    }) => {

  return (
    <div 
    className={"sidebar " + (active ? 'active' : '')}>
        <div className="languages">
            <button className="header-btn" onClick={languageToggleRu}>RU</button>
            <button className="header-btn" onClick={languageToggleEn}>EN</button>
            <button className="header-btn" onClick={languageToggleSp}>SP</button>
        </div>
        <div className='themes' style={{borderTop: '2px solid #fff'}}>
            <div style={{marginTop: '1rem'}}>
                <CiLight className='theme-btn' onClick={switchTheme}/>
            </div>
            <div>
                <BsFillArrowRightSquareFill
                className='sidebar-arrow'
                onClick={() => setActive(false)}
                />
            </div>
        </div>
    </div>
  )
}
