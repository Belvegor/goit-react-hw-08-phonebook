import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    event.preventDefault();
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };

  return (
    <>

    <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        onChange={changeFilter}
      >
        <TextField id="outlined-basic" label="Find contacts by name:" placeholder="Find contacts by name"  onChange={changeFilter} required variant="outlined" type="text" name="name"  title="Put in contact name."/>
    </Box>  
   </> 
  );
};

export default Filter;