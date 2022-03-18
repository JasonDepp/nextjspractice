import React,{useState,useEffect} from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Layout from '../components/layout'
import Cookies from 'js-cookie';

const userid = Cookies.get('nextjsuserid');

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }


// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];

function preventDefault(event) {
  event.preventDefault();
}


export default function MySkill() {
  const [data, setData] = useState([]);

  async function getMySkillSetData() {
    var dataBody = {
      userid: userid
    };
    const res = await fetch(
      '/api/getuserskillsetdata',
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
      console.log(responseBody.data);

      setData(responseBody.data);

      //return responseBody.data;
      // responseBody.data.map(item => {
      //      const { username, skillname, skilllevel } = item
      //      return { username, skillname, skilllevel }
      // })

    }else{
      console.log("error");
      //return null;
    }
  }

  useEffect(()=>{getMySkillSetData()},[]);

  return (
    <React.Fragment>
      <Layout>
        <Title>My Skill Set</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Skill Name</TableCell>
              <TableCell>Skill Level</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.userdata[0].fullname}</TableCell>
                <TableCell>{row.skill_data[0].skill_name}</TableCell>
                <TableCell>{row.skill_level_data[0].level_name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Layout>
    </React.Fragment>
  );
}
