"use client"
import { useState } from 'react'
import style from './style2.module.css'
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { RiSearch2Line } from "react-icons/ri";

function Nav2() {
    const [categories, setCategories] = useState({
        toggle: false,
        value: "default"
    })

    const [searchData, setsearchData] = useState('')

    const handleCart =(e)=>{
        setCategories({value: e.target.name, toggle: false})
        
        if (categories.value === e.target.name) return
        
        // here should contai the function that will send the loading of the current data on the part
    }
    const hanldecart=()=>{
        // here we will hanlddle the opening and closinf of the cart from the redux
    }
    const handleSubmit =(e)=>{
        e.preventDefault()



        // here we will now use search data to search the database and render the output using redux
        console.log(searchData)
    }

  return (
    <div className={`${style.container} pad`}>
        <div className={`${style.mainContainer} width`}>
            <div className={style.category}>
                <button 
                    className={style.categoryName}
                    onClick={()=>setCategories({...categories, toggle: !categories.toggle})}>
                        {categories.value} <IoIosArrowDown className={`${style.categoryButton} ${categories.toggle && style.cartIcon}`}/>
                    </button>
                {categories.toggle && <div className={style.categorySelect}>
                    <button name='default' onClick={(e)=>handleCart(e)}>default</button>
                    <button name='distress' onClick={(e)=>handleCart(e)}>distress</button>
                    <button name='furniture' onClick={(e)=>handleCart(e)}>furniture</button>
                    <button name='electronics' onClick={(e)=>handleCart(e)}>electronics</button>
                    <button name='electricals' onClick={(e)=>handleCart(e)}>electricals</button>
                    <button name='utensils' onClick={(e)=>handleCart(e)}>utensils</button>
                    <button name='books' onClick={(e)=>handleCart(e)}>books</button>
                    <button name='fashion' onClick={(e)=>handleCart(e)}>fashion</button>
                </div>}
            </div>

            <div className={style.cartdiv2}>
                <form onSubmit={(e)=>handleSubmit(e)} className={style.searchForm}>
                    <input className={style.searchInput} onChange={(e)=>setsearchData(e.target.value)} value={searchData} placeholder={'search'} />
                    <button type='submit'><RiSearch2Line /></button>
                </form>
                <p className={style.cart} onClick={()=>hanldecart()}><HiOutlineShoppingCart /></p>
            </div>
        </div>
    </div>
  )
}

export default Nav2