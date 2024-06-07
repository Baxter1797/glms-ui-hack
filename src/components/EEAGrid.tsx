import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import CustomGridToolbar from "./CustomGridToolbar";

interface IEEAPassport {
    id: number
    name: string
    entity: string
    jurisdiction: string
    status: string
}

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 60},
    {field: 'name', headerName: 'Name', flex: 0.1, minWidth: 200},
    {field: 'entity', headerName: 'Entity', flex: 0.1, minWidth: 200},
    {field: 'jurisdiction', headerName: 'Jurisdiction', flex: 0.1, minWidth: 200},
    {field: 'status', headerName: 'Status', flex: 0.1, minWidth: 200}
]

async function getEEAData(): Promise<IEEAPassport[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const response = await fetch('http://localhost:8080/EEAPassport?numOfObjects=10')
    return await response.json() as IEEAPassport[]
}

export default function EEAGrid(): JSX.Element {
    const {data, isFetching, isError} = useQuery({
        queryFn: () => getEEAData(),
        queryKey: ['EEAPassport'],
    })
    return (
        <>
            {isFetching ? <p>Loading...</p>
            :
            <DataGrid 
            sx={{ border: 'none', '&. MuiDataGrid-main': {'--unstable_DataGrid-radius': '0px'} }} 
            rows={data?.map(({ id, name, entity, jurisdiction, status }) => ({ id, name, entity, jurisdiction, status }))} 
            columns={columns} 
            checkboxSelection
            density="compact"
            slots={{ toolbar: CustomGridToolbar }}
            />
            }
        </>
    )
}