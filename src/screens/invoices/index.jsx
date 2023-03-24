import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name", flex: 1, cellClassName: "name__column-cell" },
        { headerName: "Phone Number", field: "phone", flex: 1 },
        { headerName: "Email", field: "email", flex: 1 },
        { headerName: "Cost", field: "cost", flex: 1,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            ) },
        { headerName: "Date", field: "date", flex: 1 },

    ]

    return(
        <Box m="20px">
            <Header title="INVOICES" subtitle="List Of Invoice Balances" />
            <Box 
            m="40px"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root" : {
                    border: "none",
                }, 
                "& .MuiDataGrid-cell" : {
                    borderBottom: "none",
                },
                "& .name__column-cell" : {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                    mb: "10px" 
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`
                }
            }} >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
};

export default Invoices;