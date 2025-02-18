import {ArrowRight, Copy} from 'lucide-react'
import { IconButton } from './components/IconButton'
import { Button } from './components/Button'
export default function Home() {
  return (
    <>
        <Button>
          <ArrowRight/>
        </Button>

      <IconButton> 
        <Copy/>
      </IconButton>

    </>
  )
}
