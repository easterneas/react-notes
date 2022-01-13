import { Link } from "react-router-dom"

export default function AppLink (props) {
  const { type, name, to, className } = props

  return (
    <>
      {
        type === 'internal' ?
        (<Link className={className} to={to}>{name}</Link>) :
        (<a className={className} href={to}>{name}</a>)
      }
    </>
  )
}
