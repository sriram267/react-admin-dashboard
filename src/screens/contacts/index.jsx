import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { headerName: "ID", field: "id", flex: 0.5 },
        { headerName: "Register-ID", field: "registrarId" },
        { headerName: "Name", field: "name", flex: 1, cellClassName: "name__column-cell" },
        { headerName: "Age", field: "age",  type: "number", headerAlign: "left", align: "left" },
        { headerName: "Phone Number", field: "phone", flex: 1 },
        { headerName: "Email", field: "email", flex: 1 },
        { headerName: "Address", field: "address", flex: 1 },
        { headerName: "City", field: "city", flex: 1 },
        { headerName: "ZipCode", field: "zipCode", flex: 1 },

    ]

    return(
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List Of Contacts For Future Reference" />
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
                }
            }} >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{Toolbar: GridToolbar}}
                    // sx={{height: "650px"}}
                />
            </Box>
        </Box>
    )
};

export default Contacts;