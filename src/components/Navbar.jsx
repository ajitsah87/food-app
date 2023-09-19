import { Link } from 'react-scroll'

function Navbar() {

const tabs = [
  {title: 'HOME', href: "/home"},
  {title: 'ABOUT', href: "/about"},
  {title: 'TEAM', href: "/team"},
  {title: 'SERVICE', href: "/service"},
  {title: 'MENU', href: "/menu"},
  {title: 'RESERVATION', href: "/reservation"},
  {title: 'CONTACT', href: "/contact"}
]

  return (
    <div className='absolute w-full top-0'>
      <nav className="w-[min(1020px,100%-2rem)] mx-auto flex justify-between items-center">
        <div className='w-14 h-14 bg-black/30 rounded-full overflow-hidden'>
          <img className='h-full w-full object-cover' src="" alt="404" />
        </div>
        <ul 
        className='flex gap-4 text-white'
        >
          {tabs.map((tab, i) => (
            <Link className='cursor-pointer' key={i} to={tab.href} smooth duration={400}><li>{tab.title}</li></Link>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;