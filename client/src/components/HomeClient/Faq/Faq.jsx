import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import RowsFaq from './RowsFaq';
import style from './Faq.module.css';
import axios from 'axios';
import { useEffect } from 'react';
const Faq = () => {
    const [faq, setFaq] = React.useState([]);
    const [allFaq, setAllFaq] = React.useState([]);
    useEffect(() => {
        axios.get('http://localHost:3001/frequentQuestions')
        .then(res => {
            setAllFaq(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setFaq(allFaq)
    }, [allFaq])


     
    const [page, setPage] = React.useState(0);
    const [search, setSearch] = React.useState("");

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const body = {
            ask: search
        }
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/frequentQuestions/frequentAskByAsk`,{params:body})
        .then(res => {
            setFaq(res.data)
        })
        .catch(err => console.log(err))
    };
    useEffect(() => {
        if(search === ""){
            setFaq(allFaq)
        }
    }, [search])
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"0 2vw 0 5vw",width:"90vw",gap:"2vh"}}>

            <h2 style={{fontSize:"2vw"}}>Frequently Asked Questions</h2>
            <div>

                <div style={{border:"1px solid  rgba(131, 130, 130, 0.7)",borderRadius:"15px",height:"8vh",width:"40vw",display:"flex"}}>     
                    <div className={style.divSearch} >
                        <label className={style.labelSearch}>Search Question</label>
                        <input
                            value={search}
                            onChange={handleChangeSearch}  
                            className={style.inputSearch}
                            />
                    </div>
                    <button type="button" onClick={handleSearch} className={style.buttonSearch} >Search</button>
                </div>
                
            </div>
            <div style={{width:"100%",display:"flex",justifyContent:"flex-start"}}>
                <TableContainer component={Paper} sx={{width:7/8}} >
                            <Table aria-label="collapsible table">
                                <TableBody>
                                {faq[0]?
                                    
                                faq.slice(page*4,(page*4)+4).map((f) => (
                                <RowsFaq key={f.id} question={f.ask} answer={f.answer}/>
                                ))
                                :
                                <TableRow>
                                    <TableCell>No Question</TableCell>
                                </TableRow>

                                }
                                </TableBody>
                            </Table>
                            <TablePagination
                                    component="div"
                                    count={faq.length}
                                    rowsPerPage= {4}
                                    page={page}
                                    labelRowsPerPage = {""}
                                    rowsPerPageOptions = {[]}
                                    onPageChange={handleChangePage}
                            />
                </TableContainer>
            </div>
        </div>
    )
}
export default Faq;