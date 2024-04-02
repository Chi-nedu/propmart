'use client'
import Link from 'next/link'
import style from './style.module.css'
import { usePathname } from 'next/navigation'

function Authlayout({children}) {
   const params = usePathname()

  return (
    <div className={style.Authlayout} >
      <div className='blackdrop h-[100vh] w-full'>
        <div className={style.centerDiv}>
          <div className={style.flexBox}>
            {params === "/auth/signup"? <div>
              <h1>Don't have an account yet?</h1>
              <p>Become a merchant today!!!</p>
              <Link href={'/auth/login'}>Log in</Link>
            </div>  :
            
            <div>
              <h1>Already one of us?</h1>
              <p>Jump right into business!!!</p>
              <Link href={'/auth/signup'}>Sign up</Link>
            </div>}
            <div className={style.formContainer}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Authlayout