import { ROCKSTAR_URL } from '../config.js'
import Arrow from './Arrow.jsx'

export default function RockstarButton({ className = '' }) {
  return (
    <a
      className={`btn btn-rockstar ${className}`}
      href={ROCKSTAR_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      Site oficial da Rockstar
      <Arrow />
    </a>
  )
}
