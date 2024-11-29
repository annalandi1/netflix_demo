import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownButton, Stack} from 'react-bootstrap'

const GenresComponent = () =>{
    return(
        <Stack direction="horizontal" gap={5} className='m-4'>
          <h1 className="text-white">TV Shows</h1> 
          
            <DropdownButton
            title="Genres"
            id="dropdown-button-genres"
            variant="dark"
            className="border border-white"
            data-bs-theme="dark"
          >
        <Dropdown.Item href="#/action-1" active>Fantasy</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Thriller</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Commedy</Dropdown.Item>
          </DropdownButton>
        </Stack >
        
    )
}

export default GenresComponent