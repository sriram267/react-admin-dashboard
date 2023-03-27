import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { headerName: "ID", field: "id" },
        { headerName: "Name", field: "name", flex: 1, cellClassName: "name__column-cell" },
        { headerName: "Age", field: "age",  type: "number", headerAlign: "left", align: "left" },
        { headerName: "Phone Number", field: "phone", flex: 1 },
        { headerName: "Email", field: "email", flex: 1 },
        { headerName: "Access Level", field: "access", flex: 1, headerAlign: "center",
            renderCell: ({ row: {access}}) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        borderRadius="4px"
                        backgroundColor = {
                            access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]}
                    >
                        { access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        { access === "manager" && <SecurityOutlinedIcon />}
                        { access === "user" && <LockOpenOutlinedIcon />}
                        <Typography color={colors.grey[100]} sx={{ ml: "5px"}}>
                            {access}
                        </Typography>
                    </Box>
                )                                       
        } },
    ]

    return(
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing The Team Members" />
            <Box 
            m="40px 0 0 0"
            height="75vh"
            sx={{
                "&. MuiDataGrid-root" : {
                    border: "none",
                }, 
                "&. MuiDataGrid-cell" : {
                    borderBottom: "1px solid grey",
                },
                "&. name__column-cell" : {
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
                    color: `${colors.greenAccent[200]} !important`
                }
            }} >
                <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;