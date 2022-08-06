import { AddOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView } from '../views/NoteView';
import { NothingSeletedView } from '../views/NothingSeletedView';

export const JournalPage = () => {
  return (
    <JournalLayout>

    {/* <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos necessitatibus ad possimus amet unde quas numquam earum natus eum. Similique molestiae omnis illo asperiores laborum at fugiat impedit assumenda vitae.</Typography> */}

    <NothingSeletedView />
    {/* <NoteView />  */}

    <IconButton 
      size='large'
      sx={{
        color: 'white',
        backgroundColor: 'error.main',
        ':hover': { background: 'error.main', opacity: 0.9 },
        position: 'fixed',
        right: 50,
        bottom: 50
      }}
    >
      <AddOutlined sx={{ fontSize: 30 }} />
    </IconButton>

    </JournalLayout>
  )
}
