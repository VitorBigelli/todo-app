import { useContext } from "react";
import { types } from '../../utils'
import { 
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap'
import { TypesContext } from "../../context/types-context";

const Toggle = () => {

    const { state: { type }, dispatch } = useContext(TypesContext)

    console.log(type)
    
    const handleTypeChange = () => {
        console.log('Changing')
        dispatch({ type: 'toggle' })
    }

    return ( 
        <ToggleButtonGroup
            color="primary"
            name='radio'
            type='radio'
            className="m-auto"
            value={type}
            onChange={handleTypeChange}
        >
            { Object.entries(types).map( (t, i) => {
                return (
                    <ToggleButton 
                        value={t[0]} 
                        key={i} 
                        type="radio"
                        name="radio"
                        id={i}
                        checked={ t.value === type }
                        variant={ type == t[0] ? (i === 0 ? 'outline-success' : 'outline-primary') : 'light'}
                    > 
                        {t[1]} 
                    </ToggleButton>
                )
            })}
        </ToggleButtonGroup>
    )
}

export default Toggle
