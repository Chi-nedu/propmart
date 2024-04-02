"use client"
import style from './style.module.css'
import Logo from '../logo'
import Link from 'next/link'
import { useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

function Index() {
    const [toggle, setToggle] = useState(false)

    const [searchData, setsearchData] = useState('')

    const handleSubmit =(e)=>{
        e.preventDefault()



        // here we will now use search data to search the database and render the output using redux
        console.log(searchData)
    }

  return (
    <nav className={`pad ${style.container}`}>
        <div className={`width ${style.mainConatiner}`}>
            <Logo/>
            <ul className={style.navItems}>
                <li className={style.list}><Link className={style.navItem} href={'/'}>HOME</Link></li>
                <li className={style.list}><Link className={style.navItem} href={'/'}>ABOUT</Link></li>
                <li className={style.list}><Link className={style.navItem} href={'/'}>FAQs</Link></li>
                <li className={style.list}><Link className={style.navItem} href={'/'}>CONTACT</Link></li>
                <li className={style.list}><Link className={style.navItem} href={'/'}>SUPPORT</Link></li>
                <li><Link className={style.navItem2} href={'/'}>LOGIN</Link></li>
            </ul>

            <div className={style.toggleContainer}>
                <li><Link className={style.navItem2} href={'/'}>LOGIN</Link></li>
                <button onClick={()=>setToggle(!toggle)} className={style.toggle}>
                    <div className={!toggle ? style.div1: style.div01}></div>
                    <div className={!toggle ? style.div2: style.div02}></div>
                    <div className={!toggle ? style.div3: style.div03}></div>
                </button>
            </div>

            
        </div>
        
        <div className={`${style.navItems2} ${!toggle && style.slide} pad`}>
            <ul className={`${style.navItems3}`}>
                <form onSubmit={(e)=>handleSubmit(e)} className={style.searchForm}>
                    <input className={style.searchInput} onChange={(e)=>setsearchData(e.target.value)} value={searchData} placeholder={'search'} />
                    <button type='submit'><RiSearch2Line className='text-[1.4rem]'/></button>
                </form>
                <li className={style.list}><Link onClick={()=>setToggle(false)} className={style.navItem} href={'/'}>HOME</Link></li>
                <li className={style.list}><Link onClick={()=>setToggle(false)} className={style.navItem} href={'/'}>ABOUT</Link></li>
                <li className={style.list}><Link onClick={()=>setToggle(false)} className={style.navItem} href={'/'}>FAQs</Link></li>
                <li className={style.list}><Link onClick={()=>setToggle(false)} className={style.navItem} href={'/'}>CONTACT</Link></li>
                <li className={style.list}><Link onClick={()=>setToggle(false)} className={style.navItem} href={'/'}>SUPPORT</Link></li>
                <li><Link onClick={()=>setToggle(false)} className={style.navItem2} href={'/'}>LOGIN</Link></li>
            </ul>
            <div className={style.footer}>
                <div className={style.socials}>
                    <a href={'twitter'}><FaSquareXTwitter /></a>
                    <a href={'facebook'}><FaFacebookSquare /></a>
                    <a href={'instagram'}><RiInstagramFill /></a>
                </div>
                <p className={style.copy}>&copy; {new Date().getFullYear()} @ propmart.com</p>
            </div>
        </div>
        
    </nav>
  )
}

export default Index
