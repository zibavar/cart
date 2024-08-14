import Link from "next/link"
function DropDown ({href,children,...rest}){
 return(
   <Link href={href}>
    <p {...rest}>{children}</p>
 </Link>
 )
}
export default DropDown