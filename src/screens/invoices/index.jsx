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

    return (
        <Box m="20px">
          <Header title="INVOICES" subtitle="List of Invoice Balances" />
          <Box
            m="40px 0 0 0"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
              },
              "& .MuiDataGrid-cell": {
                borderBottom: "none",
              },
              "& .name-column--cell": {
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
              "& .MuiCheckbox-root": {
                color: `${colors.greenAccent[200]} !important`,
              },
            }}
          >
            <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
          </Box>
        </Box>
      );
    };

export default Invoices;