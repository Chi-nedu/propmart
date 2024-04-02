import { FaSquareXTwitter } from 'react-icons/fa6'
import style from './style.module.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import Logo from '../logo'
import Link from 'next/link'

function Index() {
  return (
    <footer className={`pad ${style.footer}`}>
        <div className={`width ${style.container}`}>
          <div className={style.links}>

            <Logo/>

            <ul className={style.footerLink}>
              <li><h1>Propmart</h1></li>
              <li><Link href={'/home'}>Home</Link></li>
              <li><Link href={'/about'}>About</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>
              <li><Link href={'/support'}>Suport</Link></li>
            </ul>

            <ul className={style.footerLink}>
              <li><h1>Solutions</h1></li>
              <li><Link href={'/privacypolicy'}>Privacy policy</Link></li>
              <li><Link href={'/termsandconditions'}>Terms and conditions</Link></li>
              <li><Link href={'/auth/signup'}>Become a seller</Link></li>
              <li><Link href={'faqs'}>FAQs</Link></li>
            </ul>
          </div>

          <hr/>

          <div className={style.other}>
            <p className={style.copy}>&copy; {new Date().getFullYear()} @ propmart.com</p>
            <div className={style.socials}>
              <a href={'twitter'}><FaSquareXTwitter /></a>
              <a href={'facebook'}><FaFacebookSquare /></a>
              <a href={'instagram'}><RiInstagramFill /></a>
            </div>

          </div>
        </div>
    </footer>
  )
}

export default Index