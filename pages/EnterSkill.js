import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Title from './Title';
import Layout from '../components/layout'
import Cookies from 'js-cookie';

const userid = Cookies.get('nextjsuserid');

function preventDefault(event) {
  event.preventDefault();
}

export default function EnterSkill() {

  const [skill, setSkill] = React.useState('');
  const handleSkillChange = (event) => {
    setSkill(event.target.value);
  };

  const [level, setLevel] = React.useState('');
  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  async function skillSubmit(event){
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    var dataBody = {
      userid: userid,
      skillid: skill,
      levelid: level,
    };
    //console.log(dataBody);

    const res = await fetch(
      '/api/setuserskillsetdata',
      {
        body: JSON.stringify(dataBody),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    if (res.ok) {
      var responseBody = await res.json();
      console.log(responseBody);
    }else{
      console.log("error");
    }
  };



  return (
    <React.Fragment>
      <Layout>
        <Title>Enter My Skill</Title>
        <Box component="form" onSubmit={skillSubmit} sx={{ mt: 1 }}>
          <FormControl required fullWidth>
            <InputLabel id="skill-name-label">Skill</InputLabel>
            <Select
              labelId="skill-name-label"
              id="skill-name"
              value={skill}
              label="Skill"
              onChange={handleSkillChange}
            >
              <MenuItem value={1}>Java</MenuItem>
              <MenuItem value={2}>JS/Html/CSS</MenuItem>
              <MenuItem value={3}>React</MenuItem>
              <MenuItem value={4}>Angular</MenuItem>
              <MenuItem value={5}>VUE</MenuItem>
              <MenuItem value={6}>Mobile</MenuItem>
              <MenuItem value={7}>UI/UX</MenuItem>
            </Select>
          </FormControl>
          <FormControl required fullWidth>
            <InputLabel id="skill-level-label">Level</InputLabel>
            <Select
              labelId="skill-level-label"
              id="skill-level"
              value={level}
              label="Level"
              onChange={handleLevelChange}
            >
              <MenuItem value={0}>No</MenuItem>
              <MenuItem value={1}>Beginner</MenuItem>
              <MenuItem value={2}>Entry</MenuItem>
              <MenuItem value={3}>Experienced</MenuItem>
              <MenuItem value={4}>Advanced</MenuItem>
              <MenuItem value={5}>Expert</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>

        </Box>
      </Layout>
    </React.Fragment>
  );
}
