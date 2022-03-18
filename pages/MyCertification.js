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

function preventDefault(event) {
  event.preventDefault();
}

export default function MyCertification() {
  const [data, setData] = useState([]);

  async function getMyCertificationData() {
    var dataBody = {
      userid: userid
    };
    const res = await fetch(
      '/api/getusercertificationdata',
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
      setData(responseBody.data);
    }else{
      console.log("error");
    }
  }

  useEffect(()=>{getMyCertificationData()},[]);

  return (
    <React.Fragment>
      <Layout>
        <Title>My MyCertification</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Certification Name</TableCell>
              <TableCell>Target Date</TableCell>
              <TableCell>Status</TableCell>
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
