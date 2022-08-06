import { TurnedInNot,  } from '@mui/icons-material';
import { Box, Drawer, Divider, Toolbar, Typography, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';

export  const SideBar = ({ drawerWith = 280 }) => {
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWith }, flexShrink: { sm: 0 } }}
    >
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWith }
                }}
            >

                <Toolbar>
                    <Typography variant='h6' noWrap component='div' >
                      Jordan Perez
                    </Typography>
                </Toolbar>
                <Divider />

                <List>
                  {
                    ['January', 'February', 'March', 'April'].map( text => (
                      <ListItem key={ text } disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <TurnedInNot />
                          </ListItemIcon>
                          <Grid container>
                            <ListItemText primary={ text }/>  
                            <ListItemText secondary={ 'The psalms have their origin in the compilation of the songs of the Temple of Jerusalem.' }/>
                          </Grid>
                        </ListItemButton>
                      </ListItem>
                    ))
                  }
                </List>
            
            </Drawer>

    </Box>
  )
}

