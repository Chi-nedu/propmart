import Image from "next/image"
import Link from "next/link"

function Logo() {
  return (
    <Link href={'/'} className="relative">
        <Image
            src={'/'}
            alt={'propmart'}//company name here
            width={100}
            // fill
            height={50}/>
        </Link>
  )
}

export default Logo