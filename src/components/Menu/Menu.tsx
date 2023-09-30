import './Menu.scss'
import { Box, Button, List, ListItem, Typography } from '@mui/material'

interface Props {
    menuOptions: string[];
    changeOption: (opction:string)=>void;
}

const Menu: React.FC<Props> = ({menuOptions, changeOption}) => {
  return (
    <div className='menu-container'>
          
          <Box className='menu-header'>
            <Typography variant='h2' sx={{ fontFamily:"'Bebas Neue', sans-serif", alignItems:"center"}}  className='menu-logo'>RUBENS GAME</Typography>
          </Box>

          <List component="nav">
            {
                menuOptions.map((option, index) => { 
                   return (
                    <ListItem button key = {index} onClick={() => changeOption(option)} >    
                        {
                            option !== "main" && <Button className='text-font' sx={{ alignItems:"center", width:200, fontFamily:"'Bebas Neue', sans-serif", fontSize:"2rem", backgroundColor:"#545454", '&.MuiButton-root:hover':{bgcolor: '#545454'} }} variant='contained'>{option}</Button>
                        }
                    </ListItem>
                    )})
            }
          </List>
    </div>
      
  )
}

export default Menu