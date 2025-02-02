import {Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import Table from "@mui/material/Table";

type Props = {
    columnsName: string []
    rowsCell: string []
    data:Array<any>
}
const RegularTable = ({columnsName, rowsCell,data}: Props) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columnsName.map((row) => {
                            return <TableCell>{row}</TableCell>
                        })}

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row:any,index:number) => (
                        <TableRow
                            key={index}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            {rowsCell.map((item:string)=>{
                                return  <TableCell align="left">{row[item]}</TableCell>
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
export default RegularTable
