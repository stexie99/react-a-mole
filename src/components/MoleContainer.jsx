import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props){
    const [mole, setMole] = useState(false)
    let displayMole = mole ? <Mole/> : <EmptySlot/>

    return (
        <div>
            {displayMole}
        </div>
    )
}

export default MoleContainer
