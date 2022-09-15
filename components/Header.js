import Image from "next/image"
import Link from "next/link"

function Header() {
  return (
  <nav id="navbar">
    <Link href={"/"}>
      <div id="logo" >
        <Image src="/logo192.png" alt="logo" layout="fill" objectFit="cover" />
      </div>
    </Link>
    <Link href={"/"}><span className="navItem">Rozvrh</span></Link>
    <Link href={"/Download"}><span className="navItem">Stáhnout</span></Link>
    <Link href={"/About"}><span className="navItem">O Připomínači</span></Link>
  </nav>
  )}

export default Header